# Changelog

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [5.0.0](https://github.com/christophehurpeau/deep-freeze-es6/compare/v4.0.1...v5.0.0) (2025-09-11)

### ⚠ BREAKING CHANGES

* drop node 20

### Features

* drop node 20 ([31d8364](https://github.com/christophehurpeau/deep-freeze-es6/commit/31d83649702f438449b4f2512f8f22a42c551564))

## [4.0.1](https://github.com/christophehurpeau/deep-freeze-es6/compare/v4.0.0...v4.0.1) (2025-06-08)

Note: no notable changes


## [4.0.0](https://github.com/christophehurpeau/deep-freeze-es6/compare/v3.0.2...v4.0.0) (2024-12-19)

### ⚠ BREAKING CHANGES

* drop node 18
* freeze contents of Maps and Sets (#172)

### Features

* add support for weakmap et weakset ([274fe7c](https://github.com/christophehurpeau/deep-freeze-es6/commit/274fe7cb93213743648b9391121193e78378313c))
* freeze contents of Maps and Sets ([#172](https://github.com/christophehurpeau/deep-freeze-es6/issues/172)) ([e59f83a](https://github.com/christophehurpeau/deep-freeze-es6/commit/e59f83a14153f801d9e13ee57e0c47abfd7170b2))

### Miscellaneous Chores

* update dev deps ([422392b](https://github.com/christophehurpeau/deep-freeze-es6/commit/422392b7645f3da9c827aba207b4af5e354c5895))

## [3.0.2](https://github.com/christophehurpeau/deep-freeze-es6/compare/v3.0.1...v3.0.2) (2023-07-29)


### Bug Fixes

* move declaration file to expected path ([50f7e48](https://github.com/christophehurpeau/deep-freeze-es6/commit/50f7e48b6db880a895510f09ca8cd11ca4df3bbe))

## [3.0.1](https://github.com/christophehurpeau/deep-freeze-es6/compare/v3.0.0...v3.0.1) (2023-07-29)


### Bug Fixes

* configure types in exports ([d82bf86](https://github.com/christophehurpeau/deep-freeze-es6/commit/d82bf8685597b26b0e3a69b4319cb76e2424fd99))

## [3.0.0](https://github.com/christophehurpeau/deep-freeze-es6/compare/v2.0.0...v3.0.0) (2023-06-27)


### ⚠ BREAKING CHANGES

* **deps:** requires node 18

### Miscellaneous Chores

* **deps:** update dependency @pob/root to v8 ([#67](https://github.com/christophehurpeau/deep-freeze-es6/issues/67)) ([ab2160b](https://github.com/christophehurpeau/deep-freeze-es6/commit/ab2160b4163b71f3577d0d404e9f90acdc569992))

## [2.0.0](https://github.com/christophehurpeau/deep-freeze-es6/compare/v1.3.1...v2.0.0) (2022-11-22)


### ⚠ BREAKING CHANGES

* drop node < 16 support, drop cjs

### Bug Fixes

* issue with prior PR undefined variable ([#9](https://github.com/christophehurpeau/deep-freeze-es6/issues/9)) ([afa9596](https://github.com/christophehurpeau/deep-freeze-es6/commit/afa9596bccef4b870a04e3f4043099f0786c2d88))
* original deep-freeze also froze functions ([#10](https://github.com/christophehurpeau/deep-freeze-es6/issues/10)) ([e2cdb1e](https://github.com/christophehurpeau/deep-freeze-es6/commit/e2cdb1e1899bc552030a19c2f0835036284c27a0))


### Miscellaneous Chores

* use yarn berry, add jest, update dev deps ([9089b12](https://github.com/christophehurpeau/deep-freeze-es6/commit/9089b1263d9fb426cc9a23ce45f23ae19f6e8b6d))
