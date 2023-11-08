## Local development

This project is a monorepo set up using
[pnpm Workspace](https://pnpm.io/workspaces). To run / develop this project
locally:

1. Clone this repo or your fork
2. Run `pnpm install` from the root directory
3. Run `pnpm dev` from the `/demo` directory to run the demo site
4. You can make changes to any component in `packages/astro-tweet` and see the
   changes in the demo page
5. Once you have the changes ready, run `pnpm changeset add` if there's any
   changes in the `astro-tweet` package. If your changes do not require
   publishing a new version to `npm`, you don't need to do this step.
