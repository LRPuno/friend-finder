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
    }

];

// Note how we export the array. This makes it accessible to other files using require.
module.exports = friendArray;