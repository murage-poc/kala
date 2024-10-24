module.exports = function whatBump (commits) {
    let level = -1 //default to be non-existence level.
    let breakings = 0
    let features = 0

    commits.forEach(commit => {
        if (commit.notes.length > 0) {
            breakings += commit.notes.length
            level = 0
        } else if (commit.type === 'feat') {
            features += 1
            if (level !== 0) { // only change if there is no breaking change already
                level = 1
            }
        }else if(commit.type){ //any other type
            level = 2
        }
    })

    return {
        level,
        reason: breakings === 1
            ? `There is ${breakings} BREAKING CHANGE and ${features} features`
            : `There are ${breakings} BREAKING CHANGES and ${features} features`
    }
}
