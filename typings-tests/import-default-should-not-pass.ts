import deepFreeze from "..";

// @ts-expect-error
const obj: number = deepFreeze({ count: 2 });
