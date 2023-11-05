# astro-tweet

Embed tweets in your Astro sites with zero JavaScript on the client side. This
is a (slightly opinionated) port of the fantastic
[react-tweet](https://github.com/vercel/react-tweet) library. Huge thanks to
Vercel and all the contributors of react-tweet.

HTML for the tweets are generated at the build time and there is no JavaScript
bundled. This uses Twitter's

## How to use?

### Install

```
npm i astro-tweet
```

In your Astro component:

```js
---
import Tweet from "astro-tweet";
---

<Tweet id="1713443573168034170" />

```

Where `id` is the tweet ID. For example, in
https://twitter.com/tsriram/1713443573168034170, `1713443573168034170` is the
ID.

This also works with MDX files in Astro.

### Major changes from react-tweet

This library ports almost all of the features of
[react-tweet](https://github.com/vercel/react-tweet) except the below. These are
mainly omitted since they'd require adding client side JavaScript but the
features are probably not "must haves" IMO. This may change in the future.

1. `Copy link` option (rendered next to likes & reply) is not available.
2. Video player doesn't have custom play button rendered in the center of the
   video element (like it does in twitter apps). Instead you get a native HTML
   video element.

## Running demo locally

1. Clone the repo
2. Run `pnpm install` from the project directory
3. Run `pnpm dev` from the `demo` directory
