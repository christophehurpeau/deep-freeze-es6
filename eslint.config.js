import pobConfig from "@pob/eslint-config";

export default [
  {
    ignores: ["typings-tests/**"],
  },
  ...pobConfig(import.meta.url).configs.nodeModule,
];
