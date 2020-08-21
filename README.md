# eslint-config-nxt

A shared [ESLint](https://eslint.org/) config based on [airbnb-base](https://www.npmjs.com/package/eslint-config-airbnb-base)


## Installation

```
npm install eslint-config-nxt --save-dev
```
Or
```
yarn add eslint-config-nxt --dev
```

## Usage

### Basic rules
```.eslintrc.json```:
```
{
  "extends": "nxt"
}
```

### Typescript
```
{
  "extends": ["nxt", "nxt/addons/typescript"]
}
```