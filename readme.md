# Kala

A monorepo showcasing how to perform semantic releases using  [release-it](https://github.com/release-it/release-it).


### My Learnings and Gotchas

- I used CommonJS (CJS) for the configuration because `release-it` does not support ESM configuration yet.


- Do not run the release command concurrently within the same workspace. The immutable nature of git history can lead to write lock issues if multiple processes attempt to write at the same time.


-  A change in a library will not trigger a release for an app. I haven't explored how to manage this without complicating my workflow.


-  It’s common for some apps or libraries not to require a release. By default, `conventional-changelog` presets perform a minor release in such cases. To address this, I created a custom `whatBump` function in [bumper.cjs](./packages/release-it-config/bumper.cjs) to override this behavior.


- **Git Tags**: This setup does not rely on git tags, which apply to the entire repository rather than individual subfolders.


- Since we’re not using git tags, I explicitly provide the commit SHA or ref which `conventional-changelog` should analyze commits. This is done by setting the `RELEASE_SCM_BASE` environment variable before executing the release command.
  If you don’t provide this reference, the changelog analysis will start from the very beginning, resulting in duplicate entries.


#### Release Process

- I’ve automated the release process to trigger when a pull request is merged (or a push occurs) into the `release` branch.
  You can adjust this to suit your needs. The *key thing* is setting `RELEASE_SCM_BASE`, which in my case is configured to the commit SHA just before the merge. This ensures that there are no duplicate entries in the changelog.


- The `conventional-changelog` plugin and `release-it` are installed only in the root workspace. This approach simplifies dependency management and makes sense as they are utilized by all workspace apps and libraries.

