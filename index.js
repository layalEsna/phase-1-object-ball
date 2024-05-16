

function gameObject() {
    return {
        home: {
            teamName: 'Brooklyn Nets',
            colors: ['Black', 'White'],
            players: {
                'Alan Anderson': {
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1
                },
                'Reggie Evans': {
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7
                },
                'Brook Lopez': {
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 15
                },
                'Mason Plumlee': {
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slamDunks: 5
                },
                'Jason Terry': {
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamDunks: 1
                }
            }
        },
        away: {
            teamName: 'Charlotte Hornets',
            colors: ['Turquoise', 'Purple'],
            players: {
                'Jeff Adrien': {
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks: 2
                },
                'Bismak Biyombo': {
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamDunks: 10
                },
                'DeSagna Diop': {
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks: 5

                },
                'Ben Gordon': {
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slamDunks: 0
                },
                'Brendan Haywood': {
                    number: 33,
                    shoe: 15,
                    points: 6,
                    rebounds: 12,
                    assists: 12,
                    steals: 22,
                    blocks: 5,
                    slamDunks: 12
                }
            }
        }
    };
}






function winningTeam() {
    const obj = gameObject()
    let home = 0
    let away = 0
    let winner;
    for (const player in obj['home']['players']) {
        home += obj['home']['players'][player]['points']
    }
    for (const player in obj['away']['players']) {
        away += obj['away']['players'][player]['points']

    }
    if (home > away) {
        winner = `The winner is home team with the score of ${home}`
    } else if (home < away) {
        winner = `The winner is home team with the score of ${away}`
    } else { return "it's a tie!" }
    return winner
}


//console.log(winningTeam())


function numPointsScored(playerName) {
    const obj = gameObject()
    for (const team in obj) {
        //console.log(team)
        const players = obj[team]["players"]
        //console.log(players)
        for (const name in players) {
            console.log(name)
            if (name === playerName) {
                return players[name].points
            }

        }
    } return null
}

//console.log(numPointsScored('Brendan Haywood'))

function shoeSize(playerName) {
    const obj = gameObject()
    for (const team in obj) {
        //console.log(team)
        const player = obj[team]['players']
        //console.log(player)
        for (const name in player) {
            console.log(name)
            if (name === playerName) {
                return player[name]['shoe']
            }
        }

    }

}
//console.log(shoeSize('Brendan Haywood'))

function teamColors(teamName) {
    const obj = gameObject()
    for (const team in obj) {
        //console.log(team)
        if (team === teamName) {
            return obj[team]['colors']
        }

    }
}
//console.log(teamColors('away'))

function teamNames() {
    const obj = gameObject()
    const teamArr = []
    for (const team in obj) {
        // console.log(team)
        teamArr.push(obj[team]['teamName'])
    }
    return teamArr
}
//console.log(teamNames())

function playerNumbers(teamName) {
    const obj = gameObject()
    const arrayNum = []
    for (const team in obj) {
        //console.log(team)
        const players = obj[team]['players']
        console.log(players)
        for (const name in players) {
            //console.log(name)
            if (team === teamName) {
                arrayNum.push(players[name]['number'])
            }
        }

    } return arrayNum


}
//console.log(playerNumbers('away'))

function playerStats(playerName) {
    const obj = gameObject()
    for (const team in obj) {
        const players = obj[team]['players']
        for (const name in players) {
            if (name === playerName) {

                return players[name]

            }
        }
    }
}


//console.log(playerStats('Jason Terry'))

function bigShoeRebounds() {
    const obj = gameObject()
    const largestShoe = []
    for (const team in obj) {
        const players = obj[team]['players']

        for (const name in players) {

            largestShoe.push(players[name]['shoe'])
            let lShoe = Math.max(...largestShoe)
            if (players[name]['shoe'] === lShoe) {

                return players[name]['rebounds']
            }
        }

    }

}
//console.log(bigShoeRebounds())

function mostPointsScored() {
    const obj = gameObject()
    let highestScore = 0
    let superPlayer = null
    for (const team in obj) {
        const players = obj[team]['players']

        for (const name in players) {
            //console.log(name)
            const playerName = players[name]
            //console.log(playerName)
            if (playerName['points'] > highestScore) {
                highestScore = playerName['points']
                superPlayer = name
            }


        }

    }
    return superPlayer

}


//console.log(mostPointsScored())