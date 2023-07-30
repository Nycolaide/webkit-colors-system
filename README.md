<p align="center">
  <img src="https://github.com/minedelve/.github/blob/minedelve/picture/packages/webkit-colors-system/webkit-colors-system-logo.png" height="128">
  <h1 align="center">WebKit Colors System</h1>
</p>

<p align="center">
  <a aria-label="Follow Minedelve on Github" href="https://github.com/minedelve" target="_blank">
    <img alt="Minedelve Github" src="https://img.shields.io/badge/Follow%20@Minedelve-black.svg?style=for-the-badge&logo=Github">
  </a>
  <a aria-label="Join the community on Discord" href="https://discord.gg/bVWvfuhemP" target="_blank">
    <img alt="Minedelve Discord" src="https://img.shields.io/badge/Join%20the%20community-black.svg?style=for-the-badge&logo=Discord">
  </a>
    <a aria-label="Explore Webkit Colors System Package" href="https://www.npmjs.com/package/@minedelve/webkit-colors-system" target="_blank">
    <img alt="" src="https://img.shields.io/badge/Minedelve-WebKitColorsSystem-black.svg?style=for-the-badge&logo=NPM">
  </a>
</p>

WebKit Colors System is a color library based on the Humans Color Apple documentation to provide generic color palettes in your JS projects.

<img width="1012" alt="webkit-banner" src="https://github.com/minedelve/.github/blob/minedelve/picture/packages/webkit-colors-system/webkit-colors-system-cover.png">

[![DDL_ALL](https://img.shields.io/npm/dt/@minedelve/webkit-colors-system.svg)](https://www.npmjs.com/package/@minedelve/webkit-colors-system)&nbsp;
[![DDL_MONTHS](https://img.shields.io/npm/dm/@minedelve/webkit-colors-system.svg)](https://www.npmjs.com/package/@minedelve/webkit-colors-system)&nbsp;
[![LICENSE](https://img.shields.io/npm/l/@minedelve/webkit-colors-system.svg)](https://www.npmjs.com/package/@minedelve/webkit-colors-system)&nbsp;
[![VERSION_X11COLOR](https://img.shields.io/npm/v/@minedelve/webkit-colors-system.svg)](https://www.npmjs.com/package/@minedelve/webkit-colors-system)&nbsp;
[![DISCORD_BADGE](https://img.shields.io/discord/1093887038991896717?color=5865F2&label=Discord&logo=discord&logoColor=white&style=flat-square)](https://discord.gg/bVWvfuhemP)

## Table of Contents

- [Installation](#installation)
- [Use](#use)
- [Color List](#colors)
- [Core Team](#core-team)
- [License](#license)

## Installation

```
yarn add @minedelve/webkit-colors-system -D
```

```
npm install @minedelve/webkit-colors-system --save-dev
```

## Use

```js
import { getSystemColor } from "@minedelve/webkit-colors-system";

[...]

const color = getSystemColor('Red');
// return color red in Light Theme.

const color = getSystemColor('red', true);
// return color red to Dark Theme.

const color = getSystemColor('red', true, true);
// return color red to Dark Theme on Variant Color.

const color = getSystemColor('red', undefined, undefined, true);
// return color red to Light Theme on Accesibility Mode.
```

```js
import {systemColor} from "@minedelve/webkit-colors-system";

[...]

console.log(systemColor)
// return All Key for display Color
```

## Colors

#### Default

<img width="320" alt="webkit-banner" src="https://github.com/minedelve/.github/blob/minedelve/picture/packages/webkit-colors-system/webkit-colors-system-palette-default.png">

#### Gray

<img width="320" alt="webkit-banner" src="https://github.com/minedelve/.github/blob/minedelve/picture/packages/webkit-colors-system/webkit-colors-system-palette-gray.png">

#### Variant

<img width="320" alt="webkit-banner" src="https://github.com/minedelve/.github/blob/minedelve/picture/packages/webkit-colors-system/webkit-colors-system-palette-variant.png">

## Core Team

[Laurent Grimaldi](https://github.com/laustrasza)

## License

Licensed under the [MIT license](https://github.com/minedelve/webkit-colors-system/blob/main/LICENSE.md).

Copyright © 2021-2023 [Minedelve](https://minedelve.com)

## We support these projects

<table>
  <tr>
    <td align="center">
      <a href="https://humanstxt.org/">
        <img src="https://user-images.githubusercontent.com/62988176/209962360-048f7199-49dc-4385-9469-d0af6b4a8ea9.png" height="75">
        <p>Human.txt</p>
      </a>
    </td>
  </tr>
</table>
