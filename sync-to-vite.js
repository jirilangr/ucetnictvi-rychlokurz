#!/usr/bin/env node
/**
 * Synchronizuje hlavní HTML a assety do React/Vite projektu (lovable-vite).
 * Použití:
 *   node sync-to-vite.js        – jednorázová synchronizace
 *   node sync-to-vite.js --watch – sleduje změny a sync při každé změně
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const ROOT = path.resolve(__dirname);
const VITE_DIR = path.join(ROOT, 'lovable-vite');
const PUBLIC_DIR = path.join(VITE_DIR, 'public');

const FILES_TO_SYNC = [
  { src: 'ucetnictvi-rychlokurz.html', dest: 'ucetnictvi-rychlokurz.html' },
  { src: 'ucetnictvi-rychlokurz-materska.html', dest: 'ucetnictvi-rychlokurz-materska.html' },
  { src: 'index.html', dest: 'index.html' },
];
const DIRS_TO_SYNC = [
  { src: 'notebooklm', dest: 'notebooklm' },
];

function copyFile(src, dest) {
  const srcPath = path.join(ROOT, src);
  const destPath = path.join(PUBLIC_DIR, dest);
  if (!fs.existsSync(srcPath)) return;
  fs.mkdirSync(path.dirname(destPath), { recursive: true });
  fs.copyFileSync(srcPath, destPath);
  console.log(`  ✓ ${src} → public/${dest}`);
}

function copyDir(srcRel, destRel) {
  const srcPath = path.join(ROOT, srcRel);
  const destPath = path.join(PUBLIC_DIR, destRel);
  if (!fs.existsSync(srcPath) || !fs.statSync(srcPath).isDirectory()) return;
  fs.mkdirSync(destPath, { recursive: true });
  const entries = fs.readdirSync(srcPath, { withFileTypes: true });
  for (const e of entries) {
    const s = path.join(srcPath, e.name);
    const d = path.join(destPath, e.name);
    if (e.isDirectory()) {
      copyDir(path.join(srcRel, e.name), path.join(destRel, e.name));
    } else {
      fs.copyFileSync(s, d);
      console.log(`  ✓ ${path.join(srcRel, e.name)} → public/${path.join(destRel, e.name)}`);
    }
  }
}

function sync() {
  if (!fs.existsSync(VITE_DIR)) {
    console.error('Složka lovable-vite neexistuje. Nejdřív vytvoř React/Vite projekt (npm run vite:init).');
    process.exit(1);
  }
  fs.mkdirSync(PUBLIC_DIR, { recursive: true });
  console.log('Sync: HTML a assety → lovable-vite/public/');
  for (const { src, dest } of FILES_TO_SYNC) copyFile(src, dest);
  for (const { src, dest } of DIRS_TO_SYNC) copyDir(src, dest);
  console.log('Hotovo.\n');
}

function watch() {
  const watchPaths = [
    path.join(ROOT, 'ucetnictvi-rychlokurz.html'),
    path.join(ROOT, 'ucetnictvi-rychlokurz-materska.html'),
    path.join(ROOT, 'index.html'),
    path.join(ROOT, 'notebooklm'),
  ];
  let chokidar;
  try {
    chokidar = require('chokidar');
  } catch (_) {
    console.log('Pro --watch nainstaluj chokidar: npm install --save-dev chokidar');
    process.exit(1);
  }
  console.log('Sledování změn (ukončení: Ctrl+C)...\n');
  chokidar.watch(watchPaths, { ignoreInitial: true }).on('all', (event, p) => {
    console.log(`[${new Date().toLocaleTimeString('cs-CZ')}] ${event}: ${path.relative(ROOT, p)}`);
    sync();
  });
}

const isWatch = process.argv.includes('--watch');
if (isWatch) watch();
else sync();
