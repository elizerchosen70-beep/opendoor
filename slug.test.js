import test from 'node:test';import assert from 'node:assert/strict';import {slugify} from '../utils/slug.js';test('slugify normalises',()=>assert.equal(slugify('Church Events!'),'church-events'));
