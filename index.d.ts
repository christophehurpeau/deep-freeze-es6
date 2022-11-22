// inspired by https://github.com/DefinitelyTyped/DefinitelyTyped/blob/215cb1970b3c998bac688396c6cd9756b446055b/types/classnames/index.d.ts

type DeepFreezeFn = <T>(obj: T) => T;

type DeepFreezeExport = DeepFreezeFn & { default: DeepFreezeFn };

declare const deepFreeze: DeepFreezeExport;

export = deepFreeze;
export as namespace deepFreeze;
