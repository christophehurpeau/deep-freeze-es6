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

test("freeze Map", () => {
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

test("freeze Map keys", () => {
  const key = { a: 1 };
  deepFreeze({
    map: new Map([[key, 1]]),
  });
  assert.throws(
    () => {
      key.y = 2;
    },
    { message: "Cannot add property y, object is not extensible" },
  );
});

test("freeze Map values", () => {
  const value = { a: 1 };
  deepFreeze({
    map: new Map([[1, value]]),
  });
  assert.throws(
    () => {
      value.y = 2;
    },
    { message: "Cannot add property y, object is not extensible" },
  );
});

test("freeze nested Map", () => {
  const nestedValue = { a: 1 };
  deepFreeze({
    map: new Map([[1, new Map([[2, nestedValue]])]]),
  });
  assert.throws(
    () => {
      nestedValue.y = 2;
    },
    { message: "Cannot add property y, object is not extensible" },
  );
});

test("freeze Set", () => {
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

test("freeze Set values", () => {
  const value = { a: 1 };
  deepFreeze({
    set: new Set([value]),
  });
  assert.throws(
    () => {
      value.y = 2;
    },
    { message: "Cannot add property y, object is not extensible" },
  );
});

test("freeze nested Set", () => {
  const nestedSetValue = { a: 1 };
  deepFreeze({
    set: new Set([new Set([nestedSetValue])]),
  });
  assert.throws(
    () => {
      nestedSetValue.y = 2;
    },
    { message: "Cannot add property y, object is not extensible" },
  );
});

test("freeze WeakSet", () => {
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

test("freeze WeakMap", () => {
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
