module.exports = {
    plugins: {
        "@release-it/conventional-changelog": {
            preset: "angular",
            infile: "CHANGELOG.md",
            gitRawCommitsOpts: {
                path: '.',
                from: process.env.RELEASE_SCM_BASE,
            },
            commitsOpts: {
                path: '.',
                from: process.env.RELEASE_SCM_BASE,
            },
        }
    },
    git: {
        tag: false, // We want the last version to be derived from the package.json version field.
        commitsPath: '.', // Only consider commits in this folder and not the whole repository.
        requireCommits: true, // Do not do anything with git if there are no commits.
        requireCommitsFail: false, // Do not fail if there are no commits.
        commitMessage: "chore(release): released version v${version} [no ci]",
    },
    npm: {
        publish: false
    }
}
