#!/usr/bin/env node
/**
 * smoke-test.mjs — verificações básicas do CLI
 * roda: node tests/smoke-test.mjs
 */
import { execSync } from 'node:child_process';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const CLI = resolve(__dirname, '../bin/invos.js');

let passed = 0;
let failed = 0;

function test(name, fn) {
  try {
    fn();
    console.log(`  ✓ ${name}`);
    passed++;
  } catch (err) {
    console.error(`  ✗ ${name}: ${err.message}`);
    failed++;
  }
}

function run(cmd) {
  return execSync(cmd, { encoding: 'utf8', timeout: 10000, stdio: ['pipe', 'pipe', 'pipe'] }).trim();
}

console.log('INVOS smoke tests\n');

test('--help exits 0 and shows usage', () => {
  const out = run(`node ${CLI} --help`);
  if (!out.includes('INVOS')) throw new Error('missing INVOS header');
  if (!out.includes('init')) throw new Error('missing init command');
});

test('--version prints semver', () => {
  const out = run(`node ${CLI} --version`);
  if (!/^\d+\.\d+\.\d+/.test(out)) throw new Error(`not semver: ${out}`);
});

test('doctor runs on kit dir', () => {
  const kitDir = resolve(__dirname, '../kit');
  try {
    const out = run(`node ${CLI} doctor --dir ${kitDir}`);
    if (!out.includes('Doctor')) throw new Error('missing Doctor header');
  } catch (err) {
    if (err.status === 1) {
      const out = err.stdout || '';
      if (!out.includes('Doctor')) throw new Error('missing Doctor header even on warning');
    } else {
      throw err;
    }
  }
});

test('doctor shows version info', () => {
  const kitDir = resolve(__dirname, '../kit');
  try {
    const out = run(`node ${CLI} doctor --dir ${kitDir}`);
    if (!out.includes('kit v')) throw new Error('missing version info');
  } catch (err) {
    if (err.status === 1) {
      const out = err.stdout || '';
      if (!out.includes('kit v')) throw new Error('missing version info');
    } else {
      throw err;
    }
  }
});

test('unknown command shows help', () => {
  try {
    run(`node ${CLI} bananas`);
    throw new Error('should have exited non-zero');
  } catch (err) {
    if (err.message.includes('should have')) throw err;
    const out = (err.stdout || '') + (err.stderr || '');
    if (!out.includes('Unknown')) throw new Error('no Unknown error message');
    if (!out.includes('init')) throw new Error('no help shown');
  }
});

console.log(`\n${passed} passed, ${failed} failed`);
process.exit(failed > 0 ? 1 : 0);
