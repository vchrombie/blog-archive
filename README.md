# Blog

Gatsby Blog, [vchrombie.github.io/blog](https://vchrombie.github.io/blog/blog).

Theme, https://github.com/LekoArts/gatsby-starter-minimal-blog.

Comments with [giscus](https://giscus.app//), https://github.com/vchrombie/comments/discussions.

## Setup

Prerequisites
- [nvm](https://github.com/nvm-sh/nvm)
- [node](https://nodejs.org/en/) & [npm](https://www.npmjs.com/) (you can install using nvm)
  ```shell
  $ nvm install 16
  $ node --version && npm --version
    v16.13.2
    8.1.2
  ```
- [gatsby](https://www.gatsbyjs.com/)
  ```shell
  $ npm install -g gatsby-cli
  ```

Build the site locally
```shell
$ git clone https://github.com/vchrombie/blog
$ cd blog/
$ npm install
$ gatsby develop
```

Clean the cache
```shell
$ gatsby clean
```

Deploy to github pages
```shell
$ npm run deploy
```

## Plugins

### [giscus](https://github.com/giscus/giscus-component/tree/main/packages/react)

```shell
$ npm install @giscus/react
```

post.tsx
```tsx
import {Giscus} from "@giscus/react";

...

</section>

<Giscus
    repo="vchrombie/comments"
    repoId="MDEwOlJlcG9zaXRvcnkyNjI1NjQ5ODM"
    category="Comments"
    categoryId="DIC_kwDOD6Zsd84CBE_4"
    mapping="pathname"
    reactionsEnabled="1"
    emitMetadata="0"
    theme="preferred_color_scheme"
/>

</Layout>
```

### [gatsby-plugin-google-analytics](https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-plugin-google-analytics)

```shell
$ npm install gatsby-plugin-google-analytics
```

gatsby-config.js
```js
plugins: [
  {
    resolve: `gatsby-plugin-google-analytics`,
    options: {
      trackingId: `UA-121045448-1`,
    },
  },
]
```

### [gatsby-plugin-twitter](https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-plugin-twitter)

```shell
$ npm install gatsby-plugin-twitter
```

gatsby-config.js
```js
plugins: [`gatsby-plugin-twitter`]
```

### [gh-pages](https://github.com/tschaub/gh-pages)

```shell
$ npm install gh-pages --save-dev
```

gatsby-config.js
```js
module.exports = {
  pathPrefix: "/blog",
}
```

package.json
```json
{
  "scripts": {
    "deploy": "gatsby build --prefix-paths && gh-pages -d public"
  }
}
```
