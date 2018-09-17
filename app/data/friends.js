// ===============================================================================
// DATA
// Below data will hold all of the reserved friends.
// Initially we just set it equal to a "dummy" customer.
// But you could have it be an empty array as well.
// ===============================================================================

var friendArray = [
    {
        "name": "Ahmed",
        "photo": "https://vignette.wikia.nocookie.net/adventuretimewithfinnandjake/images/3/3b/Jakesalad.png/revision/latest/scale-to-width-down/310?cb=20160503014517",
        "scores": [
            5,
            1,
            4,
            4,
            5,
            1,
            2,
            5,
            4,
            1
        ]
    },
    {
        "name": "Rex",
        "photo": "http://www.dododex.com/media/creature/rex.png",
        "scores": [
            3,
            5,
            4,
            3,
            5,
            2,
            1,
            3,
            2,
            1
        ]
    },
    {
        "name": "Jill",
        "photo": "https://www.out.com/sites/out.com/files/2017/09/15/jill.jpeg",
        "scores": [
            3,
            1,
            2,
            1,
            3,
            4,
            1,
            1,
            3,
            5
        ]
    },
    {
        "name": "Sam",
        "photo": "https://pbs.twimg.com/profile_images/852113561014947844/Eecle29Z_400x400.jpg",
        "scores": [
            5,
            5,
            3,
            5,
            4,
            5,
            2,
            2,
            1,
            1
        ]
    },
    {
        "name": "Draymond",
        "photo": "http://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/6589.png&w=350&h=254",
        "scores": [
            4,
            4,
            1,
            3,
            2,
            4,
            5,
            5,
            1,
            2
        ]
    }
];

// Note how we export the array. This makes it accessible to other files using require.
module.exports = friendArray;