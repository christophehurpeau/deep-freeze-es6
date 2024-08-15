import assert from "node:assert/strict";
// eslint-disable-next-line n/no-unsupported-features/node-builtins
import { test } from "node:test";
import { deepFreeze } from "./index.js";

test("unexpected non object: null", () => {
  assert.throws(
    () => {
      deepFreeze(null);
    },
    { message: "Cannot convert undefined or null to object" },
  );
});

test("freeze map", () => {
  const obj = deepFreeze({
    map: new Map([
      [1, 1],
      [2, 2],
    ]),
  });
  assert.throws(
    () => {
      obj.map.clear();
    },
    { message: "map is read-only" },
  );
});

test("freeze set", () => {
  const obj = deepFreeze({
    set: new Set([1, 2]),
  });
  assert.throws(
    () => {
      obj.set.add(3);
    },
    { message: "set is read-only" },
  );
});

test("freeze WeekSet", () => {
  const obj = deepFreeze({
    weakSet: new WeakSet([{}, {}]),
  });
  assert.throws(
    () => {
      obj.weakSet.add({});
    },
    { message: "WeakSet is read-only" },
  );
});

test("freeze WeekMap", () => {
  const obj = deepFreeze({
    weakMap: new WeakMap([[{}, {}]]),
  });
  assert.throws(
    () => {
      obj.weakMap.set({}, {});
    },
    { message: "WeakMap is read-only" },
  );
});

test("freeze function", () => {
  const mockFn = function () {};

  const obj = deepFreeze({
    fn: mockFn,
  });

  assert.throws(
    () => {
      // @ts-ignore
      obj.fn.something = "";
    },
    { message: "Cannot add property something, object is not extensible" },
  );
});
