import test from 'node:test';import assert from 'node:assert/strict';import {validIsoDate} from '../utils/date.js';test('invalid date rejected',()=>assert.equal(validIsoDate('nonsense'),false));
