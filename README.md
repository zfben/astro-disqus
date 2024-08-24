# astro-disqus

[![License: MIT](https://img.shields.io/npm/l/astro-disqus.svg)](https://github.com/zfben/astro-disqus/blob/main/LICENSE)
[![NPM Version](https://img.shields.io/npm/v/astro-disqus.svg)](https://www.npmjs.com/package/astro-disqus)

Add [Disqus](https://disqus.com/) to your [Astro](https://astro.build/) website.

## Key Features

- **Simplified Integration**: Easily add Disqus to your Astro website with minimal configuration.
- **Support View Transitions**: Automatically reload Disqus when navigating between pages.

## Getting Started

1. **Installation**: Install the package using npm: `npm install astro-disqus`.
3. **Import and Usage**: Import the Head component from the package and use it within your Astro components:

```astro
---
import { Disqus } from "astro-disqus";
---

<Disqus embed="https://demo.disqus.com/embed.js" />
```

## Supported Props

Prop | Description
-- | --
`embed` |  **required** The embed url, like `https://demo.disqus.com/embed.js`
`url` | The page url
`class` | The class name of the container
`style` | The style of the container

## Links

- [Changelog](./CHANGELOG.md)
