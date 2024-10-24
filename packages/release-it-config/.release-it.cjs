module.exports = {
    plugins: {
        "@release-it/conventional-changelog": {
            preset: "angular",
            infile: "CHANGELOG.md"
        }
    },
    git: {
        tag: false,
        commitsPath: '.',
        requireCommits: true,
        requireCommitsFail: false,
        commitMessage: "chore(release): released version v${version} [no ci]",
        push: false
    },
    npm: {
        publish: false
    }
}
