module.exports = {
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
