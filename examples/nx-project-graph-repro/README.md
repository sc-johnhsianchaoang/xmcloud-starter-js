# Nx Project Graph Reproduction

This opt-in rendering host reproduces an Nx graph failure caused by unnamed metadata inside the generated Next.js output directory.

To run it in a local XM Cloud deployment, enable `nx-project-graph-repro` in the root `xmcloud.build.json`. Disable the other rendering hosts if you want the deployment to build only this host.

The build uses `NEXTJS_DIST_DIR` supplied by the deployment platform, then writes an unnamed `package.json` and minimal `next.config.mjs` into that output directory. The Nx Next plugin infers a project there but cannot find its name, so startup should report `apps/itkd/.next-container` as unnamed.

The repro workspace uses public npm packages only. After confirming the failure, add `**/.next-container/**` to this workspace's `.nxignore`, rebuild, and redeploy to verify the exclusion.