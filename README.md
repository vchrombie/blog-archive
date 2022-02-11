# Blog

Gatsby Blog, [vchrombie.github.io/blog](https://vchrombie.github.io/blog/blog).

Theme, https://github.com/LekoArts/gatsby-starter-minimal-blog.

Comments with [giscus](https://giscus.app//), https://github.com/vchrombie/comments/discussions.

## Additional plugins

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
npm install gatsby-plugin-google-analytics
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
npm install gatsby-plugin-twitter
```

gatsby-config.js
```js
plugins: [`gatsby-plugin-twitter`]
```

### [gh-pages](https://github.com/tschaub/gh-pages)

```shell
npm install gh-pages --save-dev
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
