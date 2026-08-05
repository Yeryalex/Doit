# 🚀 Webpack Frontend Boilerplate

A modern, pre-configured frontend starter template powered by **Webpack 5**, **ES Modules**, **HTML/CSS Loaders**, and automated 1-command **GitHub Pages deployment**.

---

## 📌 Purpose

This repository serves as a starter template for building modern, modular JavaScript applications. It eliminates the friction of configuring Webpack from scratch by providing:

- **Hot Reloading & Live Watch:** Instant browser updates when modifying `.js`, `.css`, or `.html` files.
- **Asset Management:** Automatic loading and bundling of HTML images and CSS stylesheets.
- **Production Optimization:** Pre-configured minification, source maps, and clean build management.
- **Zero-Stress Deployment:** Automated build-and-deploy pipeline using `gh-pages` that keeps your `main` branch Git history clean.

---

## 📁 Project Structure

```text
template-enviroment/
├── src/
│   ├── index.html       # Primary HTML template
│   ├── index.js         # Entry JavaScript file
│   └── styles.css       # Global styles
├── dist/                # Production build output (git-ignored)
├── package-lock.json    # Auto-generated dependency tree locking file
├── package.json         # NPM manifest & build scripts
├── webpack.common.js    # Shared Webpack configuration (entry, plugins, loaders)
├── webpack.dev.js       # Development environment config (devServer, devtool)
├── webpack.prod.js      # Production environment config (optimization, minification)
└── README.md            # Project documentation
