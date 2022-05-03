function begin() {
    document.getElementById("begin").style.display = "block"
    if (playerAmount >= 2) document.getElementById("start").style.display = "block"
    else document.getElementById("start").style.display = "none"
    document.getElementById("players").style.display = "block"
}
function hideBegin() {
    document.getElementById("begin").style.display = "none"
    document.getElementById("start").style.display = "none"
}
var player1, player2, player3, player4, player1enter, player2enter, player3enter, player4enter, player1select, player2select, player3select, player4select, player1color, player2color, player3color, player4color, playerAmount
var red, green, yellow, purple, gray, orange, pink, blue, redpicked, greenpicked, yellowpicked, purplepicked, graypicked, orangepicked, pinkpicked, bluepicked, redpickedby1, redpickedby2, redpickedby3, redpickedby4, greenpickedby1, greenpickedby2, greenpickedby3, greenpickedby4, yellowpickedby1, yellowpickedby2, yellowpickedby3, yellowpickedby4, purplepickedby1, purplepickedby2, purplepickedby3, purplepickedby4, graypickedby1, graypickedby2, graypickedby3, graypickedby4, orangepickedby1, orangepickedby2, orangepickedby3, orangepickedby4, pinkpickedby1, pinkpickedby2, pinkpickedby3, pinkpickedby4, bluepickedby1, bluepickedby2, bluepickedby3, bluepickedby4
redpicked = true
redpickedby1 = true
redpickedby2 = false
redpickedby3 = false
redpickedby4 = false
orangepicked = false
orangepickedby1 = false
orangepickedby2 = false
orangepickedby3 = false
orangepickedby4 = false
yellowpicked = false
yellowpickedby1 = false
yellowpickedby2 = false
yellowpickedby3 = false
yellowpickedby4 = false
greenpicked = false
greenpickedby1 = false
greenpickedby2 = false
greenpickedby3 = false
greenpickedby4 = false
bluepicked = false
bluepickedby1 = false
bluepickedby2 = false
bluepickedby3 = false
bluepickedby4 = false
purplepicked = false
purplepickedby1 = false
purplepickedby2 = false
purplepickedby3 = false
purplepickedby4 = false
pinkpicked = false
pinkpickedby1 = false
pinkpickedby2 = false
pinkpickedby3 = false
pinkpickedby4 = false
graypicked = false
graypickedby1 = false
graypickedby2 = false
graypickedby3 = false
graypickedby4 = false
player1enter = true
player1select = false
player1color = "red"
player2enter = false
player2select = false
player2color = ""
player3enter = false
player3select = false
player3color = ""
player4enter = false
player4select = false
player4color = ""
playerAmount = 1
player1 = document.getElementById("player1")
player2 = document.getElementById("player2")
player3 = document.getElementById("player3")
player4 = document.getElementById("player4")
red = document.getElementById("red")
orange = document.getElementById("orange")
yellow = document.getElementById("yellow")
green = document.getElementById("green")
blue = document.getElementById("blue")
purple = document.getElementById("purple")
pink = document.getElementById("pink")
gray = document.getElementById("gray")
player1.onclick = function () {
    if (redpickedby1 || redpickedby2 || redpickedby3 || redpickedby4) redpicked = true
    else redpicked = false
    if (orangepickedby1 || orangepickedby2 || orangepickedby3 || orangepickedby4) orangepicked = true
    else orangepicked = false
    if (yellowpickedby1 || yellowpickedby2 || yellowpickedby3 || yellowpickedby4) yellowpicked = true
    else yellowpicked = false
    if (greenpickedby1 || greenpickedby2 || greenpickedby3 || greenpickedby4) greenpicked = true
    else greenpicked = false
    if (bluepickedby1 || bluepickedby2 || bluepickedby3 || bluepickedby4) bluepicked = true
    else bluepicked = false
    if (purplepickedby1 || purplepickedby2 || purplepickedby3 || purplepickedby4) purplepicked = true
    else purplepicked = false
    if (pinkpickedby1 || pinkpickedby2 || pinkpickedby3 || pinkpickedby4) pinkpicked = true
    else pinkpicked = false
    if (graypickedby1 || graypickedby2 || graypickedby3 || graypickedby4) graypicked = true
    else graypicked = false
    if (player1enter == true) {
        player1enter = false
        playerAmount--
        if (playerAmount >= 2) document.getElementById("start").style.display = "block"
        else document.getElementById("start").style.display = "none"
        document.getElementById("player1").style.backgroundColor = "white"
        redpickedby1 = false
        orangepickedby1 = false
        yellowpickedby1 = false
        greenpickedby1 = false
        bluepickedby1 = false
        purplepickedby1 = false
        pinkpickedby1 = false
        graypickedby1 = false
    } else {
        playerAmount++
        player1enter = true
        player1select = true
        if (redpicked) document.getElementById("red").style.display = "none"
        else document.getElementById("red").style.display = "block"
        if (orangepicked) document.getElementById("orange").style.display = "none"
        else document.getElementById("orange").style.display = "block"
        if (yellowpicked) document.getElementById("yellow").style.display = "none"
        else document.getElementById("yellow").style.display = "block"
        if (greenpicked) document.getElementById("green").style.display = "none"
        else document.getElementById("green").style.display = "block"
        if (bluepicked) document.getElementById("blue").style.display = "none"
        else document.getElementById("blue").style.display = "block"
        if (purplepicked) document.getElementById("purple").style.display = "none"
        else document.getElementById("purple").style.display = "block"
        if (pinkpicked) document.getElementById("pink").style.display = "none"
        else document.getElementById("pink").style.display = "block"
        if (graypicked) document.getElementById("gray").style.display = "none"
        else document.getElementById("gray").style.display = "block"
        document.getElementById("colors").style.display = "block"
        document.getElementById("players").style.display = "none"
    }
}
player2.onclick = function () {
    if (redpickedby1 || redpickedby2 || redpickedby3 || redpickedby4) redpicked = true
    else redpicked = false
    if (orangepickedby1 || orangepickedby2 || orangepickedby3 || orangepickedby4) orangepicked = true
    else orangepicked = false
    if (yellowpickedby1 || yellowpickedby2 || yellowpickedby3 || yellowpickedby4) yellowpicked = true
    else yellowpicked = false
    if (greenpickedby1 || greenpickedby2 || greenpickedby3 || greenpickedby4) greenpicked = true
    else greenpicked = false
    if (bluepickedby1 || bluepickedby2 || bluepickedby3 || bluepickedby4) bluepicked = true
    else bluepicked = false
    if (purplepickedby1 || purplepickedby2 || purplepickedby3 || purplepickedby4) purplepicked = true
    else purplepicked = false
    if (pinkpickedby1 || pinkpickedby2 || pinkpickedby3 || pinkpickedby4) pinkpicked = true
    else pinkpicked = false
    if (graypickedby1 || graypickedby2 || graypickedby3 || graypickedby4) graypicked = true
    else graypicked = false
    if (player2enter == true) {
        playerAmount--
        if (playerAmount >= 2) document.getElementById("start").style.display = "block"
        else document.getElementById("start").style.display = "none"
        player2enter = false
        document.getElementById("player2").style.backgroundColor = "white"
        redpickedby2 = false
        orangepickedby2 = false
        yellowpickedby2 = false
        greenpickedby2 = false
        bluepickedby2 = false
        purplepickedby2 = false
        pinkpickedby2 = false
        graypickedby2 = false
    } else {
        playerAmount++
        player2enter = true
        player2select = true
        document.getElementById("colors").style.display = "block"
        if (redpicked) document.getElementById("red").style.display = "none"
        else document.getElementById("red").style.display = "block"
        if (orangepicked) document.getElementById("orange").style.display = "none"
        else document.getElementById("orange").style.display = "block"
        if (yellowpicked) document.getElementById("yellow").style.display = "none"
        else document.getElementById("yellow").style.display = "block"
        if (greenpicked) document.getElementById("green").style.display = "none"
        else document.getElementById("green").style.display = "block"
        if (bluepicked) document.getElementById("blue").style.display = "none"
        else document.getElementById("blue").style.display = "block"
        if (purplepicked) document.getElementById("purple").style.display = "none"
        else document.getElementById("purple").style.display = "block"
        if (pinkpicked) document.getElementById("pink").style.display = "none"
        else document.getElementById("pink").style.display = "block"
        if (graypicked) document.getElementById("gray").style.display = "none"
        else document.getElementById("gray").style.display = "block"
        document.getElementById("players").style.display = "none"
    }
}
player3.onclick = function () {
    if (redpickedby1 || redpickedby2 || redpickedby3 || redpickedby4) redpicked = true
    else redpicked = false
    if (orangepickedby1 || orangepickedby2 || orangepickedby3 || orangepickedby4) orangepicked = true
    else orangepicked = false
    if (yellowpickedby1 || yellowpickedby2 || yellowpickedby3 || yellowpickedby4) yellowpicked = true
    else yellowpicked = false
    if (greenpickedby1 || greenpickedby2 || greenpickedby3 || greenpickedby4) greenpicked = true
    else greenpicked = false
    if (bluepickedby1 || bluepickedby2 || bluepickedby3 || bluepickedby4) bluepicked = true
    else bluepicked = false
    if (purplepickedby1 || purplepickedby2 || purplepickedby3 || purplepickedby4) purplepicked = true
    else purplepicked = false
    if (pinkpickedby1 || pinkpickedby2 || pinkpickedby3 || pinkpickedby4) pinkpicked = true
    else pinkpicked = false
    if (graypickedby1 || graypickedby2 || graypickedby3 || graypickedby4) graypicked = true
    else graypicked = false
    if (player3enter == true) {
        playerAmount--
        if (playerAmount >= 2) document.getElementById("start").style.display = "block"
        else document.getElementById("start").style.display = "none"
        player3enter = false
        document.getElementById("player3").style.backgroundColor = "white"
        redpickedby3 = false
        orangepickedby3 = false
        yellowpickedby3 = false
        greenpickedby3 = false
        bluepickedby3 = false
        purplepickedby3 = false
        pinkpickedby3 = false
        graypickedby3 = false
    } else {
        playerAmount++
        player3enter = true
        player3select = true
        if (redpicked) document.getElementById("red").style.display = "none"
        else document.getElementById("red").style.display = "block"
        if (orangepicked) document.getElementById("orange").style.display = "none"
        else document.getElementById("orange").style.display = "block"
        if (yellowpicked) document.getElementById("yellow").style.display = "none"
        else document.getElementById("yellow").style.display = "block"
        if (greenpicked) document.getElementById("green").style.display = "none"
        else document.getElementById("green").style.display = "block"
        if (bluepicked) document.getElementById("blue").style.display = "none"
        else document.getElementById("blue").style.display = "block"
        if (purplepicked) document.getElementById("purple").style.display = "none"
        else document.getElementById("purple").style.display = "block"
        if (pinkpicked) document.getElementById("pink").style.display = "none"
        else document.getElementById("pink").style.display = "block"
        if (graypicked) document.getElementById("gray").style.display = "none"
        else document.getElementById("gray").style.display = "block"
        document.getElementById("colors").style.display = "block"
        document.getElementById("players").style.display = "none"
    }
}
player4.onclick = function () {
    if (redpickedby1 || redpickedby2 || redpickedby3 || redpickedby4) redpicked = true
    else redpicked = false
    if (orangepickedby1 || orangepickedby2 || orangepickedby3 || orangepickedby4) orangepicked = true
    else orangepicked = false
    if (yellowpickedby1 || yellowpickedby2 || yellowpickedby3 || yellowpickedby4) yellowpicked = true
    else yellowpicked = false
    if (greenpickedby1 || greenpickedby2 || greenpickedby3 || greenpickedby4) greenpicked = true
    else greenpicked = false
    if (bluepickedby1 || bluepickedby2 || bluepickedby3 || bluepickedby4) bluepicked = true
    else bluepicked = false
    if (purplepickedby1 || purplepickedby2 || purplepickedby3 || purplepickedby4) purplepicked = true
    else purplepicked = false
    if (pinkpickedby1 || pinkpickedby2 || pinkpickedby3 || pinkpickedby4) pinkpicked = true
    else pinkpicked = false
    if (graypickedby1 || graypickedby2 || graypickedby3 || graypickedby4) graypicked = true
    else graypicked = false
    if (player4enter == true) {
        playerAmount--
        if (playerAmount >= 2) document.getElementById("start").style.display = "block"
        else document.getElementById("start").style.display = "none"
        player4enter = false
        document.getElementById("player4").style.backgroundColor = "white"
        redpickedby4 = false
        orangepickedby4 = false
        yellowpickedby4 = false
        greenpickedby4 = false
        bluepickedby4 = false
        purplepickedby4 = false
        pinkpickedby4 = false
        graypickedby4 = false
    } else {
        playerAmount++
        player4enter = true
        player4select = true
        if (redpicked) document.getElementById("red").style.display = "none"
        else document.getElementById("red").style.display = "block"
        if (orangepicked) document.getElementById("orange").style.display = "none"
        else document.getElementById("orange").style.display = "block"
        if (yellowpicked) document.getElementById("yellow").style.display = "none"
        else document.getElementById("yellow").style.display = "block"
        if (greenpicked) document.getElementById("green").style.display = "none"
        else document.getElementById("green").style.display = "block"
        if (bluepicked) document.getElementById("blue").style.display = "none"
        else document.getElementById("blue").style.display = "block"
        if (purplepicked) document.getElementById("purple").style.display = "none"
        else document.getElementById("purple").style.display = "block"
        if (pinkpicked) document.getElementById("pink").style.display = "none"
        else document.getElementById("pink").style.display = "block"
        if (graypicked) document.getElementById("gray").style.display = "none"
        else document.getElementById("gray").style.display = "block"
        document.getElementById("colors").style.display = "block"
        document.getElementById("players").style.display = "none"
    }
}
red.onclick = function () {
    if (playerAmount >= 2) document.getElementById("start").style.display = "block"
    else document.getElementById("start").style.display = "none"
    if (player1select == true) {
        player1select = false
        player1color = "red"
        document.getElementById("player1").style.backgroundColor = "red"
        redpickedby1 = true
        orangepickedby1 = false
        yellowpickedby1 = false
        greenpickedby1 = false
        bluepickedby1 = false
        purplepickedby1 = false
        pinkpickedby1 = false
        graypickedby1 = false
    }
    else if (player2select == true) {
        player2select = false
        player2color = "red"
        document.getElementById("player2").style.backgroundColor = "red"
        redpickedby2 = true
        orangepickedby2 = false
        yellowpickedby2 = false
        greenpickedby2 = false
        bluepickedby2 = false
        purplepickedby2 = false
        pinkpickedby2 = false
        graypickedby2 = false
    }
    else if (player3select == true) {
        player3select = false
        player3color = "red"
        document.getElementById("player3").style.backgroundColor = "red"
        redpickedby3 = true
        orangepickedby3 = false
        yellowpickedby3 = false
        greenpickedby3 = false
        bluepickedby3 = false
        purplepickedby3 = false
        pinkpickedby3 = false
        graypickedby3 = false
    }
    else if (player4select == true) {
        player4select = false
        player4color = "red"
        document.getElementById("player4").style.backgroundColor = "red"
        redpickedby4 = true
        orangepickedby4 = false
        yellowpickedby4 = false
        greenpickedby4 = false
        bluepickedby4 = false
        purplepickedby4 = false
        pinkpickedby4 = false
        graypickedby4 = false
    }
    document.getElementById("colors").style.display = "none"
    document.getElementById("players").style.display = "block"
}
orange.onclick = function () {
    if (playerAmount >= 2) document.getElementById("start").style.display = "block"
    else document.getElementById("start").style.display = "none"
    if (player1select == true) {
        player1select = false
        player1color = "orange"
        document.getElementById("player1").style.backgroundColor = "orange"
        redpickedby1 = false
        orangepickedby1 = true
        yellowpickedby1 = false
        greenpickedby1 = false
        bluepickedby1 = false
        purplepickedby1 = false
        pinkpickedby1 = false
        graypickedby1 = false
    }
    else if (player2select == true) {
        player2select = false
        player2color = "orange"
        document.getElementById("player2").style.backgroundColor = "orange"
        redpickedby2 = false
        orangepickedby2 = true
        yellowpickedby2 = false
        greenpickedby2 = false
        bluepickedby2 = false
        purplepickedby2 = false
        pinkpickedby2 = false
        graypickedby2 = false
    }
    else if (player3select == true) {
        player3select = false
        player3color = "orange"
        document.getElementById("player3").style.backgroundColor = "orange"
        redpickedby3 = false
        orangepickedby3 = true
        yellowpickedby3 = false
        greenpickedby3 = false
        bluepickedby3 = false
        purplepickedby3 = false
        pinkpickedby3 = false
        graypickedby3 = false
    }
    else if (player4select == true) {
        player4select = false
        player4color = "orange"
        document.getElementById("player4").style.backgroundColor = "orange"
        redpickedby4 = false
        orangepickedby4 = true
        yellowpickedby4 = false
        greenpickedby4 = false
        bluepickedby4 = false
        purplepickedby4 = false
        pinkpickedby4 = false
        graypickedby4 = false
    }
    document.getElementById("colors").style.display = "none"
    document.getElementById("players").style.display = "block"
}
yellow.onclick = function () {
    if (playerAmount >= 2) document.getElementById("start").style.display = "block"
    else document.getElementById("start").style.display = "none"
    if (player1select == true) {
        player1select = false
        player1color = "yellow"
        document.getElementById("player1").style.backgroundColor = "yellow"
        redpickedby1 = false
        orangepickedby1 = false
        yellowpickedby1 = true
        greenpickedby1 = false
        bluepickedby1 = false
        purplepickedby1 = false
        pinkpickedby1 = false
        graypickedby1 = false
    }
    else if (player2select == true) {
        player2select = false
        player2color = "yellow"
        document.getElementById("player2").style.backgroundColor = "yellow"
        redpickedby2 = false
        orangepickedby2 = false
        yellowpickedby2 = true
        greenpickedby2 = false
        bluepickedby2 = false
        purplepickedby2 = false
        pinkpickedby2 = false
        graypickedby2 = false
    }
    else if (player3select == true) {
        player3select = false
        player3color = "yellow"
        document.getElementById("player3").style.backgroundColor = "yellow"
        redpickedby3 = false
        orangepickedby3 = false
        yellowpickedby3 = true
        greenpickedby3 = false
        bluepickedby3 = false
        purplepickedby3 = false
        pinkpickedby3 = false
        graypickedby3 = false
    }
    else if (player4select == true) {
        player4select = false
        player4color = "yellow"
        document.getElementById("player4").style.backgroundColor = "yellow"
        redpickedby4 = false
        orangepickedby4 = false
        yellowpickedby4 = true
        greenpickedby4 = false
        bluepickedby4 = false
        purplepickedby4 = false
        pinkpickedby4 = false
        graypickedby4 = false
    }
    document.getElementById("colors").style.display = "none"
    document.getElementById("players").style.display = "block"
}
green.onclick = function () {
    if (playerAmount >= 2) document.getElementById("start").style.display = "block"
    else document.getElementById("start").style.display = "none"
    if (player1select == true) {
        player1select = false
        player1color = "green"
        document.getElementById("player1").style.backgroundColor = "green"
        redpickedby1 = false
        orangepickedby1 = false
        yellowpickedby1 = false
        greenpickedby1 = true
        bluepickedby1 = false
        purplepickedby1 = false
        pinkpickedby1 = false
        graypickedby1 = false
    }
    else if (player2select == true) {
        player2select = false
        player2color = "green"
        document.getElementById("player2").style.backgroundColor = "green"
        redpickedby2 = false
        orangepickedby2 = false
        yellowpickedby2 = false
        greenpickedby2 = true
        bluepickedby2 = false
        purplepickedby2 = false
        pinkpickedby2 = false
        graypickedby2 = false
    }
    else if (player3select == true) {
        player3select = false
        player3color = "green"
        document.getElementById("player3").style.backgroundColor = "green"
        redpickedby3 = false
        orangepickedby3 = false
        yellowpickedby3 = false
        greenpickedby3 = true
        bluepickedby3 = false
        purplepickedby3 = false
        pinkpickedby3 = false
        graypickedby3 = false
    }
    else if (player4select == true) {
        player4select = false
        player4color = "green"
        document.getElementById("player4").style.backgroundColor = "green"
        redpickedby4 = false
        orangepickedby4 = false
        yellowpickedby4 = false
        greenpickedby4 = true
        bluepickedby4 = false
        purplepickedby4 = false
        pinkpickedby4 = false
        graypickedby4 = false
    }
    document.getElementById("colors").style.display = "none"
    document.getElementById("players").style.display = "block"
}
blue.onclick = function () {
    if (playerAmount >= 2) document.getElementById("start").style.display = "block"
    else document.getElementById("start").style.display = "none"
    if (player1select == true) {
        player1select = false
        player1color = "blue"
        document.getElementById("player1").style.backgroundColor = "blue"
        redpickedby1 = false
        orangepickedby1 = false
        yellowpickedby1 = false
        greenpickedby1 = false
        bluepickedby1 = true
        purplepickedby1 = false
        pinkpickedby1 = false
        graypickedby1 = false
    }
    else if (player2select == true) {
        player2select = false
        player2color = "blue"
        document.getElementById("player2").style.backgroundColor = "blue"
        redpickedby2 = false
        orangepickedby2 = false
        yellowpickedby2 = false
        greenpickedby2 = false
        bluepickedby2 = true
        purplepickedby2 = false
        pinkpickedby2 = false
        graypickedby2 = false
    }
    else if (player3select == true) {
        player3select = false
        player3color = "blue"
        document.getElementById("player3").style.backgroundColor = "blue"
        redpickedby3 = false
        orangepickedby3 = false
        yellowpickedby3 = false
        greenpickedby3 = false
        bluepickedby3 = true
        purplepickedby3 = false
        pinkpickedby3 = false
        graypickedby3 = false
    }
    else if (player4select == true) {
        player4select = false
        player4color = "blue"
        document.getElementById("player4").style.backgroundColor = "blue"
        redpickedby4 = false
        orangepickedby4 = false
        yellowpickedby4 = false
        greenpickedby4 = false
        bluepickedby4 = true
        purplepickedby4 = false
        pinkpickedby4 = false
        graypickedby4 = false
    }
    document.getElementById("colors").style.display = "none"
    document.getElementById("players").style.display = "block"
}
purple.onclick = function () {
    if (playerAmount >= 2) document.getElementById("start").style.display = "block"
    else document.getElementById("start").style.display = "none"
    if (player1select == true) {
        player1select = false
        player1color = "purple"
        document.getElementById("player1").style.backgroundColor = "purple"
        redpickedby1 = false
        orangepickedby1 = false
        yellowpickedby1 = false
        greenpickedby1 = false
        bluepickedby1 = false
        purplepickedby1 = true
        pinkpickedby1 = false
        graypickedby1 = false
    }
    else if (player2select == true) {
        player2select = false
        player2color = "purple"
        document.getElementById("player2").style.backgroundColor = "purple"
        redpickedby2 = false
        orangepickedby2 = false
        yellowpickedby2 = false
        greenpickedby2 = false
        bluepickedby2 = false
        purplepickedby2 = true
        pinkpickedby2 = false
        graypickedby2 = false
    }
    else if (player3select == true) {
        player3select = false
        player3color = "purple"
        document.getElementById("player3").style.backgroundColor = "purple"
        redpickedby3 = false
        orangepickedby3 = false
        yellowpickedby3 = false
        greenpickedby3 = false
        bluepickedby3 = false
        purplepickedby3 = true
        pinkpickedby3 = false
        graypickedby3 = false
    }
    else if (player4select == true) {
        player4select = false
        player4color = "purple"
        document.getElementById("player4").style.backgroundColor = "purple"
        redpickedby4 = false
        orangepickedby4 = false
        yellowpickedby4 = false
        greenpickedby4 = false
        bluepickedby4 = false
        purplepickedby4 = true
        pinkpickedby4 = false
        graypickedby4 = false
    }
    document.getElementById("colors").style.display = "none"
    document.getElementById("players").style.display = "block"
}
pink.onclick = function () {
    if (playerAmount >= 2) document.getElementById("start").style.display = "block"
    else document.getElementById("start").style.display = "none"
    if (player1select == true) {
        player1select = false
        player1color = "pink"
        document.getElementById("player1").style.backgroundColor = "#ff00ff"
        redpickedby1 = false
        orangepickedby1 = false
        yellowpickedby1 = false
        greenpickedby1 = false
        bluepickedby1 = false
        purplepickedby1 = false
        pinkpickedby1 = true
        graypickedby1 = false
    }
    else if (player2select == true) {
        player2select = false
        player2color = "pink"
        document.getElementById("player2").style.backgroundColor = "#ff00ff"
        redpickedby2 = false
        orangepickedby2 = false
        yellowpickedby2 = false
        greenpickedby2 = false
        bluepickedby2 = false
        purplepickedby2 = false
        pinkpickedby2 = true
        graypickedby2 = false
    }
    else if (player3select == true) {
        player3select = false
        player3color = "pink"
        document.getElementById("player3").style.backgroundColor = "#ff00ff"
        redpickedby3 = false
        orangepickedby3 = false
        yellowpickedby3 = false
        greenpickedby3 = false
        bluepickedby3 = false
        purplepickedby3 = false
        pinkpickedby3 = true
        graypickedby3 = false
    }
    else if (player4select == true) {
        player4select = false
        player4color = "pink"
        document.getElementById("player4").style.backgroundColor = "#ff00ff"
        redpickedby4 = false
        orangepickedby4 = false
        yellowpickedby4 = false
        greenpickedby4 = false
        bluepickedby4 = false
        purplepickedby4 = false
        pinkpickedby4 = true
        graypickedby4 = false
    }
    document.getElementById("colors").style.display = "none"
    document.getElementById("players").style.display = "block"
}
gray.onclick = function () {
    if (playerAmount >= 2) document.getElementById("start").style.display = "block"
    else document.getElementById("start").style.display = "none"
    if (player1select == true) {
        player1select = false
        player1color = "gray"
        document.getElementById("player1").style.backgroundColor = "gray"
        redpickedby1 = false
        orangepickedby1 = false
        yellowpickedby1 = false
        greenpickedby1 = false
        bluepickedby1 = false
        purplepickedby1 = false
        pinkpickedby1 = false
        graypickedby1 = true
    }
    else if (player2select == true) {
        player2color = "gray"
        document.getElementById("player2").style.backgroundColor = "gray"
        redpickedby2 = false
        orangepickedby2 = false
        yellowpickedby2 = false
        greenpickedby2 = false
        bluepickedby2 = false
        purplepickedby2 = false
        pinkpickedby2 = false
        graypickedby2 = true
    }
    else if (player3select == true) {
        player3color = "gray"
        document.getElementById("player3").style.backgroundColor = "gray"
        redpickedby3 = false
        orangepickedby3 = false
        yellowpickedby3 = false
        greenpickedby3 = false
        bluepickedby3 = false
        purplepickedby3 = false
        pinkpickedby3 = false
        graypickedby3 = true
    }
    else if (player4select == true) {
        player4color = "gray"
        document.getElementById("player4").style.backgroundColor = "gray"
        redpickedby4 = false
        orangepickedby4 = false
        yellowpickedby4 = false
        greenpickedby4 = false
        bluepickedby4 = false
        purplepickedby4 = false
        pinkpickedby4 = false
        graypickedby4 = true
    }
    document.getElementById("colors").style.display = "none"
    document.getElementById("players").style.display = "block"
}
window.onload = function () {
    begin()
}
start = document.getElementById("start")
start.onclick = function () {
    hideBegin()
    var canvas, ctx, alive
    canvas = document.getElementById("gameCanvas")
    ctx = canvas.getContext("2d")
    canvas.width = 700
    canvas.height = 700
    alive = true
    var go, incomeTax, luxuryTax, freeParking, readingRailroad, pennsylvaniaRailroad, bAndORailroad, shortLine, electricCompany, waterWorks, mediteraneanAvenue, balticAvenue, orientalAvenue, vermontAvenue, connecticutAvenue, stCharlesPlace, statesAvenue, virginiaAvenue, stJamesPlace, tennesseeAvenue, newYorkAvenue, kentuckyAvenue, indianaAvenue, illinoisAvenue, atlanticAvenue, ventnorAvenue, marvinGardens, pacificAvenue, northCarolinaAvenue, pennsylvaniaAvenue, parkPlace, boardwalk
    var position1, position2, position3, position4, cash1, cash2, cash3, cash4, turn1, turn2, turn3, turn4, x1, y1, x2, y2, x3, y3, x4, y4, width, height, roll, yes, no, rollDone, turn1over, turn2over, turn3over, turn4over, rollAmount1, rollAmount2, doubleAmount, double, inJail1, inJail2, inJail3, inJail4, bankrupt1, bankrupt2, bankrupt3, bankrupt4, jailcard1, jailcard2, jailcard3, jailcard4, railroadsOwned1, railroadsOwned2, railroadsOwned3, railroadsOwned4, house1, house2, house3, house4, hotel1, hotel2, hotel3, hotel4
    cash1 = 2500
    cash2 = 2500
    cash3 = 2500
    cash4 = 2500
    turn1 = false
    turn2 = false
    turn3 = false
    turn4 = false
    railroadsOwned1 = 0
    railroadsOwned2 = 0
    railroadsOwned3 = 0
    railroadsOwned4 = 0
    if (player1enter) turn1 = true
    else if (player2enter) turn2 = true
    else if (player3enter) turn3 = true
    bankrupt1 = false
    bankrupt2 = false
    bankrupt3 = false
    bankrupt4 = false
    turn1over = false
    turn2over = false
    turn3over = false
    turn4over = false
    taxTurn1 = true
    taxTurn2 = true
    taxTurn3 = true
    taxTurn4 = true
    jailcard1 = 0
    jailcard2 = 0
    jailcard3 = 0
    jailcard4 = 0
    doubleAmount = 0
    double = false
    rollAmount1 = 0
    rollAmount2 = 0
    roll = false
    rollDone = false
    yes = false
    no = false
    window.addEventListener('keydown', function (e) {
        if (e.keyCode == 32) roll = true
        if (e.keyCode == 13 || e.keyCode == 89) yes = true
        if (e.keyCode == 78) no = true
    })
    window.addEventListener('keyup', function (e) {
        if (e.keyCode == 13 || e.keyCode == 89) yes = false
        if (e.keyCode == 78) no = false
    })
    go = {
        'place': 0,
        'amount': 200
    }
    mediteraneanAvenue = {
        'place': 1,
        'bought': false,
        'houseAmount': 0,
        'price': 60,
        'owner': 0
    }
    balticAvenue = {
        'place': 3,
        'bought': false,
        'houseAmount': 0,
        'price': 60,
        'owner': 0
    }
    incomeTax = {
        'place': 4,
        'taxAmount': 200
    }
    readingRailroad = {
        'place': 5,
        'bought': false,
        'price': 200,
        'owner': 0
    }
    orientalAvenue = {
        'place': 6,
        'bought': false,
        'houseAmount': 0,
        'price': 100,
        'owner': 0
    }
    vermontAvenue = {
        'place': 8,
        'bought': false,
        'houseAmount': 0,
        'price': 100,
        'owner': 0
    }
    connecticutAvenue = {
        'place': 9,
        'bought': false,
        'houseAmount': 0,
        'price': 120,
        'owner': 0
    }
    stCharlesPlace = {
        'place': 11,
        'bought': false,
        'houseAmount': 0,
        'price': 140,
        'owner': 0
    }
    electricCompany = {
        'place': 12,
        'bought': false,
        'price': 150,
        'owner': 0
    }
    statesAvenue = {
        'place': 13,
        'bought': false,
        'houseAmount': 0,
        'price': 140,
        'owner': 0
    }
    virginiaAvenue = {
        'place': 14,
        'bought': false,
        'houseAmount': 0,
        'price': 160,
        'owner': 0
    }
    pennsylvaniaRailroad = {
        'place': 15,
        'bought': false,
        'price': 200,
        'owner': 0
    }
    stJamesPlace = {
        'place': 16,
        'bought': false,
        'houseAmount': 0,
        'price': 180,
        'owner': 0
    }
    tennesseeAvenue = {
        'place': 18,
        'bought': false,
        'houseAmount': 0,
        'price': 180,
        'owner': 0
    }
    newYorkAvenue = {
        'place': 19,
        'bought': false,
        'houseAmount': 0,
        'price': 200,
        'owner': 0
    }
    freeParking = {
        'place': 20,
        'collectedTax': 0
    }
    kentuckyAvenue = {
        'place': 21,
        'bought': false,
        'houseAmount': 0,
        'price': 220,
        'owner': 0
    }
    indianaAvenue = {
        'place': 23,
        'bought': false,
        'houseAmount': 0,
        'price': 220,
        'owner': 0
    }
    illinoisAvenue = {
        'place': 24,
        'bought': false,
        'houseAmount': 0,
        'price': 240,
        'owner': 0
    }
    bAndORailroad = {
        'place': 25,
        'bought': false,
        'price': 200,
        'owner': 0
    }
    atlanticAvenue = {
        'place': 26,
        'bought': false,
        'houseAmount': 0,
        'price': 260,
        'owner': 0
    }
    ventnorAvenue = {
        'place': 27,
        'bought': false,
        'houseAmount': 0,
        'price': 260,
        'owner': 0
    }
    waterWorks = {
        'place': 28,
        'bought': false,
        'price': 150,
        'owner': 0
    }
    marvinGardens = {
        'place': 29,
        'bought': false,
        'houseAmount': 0,
        'price': 280,
        'owner': 0
    }
    pacificAvenue = {
        'place': 31,
        'bought': false,
        'houseAmount': 0,
        'price': 300,
        'owner': 0
    }
    northCarolinaAvenue = {
        'place': 32,
        'bought': false,
        'houseAmount': 0,
        'price': 300,
        'owner': 0
    }
    pennsylvaniaAvenue = {
        'place': 34,
        'bought': false,
        'houseAmount': 0,
        'price': 320,
        'owner': 0
    }
    shortLine = {
        'place': 35,
        'bought': false,
        'price': 200,
        'owner': 0
    }
    parkPlace = {
        'place': 37,
        'bought': false,
        'houseAmount': 0,
        'price': 350,
        'owner': 0
    }
    luxuryTax = {
        'place': 38,
        'taxAmount': 100
    }
    boardwalk = {
        'place': 39,
        'bought': false,
        'houseAmount': 0,
        'price': 400,
        'owner': 0
    }
    position1 = 0
    position2 = 0
    position3 = 0
    position4 = 0
    width = 20
    height = 20
    x1 = 0
    y1 = 0
    x2 = 0
    y2 = 0
    x3 = 0
    y3 = 0
    x4 = 0
    y4 = 0
    function bankruptCheck() {
        if (cash1 < 0) {
            bankrupt1 = true
            if (mediteraneanAvenue.owner == 1) {
                mediteraneanAvenue.owner = 0
                mediteraneanAvenue.bought = false
                mediteraneanAvenue.houseAmount = 0
            }
            if (balticAvenue.owner == 1) {
                balticAvenue.owner = 0
                balticAvenue.bought = false
                balticAvenue.houseAmount = 0
            }
            if (orientalAvenue.owner == 1) {
                orientalAvenue.owner = 0
                orientalAvenue.bought = false
                orientalAvenue.houseAmount = 0
            }
            if (vermontAvenue.owner == 1) {
                vermontAvenue.owner = 0
                vermontAvenue.bought = false
                vermontAvenue.houseAmount = 0
            }
            if (connecticutAvenue.owner == 1) {
                connecticutAvenue.owner = 0
                connecticutAvenue.bought = false
                connecticutAvenue.houseAmount = 0
            }
            if (stCharlesPlace.owner == 1) {
                stCharlesPlace.owner = 0
                stCharlesPlace.bought = false
                stCharlesPlace.houseAmount = 0
            }
            if (statesAvenue.owner == 1) {
                statesAvenue.owner = 0
                statesAvenue.bought = false
                statesAvenue.houseAmount = 0
            }
            if (virginiaAvenue.owner == 1) {
                virginiaAvenue.owner = 0
                virginiaAvenue.bought = false
                virginiaAvenue.houseAmount = 0
            }
            if (stJamesPlace.owner == 1) {
                stJamesPlace.owner = 0
                stJamesPlace.bought = false
                stJamesPlace.houseAmount = 0
            }
            if (tennesseeAvenue.owner == 1) {
                tennesseeAvenue.owner = 0
                tennesseeAvenue.bought = false
                tennesseeAvenue.houseAmount = 0
            }
            if (newYorkAvenue.owner == 1) {
                newYorkAvenue.owner = 0
                newYorkAvenue.bought = false
                newYorkAvenue.houseAmount = 0
            }
            if (kentuckyAvenue.owner == 1) {
                kentuckyAvenue.owner = 0
                kentuckyAvenue.bought = false
                kentuckyAvenue.houseAmount = 0
            }
            if (indianaAvenue.owner == 1) {
                indianaAvenue.owner = 0
                indianaAvenue.bought = false
                indianaAvenue.houseAmount = 0
            }
            if (illinoisAvenue.owner == 1) {
                illinoisAvenue.owner = 0
                illinoisAvenue.bought = false
                illinoisAvenue.houseAmount = 0
            }
            if (atlanticAvenue.owner == 1) {
                atlanticAvenue.owner = 0
                atlanticAvenue.bought = false
                atlanticAvenue.houseAmount = 0
            }
            if (ventnorAvenue.owner == 1) {
                ventnorAvenue.owner = 0
                ventnorAvenue.bought = false
                ventnorAvenue.houseAmount = 0
            }
            if (marvinGardens.owner == 1) {
                marvinGardens.owner = 0
                marvinGardens.bought = false
                marvinGardens.houseAmount = 0
            }
            if (pacificAvenue.owner == 1) {
                pacificAvenue.owner = 0
                pacificAvenue.bought = false
                pacificAvenue.houseAmount = 0
            }
            if (northCarolinaAvenue.owner == 1) {
                northCarolinaAvenue.owner = 0
                northCarolinaAvenue.bought = false
                northCarolinaAvenue.houseAmount = 0
            }
            if (pennsylvaniaAvenue.owner == 1) {
                pennsylvaniaAvenue.owner = 0
                pennsylvaniaAvenue.bought = false
                pennsylvaniaAvenue.houseAmount = 0
            }
            if (parkPlace.owner == 1) {
                parkPlace.owner = 0
                parkPlace.bought = false
                parkPlace.houseAmount = 0
            }
            if (boardwalk.owner == 1) {
                boardwalk.owner = 0
                boardwalk.bought = false
                boardwalk.houseAmount = 0
            }
            if (readingRailroad.owner == 1) {
                readingRailroad.owner = 0
                readingRailroad.bought = false
            }
            if (pennsylvaniaRailroad.owner == 1) {
                pennsylvaniaRailroad.owner = 0
                pennsylvaniaRailroad.bought = false
            }
            if (bAndORailroad.owner == 1) {
                bAndORailroad.owner = 0
                bAndORailroad.bought = false
            }
            if (shortLine.owner == 1) {
                shortLine.owner = 0
                shortLine.bought = false
            }
        }
        if (cash2 < 0) {
            bankrupt2 = true
            if (mediteraneanAvenue.owner == 2) {
                mediteraneanAvenue.owner = 0
                mediteraneanAvenue.bought = false
                mediteraneanAvenue.houseAmount = 0
            }
            if (balticAvenue.owner == 2) {
                balticAvenue.owner = 0
                balticAvenue.bought = false
                balticAvenue.houseAmount = 0
            }
            if (orientalAvenue.owner == 2) {
                orientalAvenue.owner = 0
                orientalAvenue.bought = false
                orientalAvenue.houseAmount = 0
            }
            if (vermontAvenue.owner == 2) {
                vermontAvenue.owner = 0
                vermontAvenue.bought = false
                vermontAvenue.houseAmount = 0
            }
            if (connecticutAvenue.owner == 2) {
                connecticutAvenue.owner = 0
                connecticutAvenue.bought = false
                connecticutAvenue.houseAmount = 0
            }
            if (stCharlesPlace.owner == 2) {
                stCharlesPlace.owner = 0
                stCharlesPlace.bought = false
                stCharlesPlace.houseAmount = 0
            }
            if (statesAvenue.owner == 2) {
                statesAvenue.owner = 0
                statesAvenue.bought = false
                statesAvenue.houseAmount = 0
            }
            if (virginiaAvenue.owner == 2) {
                virginiaAvenue.owner = 0
                virginiaAvenue.bought = false
                virginiaAvenue.houseAmount = 0
            }
            if (stJamesPlace.owner == 2) {
                stJamesPlace.owner = 0
                stJamesPlace.bought = false
                stJamesPlace.houseAmount = 0
            }
            if (tennesseeAvenue.owner == 2) {
                tennesseeAvenue.owner = 0
                tennesseeAvenue.bought = false
                tennesseeAvenue.houseAmount = 0
            }
            if (newYorkAvenue.owner == 2) {
                newYorkAvenue.owner = 0
                newYorkAvenue.bought = false
                newYorkAvenue.houseAmount = 0
            }
            if (kentuckyAvenue.owner == 2) {
                kentuckyAvenue.owner = 0
                kentuckyAvenue.bought = false
                kentuckyAvenue.houseAmount = 0
            }
            if (indianaAvenue.owner == 2) {
                indianaAvenue.owner = 0
                indianaAvenue.bought = false
                indianaAvenue.houseAmount = 0
            }
            if (illinoisAvenue.owner == 2) {
                illinoisAvenue.owner = 0
                illinoisAvenue.bought = false
                illinoisAvenue.houseAmount = 0
            }
            if (atlanticAvenue.owner == 2) {
                atlanticAvenue.owner = 0
                atlanticAvenue.bought = false
                atlanticAvenue.houseAmount = 0
            }
            if (ventnorAvenue.owner == 2) {
                ventnorAvenue.owner = 0
                ventnorAvenue.bought = false
                ventnorAvenue.houseAmount = 0
            }
            if (marvinGardens.owner == 2) {
                marvinGardens.owner = 0
                marvinGardens.bought = false
                marvinGardens.houseAmount = 0
            }
            if (pacificAvenue.owner == 2) {
                pacificAvenue.owner = 0
                pacificAvenue.bought = false
                pacificAvenue.houseAmount = 0
            }
            if (northCarolinaAvenue.owner == 2) {
                northCarolinaAvenue.owner = 0
                northCarolinaAvenue.bought = false
                northCarolinaAvenue.houseAmount = 0
            }
            if (pennsylvaniaAvenue.owner == 2) {
                pennsylvaniaAvenue.owner = 0
                pennsylvaniaAvenue.bought = false
                pennsylvaniaAvenue.houseAmount = 0
            }
            if (parkPlace.owner == 2) {
                parkPlace.owner = 0
                parkPlace.bought = false
                parkPlace.houseAmount = 0
            }
            if (boardwalk.owner == 2) {
                boardwalk.owner = 0
                boardwalk.bought = false
                boardwalk.houseAmount = 0
            }
            if (readingRailroad.owner == 2) {
                readingRailroad.owner = 0
                readingRailroad.bought = false
            }
            if (pennsylvaniaRailroad.owner == 2) {
                pennsylvaniaRailroad.owner = 0
                pennsylvaniaRailroad.bought = false
            }
            if (bAndORailroad.owner == 2) {
                bAndORailroad.owner = 0
                bAndORailroad.bought = false
            }
            if (shortLine.owner == 2) {
                shortLine.owner = 0
                shortLine.bought = false
            }
        }
        if (cash3 < 0) {
            bankrupt3 = true
            if (mediteraneanAvenue.owner == 3) {
                mediteraneanAvenue.owner = 0
                mediteraneanAvenue.bought = false
                mediteraneanAvenue.houseAmount = 0
            }
            if (balticAvenue.owner == 3) {
                balticAvenue.owner = 0
                balticAvenue.bought = false
                balticAvenue.houseAmount = 0
            }
            if (orientalAvenue.owner == 3) {
                orientalAvenue.owner = 0
                orientalAvenue.bought = false
                orientalAvenue.houseAmount = 0
            }
            if (vermontAvenue.owner == 3) {
                vermontAvenue.owner = 0
                vermontAvenue.bought = false
                vermontAvenue.houseAmount = 0
            }
            if (connecticutAvenue.owner == 3) {
                connecticutAvenue.owner = 0
                connecticutAvenue.bought = false
                connecticutAvenue.houseAmount = 0
            }
            if (stCharlesPlace.owner == 3) {
                stCharlesPlace.owner = 0
                stCharlesPlace.bought = false
                stCharlesPlace.houseAmount = 0
            }
            if (statesAvenue.owner == 3) {
                statesAvenue.owner = 0
                statesAvenue.bought = false
                statesAvenue.houseAmount = 0
            }
            if (virginiaAvenue.owner == 3) {
                virginiaAvenue.owner = 0
                virginiaAvenue.bought = false
                virginiaAvenue.houseAmount = 0
            }
            if (stJamesPlace.owner == 3) {
                stJamesPlace.owner = 0
                stJamesPlace.bought = false
                stJamesPlace.houseAmount = 0
            }
            if (tennesseeAvenue.owner == 3) {
                tennesseeAvenue.owner = 0
                tennesseeAvenue.bought = false
                tennesseeAvenue.houseAmount = 0
            }
            if (newYorkAvenue.owner == 3) {
                newYorkAvenue.owner = 0
                newYorkAvenue.bought = false
                newYorkAvenue.houseAmount = 0
            }
            if (kentuckyAvenue.owner == 3) {
                kentuckyAvenue.owner = 0
                kentuckyAvenue.bought = false
                kentuckyAvenue.houseAmount = 0
            }
            if (indianaAvenue.owner == 3) {
                indianaAvenue.owner = 0
                indianaAvenue.bought = false
                indianaAvenue.houseAmount = 0
            }
            if (illinoisAvenue.owner == 1) {
                illinoisAvenue.owner = 0
                illinoisAvenue.bought = false
                illinoisAvenue.houseAmount = 0
            }
            if (atlanticAvenue.owner == 3) {
                atlanticAvenue.owner = 0
                atlanticAvenue.bought = false
                atlanticAvenue.houseAmount = 0
            }
            if (ventnorAvenue.owner == 3) {
                ventnorAvenue.owner = 0
                ventnorAvenue.bought = false
                ventnorAvenue.houseAmount = 0
            }
            if (marvinGardens.owner == 3) {
                marvinGardens.owner = 0
                marvinGardens.bought = false
                marvinGardens.houseAmount = 0
            }
            if (pacificAvenue.owner == 3) {
                pacificAvenue.owner = 0
                pacificAvenue.bought = false
                pacificAvenue.houseAmount = 0
            }
            if (northCarolinaAvenue.owner == 3) {
                northCarolinaAvenue.owner = 0
                northCarolinaAvenue.bought = false
                northCarolinaAvenue.houseAmount = 0
            }
            if (pennsylvaniaAvenue.owner == 3) {
                pennsylvaniaAvenue.owner = 0
                pennsylvaniaAvenue.bought = false
                pennsylvaniaAvenue.houseAmount = 0
            }
            if (parkPlace.owner == 3) {
                parkPlace.owner = 0
                parkPlace.bought = false
                parkPlace.houseAmount = 0
            }
            if (boardwalk.owner == 3) {
                boardwalk.owner = 0
                boardwalk.bought = false
                boardwalk.houseAmount = 0
            }
            if (readingRailroad.owner == 3) {
                readingRailroad.owner = 0
                readingRailroad.bought = false
            }
            if (pennsylvaniaRailroad.owner == 3) {
                pennsylvaniaRailroad.owner = 0
                pennsylvaniaRailroad.bought = false
            }
            if (bAndORailroad.owner == 3) {
                bAndORailroad.owner = 0
                bAndORailroad.bought = false
            }
            if (shortLine.owner == 3) {
                shortLine.owner = 0
                shortLine.bought = false
            }
        }
        if (cash4 < 0) {
            bankrupt4 = true
            if (mediteraneanAvenue.owner == 4) {
                mediteraneanAvenue.owner = 0
                mediteraneanAvenue.bought = false
                mediteraneanAvenue.houseAmount = 0
            }
            if (balticAvenue.owner == 4) {
                balticAvenue.owner = 0
                balticAvenue.bought = false
                balticAvenue.houseAmount = 0
            }
            if (orientalAvenue.owner == 4) {
                orientalAvenue.owner = 0
                orientalAvenue.bought = false
                orientalAvenue.houseAmount = 0
            }
            if (vermontAvenue.owner == 4) {
                vermontAvenue.owner = 0
                vermontAvenue.bought = false
                vermontAvenue.houseAmount = 0
            }
            if (connecticutAvenue.owner == 4) {
                connecticutAvenue.owner = 0
                connecticutAvenue.bought = false
                connecticutAvenue.houseAmount = 0
            }
            if (stCharlesPlace.owner == 4) {
                stCharlesPlace.owner = 0
                stCharlesPlace.bought = false
                stCharlesPlace.houseAmount = 0
            }
            if (statesAvenue.owner == 4) {
                statesAvenue.owner = 0
                statesAvenue.bought = false
                statesAvenue.houseAmount = 0
            }
            if (virginiaAvenue.owner == 4) {
                virginiaAvenue.owner = 0
                virginiaAvenue.bought = false
                virginiaAvenue.houseAmount = 0
            }
            if (stJamesPlace.owner == 4) {
                stJamesPlace.owner = 0
                stJamesPlace.bought = false
                stJamesPlace.houseAmount = 0
            }
            if (tennesseeAvenue.owner == 4) {
                tennesseeAvenue.owner = 0
                tennesseeAvenue.bought = false
                tennesseeAvenue.houseAmount = 0
            }
            if (newYorkAvenue.owner == 4) {
                newYorkAvenue.owner = 0
                newYorkAvenue.bought = false
                newYorkAvenue.houseAmount = 0
            }
            if (kentuckyAvenue.owner == 4) {
                kentuckyAvenue.owner = 0
                kentuckyAvenue.bought = false
                kentuckyAvenue.houseAmount = 0
            }
            if (indianaAvenue.owner == 4) {
                indianaAvenue.owner = 0
                indianaAvenue.bought = false
                indianaAvenue.houseAmount = 0
            }
            if (illinoisAvenue.owner == 4) {
                illinoisAvenue.owner = 0
                illinoisAvenue.bought = false
                illinoisAvenue.houseAmount = 0
            }
            if (atlanticAvenue.owner == 4) {
                atlanticAvenue.owner = 0
                atlanticAvenue.bought = false
                atlanticAvenue.houseAmount = 0
            }
            if (ventnorAvenue.owner == 4) {
                ventnorAvenue.owner = 0
                ventnorAvenue.bought = false
                ventnorAvenue.houseAmount = 0
            }
            if (marvinGardens.owner == 4) {
                marvinGardens.owner = 0
                marvinGardens.bought = false
                marvinGardens.houseAmount = 0
            }
            if (pacificAvenue.owner == 4) {
                pacificAvenue.owner = 0
                pacificAvenue.bought = false
                pacificAvenue.houseAmount = 0
            }
            if (northCarolinaAvenue.owner == 4) {
                northCarolinaAvenue.owner = 0
                northCarolinaAvenue.bought = false
                northCarolinaAvenue.houseAmount = 0
            }
            if (pennsylvaniaAvenue.owner == 4) {
                pennsylvaniaAvenue.owner = 0
                pennsylvaniaAvenue.bought = false
                pennsylvaniaAvenue.houseAmount = 0
            }
            if (parkPlace.owner == 4) {
                parkPlace.owner = 0
                parkPlace.bought = false
                parkPlace.houseAmount = 0
            }
            if (boardwalk.owner == 4) {
                boardwalk.owner = 0
                boardwalk.bought = false
                boardwalk.houseAmount = 0
            }
            if (readingRailroad.owner == 4) {
                readingRailroad.owner = 0
                readingRailroad.bought = false
            }
            if (pennsylvaniaRailroad.owner == 4) {
                pennsylvaniaRailroad.owner = 0
                pennsylvaniaRailroad.bought = false
            }
            if (bAndORailroad.owner == 4) {
                bAndORailroad.owner = 0
                bAndORailroad.bought = false
            }
            if (shortLine.owner == 4) {
                shortLine.owner = 0
                shortLine.bought = false
            }
        }
    }
    function houseCheck() {
        house1 = 0
        hotel1 = 0
        house2 = 0
        hotel2 = 0
        house3 = 0
        hotel3 = 0
        house4 = 0
        hotel4 = 0
        if (mediteraneanAvenue.owner == 1) {
            if (mediteraneanAvenue.houseAmount == 1) house1++
            else if (mediteraneanAvenue.houseAmount == 2) house1 += 2
            else if (mediteraneanAvenue.houseAmount == 3) house1 += 3
            else if (mediteraneanAvenue.houseAmount == 4) house1 += 4
            else if (mediteraneanAvenue.houseAmount == 5) hotel1++
        }
        else if (mediteraneanAvenue.owner == 2) {
            if (mediteraneanAvenue.houseAmount == 1) house2++
            else if (mediteraneanAvenue.houseAmount == 2) house2 += 2
            else if (mediteraneanAvenue.houseAmount == 3) house2 += 3
            else if (mediteraneanAvenue.houseAmount == 4) house2 += 4
            else if (mediteraneanAvenue.houseAmount == 5) hotel2++
        }
        else if (mediteraneanAvenue.owner == 3) {
            if (mediteraneanAvenue.houseAmount == 1) house3++
            else if (mediteraneanAvenue.houseAmount == 2) house3 += 2
            else if (mediteraneanAvenue.houseAmount == 3) house3 += 3
            else if (mediteraneanAvenue.houseAmount == 4) house3 += 4
            else if (mediteraneanAvenue.houseAmount == 4) hotel3++
        }
        else if (mediteraneanAvenue.owner == 4) {
            if (mediteraneanAvenue.houseAmount == 1) house4++
            else if (mediteraneanAvenue.houseAmount == 2) house4 += 2
            else if (mediteraneanAvenue.houseAmount == 3) house4 += 3
            else if (mediteraneanAvenue.houseAmount == 4) house4 += 4
            else if (mediteraneanAvenue.houseAmount == 5) hotel4++
        }
        if (balticAvenue.owner == 1) {
            if (balticAvenue.houseAmount == 1) house1++
            else if (balticAvenue.houseAmount == 2) house1 += 2
            else if (balticAvenue.houseAmount == 3) house1 += 3
            else if (balticAvenue.houseAmount == 4) house1 += 4
            else if (balticAvenue.houseAmount == 5) hotel1++
        }
        else if (balticAvenue.owner == 2) {
            if (balticAvenue.houseAmount == 1) house2++
            else if (balticAvenue.houseAmount == 2) house2 += 2
            else if (balticAvenue.houseAmount == 3) house2 += 3
            else if (balticAvenue.houseAmount == 4) house2 += 4
            else if (balticAvenue.houseAmount == 5) hotel2++
        }
        else if (balticAvenue.owner == 3) {
            if (balticAvenue.houseAmount == 1) house3++
            else if (balticAvenue.houseAmount == 2) house3 += 2
            else if (balticAvenue.houseAmount == 3) house3 += 3
            else if (balticAvenue.houseAmount == 4) house3 += 4
            else if (balticAvenue.houseAmount == 5) hotel3++
        }
        else if (balticAvenue.owner == 4) {
            if (balticAvenue.houseAmount == 1) house4++
            else if (balticAvenue.houseAmount == 2) house4 += 2
            else if (balticAvenue.houseAmount == 3) house4 += 3
            else if (balticAvenue.houseAmount == 4) house4 += 4
            else if (balticAvenue.houseAmount == 5) hotel4++
        }
        if (orientalAvenue.owner == 1) {
            if (orientalAvenue.houseAmount == 1) house1++
            else if (orientalAvenue.houseAmount == 2) house1 += 2
            else if (orientalAvenue.houseAmount == 3) house1 += 3
            else if (orientalAvenue.houseAmount == 4) house1 += 4
            else if (orientalAvenue.houseAmount == 5) hotel1++
        }
        else if (orientalAvenue.owner == 2) {
            if (orientalAvenue.houseAmount == 1) house2++
            else if (orientalAvenue.houseAmount == 2) house2 += 2
            else if (orientalAvenue.houseAmount == 3) house2 += 3
            else if (orientalAvenue.houseAmount == 4) house2 += 4
            else if (orientalAvenue.houseAmount == 5) hotel2++
        }
        else if (orientalAvenue.owner == 3) {
            if (orientalAvenue.houseAmount == 1) house3++
            else if (orientalAvenue.houseAmount == 2) house3 += 2
            else if (orientalAvenue.houseAmount == 3) house3 += 3
            else if (orientalAvenue.houseAmount == 4) house3 += 4
            else if (orientalAvenue.houseAmount == 5) hotel3++
        }
        else if (orientalAvenue.owner == 4) {
            if (orientalAvenue.houseAmount == 1) house4++
            else if (orientalAvenue.houseAmount == 2) house4 += 2
            else if (orientalAvenue.houseAmount == 3) house4 += 3
            else if (orientalAvenue.houseAmount == 4) house4 += 4
            else if (orientalAvenue.houseAmount == 5) hotel4++
        }
        if (vermontAvenue.owner == 1) {
            if (vermontAvenue.houseAmount == 1) house1++
            else if (vermontAvenue.houseAmount == 2) house1 += 2
            else if (vermontAvenue.houseAmount == 3) house1 += 3
            else if (vermontAvenue.houseAmount == 4) house1 += 4
            else if (vermontAvenue.houseAmount == 5) hotel1++
        }
        else if (vermontAvenue.owner == 2) {
            if (vermontAvenue.houseAmount == 1) house2++
            else if (vermontAvenue.houseAmount == 2) house2 += 2
            else if (vermontAvenue.houseAmount == 3) house2 += 3
            else if (vermontAvenue.houseAmount == 4) house2 += 4
            else if (vermontAvenue.houseAmount == 5) hotel2++
        }
        else if (vermontAvenue.owner == 3) {
            if (vermontAvenue.houseAmount == 1) house3++
            else if (vermontAvenue.houseAmount == 2) house3 += 2
            else if (vermontAvenue.houseAmount == 3) house3 += 3
            else if (vermontAvenue.houseAmount == 4) house3 += 4
            else if (vermontAvenue.houseAmount == 5) hotel3++
        }
        else if (vermontAvenue.owner == 4) {
            if (vermontAvenue.houseAmount == 1) house4++
            else if (vermontAvenue.houseAmount == 2) house4 += 2
            else if (vermontAvenue.houseAmount == 3) house4 += 3
            else if (vermontAvenue.houseAmount == 4) house4 += 4
            else if (vermontAvenue.houseAmount == 5) hotel4++
        }
        if (connecticutAvenue.owner == 1) {
            if (connecticutAvenue.houseAmount == 1) house1++
            else if (connecticutAvenue.houseAmount == 2) house1 += 2
            else if (connecticutAvenue.houseAmount == 3) house1 += 3
            else if (connecticutAvenue.houseAmount == 4) house1 += 4
            else if (connecticutAvenue.houseAmount == 5) hotel1++
        }
        else if (connecticutAvenue.owner == 2) {
            if (connecticutAvenue.houseAmount == 1) house2++
            else if (connecticutAvenue.houseAmount == 2) house2 += 2
            else if (connecticutAvenue.houseAmount == 3) house2 += 3
            else if (connecticutAvenue.houseAmount == 4) house2 += 4
            else if (connecticutAvenue.houseAmount == 5) hotel2++
        }
        else if (connecticutAvenue.owner == 3) {
            if (connecticutAvenue.houseAmount == 1) house3++
            else if (connecticutAvenue.houseAmount == 2) house3 += 2
            else if (connecticutAvenue.houseAmount == 3) house3 += 3
            else if (connecticutAvenue.houseAmount == 4) house3 += 4
            else if (connecticutAvenue.houseAmount == 5) hotel3++
        }
        else if (connecticutAvenue.owner == 4) {
            if (connecticutAvenue.houseAmount == 1) house4++
            else if (connecticutAvenue.houseAmount == 2) house4 += 2
            else if (connecticutAvenue.houseAmount == 3) house4 += 3
            else if (connecticutAvenue.houseAmount == 4) house4 += 4
            else if (connecticutAvenue.houseAmount == 5) hotel4++
        }
        if (stCharlesPlace.owner == 1) {
            if (stCharlesPlace.houseAmount == 1) house1++
            else if (stCharlesPlace.houseAmount == 2) house1 += 2
            else if (stCharlesPlace.houseAmount == 3) house1 += 3
            else if (stCharlesPlace.houseAmount == 4) house1 += 4
            else if (stCharlesPlace.houseAmount == 5) hotel1++
        }
        else if (stCharlesPlace.owner == 2) {
            if (stCharlesPlace.houseAmount == 1) house2++
            else if (stCharlesPlace.houseAmount == 2) house2 += 2
            else if (stCharlesPlace.houseAmount == 3) house2 += 3
            else if (stCharlesPlace.houseAmount == 4) house2 += 4
            else if (stCharlesPlace.houseAmount == 5) hotel2++
        }
        else if (stCharlesPlace.owner == 3) {
            if (stCharlesPlace.houseAmount == 1) house3++
            else if (stCharlesPlace.houseAmount == 2) house3 += 2
            else if (stCharlesPlace.houseAmount == 3) house3 += 3
            else if (stCharlesPlace.houseAmount == 4) house3 += 4
            else if (stCharlesPlace.houseAmount == 5) hotel3++
        }
        else if (stCharlesPlace.owner == 4) {
            if (stCharlesPlace.houseAmount == 1) house4++
            else if (stCharlesPlace.houseAmount == 2) house4 += 2
            else if (stCharlesPlace.houseAmount == 3) house4 += 3
            else if (stCharlesPlace.houseAmount == 4) house4 += 4
            else if (stCharlesPlace.houseAmount == 5) hotel4++
        }
        if (statesAvenue.owner == 1) {
            if (statesAvenue.houseAmount == 1) house1++
            else if (statesAvenue.houseAmount == 2) house1 += 2
            else if (statesAvenue.houseAmount == 3) house1 += 3
            else if (statesAvenue.houseAmount == 4) house1 += 4
            else if (statesAvenue.houseAmount == 5) hotel1++
        }
        else if (statesAvenue.owner == 2) {
            if (statesAvenue.houseAmount == 1) house2++
            else if (statesAvenue.houseAmount == 2) house2 += 2
            else if (statesAvenue.houseAmount == 3) house2 += 3
            else if (statesAvenue.houseAmount == 4) house2 += 4
            else if (statesAvenue.houseAmount == 5) hotel2++
        }
        else if (statesAvenue.owner == 3) {
            if (statesAvenue.houseAmount == 1) house3++
            else if (statesAvenue.houseAmount == 2) house3 += 2
            else if (statesAvenue.houseAmount == 3) house3 += 3
            else if (statesAvenue.houseAmount == 4) house3 += 4
            else if (statesAvenue.houseAmount == 5) hotel3++
        }
        else if (statesAvenue.owner == 4) {
            if (statesAvenue.houseAmount == 1) house4++
            else if (statesAvenue.houseAmount == 2) house4 += 2
            else if (statesAvenue.houseAmount == 3) house4 += 3
            else if (statesAvenue.houseAmount == 4) house4 += 4
            else if (statesAvenue.houseAmount == 5) hotel4++
        }
        if (newYorkAvenue.owner == 1) {
            if (newYorkAvenue.houseAmount == 1) house1++
            else if (newYorkAvenue.houseAmount == 2) house1 += 2
            else if (newYorkAvenue.houseAmount == 3) house1 += 3
            else if (newYorkAvenue.houseAmount == 4) house1 += 4
            else if (newYorkAvenue.houseAmount == 5) hotel1++
        }
        else if (newYorkAvenue.owner == 2) {
            if (newYorkAvenue.houseAmount == 1) house2++
            else if (newYorkAvenue.houseAmount == 2) house2 += 2
            else if (newYorkAvenue.houseAmount == 3) house2 += 3
            else if (newYorkAvenue.houseAmount == 4) house2 += 4
            else if (newYorkAvenue.houseAmount == 5) hotel2++
        }
        else if (newYorkAvenue.owner == 3) {
            if (newYorkAvenue.houseAmount == 1) house3++
            else if (newYorkAvenue.houseAmount == 2) house3 += 2
            else if (newYorkAvenue.houseAmount == 3) house3 += 3
            else if (newYorkAvenue.houseAmount == 4) house3 += 4
            else if (newYorkAvenue.houseAmount == 5) hotel3++
        }
        else if (newYorkAvenue.owner == 4) {
            if (newYorkAvenue.houseAmount == 1) house4++
            else if (newYorkAvenue.houseAmount == 2) house4 += 2
            else if (newYorkAvenue.houseAmount == 3) house4 += 3
            else if (newYorkAvenue.houseAmount == 4) house4 += 4
            else if (newYorkAvenue.houseAmount == 5) hotel4++
        }
        if (tennesseeAvenue.owner == 1) {
            if (tennesseeAvenue.houseAmount == 1) house1++
            else if (tennesseeAvenue.houseAmount == 2) house1 += 2
            else if (tennesseeAvenue.houseAmount == 3) house1 += 3
            else if (tennesseeAvenue.houseAmount == 4) house1 += 4
            else if (tennesseeAvenue.houseAmount == 5) hotel1++
        }
        else if (tennesseeAvenue.owner == 2) {
            if (tennesseeAvenue.houseAmount == 1) house2++
            else if (tennesseeAvenue.houseAmount == 2) house2 += 2
            else if (tennesseeAvenue.houseAmount == 3) house2 += 3
            else if (tennesseeAvenue.houseAmount == 4) house2 += 4
            else if (tennesseeAvenue.houseAmount == 5) hotel2++
        }
        else if (tennesseeAvenue.owner == 3) {
            if (tennesseeAvenue.houseAmount == 1) house3++
            else if (tennesseeAvenue.houseAmount == 2) house3 += 2
            else if (tennesseeAvenue.houseAmount == 3) house3 += 3
            else if (tennesseeAvenue.houseAmount == 4) house3 += 4
            else if (tennesseeAvenue.houseAmount == 5) hotel3++
        }
        else if (tennesseeAvenue.owner == 4) {
            if (tennesseeAvenue.houseAmount == 1) house4++
            else if (tennesseeAvenue.houseAmount == 2) house4 += 2
            else if (tennesseeAvenue.houseAmount == 3) house4 += 3
            else if (tennesseeAvenue.houseAmount == 4) house4 += 4
            else if (tennesseeAvenue.houseAmount == 5) hotel4++
        }
        if (kentuckyAvenue.owner == 1) {
            if (kentuckyAvenue.houseAmount == 1) house1++
            else if (kentuckyAvenue.houseAmount == 2) house1 += 2
            else if (kentuckyAvenue.houseAmount == 3) house1 += 3
            else if (kentuckyAvenue.houseAmount == 4) house1 += 4
            else if (kentuckyAvenue.houseAmount == 5) hotel1++
        }
        else if (kentuckyAvenue.owner == 2) {
            if (kentuckyAvenue.houseAmount == 1) house2++
            else if (kentuckyAvenue.houseAmount == 2) house2 += 2
            else if (kentuckyAvenue.houseAmount == 3) house2 += 3
            else if (kentuckyAvenue.houseAmount == 4) house2 += 4
            else if (kentuckyAvenue.houseAmount == 5) hotel2++
        }
        else if (kentuckyAvenue.owner == 3) {
            if (kentuckyAvenue.houseAmount == 1) house3++
            else if (kentuckyAvenue.houseAmount == 2) house3 += 2
            else if (kentuckyAvenue.houseAmount == 3) house3 += 3
            else if (kentuckyAvenue.houseAmount == 4) house3 += 4
            else if (kentuckyAvenue.houseAmount == 5) hotel3++
        }
        else if (kentuckyAvenue.owner == 4) {
            if (kentuckyAvenue.houseAmount == 1) house4++
            else if (kentuckyAvenue.houseAmount == 2) house4 += 2
            else if (kentuckyAvenue.houseAmount == 3) house4 += 3
            else if (kentuckyAvenue.houseAmount == 4) house4 += 4
            else if (kentuckyAvenue.houseAmount == 5) hotel4++
        }
        if (indianaAvenue.owner == 1) {
            if (indianaAvenue.houseAmount == 1) house1++
            else if (indianaAvenue.houseAmount == 2) house1 += 2
            else if (indianaAvenue.houseAmount == 3) house1 += 3
            else if (indianaAvenue.houseAmount == 4) house1 += 4
            else if (indianaAvenue.houseAmount == 5) hotel1++
        }
        else if (indianaAvenue.owner == 2) {
            if (indianaAvenue.houseAmount == 1) house2++
            else if (indianaAvenue.houseAmount == 2) house2 += 2
            else if (indianaAvenue.houseAmount == 3) house2 += 3
            else if (indianaAvenue.houseAmount == 4) house2 += 4
            else if (indianaAvenue.houseAmount == 5) hotel2++
        }
        else if (indianaAvenue.owner == 3) {
            if (indianaAvenue.houseAmount == 1) house3++
            else if (indianaAvenue.houseAmount == 2) house3 += 2
            else if (indianaAvenue.houseAmount == 3) house3 += 3
            else if (indianaAvenue.houseAmount == 4) house3 += 4
            else if (indianaAvenue.houseAmount == 5) hotel3++
        }
        else if (indianaAvenue.owner == 4) {
            if (indianaAvenue.houseAmount == 1) house4++
            else if (indianaAvenue.houseAmount == 2) house4 += 2
            else if (indianaAvenue.houseAmount == 3) house4 += 3
            else if (indianaAvenue.houseAmount == 4) house4 += 4
            else if (indianaAvenue.houseAmount == 5) hotel4++
        }
        if (illinoisAvenue.owner == 1) {
            if (illinoisAvenue.houseAmount == 1) house1++
            else if (illinoisAvenue.houseAmount == 2) house1 += 2
            else if (illinoisAvenue.houseAmount == 3) house1 += 3
            else if (illinoisAvenue.houseAmount == 4) house1 += 4
            else if (illinoisAvenue.houseAmount == 5) hotel1++
        }
        else if (illinoisAvenue.owner == 2) {
            if (illinoisAvenue.houseAmount == 1) house2++
            else if (illinoisAvenue.houseAmount == 2) house2 += 2
            else if (illinoisAvenue.houseAmount == 3) house2 += 3
            else if (illinoisAvenue.houseAmount == 4) house2 += 4
            else if (illinoisAvenue.houseAmount == 5) hotel2++
        }
        else if (illinoisAvenue.owner == 3) {
            if (illinoisAvenue.houseAmount == 1) house3++
            else if (illinoisAvenue.houseAmount == 2) house3 += 2
            else if (illinoisAvenue.houseAmount == 3) house3 += 3
            else if (illinoisAvenue.houseAmount == 4) house3 += 4
            else if (illinoisAvenue.houseAmount == 5) hotel3++
        }
        else if (illinoisAvenue.owner == 4) {
            if (illinoisAvenue.houseAmount == 1) house4++
            else if (illinoisAvenue.houseAmount == 2) house4 += 2
            else if (illinoisAvenue.houseAmount == 3) house4 += 3
            else if (illinoisAvenue.houseAmount == 4) house4 += 4
            else if (illinoisAvenue.houseAmount == 5) hotel4++
        }
        if (atlanticAvenue.owner == 1) {
            if (atlanticAvenue.houseAmount == 1) house1++
            else if (atlanticAvenue.houseAmount == 2) house1 += 2
            else if (atlanticAvenue.houseAmount == 3) house1 += 3
            else if (atlanticAvenue.houseAmount == 4) house1 += 4
            else if (atlanticAvenue.houseAmount == 5) hotel1++
        }
        else if (atlanticAvenue.owner == 2) {
            if (atlanticAvenue.houseAmount == 1) house2++
            else if (atlanticAvenue.houseAmount == 2) house2 += 2
            else if (atlanticAvenue.houseAmount == 3) house2 += 3
            else if (atlanticAvenue.houseAmount == 4) house2 += 4
            else if (atlanticAvenue.houseAmount == 5) hotel2++
        }
        else if (atlanticAvenue.owner == 3) {
            if (atlanticAvenue.houseAmount == 1) house3++
            else if (atlanticAvenue.houseAmount == 2) house3 += 2
            else if (atlanticAvenue.houseAmount == 3) house3 += 3
            else if (atlanticAvenue.houseAmount == 4) house3 += 4
            else if (atlanticAvenue.houseAmount == 5) hotel3++
        }
        else if (atlanticAvenue.owner == 4) {
            if (atlanticAvenue.houseAmount == 1) house4++
            else if (atlanticAvenue.houseAmount == 2) house4 += 2
            else if (atlanticAvenue.houseAmount == 3) house4 += 3
            else if (atlanticAvenue.houseAmount == 4) house4 += 4
            else if (atlanticAvenue.houseAmount == 5) hotel4++
        }
        if (ventnorAvenue.owner == 1) {
            if (ventnorAvenue.house == 1) house1++
            else if (ventnorAvenue.house == 2) house1 += 2
            else if (ventnorAvenue.house == 3) house1 += 3
            else if (ventnorAvenue.house == 4) house1 += 4
            else if (ventnorAvenue.house == 5) hotel1++
        }
        else if (ventnorAvenue.owner == 2) {
            if (ventnorAvenue.house == 1) house2++
            else if (ventnorAvenue.house == 2) house2 += 2
            else if (ventnorAvenue.house == 3) house2 += 3
            else if (ventnorAvenue.house == 4) house2 += 4
            else if (ventnorAvenue.house == 5) hotel2++
        }
        else if (ventnorAvenue.owner == 3) {
            if (ventnorAvenue.house == 1) house3++
            else if (ventnorAvenue.house == 2) house3 += 2
            else if (ventnorAvenue.house == 3) house3 += 3
            else if (ventnorAvenue.house == 4) house3 += 4
            else if (ventnorAvenue.house == 5) hotel3++
        }
        else if (ventnorAvenue.owner == 4) {
            if (ventnorAvenue.house == 1) house4++
            else if (ventnorAvenue.house == 2) house4 += 2
            else if (ventnorAvenue.house == 3) house4 += 3
            else if (ventnorAvenue.house == 4) house4 += 4
            else if (ventnorAvenue.house == 5) hotel4++
        }
        if (marvinGardens.owner == 1) {
            if (marvinGardens.houseAmount == 1) house1++
            else if (marvinGardens.houseAmount == 2) house1 += 2
            else if (marvinGardens.houseAmount == 3) house1 += 3
            else if (marvinGardens.houseAmount == 4) house1 += 4
            else if (marvinGardens.houseAmount == 5) hotel1++
        }
        else if (marvinGardens.owner == 2) {
            if (marvinGardens.houseAmount == 1) house2++
            else if (marvinGardens.houseAmount == 2) house2 += 2
            else if (marvinGardens.houseAmount == 3) house2 += 3
            else if (marvinGardens.houseAmount == 4) house2 += 4
            else if (marvinGardens.houseAmount == 5) hotel2++
        }
        else if (marvinGardens.owner == 3) {
            if (marvinGardens.houseAmount == 1) house3++
            else if (marvinGardens.houseAmount == 2) house3 += 2
            else if (marvinGardens.houseAmount == 3) house3 += 3
            else if (marvinGardens.houseAmount == 4) house3 += 4
            else if (marvinGardens.houseAmount == 5) hotel3++
        }
        else if (marvinGardens.owner == 4) {
            if (marvinGardens.houseAmount == 1) house4++
            else if (marvinGardens.houseAmount == 2) house4 += 2
            else if (marvinGardens.houseAmount == 3) house4 += 3
            else if (marvinGardens.houseAmount == 4) house4 += 4
            else if (marvinGardens.houseAmount == 5) hotel4++
        }
        if (pacificAvenue.owner == 1) {
            if (pacificAvenue.houseAmount == 1) house1++
            else if (pacificAvenue.houseAmount == 2) house1 += 2
            else if (pacificAvenue.houseAmount == 3) house1 += 3
            else if (pacificAvenue.houseAmount == 4) house1 += 4
            else if (pacificAvenue.houseAmount == 5) hotel1++
        }
        else if (pacificAvenue.owner == 2) {
            if (pacificAvenue.houseAmount == 1) house2++
            else if (pacificAvenue.houseAmount == 2) house2 += 2
            else if (pacificAvenue.houseAmount == 3) house2 += 3
            else if (pacificAvenue.houseAmount == 4) house2 += 4
            else if (pacificAvenue.houseAmount == 5) hotel2++
        }
        else if (pacificAvenue.owner == 3) {
            if (pacificAvenue.houseAmount == 1) house3++
            else if (pacificAvenue.houseAmount == 2) house3 += 2
            else if (pacificAvenue.houseAmount == 3) house3 += 3
            else if (pacificAvenue.houseAmount == 4) house3 += 4
            else if (pacificAvenue.houseAmount == 5) hotel3++
        }
        else if (pacificAvenue.owner == 4) {
            if (pacificAvenue.houseAmount == 1) house4++
            else if (pacificAvenue.houseAmount == 2) house4 += 2
            else if (pacificAvenue.houseAmount == 3) house4 += 3
            else if (pacificAvenue.houseAmount == 4) house4 += 4
            else if (pacificAvenue.houseAmount == 5) hotel4++
        }
        if (northCarolinaAvenue.owner == 1) {
            if (northCarolinaAvenue.houseAmount == 1) house1++
            else if (northCarolinaAvenue.houseAmount == 2) house1 += 2
            else if (northCarolinaAvenue.houseAmount == 3) house1 += 3
            else if (northCarolinaAvenue.houseAmount == 4) house1 += 4
            else if (northCarolinaAvenue.houseAmount == 5) hotel1++
        }
        else if (northCarolinaAvenue.owner == 2) {
            if (northCarolinaAvenue.houseAmount == 1) house2++
            else if (northCarolinaAvenue.houseAmount == 2) house2 += 2
            else if (northCarolinaAvenue.houseAmount == 3) house2 += 3
            else if (northCarolinaAvenue.houseAmount == 4) house2 += 4
            else if (northCarolinaAvenue.houseAmount == 5) hotel2++
        }
        else if (northCarolinaAvenue.owner == 3) {
            if (northCarolinaAvenue.houseAmount == 1) house3++
            else if (northCarolinaAvenue.houseAmount == 2) house3 += 2
            else if (northCarolinaAvenue.houseAmount == 3) house3 += 3
            else if (northCarolinaAvenue.houseAmount == 4) house3 += 4
            else if (northCarolinaAvenue.houseAmount == 5) hotel3++
        }
        else if (northCarolinaAvenue.owner == 4) {
            if (northCarolinaAvenue.houseAmount == 1) house4++
            else if (northCarolinaAvenue.houseAmount == 2) house4 += 2
            else if (northCarolinaAvenue.houseAmount == 3) house4 += 3
            else if (northCarolinaAvenue.houseAmount == 4) house4 += 4
            else if (northCarolinaAvenue.houseAmount == 5) hotel4++
        }
        if (pennsylvaniaAvenue.owner == 1) {
            if (pennsylvaniaAvenue.houseAmount == 1) house1++
            else if (pennsylvaniaAvenue.houseAmount == 2) house1 += 2
            else if (pennsylvaniaAvenue.houseAmount == 3) house1 += 3
            else if (pennsylvaniaAvenue.houseAmount == 4) house1 += 4
            else if (pennsylvaniaAvenue.houseAmount == 5) hotel1++
        }
        else if (pennsylvaniaAvenue.owner == 2) {
            if (pennsylvaniaAvenue.houseAmount == 1) house2++
            else if (pennsylvaniaAvenue.houseAmount == 2) house2 += 2
            else if (pennsylvaniaAvenue.houseAmount == 3) house2 += 3
            else if (pennsylvaniaAvenue.houseAmount == 4) house2 += 4
            else if (pennsylvaniaAvenue.houseAmount == 5) hotel2++
        }
        else if (pennsylvaniaAvenue.owner == 3) {
            if (pennsylvaniaAvenue.houseAmount == 1) house3++
            else if (pennsylvaniaAvenue.houseAmount == 2) house3 += 2
            else if (pennsylvaniaAvenue.houseAmount == 3) house3 += 3
            else if (pennsylvaniaAvenue.houseAmount == 4) house3 += 4
            else if (pennsylvaniaAvenue.houseAmount == 5) hotel3++
        }
        else if (pennsylvaniaAvenue.owner == 4) {
            if (pennsylvaniaAvenue.houseAmount == 1) house4++
            else if (pennsylvaniaAvenue.houseAmount == 2) house4 += 2
            else if (pennsylvaniaAvenue.houseAmount == 3) house4 += 3
            else if (pennsylvaniaAvenue.houseAmount == 4) house4 += 4
            else if (pennsylvaniaAvenue.houseAmount == 5) hotel4++
        }
        if (parkPlace.owner == 1) {
            if (parkPlace.houseAmount == 1) house1++
            else if (parkPlace.houseAmount == 2) house1 += 2
            else if (parkPlace.houseAmount == 3) house1 += 3
            else if (parkPlace.houseAmount == 4) house1 += 4
            else if (parkPlace.houseAmount == 5) hotel1++
        }
        else if (parkPlace.owner == 2) {
            if (parkPlace.houseAmount == 1) house2++
            else if (parkPlace.houseAmount == 2) house2 += 2
            else if (parkPlace.houseAmount == 3) house2 += 3
            else if (parkPlace.houseAmount == 4) house2 += 4
            else if (parkPlace.houseAmount == 5) hotel2++
        }
        else if (parkPlace.owner == 3) {
            if (parkPlace.houseAmount == 1) house3++
            else if (parkPlace.houseAmount == 2) house3 += 2
            else if (parkPlace.houseAmount == 3) house3 += 3
            else if (parkPlace.houseAmount == 4) house3 += 4
            else if (parkPlace.houseAmount == 5) hotel3++
        }
        else if (parkPlace.owner == 4) {
            if (parkPlace.houseAmount == 1) house4++
            else if (parkPlace.houseAmount == 2) house4 += 2
            else if (parkPlace.houseAmount == 3) house4 += 3
            else if (parkPlace.houseAmount == 4) house4 += 4
            else if (parkPlace.houseAmount == 5) hotel4++
        }
        if (boardwalk.owner == 1) {
            if (boardwalk.houseAmount == 1) house1++
            else if (boardwalk.houseAmount == 2) house1 += 2
            else if (boardwalk.houseAmount == 3) house1 += 3
            else if (boardwalk.houseAmount == 4) house1 += 4
            else if (boardwalk.houseAmount == 5) hotel1++
        }
        else if (boardwalk.owner == 2) {
            if (boardwalk.houseAmount == 1) house2++
            else if (boardwalk.houseAmount == 2) house2 += 2
            else if (boardwalk.houseAmount == 3) house2 += 3
            else if (boardwalk.houseAmount == 4) house2 += 4
            else if (boardwalk.houseAmount == 5) hotel2++
        }
        else if (boardwalk.owner == 3) {
            if (boardwalk.houseAmount == 1) house3++
            else if (boardwalk.houseAmount == 2) house3 += 2
            else if (boardwalk.houseAmount == 3) house3 += 3
            else if (boardwalk.houseAmount == 4) house3 += 4
            else if (boardwalk.houseAmount == 5) hotel3++
        }
        else if (boardwalk.owner == 4) {
            if (boardwalk.houseAmount == 1) house4++
            else if (boardwalk.houseAmount == 2) house4 += 2
            else if (boardwalk.houseAmount == 3) house4 += 3
            else if (boardwalk.houseAmount == 4) house4 += 4
            else if (boardwalk.houseAmount == 5) hotel4++
        }
    }
    function ccCardDraw() {
        var card = Math.floor(Math.random() * 16)
        if (card < 0 || card > 15) card = Math.floor(Math.random() * 16)
        if (card == 0) {
            document.getElementById("card").innerHTML = "Advance to Go (collect 200)"
            if (turn1) cash1 += go.amount
            else if (turn2) cash2 += go.amount
            else if (turn3) cash3 += go.amount
            else if (turn4) cash4 += go.amount
        }
        else if (card == 1) {
            document.getElementById("card").innerHTML = "Bank error in your favor. Collect 200"
            if (turn1) cash1 += 200
            else if (turn2) cash2 += 200
            else if (turn3) cash3 += 200
            else if (turn4) cash4 += 200
        }
        else if (card == 2) {
            document.getElementById("card").innerHTML = "Doctor's fee. Pay 50"
            if (turn1) cash1 -= 50
            else if (turn2) cash2 -= 50
            else if (turn3) cash3 -= 50
            else if (turn4) cash4 -= 50
        }
        else if (card == 3) {
            document.getElementById("card").innerHTML = "From sale of stock you get 50"
            if (turn1) cash1 += 50
            else if (turn2) cash2 += 50
            else if (turn3) cash3 += 50
            else if (turn4) cash4 += 50
        }
        else if (card == 4) {
            document.getElementById("card").innerHTML = "Get out of Jail instantly"
            if (turn1) jailcard1 += 1
            else if (turn2) jailcard2 += 1
            else if (turn3) jailcard3 += 1
            else if (turn4) jailcard4 += 1
        }
        else if (card == 5) {
            document.getElementById("card").innerHTML = "Go to Jail, do not pass Go, do not collect 200"
            if (turn1) {
                position1 = 10
                inJail1 = 3
            }
            else if (turn2) {
                position2 = 10
                inJail2 = 3
            }
            else if (turn3) {
                position3 = 10
                inJail3 = 3
            }
            else if (turn4) {
                position4 = 10
                inJail4 = 3
            }
        }
        else if (card == 6) {
            document.getElementById("card").innerHTML = "Holiday fund matures. Receive 100"
            if (turn1) cash1 += 100
            else if (turn2) cash2 += 100
            else if (turn3) cash3 += 100
            else if (turn4) cash4 += 100
        }
        else if (card == 7) {
            document.getElementById("card").innerHTML = "Income tax refund. Collect 20"
            if (turn1) cash1 += 20
            else if (turn2) cash2 += 20
            else if (turn3) cash3 += 20
            else if (turn4) cash4 += 20
        }
        else if (card == 8) {
            document.getElementById("card").innerHTML = "It's your birtday. Collect 10 from every player"
            if (turn1) {
                if (player2enter && bankrupt2 == false) {
                    cash1 += 10
                    cash2 -= 10
                }
                if (player3enter && bankrupt3 == false) {
                    cash1 += 10
                    cash3 -= 10
                }
                if (player4enter && bankrupt4 == false) {
                    cash1 += 10
                    cash4 -= 10
                }
            }
            else if (turn2) {
                if (player1enter && bankrupt1 == false) {
                    cash1 -= 10
                    cash2 += 10
                }
                if (player3enter && bankrupt3 == false) {
                    cash2 += 10
                    cash3 -= 10
                }
                if (player4enter && bankrupt4 == false) {
                    cash2 += 10
                    cash4 -= 10
                }
            }
            else if (turn3) {
                if (player1enter && bankrupt1 == false) {
                    cash3 += 10
                    cash1 -= 10
                }
                if (player2enter && bankrupt2 == false) {
                    cash3 += 10
                    cash2 -= 10
                }
                if (player4enter && bankrupt4 == false) {
                    cash3 += 10
                    cash4 -= 10
                }
            }
            else if (turn4) {
                if (player1enter && bankrupt1 == false) {
                    cash4 += 10
                    cash1 -= 10
                }
                if (player2enter && bankrupt2 == false) {
                    cash4 += 10
                    cash2 -= 10
                }
                if (player3enter && bankrupt3 == false) {
                    cash4 += 10
                    cash3 -= 10
                }
            }
        }
        else if (card == 9) {
            document.getElementById("card").innerHTML = "Life insurance matures. Collect 100"
            if (turn1) cash1 += 100
            else if (turn2) cash2 += 100
            else if (turn3) cash3 += 100
            else if (turn4) cash4 += 100
        }
        else if (card == 10) {
            document.getElementById("card").innerHTML = "Pay hospital fees of 100"
            if (turn1) cash1 -= 100
            else if (turn2) cash2 -= 100
            else if (turn3) cash3 -= 100
            else if (turn4) cash4 -= 100
        }
        else if (card == 11) {
            document.getElementById("card").innerHTML = "Pay school fees of 50"
            if (turn1) cash1 -= 50
            else if (turn2) cash2 -= 50
            else if (turn3) cash3 -= 50
            else if (turn4) cash4 -= 50
        }
        else if (card == 12) {
            document.getElementById("card").innerHTML = "receive 25 consultancy fee"
            if (turn1) cash1 += 25
            else if (turn2) cash2 += 25
            else if (turn3) cash3 += 25
            else if (turn4) cash4 += 25
        }
        else if (card == 13) {
            document.getElementById("card").innerHTML = "You are assessed for street repairs. 40 per house. 115 per hotel"
            houseCheck()
            if (turn1) {
                cash1 -= house1 * 40
                cash1 -= hotel1 * 115
            }
            else if (turn2) {
                cash2 -= house2 * 40
                cash2 -= hotel2 * 115
            }
            else if (turn3) {
                cash3 -= house3 * 40
                cash3 -= hotel3 * 115
            }
            else if (turn4) {
                cash4 -= house4 * 40
                cash4 -= hotel4 * 115
            }
        }
        else if (card == 14) {
            document.getElementById("card").innerHTML = "You have won second prize in a beauty contest. collect 100"
            if (turn1) cash1 += 100
            else if (turn2) cash2 += 100
            else if (turn3) cash3 += 100
            else if (turn4) cash4 += 100
        }
        else if (card == 15) {
            document.getElementById("card").innerHTML = "You inherit 100"
            if (turn1) cash1 += 100
            else if (turn2) cash2 += 100
            else if (turn3) cash3 += 100
            else if (turn4) cash4 += 100
        }
    }
    function chanceCardDraw() {
        var card = Math.floor(Math.random() * 16)
        if (card < 0 || card > 15) card = Math.floor(Math.random() * 16)
        if (card == 0) {
            document.getElementById("card").innerHTML = "Advance to Go (collect 200)"
            if (turn1) cash1 += go.amount
            else if (turn2) cash2 += go.amount
            else if (turn3) cash3 += go.amount
            else if (turn4) cash4 += go.amount
        }
        else if (card == 1) {
            document.getElementById("card").innerHTML = "Advance to Boardwalk"
            if (turn1) position1 = 39
            else if (turn2) position2 = 39
            else if (turn3) position3 = 39
            else if (turn4) position4 = 39
        }
        else if (card == 2) {
            document.getElementById("card").innerHTML = "Advance to Illinois Avenue. If you pass Go, Collect 200"
            if (turn1) {
                if (position1 > illinoisAvenue.place) cash1 += go.amount
                position1 = illinoisAvenue.place
            }
            else if (turn2) {
                if (position2 > illinoisAvenue.place) cash2 += go.amount
                position2 = illinoisAvenue.place
            }
            else if (turn3) {
                if (position3 > illinoisAvenue.place) cash3 += go.amount
                position3 = illinoisAvenue.place
            }
            else if (turn4) {
                if (position4 > illinoisAvenue.place) cash4 += go.amount
                position4 = illinoisAvenue.place
            }
        }
        else if (card == 3) {
            document.getElementById("card").innerHTML = "Advance to St. Charles Place. If you pass Go, collect 200"
            if (turn1) {
                if (position1 > stCharlesPlace.place) cash1 += go.amount
                position1 = stCharlesPlace.place
            }
            else if (turn2) {
                if (position2 > stCharlesPlace.place) cash2 += go.amount
                position2 = stCharlesPlace.place
            }
            else if (turn3) {
                if (position3 > stCharlesPlace.place) cash3 += go.amount
                position3 = stCharlesPlace.place
            }
            else if (turn4) {
                if (position4 > stCharlesPlace.place) cash4 += go.amount
                position4 = stCharlesPlace.place
            }
        }
        else if (card == 4) {
            document.getElementById("card").innerHTML = "Advance to the nearest Railroad. If owned pay the owner twice the amount normally owned"
            if (turn1) {
                if (position1 > 5 && position1 < 15) {
                    position1 = 15
                    if (pennsylvaniaRailroad.owner == 2) {
                        if (railroadsOwned2 == 1) {
                            cash1 -= 25
                            cash2 += 25
                        }
                        else if (railroadsOwned2 == 2) {
                            cash1 -= 50
                            cash2 += 50
                        }
                        else if (railroadsOwned2 == 3) {
                            cash1 -= 100
                            cash2 += 100
                        }
                        else if (railroadsOwned2 == 4) {
                            cash1 -= 200
                            cash2 += 200
                        }
                    }
                    else if (pennsylvaniaRailroad.owner == 3) {
                        if (railroadsOwned3 == 1) {
                            cash1 -= 25
                            cash3 += 25
                        }
                        else if (railroadsOwned3 == 2) {
                            cash1 -= 50
                            cash3 += 50
                        }
                        else if (railroadsOwned3 == 3) {
                            cash1 -= 100
                            cash3 += 100
                        }
                        else if (railroadsOwned3 == 4) {
                            cash1 -= 200
                            cash3 += 200
                        }
                    }
                    else if (pennsylvaniaRailroad.owner == 4) {
                        if (railroadsOwned4 == 1) {
                            cash1 -= 25
                            cash4 += 25
                        }
                        else if (railroadsOwned4 == 2) {
                            cash1 -= 50
                            cash4 += 50
                        }
                        else if (railroadsOwned4 == 3) {
                            cash1 -= 100
                            cash4 += 100
                        }
                        else if (railroadsOwned4 == 4) {
                            cash1 -= 200
                            cash4 += 200
                        }
                    }
                }
                else if (position1 > 15 && position1 < 25) {
                    position1 = 25
                    if (bAndORailroad.owner == 2) {
                        if (railroadsOwned2 == 1) {
                            cash1 -= 25
                            cash2 += 25
                        }
                        else if (railroadsOwned2 == 2) {
                            cash1 -= 50
                            cash2 += 50
                        }
                        else if (railroadsOwned2 == 3) {
                            cash1 -= 100
                            cash2 += 100
                        }
                        else if (railroadsOwned2 == 4) {
                            cash1 -= 200
                            cash2 += 200
                        }
                    }
                    else if (bAndORailroad.owner == 3) {
                        if (railroadsOwned3 == 1) {
                            cash1 -= 25
                            cash3 += 25
                        }
                        else if (railroadsOwned3 == 2) {
                            cash1 -= 50
                            cash3 += 50
                        }
                        else if (railroadsOwned3 == 3) {
                            cash1 -= 100
                            cash3 += 100
                        }
                        else if (railroadsOwned3 == 4) {
                            cash1 -= 200
                            cash3 += 200
                        }
                    }
                    else if (bAndORailroad.owner == 4) {
                        if (railroadsOwned4 == 1) {
                            cash1 -= 25
                            cash4 += 25
                        }
                        else if (railroadsOwned4 == 2) {
                            cash1 -= 50
                            cash4 += 50
                        }
                        else if (railroadsOwned4 == 3) {
                            cash1 -= 100
                            cash4 += 100
                        }
                        else if (railroadsOwned4 == 4) {
                            cash1 -= 200
                            cash4 += 200
                        }
                    }
                }
                else if (position1 > 25 && position1 < 35) {
                    position1 = 35
                    if (shortLine.owner == 2) {
                        if (railroadsOwned2 == 1) {
                            cash1 -= 25
                            cash2 += 25
                        }
                        else if (railroadsOwned2 == 2) {
                            cash1 -= 50
                            cash2 += 50
                        }
                        else if (railroadsOwned2 == 3) {
                            cash1 -= 100
                            cash2 += 100
                        }
                        else if (railroadsOwned2 == 4) {
                            cash1 -= 200
                            cash2 += 200
                        }
                    }
                    else if (shortLine.owner == 3) {
                        if (railroadsOwned3 == 1) {
                            cash1 -= 25
                            cash3 += 25
                        }
                        else if (railroadsOwned3 == 2) {
                            cash1 -= 50
                            cash3 += 50
                        }
                        else if (railroadsOwned3 == 3) {
                            cash1 -= 100
                            cash3 += 100
                        }
                        else if (railroadsOwned3 == 4) {
                            cash1 -= 200
                            cash3 += 200
                        }
                    }
                    else if (shortLine.owner == 4) {
                        if (railroadsOwned4 == 1) {
                            cash1 -= 25
                            cash4 += 25
                        }
                        else if (railroadsOwned4 == 2) {
                            cash1 -= 50
                            cash4 += 50
                        }
                        else if (railroadsOwned4 == 3) {
                            cash1 -= 100
                            cash4 += 100
                        }
                        else if (railroadsOwned4 == 4) {
                            cash1 -= 200
                            cash4 += 200
                        }
                    }
                }
                else if (position1 > 35 || position1 < 5) {
                    position1 = 5
                    if (readingRailroad.owner == 2) {
                        if (railroadsOwned2 == 1) {
                            cash1 -= 25
                            cash2 += 25
                        }
                        else if (railroadsOwned2 == 2) {
                            cash1 -= 50
                            cash2 += 50
                        }
                        else if (railroadsOwned2 == 3) {
                            cash1 -= 100
                            cash2 += 100
                        }
                        else if (railroadsOwned2 == 4) {
                            cash1 -= 200
                            cash2 += 200
                        }
                    }
                    else if (readingRailroad.owner == 3) {
                        if (railroadsOwned3 == 1) {
                            cash1 -= 25
                            cash3 += 25
                        }
                        else if (railroadsOwned3 == 2) {
                            cash1 -= 50
                            cash3 += 50
                        }
                        else if (railroadsOwned3 == 3) {
                            cash1 -= 100
                            cash3 += 100
                        }
                        else if (railroadsOwned3 == 4) {
                            cash1 -= 200
                            cash3 += 200
                        }
                    }
                    else if (readingRailroad.owner == 4) {
                        if (railroadsOwned4 == 1) {
                            cash1 -= 25
                            cash4 += 25
                        }
                        else if (railroadsOwned4 == 2) {
                            cash1 -= 50
                            cash4 += 50
                        }
                        else if (railroadsOwned4 == 3) {
                            cash1 -= 100
                            cash4 += 100
                        }
                        else if (railroadsOwned4 == 4) {
                            cash1 -= 200
                            cash4 += 200
                        }
                    }
                }
            }
            else if (turn2) {
                if (position2 > 5 && position2 < 15) {
                    position2 = 15
                    if (pennsylvaniaRailroad.owner == 1) {
                        if (railroadsOwned1 == 1) {
                            cash2 -= 25
                            cash1 += 25
                        }
                        else if (railroadsOwned1 == 2) {
                            cash2 -= 50
                            cash1 += 50
                        }
                        else if (railroadsOwned1 == 3) {
                            cash2 -= 100
                            cash1 += 100
                        }
                        else if (railroadsOwned1 == 4) {
                            cash2 -= 200
                            cash1 += 200
                        }
                    }
                    else if (pennsylvaniaRailroad.owner == 3) {
                        if (railroadsOwned3 == 1) {
                            cash2 -= 25
                            cash3 += 25
                        }
                        else if (railroadsOwned3 == 2) {
                            cash2 -= 50
                            cash3 += 50
                        }
                        else if (railroadsOwned3 == 3) {
                            cash2 -= 100
                            cash3 += 100
                        }
                        else if (railroadsOwned3 == 4) {
                            cash2 -= 200
                            cash3 += 200
                        }
                    }
                    else if (pennsylvaniaRailroad.owner == 4) {
                        if (railroadsOwned4 == 1) {
                            cash2 -= 25
                            cash4 += 25
                        }
                        else if (railroadsOwned4 == 2) {
                            cash2 -= 50
                            cash4 += 50
                        }
                        else if (railroadsOwned4 == 3) {
                            cash2 -= 100
                            cash4 += 100
                        }
                        else if (railroadsOwned4 == 4) {
                            cash2 -= 200
                            cash4 += 200
                        }
                    }
                }
                else if (position2 > 15 && position2 < 25) {
                    position2 = 25
                    if (bAndORailroad.owner1 == 1) {
                        if (railroadsOwned1 == 1) {
                            cash2 -= 25
                            cash1 += 25
                        }
                        else if (railroadsOwned1 == 2) {
                            cash2 -= 50
                            cash1 += 50
                        }
                        else if (railroadsOwned1 == 3) {
                            cash2 -= 100
                            cash1 += 100
                        }
                        else if (railroadsOwned1 == 4) {
                            cash2 -= 200
                            cash1 += 200
                        }
                    }
                    else if (bAndORailroad.owner == 3) {
                        if (railroadsOwned3 == 1) {
                            cash2 -= 25
                            cash3 += 25
                        }
                        else if (railroadsOwned3 == 2) {
                            cash2 -= 50
                            cash3 += 50
                        }
                        else if (railroadsOwned3 == 3) {
                            cash2 -= 100
                            cash3 += 100
                        }
                        else if (railroadsOwned3 == 4) {
                            cash2 -= 200
                            cash3 += 200
                        }
                    }
                    else if (bAndORailroad.owner == 4) {
                        if (railroadsOwned4 == 1) {
                            cash2 -= 25
                            cash4 += 25
                        }
                        else if (railroadsOwned4 == 2) {
                            cash2 -= 50
                            cash4 += 50
                        }
                        else if (railroadsOwned4 == 3) {
                            cash2 -= 100
                            cash4 += 100
                        }
                        else if (railroadsOwned4 == 4) {
                            cash2 -= 200
                            cash4 += 200
                        }
                    }
                }
                else if (position2 > 25 && position2 < 35) {
                    position2 = 35
                    if (shortLine.owner == 1) {
                        if (railroadsOwned1 == 1) {
                            cash2 -= 25
                            cash1 += 25
                        }
                        else if (railroadsOwned1 == 2) {
                            cash2 -= 50
                            cash1 += 50
                        }
                        else if (railroadsOwned1 == 3) {
                            cash2 -= 100
                            cash1 += 100
                        }
                        else if (railroadsOwned1 == 4) {
                            cash2 -= 200
                            cash1 += 100
                        }
                    }
                    else if (shortLine.owner == 3) {
                        if (railroadsOwned3 == 1) {
                            cash2 -= 25
                            cash3 += 25
                        }
                        else if (railroadsOwned3 == 2) {
                            cash2 -= 50
                            cash3 += 50
                        }
                        else if (railroadsOwned3 == 3) {
                            cash2 -= 100
                            cash3 += 100
                        }
                        else if (railroadsOwned3 == 4) {
                            cash2 -= 200
                            cash3 += 200
                        }
                    }
                    else if (shortLine.owner == 4) {
                        if (railroadsOwned4 == 1) {
                            cash2 -= 25
                            cash4 += 25
                        }
                        else if (railroadsOwned4 == 2) {
                            cash2 -= 50
                            cash4 += 50
                        }
                        else if (railroadsOwned4 == 3) {
                            cash2 -= 100
                            cash4 += 100
                        }
                        else if (railroadsOwned4 == 4) {
                            cash2 -= 200
                            cash4 += 200
                        }
                    }
                }
                else if (position2 > 35 || position2 < 5) {
                    position2 = 5
                    if (readingRailroad.owner == 1) {
                        if (railroadsOwned1 == 1) {
                            cash2 -= 25
                            cash1 += 25
                        }
                        else if (railroadsOwned1 == 2) {
                            cash2 -= 50
                            cash1 += 50
                        }
                        else if (railroadsOwned1 == 3) {
                            cash2 -= 100
                            cash1 += 100
                        }
                        else if (railroadsOwned1 == 4) {
                            cash2 -= 200
                            cash1 += 200
                        }
                    }
                    else if (readingRailroad.owner == 3) {
                        if (railroadsOwned3 == 1) {
                            cash2 -= 25
                            cash3 += 25
                        }
                        else if (railroadsOwned3 == 2) {
                            cash2 -= 50
                            cash3 += 50
                        }
                        else if (railroadsOwned3 == 3) {
                            cash2 -= 100
                            cash3 += 100
                        }
                        else if (railroadsOwned3 == 4) {
                            cash2 -= 200
                            cash3 += 200
                        }
                    }
                    else if (readingRailroad.owner == 4) {
                        if (railroadsOwned4 == 1) {
                            cash2 -= 25
                            cash4 += 25
                        }
                        else if (railroadsOwned4 == 2) {
                            cash2 -= 50
                            cash4 += 50
                        }
                        else if (railroadsOwned4 == 3) {
                            cash2 -= 100
                            cash4 += 100
                        }
                        else if (railroadsOwned4 == 4) {
                            cash2 -= 200
                            cash4 += 200
                        }
                    }
                }
            }
            else if (turn3) {
                if (position3 > 5 && position3 < 15) {
                    position3 = 15
                    if (pennsylvaniaRailroad.owner == 1) {
                        if (railroadsOwned1 == 1) {
                            cash3 -= 25
                            cash1 += 25
                        }
                        else if (railroadsOwned1 == 2) {
                            cash3 -= 50
                            cash1 += 50
                        }
                        else if (railroadsOwned1 == 3) {
                            cash3 -= 100
                            cash1 += 100
                        }
                        else if (railroadsOwned1 == 4) {
                            cash3 -= 200
                            cash1 += 200
                        }
                    }
                    else if (pennsylvaniaRailroad.owner == 2) {
                        if (railroadsOwned2 == 1) {
                            cash3 -= 25
                            cash2 += 25
                        }
                        else if (railroadsOwned2 == 2) {
                            cash3 -= 50
                            cash2 += 50
                        }
                        else if (railroadsOwned2 == 3) {
                            cash3 -= 100
                            cash2 += 100
                        }
                        else if (railroadsOwned2 == 4) {
                            cash3 -= 200
                            cash2 += 200
                        }
                    }
                    else if (pennsylvaniaRailroad.owner == 4) {
                        if (railroadsOwned4 == 1) {
                            cash3 -= 25
                            cash4 += 25
                        }
                        else if (railroadsOwned4 == 2) {
                            cash3 -= 50
                            cash4 += 50
                        }
                        else if (railroadsOwned4 == 3) {
                            cash3 -= 100
                            cash4 += 100
                        }
                        else if (railroadsOwned4 == 4) {
                            cash3 -= 200
                            cash4 += 200
                        }
                    }
                }
                else if (position3 > 15 && position3 < 25) {
                    position3 = 25
                    if (bAndORailroad.owner == 1) {
                        if (railroadsOwned1 == 1) {
                            cash3 -= 25
                            cash1 += 25
                        }
                        else if (railroadsOwned1 == 2) {
                            cash3 -= 50
                            cash1 += 50
                        }
                        else if (railroadsOwned1 == 3) {
                            cash3 -= 100
                            cash1 += 100
                        }
                        else if (railroadsOwned1 == 4) {
                            cash3 -= 200
                            cash1 += 200
                        }
                    }
                    else if (bAndORailroad.owner == 2) {
                        if (railroadsOwned2 == 1) {
                            cash3 -= 25
                            cash2 += 25
                        }
                        else if (railroadsOwned2 == 2) {
                            cash3 -= 50
                            cash2 += 50
                        }
                        else if (railroadsOwned2 == 3) {
                            cash3 -= 100
                            cash2 += 100
                        }
                        else if (railroadsOwned2 == 4) {
                            cash3 -= 200
                            cash2 += 200
                        }
                    }
                    else if (bAndORailroad.owner == 4) {
                        if (railroadsOwned4 == 1) {
                            cash3 -= 25
                            cash4 += 25
                        }
                        else if (railroadsOwned4 == 2) {
                            cash3 -= 50
                            cash4 += 50
                        }
                        else if (railroadsOwned4 == 3) {
                            cash3 -= 100
                            cash4 += 100
                        }
                        else if (railroadsOwned4 == 4) {
                            cash3 -= 200
                            cash4 += 200
                        }
                    }
                }
                else if (position3 > 25 && position3 < 35) {
                    position3 = 35
                    if (shortLine.owner == 1) {
                        if (railroadsOwned1 == 1) {
                            cash3 -= 25
                            cash1 += 25
                        }
                        else if (railroadsOwned1 == 2) {
                            cash3 -= 50
                            cash1 += 50
                        }
                        else if (railroadsOwned1 == 3) {
                            cash3 -= 100
                            cash1 += 100
                        }
                        else if (railroadsOwned1 == 4) {
                            cash3 -= 200
                            cash1 += 200
                        }
                    }
                    else if (shortLine.owner == 2) {
                        if (railroadsOwned2 == 1) {
                            cash3 -= 25
                            cash2 += 25
                        }
                        else if (railroadsOwned2 == 2) {
                            cash3 -= 50
                            cash2 += 50
                        }
                        else if (railroadsOwned2 == 3) {
                            cash3 -= 100
                            cash2 += 100
                        }
                        else if (railroadsOwned2 == 4) {
                            cash3 -= 200
                            cash2 += 200
                        }
                    }
                    else if (shortLine.owner == 4) {
                        if (railroadsOwned4 == 1) {
                            cash3 -= 25
                            cash4 += 25
                        }
                        else if (railroadsOwned4 == 2) {
                            cash3 -= 50
                            cash4 += 50
                        }
                        else if (railroadsOwned4 == 3) {
                            cash3 -= 100
                            cash4 += 100
                        }
                        else if (railroadsOwned4 == 4) {
                            cash3 -= 200
                            cash4 += 200
                        }
                    }
                }
                else if (position3 > 35 || position3 < 5) {
                    position3 = 5
                    if (readingRailroad.owner == 1) {
                        if (railroadsOwned1 == 1) {
                            cash3 -= 25
                            cash1 += 25
                        }
                        else if (railroadsOwned1 == 2) {
                            cash3 -= 50
                            cash1 += 50
                        }
                        else if (railroadsOwned1 == 3) {
                            cash3 -= 100
                            cash1 += 100
                        }
                        else if (railroadsOwned1 == 4) {
                            cash3 -= 200
                            cash1 += 200
                        }
                    }
                    else if (readingRailroad.owner == 2) {
                        if (railroadsOwned2 == 1) {
                            cash3 -= 25
                            cash2 += 25
                        }
                        else if (railroadsOwned2 == 2) {
                            cash3 -= 50
                            cash2 += 50
                        }
                        else if (railroadsOwned2 == 3) {
                            cash3 -= 100
                            cash2 += 100
                        }
                        else if (railroadsOwned2 == 4) {
                            cash3 -= 200
                            cash2 += 200
                        }
                    }
                    else if (readingRailroad.owner == 4) {
                        if (railroadsOwned4 == 1) {
                            cash3 -= 25
                            cash4 += 25
                        }
                        else if (railroadsOwned4 == 2) {
                            cash3 -= 50
                            cash4 += 50
                        }
                        else if (railroadsOwned4 == 3) {
                            cash3 -= 100
                            cash4 += 100
                        }
                        else if (railroadsOwned4 == 4) {
                            cash3 -= 200
                            cash4 += 200
                        }
                    }
                }
            }
            else if (turn4) {
                if (position4 > 5 && position4 < 15) {
                    position4 = 15
                    if (pennsylvaniaRailroad.owner == 1) {
                        if (railroadsOwned1 == 1) {
                            cash4 -= 25
                            cash1 += 25
                        }
                        else if (railroadsOwned1 == 2) {
                            cash4 -= 50
                            cash1 += 50
                        }
                        else if (railroadsOwned1 == 3) {
                            cash4 -= 100
                            cash1 += 100
                        }
                        else if (railroadsOwned1 == 4) {
                            cash4 -= 200
                            cash1 += 200
                        }
                    }
                    else if (pennsylvaniaRailroad.owner == 2) {
                        if (railroadsOwned2 == 1) {
                            cash4 -= 25
                            cash2 += 25
                        }
                        else if (railroadsOwned2 == 2) {
                            cash4 -= 50
                            cash2 += 50
                        }
                        else if (railroadsOwned2 == 3) {
                            cash4 -= 100
                            cash2 += 100
                        }
                        else if (railroadsOwned2 == 4) {
                            cash4 -= 200
                            cash2 += 200
                        }
                    }
                    else if (pennsylvaniaRailroad.owner == 3) {
                        if (railroadsOwned3 == 1) {
                            cash4 -= 25
                            cash3 += 25
                        }
                        else if (railroadsOwned3 == 2) {
                            cash4 -= 50
                            cash3 += 50
                        }
                        else if (railroadsOwned3 == 3) {
                            cash4 -= 100
                            cash3 += 100
                        }
                        else if (railroadsOwned3 == 4) {
                            cash4 -= 200
                            cash3 += 200
                        }
                    }
                }
                else if (position4 > 15 && position4 < 25) {
                    position4 = 25
                    if (bAndORailroad.owner == 1) {
                        if (railroadsOwned1 == 1) {
                            cash4 -= 25
                            cash1 += 25
                        }
                        else if (railroadsOwned1 == 2) {
                            cash4 -= 50
                            cash1 += 50
                        }
                        else if (railroadsOwned1 == 3) {
                            cash4 -= 100
                            cash1 += 100
                        }
                        else if (railroadsOwned1 == 4) {
                            cash4 -= 200
                            cash1 += 200
                        }
                    }
                    else if (bAndORailroad.owner == 2) {
                        if (railroadsOwned2 == 1) {
                            cash4 -= 25
                            cash2 += 25
                        }
                        else if (railroadsOwned2 == 2) {
                            cash4 -= 50
                            cash2 += 50
                        }
                        else if (railroadsOwned2 == 3) {
                            cash4 -= 100
                            cash2 += 100
                        }
                        else if (railroadsOwned2 == 4) {
                            cash4 -= 200
                            cash2 += 200
                        }
                    }
                    else if (bAndORailroad.owner == 3) {
                        if (railroadsOwned3 == 1) {
                            cash4 -= 25
                            cash3 += 25
                        }
                        else if (railroadsOwned3 == 2) {
                            cash4 -= 50
                            cash3 += 50
                        }
                        else if (railroadsOwned3 == 3) {
                            cash4 -= 100
                            cash3 += 100
                        }
                        else if (railroadsOwned3 == 4) {
                            cash4 -= 200
                            cash3 += 200
                        }
                    }
                }
                else if (position4 > 25 && position4 < 35) {
                    position4 = 35
                    if (shortLine.owner == 1) {
                        if (railroadsOwned1 == 1) {
                            cash4 -= 25
                            cash1 += 25
                        }
                        else if (railroadsOwned1 == 2) {
                            cash4 -= 50
                            cash1 += 50
                        }
                        else if (railroadsOwned1 == 3) {
                            cash4 -= 100
                            cash1 += 100
                        }
                        else if (railroadsOwned1 == 4) {
                            cash4 -= 200
                            cash1 += 200
                        }
                    }
                    else if (shortLine.owner == 2) {
                        if (railroadsOwned2 == 1) {
                            cash4 -= 25
                            cash2 += 25
                        }
                        else if (railroadsOwned2 == 2) {
                            cash4 -= 50
                            cash2 += 50
                        }
                        else if (railroadsOwned2 == 3) {
                            cash4 -= 100
                            cash2 += 100
                        }
                        else if (railroadsOwned2 == 4) {
                            cash4 -= 200
                            cash2 += 200
                        }
                    }
                    else if (shortLine.owner == 3) {
                        if (railroadsOwned3 == 1) {
                            cash4 -= 25
                            cash3 += 25
                        }
                        else if (railroadsOwned3 == 2) {
                            cash4 -= 50
                            cash3 += 50
                        }
                        else if (railroadsOwned3 == 3) {
                            cash4 -= 100
                            cash3 += 100
                        }
                        else if (railroadsOwned3 == 4) {
                            cash4 -= 200
                            cash3 += 200
                        }
                    }
                }
                else if (position4 > 35 || position4 < 5) {
                    position4 = 5
                    if (readingRailroad.owner == 1) {
                        if (railroadsOwned1 == 1) {
                            cash4 -= 25
                            cash1 += 25
                        }
                        else if (railroadsOwned1 == 2) {
                            cash4 -= 50
                            cash1 += 50
                        }
                        else if (railroadsOwned1 == 3) {
                            cash4 -= 100
                            cash1 += 100
                        }
                        else if (railroadsOwned1 == 4) {
                            cash4 -= 200
                            cash1 += 200
                        }
                    }
                    else if (readingRailroad.owner == 2) {
                        if (railroadsOwned2 == 1) {
                            cash4 -= 25
                            cash2 += 25
                        }
                        else if (railroadsOwned2 == 2) {
                            cash4 -= 50
                            cash2 += 50
                        }
                        else if (railroadsOwned2 == 3) {
                            cash4 -= 100
                            cash2 += 100
                        }
                        else if (railroadsOwned2 == 4) {
                            cash4 -= 200
                            cash2 += 200
                        }
                    }
                    else if (readingRailroad.owner == 3) {
                        if (railroadsOwned3 == 1) {
                            cash4 -= 25
                            cash3 += 25
                        }
                        else if (railroadsOwned3 == 2) {
                            cash4 -= 50
                            cash3 += 50
                        }
                        else if (railroadsOwned3 == 3) {
                            cash4 -= 100
                            cash3 += 100
                        }
                        else if (railroadsOwned3 == 4) {
                            cash4 -= 200
                            cash3 += 200
                        }
                    }
                }
            }
        }
        else if (card == 5) {
            document.getElementById("card").innerHTML = "Advance to the nearest Railroad. If owned pay the owner twice the amount normally owned"
            if (turn1) {
                if (position1 > 5 && position1 < 15) {
                    position1 = 15
                    if (pennsylvaniaRailroad.owner == 2) {
                        if (railroadsOwned2 == 1) {
                            cash1 -= 25
                            cash2 += 25
                        }
                        else if (railroadsOwned2 == 2) {
                            cash1 -= 50
                            cash2 += 50
                        }
                        else if (railroadsOwned2 == 3) {
                            cash1 -= 100
                            cash2 += 100
                        }
                        else if (railroadsOwned2 == 4) {
                            cash1 -= 200
                            cash2 += 200
                        }
                    }
                    else if (pennsylvaniaRailroad.owner == 3) {
                        if (railroadsOwned3 == 1) {
                            cash1 -= 25
                            cash3 += 25
                        }
                        else if (railroadsOwned3 == 2) {
                            cash1 -= 50
                            cash3 += 50
                        }
                        else if (railroadsOwned3 == 3) {
                            cash1 -= 100
                            cash3 += 100
                        }
                        else if (railroadsOwned3 == 4) {
                            cash1 -= 200
                            cash3 += 200
                        }
                    }
                    else if (pennsylvaniaRailroad.owner == 4) {
                        if (railroadsOwned4 == 1) {
                            cash1 -= 25
                            cash4 += 25
                        }
                        else if (railroadsOwned4 == 2) {
                            cash1 -= 50
                            cash4 += 50
                        }
                        else if (railroadsOwned4 == 3) {
                            cash1 -= 100
                            cash4 += 100
                        }
                        else if (railroadsOwned4 == 4) {
                            cash1 -= 200
                            cash4 += 200
                        }
                    }
                }
                else if (position1 > 15 && position1 < 25) {
                    position1 = 25
                    if (bAndORailroad.owner == 2) {
                        if (railroadsOwned2 == 1) {
                            cash1 -= 25
                            cash2 += 25
                        }
                        else if (railroadsOwned2 == 2) {
                            cash1 -= 50
                            cash2 += 50
                        }
                        else if (railroadsOwned2 == 3) {
                            cash1 -= 100
                            cash2 += 100
                        }
                        else if (railroadsOwned2 == 4) {
                            cash1 -= 200
                            cash2 += 200
                        }
                    }
                    else if (bAndORailroad.owner == 3) {
                        if (railroadsOwned3 == 1) {
                            cash1 -= 25
                            cash3 += 25
                        }
                        else if (railroadsOwned3 == 2) {
                            cash1 -= 50
                            cash3 += 50
                        }
                        else if (railroadsOwned3 == 3) {
                            cash1 -= 100
                            cash3 += 100
                        }
                        else if (railroadsOwned3 == 4) {
                            cash1 -= 200
                            cash3 += 200
                        }
                    }
                    else if (bAndORailroad.owner == 4) {
                        if (railroadsOwned4 == 1) {
                            cash1 -= 25
                            cash4 += 25
                        }
                        else if (railroadsOwned4 == 2) {
                            cash1 -= 50
                            cash4 += 50
                        }
                        else if (railroadsOwned4 == 3) {
                            cash1 -= 100
                            cash4 += 100
                        }
                        else if (railroadsOwned4 == 4) {
                            cash1 -= 200
                            cash4 += 200
                        }
                    }
                }
                else if (position1 > 25 && position1 < 35) {
                    position1 = 35
                    if (shortLine.owner == 2) {
                        if (railroadsOwned2 == 1) {
                            cash1 -= 25
                            cash2 += 25
                        }
                        else if (railroadsOwned2 == 2) {
                            cash1 -= 50
                            cash2 += 50
                        }
                        else if (railroadsOwned2 == 3) {
                            cash1 -= 100
                            cash2 += 100
                        }
                        else if (railroadsOwned2 == 4) {
                            cash1 -= 200
                            cash2 += 200
                        }
                    }
                    else if (shortLine.owner == 3) {
                        if (railroadsOwned3 == 1) {
                            cash1 -= 25
                            cash3 += 25
                        }
                        else if (railroadsOwned3 == 2) {
                            cash1 -= 50
                            cash3 += 50
                        }
                        else if (railroadsOwned3 == 3) {
                            cash1 -= 100
                            cash3 += 100
                        }
                        else if (railroadsOwned3 == 4) {
                            cash1 -= 200
                            cash3 += 200
                        }
                    }
                    else if (shortLine.owner == 4) {
                        if (railroadsOwned4 == 1) {
                            cash1 -= 25
                            cash4 += 25
                        }
                        else if (railroadsOwned4 == 2) {
                            cash1 -= 50
                            cash4 += 50
                        }
                        else if (railroadsOwned4 == 3) {
                            cash1 -= 100
                            cash4 += 100
                        }
                        else if (railroadsOwned4 == 4) {
                            cash1 -= 200
                            cash4 += 200
                        }
                    }
                }
                else if (position1 > 35 || position1 < 5) {
                    position1 = 5
                    if (readingRailroad.owner == 2) {
                        if (railroadsOwned2 == 1) {
                            cash1 -= 25
                            cash2 += 25
                        }
                        else if (railroadsOwned2 == 2) {
                            cash1 -= 50
                            cash2 += 50
                        }
                        else if (railroadsOwned2 == 3) {
                            cash1 -= 100
                            cash2 += 100
                        }
                        else if (railroadsOwned2 == 4) {
                            cash1 -= 200
                            cash2 += 200
                        }
                    }
                    else if (readingRailroad.owner == 3) {
                        if (railroadsOwned3 == 1) {
                            cash1 -= 25
                            cash3 += 25
                        }
                        else if (railroadsOwned3 == 2) {
                            cash1 -= 50
                            cash3 += 50
                        }
                        else if (railroadsOwned3 == 3) {
                            cash1 -= 100
                            cash3 += 100
                        }
                        else if (railroadsOwned3 == 4) {
                            cash1 -= 200
                            cash3 += 200
                        }
                    }
                    else if (readingRailroad.owner == 4) {
                        if (railroadsOwned4 == 1) {
                            cash1 -= 25
                            cash4 += 25
                        }
                        else if (railroadsOwned4 == 2) {
                            cash1 -= 50
                            cash4 += 50
                        }
                        else if (railroadsOwned4 == 3) {
                            cash1 -= 100
                            cash4 += 100
                        }
                        else if (railroadsOwned4 == 4) {
                            cash1 -= 200
                            cash4 += 200
                        }
                    }
                }
            }
            else if (turn2) {
                if (position2 > 5 && position2 < 15) {
                    position2 = 15
                    if (pennsylvaniaRailroad.owner == 1) {
                        if (railroadsOwned1 == 1) {
                            cash2 -= 25
                            cash1 += 25
                        }
                        else if (railroadsOwned1 == 2) {
                            cash2 -= 50
                            cash1 += 50
                        }
                        else if (railroadsOwned1 == 3) {
                            cash2 -= 100
                            cash1 += 100
                        }
                        else if (railroadsOwned1 == 4) {
                            cash2 -= 200
                            cash1 += 200
                        }
                    }
                    else if (pennsylvaniaRailroad.owner == 3) {
                        if (railroadsOwned3 == 1) {
                            cash2 -= 25
                            cash3 += 25
                        }
                        else if (railroadsOwned3 == 2) {
                            cash2 -= 50
                            cash3 += 50
                        }
                        else if (railroadsOwned3 == 3) {
                            cash2 -= 100
                            cash3 += 100
                        }
                        else if (railroadsOwned3 == 4) {
                            cash2 -= 200
                            cash3 += 200
                        }
                    }
                    else if (pennsylvaniaRailroad.owner == 4) {
                        if (railroadsOwned4 == 1) {
                            cash2 -= 25
                            cash4 += 25
                        }
                        else if (railroadsOwned4 == 2) {
                            cash2 -= 50
                            cash4 += 50
                        }
                        else if (railroadsOwned4 == 3) {
                            cash2 -= 100
                            cash4 += 100
                        }
                        else if (railroadsOwned4 == 4) {
                            cash2 -= 200
                            cash4 += 200
                        }
                    }
                }
                else if (position2 > 15 && position2 < 25) {
                    position2 = 25
                    if (bAndORailroad.owner1 == 1) {
                        if (railroadsOwned1 == 1) {
                            cash2 -= 25
                            cash1 += 25
                        }
                        else if (railroadsOwned1 == 2) {
                            cash2 -= 50
                            cash1 += 50
                        }
                        else if (railroadsOwned1 == 3) {
                            cash2 -= 100
                            cash1 += 100
                        }
                        else if (railroadsOwned1 == 4) {
                            cash2 -= 200
                            cash1 += 200
                        }
                    }
                    else if (bAndORailroad.owner == 3) {
                        if (railroadsOwned3 == 1) {
                            cash2 -= 25
                            cash3 += 25
                        }
                        else if (railroadsOwned3 == 2) {
                            cash2 -= 50
                            cash3 += 50
                        }
                        else if (railroadsOwned3 == 3) {
                            cash2 -= 100
                            cash3 += 100
                        }
                        else if (railroadsOwned3 == 4) {
                            cash2 -= 200
                            cash3 += 200
                        }
                    }
                    else if (bAndORailroad.owner == 4) {
                        if (railroadsOwned4 == 1) {
                            cash2 -= 25
                            cash4 += 25
                        }
                        else if (railroadsOwned4 == 2) {
                            cash2 -= 50
                            cash4 += 50
                        }
                        else if (railroadsOwned4 == 3) {
                            cash2 -= 100
                            cash4 += 100
                        }
                        else if (railroadsOwned4 == 4) {
                            cash2 -= 200
                            cash4 += 200
                        }
                    }
                }
                else if (position2 > 25 && position2 < 35) {
                    position2 = 35
                    if (shortLine.owner == 1) {
                        if (railroadsOwned1 == 1) {
                            cash2 -= 25
                            cash1 += 25
                        }
                        else if (railroadsOwned1 == 2) {
                            cash2 -= 50
                            cash1 += 50
                        }
                        else if (railroadsOwned1 == 3) {
                            cash2 -= 100
                            cash1 += 100
                        }
                        else if (railroadsOwned1 == 4) {
                            cash2 -= 200
                            cash1 += 100
                        }
                    }
                    else if (shortLine.owner == 3) {
                        if (railroadsOwned3 == 1) {
                            cash2 -= 25
                            cash3 += 25
                        }
                        else if (railroadsOwned3 == 2) {
                            cash2 -= 50
                            cash3 += 50
                        }
                        else if (railroadsOwned3 == 3) {
                            cash2 -= 100
                            cash3 += 100
                        }
                        else if (railroadsOwned3 == 4) {
                            cash2 -= 200
                            cash3 += 200
                        }
                    }
                    else if (shortLine.owner == 4) {
                        if (railroadsOwned4 == 1) {
                            cash2 -= 25
                            cash4 += 25
                        }
                        else if (railroadsOwned4 == 2) {
                            cash2 -= 50
                            cash4 += 50
                        }
                        else if (railroadsOwned4 == 3) {
                            cash2 -= 100
                            cash4 += 100
                        }
                        else if (railroadsOwned4 == 4) {
                            cash2 -= 200
                            cash4 += 200
                        }
                    }
                }
                else if (position2 > 35 || position2 < 5) {
                    position2 = 5
                    if (readingRailroad.owner == 1) {
                        if (railroadsOwned1 == 1) {
                            cash2 -= 25
                            cash1 += 25
                        }
                        else if (railroadsOwned1 == 2) {
                            cash2 -= 50
                            cash1 += 50
                        }
                        else if (railroadsOwned1 == 3) {
                            cash2 -= 100
                            cash1 += 100
                        }
                        else if (railroadsOwned1 == 4) {
                            cash2 -= 200
                            cash1 += 200
                        }
                    }
                    else if (readingRailroad.owner == 3) {
                        if (railroadsOwned3 == 1) {
                            cash2 -= 25
                            cash3 += 25
                        }
                        else if (railroadsOwned3 == 2) {
                            cash2 -= 50
                            cash3 += 50
                        }
                        else if (railroadsOwned3 == 3) {
                            cash2 -= 100
                            cash3 += 100
                        }
                        else if (railroadsOwned3 == 4) {
                            cash2 -= 200
                            cash3 += 200
                        }
                    }
                    else if (readingRailroad.owner == 4) {
                        if (railroadsOwned4 == 1) {
                            cash2 -= 25
                            cash4 += 25
                        }
                        else if (railroadsOwned4 == 2) {
                            cash2 -= 50
                            cash4 += 50
                        }
                        else if (railroadsOwned4 == 3) {
                            cash2 -= 100
                            cash4 += 100
                        }
                        else if (railroadsOwned4 == 4) {
                            cash2 -= 200
                            cash4 += 200
                        }
                    }
                }
            }
            else if (turn3) {
                if (position3 > 5 && position3 < 15) {
                    position3 = 15
                    if (pennsylvaniaRailroad.owner == 1) {
                        if (railroadsOwned1 == 1) {
                            cash3 -= 25
                            cash1 += 25
                        }
                        else if (railroadsOwned1 == 2) {
                            cash3 -= 50
                            cash1 += 50
                        }
                        else if (railroadsOwned1 == 3) {
                            cash3 -= 100
                            cash1 += 100
                        }
                        else if (railroadsOwned1 == 4) {
                            cash3 -= 200
                            cash1 += 200
                        }
                    }
                    else if (pennsylvaniaRailroad.owner == 2) {
                        if (railroadsOwned2 == 1) {
                            cash3 -= 25
                            cash2 += 25
                        }
                        else if (railroadsOwned2 == 2) {
                            cash3 -= 50
                            cash2 += 50
                        }
                        else if (railroadsOwned2 == 3) {
                            cash3 -= 100
                            cash2 += 100
                        }
                        else if (railroadsOwned2 == 4) {
                            cash3 -= 200
                            cash2 += 200
                        }
                    }
                    else if (pennsylvaniaRailroad.owner == 4) {
                        if (railroadsOwned4 == 1) {
                            cash3 -= 25
                            cash4 += 25
                        }
                        else if (railroadsOwned4 == 2) {
                            cash3 -= 50
                            cash4 += 50
                        }
                        else if (railroadsOwned4 == 3) {
                            cash3 -= 100
                            cash4 += 100
                        }
                        else if (railroadsOwned4 == 4) {
                            cash3 -= 200
                            cash4 += 200
                        }
                    }
                }
                else if (position3 > 15 && position3 < 25) {
                    position3 = 25
                    if (bAndORailroad.owner == 1) {
                        if (railroadsOwned1 == 1) {
                            cash3 -= 25
                            cash1 += 25
                        }
                        else if (railroadsOwned1 == 2) {
                            cash3 -= 50
                            cash1 += 50
                        }
                        else if (railroadsOwned1 == 3) {
                            cash3 -= 100
                            cash1 += 100
                        }
                        else if (railroadsOwned1 == 4) {
                            cash3 -= 200
                            cash1 += 200
                        }
                    }
                    else if (bAndORailroad.owner == 2) {
                        if (railroadsOwned2 == 1) {
                            cash3 -= 25
                            cash2 += 25
                        }
                        else if (railroadsOwned2 == 2) {
                            cash3 -= 50
                            cash2 += 50
                        }
                        else if (railroadsOwned2 == 3) {
                            cash3 -= 100
                            cash2 += 100
                        }
                        else if (railroadsOwned2 == 4) {
                            cash3 -= 200
                            cash2 += 200
                        }
                    }
                    else if (bAndORailroad.owner == 4) {
                        if (railroadsOwned4 == 1) {
                            cash3 -= 25
                            cash4 += 25
                        }
                        else if (railroadsOwned4 == 2) {
                            cash3 -= 50
                            cash4 += 50
                        }
                        else if (railroadsOwned4 == 3) {
                            cash3 -= 100
                            cash4 += 100
                        }
                        else if (railroadsOwned4 == 4) {
                            cash3 -= 200
                            cash4 += 200
                        }
                    }
                }
                else if (position3 > 25 && position3 < 35) {
                    position3 = 35
                    if (shortLine.owner == 1) {
                        if (railroadsOwned1 == 1) {
                            cash3 -= 25
                            cash1 += 25
                        }
                        else if (railroadsOwned1 == 2) {
                            cash3 -= 50
                            cash1 += 50
                        }
                        else if (railroadsOwned1 == 3) {
                            cash3 -= 100
                            cash1 += 100
                        }
                        else if (railroadsOwned1 == 4) {
                            cash3 -= 200
                            cash1 += 200
                        }
                    }
                    else if (shortLine.owner == 2) {
                        if (railroadsOwned2 == 1) {
                            cash3 -= 25
                            cash2 += 25
                        }
                        else if (railroadsOwned2 == 2) {
                            cash3 -= 50
                            cash2 += 50
                        }
                        else if (railroadsOwned2 == 3) {
                            cash3 -= 100
                            cash2 += 100
                        }
                        else if (railroadsOwned2 == 4) {
                            cash3 -= 200
                            cash2 += 200
                        }
                    }
                    else if (shortLine.owner == 4) {
                        if (railroadsOwned4 == 1) {
                            cash3 -= 25
                            cash4 += 25
                        }
                        else if (railroadsOwned4 == 2) {
                            cash3 -= 50
                            cash4 += 50
                        }
                        else if (railroadsOwned4 == 3) {
                            cash3 -= 100
                            cash4 += 100
                        }
                        else if (railroadsOwned4 == 4) {
                            cash3 -= 200
                            cash4 += 200
                        }
                    }
                }
                else if (position3 > 35 || position3 < 5) {
                    position3 = 5
                    if (readingRailroad.owner == 1) {
                        if (railroadsOwned1 == 1) {
                            cash3 -= 25
                            cash1 += 25
                        }
                        else if (railroadsOwned1 == 2) {
                            cash3 -= 50
                            cash1 += 50
                        }
                        else if (railroadsOwned1 == 3) {
                            cash3 -= 100
                            cash1 += 100
                        }
                        else if (railroadsOwned1 == 4) {
                            cash3 -= 200
                            cash1 += 200
                        }
                    }
                    else if (readingRailroad.owner == 2) {
                        if (railroadsOwned2 == 1) {
                            cash3 -= 25
                            cash2 += 25
                        }
                        else if (railroadsOwned2 == 2) {
                            cash3 -= 50
                            cash2 += 50
                        }
                        else if (railroadsOwned2 == 3) {
                            cash3 -= 100
                            cash2 += 100
                        }
                        else if (railroadsOwned2 == 4) {
                            cash3 -= 200
                            cash2 += 200
                        }
                    }
                    else if (readingRailroad.owner == 4) {
                        if (railroadsOwned4 == 1) {
                            cash3 -= 25
                            cash4 += 25
                        }
                        else if (railroadsOwned4 == 2) {
                            cash3 -= 50
                            cash4 += 50
                        }
                        else if (railroadsOwned4 == 3) {
                            cash3 -= 100
                            cash4 += 100
                        }
                        else if (railroadsOwned4 == 4) {
                            cash3 -= 200
                            cash4 += 200
                        }
                    }
                }
            }
            else if (turn4) {
                if (position4 > 5 && position4 < 15) {
                    position4 = 15
                    if (pennsylvaniaRailroad.owner == 1) {
                        if (railroadsOwned1 == 1) {
                            cash4 -= 25
                            cash1 += 25
                        }
                        else if (railroadsOwned1 == 2) {
                            cash4 -= 50
                            cash1 += 50
                        }
                        else if (railroadsOwned1 == 3) {
                            cash4 -= 100
                            cash1 += 100
                        }
                        else if (railroadsOwned1 == 4) {
                            cash4 -= 200
                            cash1 += 200
                        }
                    }
                    else if (pennsylvaniaRailroad.owner == 2) {
                        if (railroadsOwned2 == 1) {
                            cash4 -= 25
                            cash2 += 25
                        }
                        else if (railroadsOwned2 == 2) {
                            cash4 -= 50
                            cash2 += 50
                        }
                        else if (railroadsOwned2 == 3) {
                            cash4 -= 100
                            cash2 += 100
                        }
                        else if (railroadsOwned2 == 4) {
                            cash4 -= 200
                            cash2 += 200
                        }
                    }
                    else if (pennsylvaniaRailroad.owner == 3) {
                        if (railroadsOwned3 == 1) {
                            cash4 -= 25
                            cash3 += 25
                        }
                        else if (railroadsOwned3 == 2) {
                            cash4 -= 50
                            cash3 += 50
                        }
                        else if (railroadsOwned3 == 3) {
                            cash4 -= 100
                            cash3 += 100
                        }
                        else if (railroadsOwned3 == 4) {
                            cash4 -= 200
                            cash3 += 200
                        }
                    }
                }
                else if (position4 > 15 && position4 < 25) {
                    position4 = 25
                    if (bAndORailroad.owner == 1) {
                        if (railroadsOwned1 == 1) {
                            cash4 -= 25
                            cash1 += 25
                        }
                        else if (railroadsOwned1 == 2) {
                            cash4 -= 50
                            cash1 += 50
                        }
                        else if (railroadsOwned1 == 3) {
                            cash4 -= 100
                            cash1 += 100
                        }
                        else if (railroadsOwned1 == 4) {
                            cash4 -= 200
                            cash1 += 200
                        }
                    }
                    else if (bAndORailroad.owner == 2) {
                        if (railroadsOwned2 == 1) {
                            cash4 -= 25
                            cash2 += 25
                        }
                        else if (railroadsOwned2 == 2) {
                            cash4 -= 50
                            cash2 += 50
                        }
                        else if (railroadsOwned2 == 3) {
                            cash4 -= 100
                            cash2 += 100
                        }
                        else if (railroadsOwned2 == 4) {
                            cash4 -= 200
                            cash2 += 200
                        }
                    }
                    else if (bAndORailroad.owner == 3) {
                        if (railroadsOwned3 == 1) {
                            cash4 -= 25
                            cash3 += 25
                        }
                        else if (railroadsOwned3 == 2) {
                            cash4 -= 50
                            cash3 += 50
                        }
                        else if (railroadsOwned3 == 3) {
                            cash4 -= 100
                            cash3 += 100
                        }
                        else if (railroadsOwned3 == 4) {
                            cash4 -= 200
                            cash3 += 200
                        }
                    }
                }
                else if (position4 > 25 && position4 < 35) {
                    position4 = 35
                    if (shortLine.owner == 1) {
                        if (railroadsOwned1 == 1) {
                            cash4 -= 25
                            cash1 += 25
                        }
                        else if (railroadsOwned1 == 2) {
                            cash4 -= 50
                            cash1 += 50
                        }
                        else if (railroadsOwned1 == 3) {
                            cash4 -= 100
                            cash1 += 100
                        }
                        else if (railroadsOwned1 == 4) {
                            cash4 -= 200
                            cash1 += 200
                        }
                    }
                    else if (shortLine.owner == 2) {
                        if (railroadsOwned2 == 1) {
                            cash4 -= 25
                            cash2 += 25
                        }
                        else if (railroadsOwned2 == 2) {
                            cash4 -= 50
                            cash2 += 50
                        }
                        else if (railroadsOwned2 == 3) {
                            cash4 -= 100
                            cash2 += 100
                        }
                        else if (railroadsOwned2 == 4) {
                            cash4 -= 200
                            cash2 += 200
                        }
                    }
                    else if (shortLine.owner == 3) {
                        if (railroadsOwned3 == 1) {
                            cash4 -= 25
                            cash3 += 25
                        }
                        else if (railroadsOwned3 == 2) {
                            cash4 -= 50
                            cash3 += 50
                        }
                        else if (railroadsOwned3 == 3) {
                            cash4 -= 100
                            cash3 += 100
                        }
                        else if (railroadsOwned3 == 4) {
                            cash4 -= 200
                            cash3 += 200
                        }
                    }
                }
                else if (position4 > 35 || position4 < 5) {
                    position4 = 5
                    if (readingRailroad.owner == 1) {
                        if (railroadsOwned1 == 1) {
                            cash4 -= 25
                            cash1 += 25
                        }
                        else if (railroadsOwned1 == 2) {
                            cash4 -= 50
                            cash1 += 50
                        }
                        else if (railroadsOwned1 == 3) {
                            cash4 -= 100
                            cash1 += 100
                        }
                        else if (railroadsOwned1 == 4) {
                            cash4 -= 200
                            cash1 += 200
                        }
                    }
                    else if (readingRailroad.owner == 2) {
                        if (railroadsOwned2 == 1) {
                            cash4 -= 25
                            cash2 += 25
                        }
                        else if (railroadsOwned2 == 2) {
                            cash4 -= 50
                            cash2 += 50
                        }
                        else if (railroadsOwned2 == 3) {
                            cash4 -= 100
                            cash2 += 100
                        }
                        else if (railroadsOwned2 == 4) {
                            cash4 -= 200
                            cash2 += 200
                        }
                    }
                    else if (readingRailroad.owner == 3) {
                        if (railroadsOwned3 == 1) {
                            cash4 -= 25
                            cash3 += 25
                        }
                        else if (railroadsOwned3 == 2) {
                            cash4 -= 50
                            cash3 += 50
                        }
                        else if (railroadsOwned3 == 3) {
                            cash4 -= 100
                            cash3 += 100
                        }
                        else if (railroadsOwned3 == 4) {
                            cash4 -= 200
                            cash3 += 200
                        }
                    }
                }
            }
        }
        else if (card == 6) {
            document.getElementById("card").innerHTML = "Advance to the nearest utility"
            if (turn1) {
                if (position1 > electricCompany.place && position1 < waterWorks.place) position1 = waterWorks.place
                else if (position1 > waterWorks.place || position1 < electricCompany.place) position1 = electricCompany
            }
            else if (turn2) {
                if (position2 > electricCompany.place && position2 < waterWorks.place) position2 = waterWorks.place
                else if (position2 > waterWorks.place || position2 < electricCompany.place) position2 = electricCompany.place
            }
            else if (turn3) {
                if (position3 > electricCompany.place && position3 < waterWorks.place) position3 = waterWorks.place
                else if (position3 > waterWorks.place || position3 < electricCompany.place) position3 = electricCompany.place
            }
            else if (turn4) {
                if (position4 > electricCompany.place && position4 < waterWorks.place) position4 = waterWorks.place
                else if (position4 > waterWorks.place || position4 < electricCompany.place) position4 = electricCompany.place
            }
        }
        else if (card == 7) {
            document.getElementById("card").innerHTML = "Bank pays you dividend of 50"
            if (turn1) cash1 += 50
            else if (turn2) cash2 += 50
            else if (turn3) cash3 += 50
            else if (turn4) cash4 += 50
        }
        else if (card == 8) {
            document.getElementById("card").innerHTML = "Get out of Jail instantly"
            if (turn1) jailcard1++
            else if (turn2) jailcard2++
            else if (turn3) jailcard3++
            else if (turn4) jailcard4++
        }
        else if (card == 9) {
            document.getElementById("card").innerHTML = "go back 3 spaces"
            if (turn1) position1 -= 3
            else if (turn2) position2 -= 3
            else if (turn3) position3 -= 3
            else if (turn4) position4 -= 3
        }
        else if (card == 10) {
            document.getElementById("card").innerHTML = "Go to Jail, do not pass Go, do not collect 200"
            if (turn1) {
                position1 = 10
                inJail1 = 3
            }
            else if (turn2) {
                position2 = 10
                inJail2 = 3
            }
            else if (turn3) {
                position3 = 10
                inJail3 = 3
            }
            else if (turn4) {
                position4 = 10
                inJail4 = 3
            }
        }
        else if (card == 11) {
            document.getElementById("card").innerHTML = "Make general repairs on all property. For each house pay 25. For each hotel pay 100"
            houseCheck()
            if (turn1) {
                cash1 -= house1 * 25
                cash1 -= hotel1 * 100
            }
            else if (turn2) {
                cash2 -= house2 * 25
                cash2 -= hotel2 * 100
            }
            else if (turn3) {
                cash3 -= house3 * 25
                cash3 -= hotel3 * 100
            }
            else if (turn4) {
                cash4 -= house4 * 25
                cash5 -= hotel4 * 100
            }
        }
        else if (card == 12) {
            document.getElementById("card").innerHTML = "Speeding fine 15"
            if (turn1) cash1 -= 15
            else if (turn2) cash2 -= 15
            else if (turn3) cash3 -= 15
            else if (turn4) cash4 -= 15
        }
        else if (card == 13) {
            document.getElementById("card").innerHTML = "Take a trip to Reading Railroad. If you go past Go, collect 200"
            if (turn1) {
                if (position1 > 5) cash1 += go.amount
                position1 = 5
            }
            else if (turn2) {
                if (position2 > 5) cash2 += go.amount
                position2 = 5
            }
            else if (turn3) {
                if (position3 > 5) cash3 += go.amount
                position3 = 5
            }
            else if (turn4) {
                if (position4 > 5) cash4 += go.amount
                position4 = 5
            }
        }
        else if (card == 14) {
            document.getElementById("card").innerHTML = "You have been elected Chairman of the Board. Pay each player 50"
            if (turn1) {
                if (player2enter && bankrupt2 == false) {
                    cash1 -= 50
                    cash2 += 50
                }
                if (player3enter && bankrupt3 == false) {
                    cash1 -= 50
                    cash3 += 50
                }
                if (player4enter && bankrupt4 == false) {
                    cash1 -= 50
                    cash4 += 50
                }
            }
            else if (turn2) {
                if (player1enter && bankrupt1 == false) {
                    cash2 -= 50
                    cash1 += 50
                }
                if (player3enter && bankrupt3 == false) {
                    cash2 -= 50
                    cash3 += 50
                }
                if (player4enter && bankrupt4 == false) {
                    cash2 -= 50
                    cash4 += 50
                }
            }
            else if (turn3) {
                if (player1enter && bankrupt1 == false) {
                    cash3 -= 50
                    cash1 += 50
                }
                if (player2enter && bankrupt2 == false) {
                    cash3 -= 50
                    cash2 += 50
                }
                if (player4enter && bankrupt4 == false) {
                    cash3 -= 50
                    cash4 += 50
                }
            }
            else if (turn4) {
                if (player1enter && bankrupt1 == false) {
                    cash4 -= 50
                    cash1 += 50
                }
                if (player2enter && bankrupt2 == false) {
                    cash4 -= 50
                    cash2 += 50
                }
                if (player3enter && bankrupt3 == false) {
                    cash4 -= 50
                    cash3 += 50
                }
            }
        }
        else if (card == 15) {
            document.getElementById("card").innerHTML = "Your building loan matures. Collect 150"
            if (turn1) cash1 += 150
            else if (turn2) cash2 += 150
            else if (turn3) cash3 += 150
            else if (turn4) cash4 += 150
        }
    }
    function pastGo() {
        if (position1 > 39) {
            position1 -= 39
            cash1 += go.amount
        }
        if (position2 > 39) {
            position2 -= 39
            cash2 += go.amount
        }
        if (position3 > 39) {
            position3 -= 39
            cash3 += go.amount
        }
        if (position4 > 39) {
            position4 -= 39
            cash4 += go.amount
        }
    }
    function draw1() {
        ctx.beginPath()
        ctx.fillStyle = player1color
        ctx.fillRect(x1, y1, width, height)
        ctx.closePath()
    }
    function draw2() {
        ctx.beginPath()
        ctx.fillStyle = player2color
        ctx.fillRect(x2, y2, width, height)
        ctx.closePath()
    }
    function draw3() {
        ctx.beginPath()
        ctx.fillStyle = player3color
        ctx.fillRect(x3, y3, width, height)
        ctx.closePath()
    }
    function draw4() {
        ctx.beginPath()
        ctx.fillStyle = player4color
        ctx.fillRect(x4, y4, width, height)
        ctx.closePath()
    }
    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        ctx.beginPath()
        ctx.fillStyle = "white"
        ctx.fillRect(0, 0, canvas.width, canvas.height)
        ctx.closePath()
        if (player1enter) draw1()
        if (player2enter) draw2()
        if (player3enter) draw3()
        if (player4enter) draw4()
    }
    function move() {
        if (turn1) {
            if (roll) {
                if (rollDone == false) {
                    rollDone = true
                    rollAmount1 = Math.floor(Math.random() * 6) + 1
                    rollAmount2 = Math.floor(Math.random() * 6) + 1
                    position1 += rollAmount1 + rollAmount2
                    document.getElementById("roll").style.display = "block"
                    document.getElementById("rollamount1").innerHTML = rollAmount1
                    document.getElementById("rollamount2").innerHTML = rollAmount2
                    if (rollAmount1 == rollAmount2) {
                        double = true
                        doubleAmount += 1
                        inJail1 = 0
                        if (doubleAmount == 3) {
                            position1 = 10
                            inJail1 = 3
                        }
                    }
                    if (jailcard1 > 0 && inJail1 > 0) {
                        jailcard1--
                        inJail1 = 0
                    }
                    if (inJail1 == 0) {
                        setTimeout(() => {
                            if (position1 == 0) {
                                cash1 += go.amount
                            }
                            if (position1 == 1) {
                                if (mediteraneanAvenue.bought == false) {
                                    document.getElementById("place").innerHTML = " Mediteranean Avenue "
                                    document.getElementById("buy").style.display = "block"
                                    document.getElementById("price").innerHTML = " " + mediteraneanAvenue.price
                                }
                                else if (mediteraneanAvenue.owner == 1 && mediteraneanAvenue.houseAmount < 5) {
                                    document.getElementById("house").style.display = "block"
                                    document.getElementById("houseprice").innerHTML = " " + 50
                                }
                                else if (mediteraneanAvenue.owner == 2) {
                                    document.getElementById("pay").style.display = "block"
                                    document.getElementById("owner").innerHTML = " 2"
                                    if (mediteraneanAvenue.houseAmount == 0) {
                                        document.getElementById("payment").innerHTML = " 2"
                                        cash1 -= 2
                                        cash2 += 2
                                    }
                                    else if (mediteraneanAvenue.houseAmount == 1) {
                                        document.getElementById("payment").innerHTML = " 10"
                                        cash1 -= 10
                                        cash2 += 10
                                    }
                                    else if (mediteraneanAvenue.houseAmount == 2) {
                                        document.getElementById("payment").innerHTML = " 30"
                                        cash1 -= 30
                                        cash2 += 30
                                    }
                                    else if (mediteraneanAvenue.houseAmount == 3) {
                                        document.getElementById("payment").innerHTML = " 90"
                                        cash1 -= 90
                                        cash2 += 90
                                    }
                                    else if (mediteraneanAvenue.houseAmount == 4) {
                                        document.getElementById("payment").innerHTML = " 160"
                                        cash1 -= 160
                                        cash2 += 160
                                    }
                                    else if (mediteraneanAvenue.houseAmount == 5) {
                                        document.getElementById("payment").innerHTML = " 250"
                                        cash1 -= 250
                                        cash2 += 250
                                    }
                                }
                                else if (mediteraneanAvenue.owner == 3) {
                                    document.getElementById("pay").style.display = "block"
                                    document.getElementById("owner").innerHTML = " 3"
                                    if (mediteraneanAvenue.houseAmount == 0) {
                                        document.getElementById("payment").innerHTML = " 2"
                                        cash1 -= 2
                                        cash3 += 2
                                    }
                                    else if (mediteraneanAvenue.houseAmount == 1) {
                                        document.getElementById("payment").innerHTML = " 10"
                                        cash1 -= 10
                                        cash3 += 10
                                    }
                                    else if (mediteraneanAvenue.houseAmount == 2) {
                                        document.getElementById("payment").innerHTML = " 30"
                                        cash1 -= 30
                                        cash3 += 30
                                    }
                                    else if (mediteraneanAvenue.houseAmount == 3) {
                                        document.getElementById("payment").innerHTML = " 90"
                                        cash1 -= 90
                                        cash3 += 90
                                    }
                                    else if (mediteraneanAvenue.houseAmount == 4) {
                                        document.getElementById("payment").innerHTML = " 160"
                                        cash1 -= 160
                                        cash3 += 160
                                    }
                                    else if (mediteraneanAvenue.houseAmount == 5) {
                                        document.getElementById("payment").innerHTML = " 250"
                                        cash1 -= 250
                                        cash3 += 250
                                    }
                                }
                                else if (mediteraneanAvenue.owner == 4) {
                                    document.getElementById("pay").style.display = "block"
                                    document.getElementById("owner").innerHTML = " 4"
                                    if (mediteraneanAvenue.houseAmount == 0) {
                                        document.getElementById("payment").innerHTML = " 2"
                                        cash1 -= 2
                                        cash4 += 2
                                    }
                                    else if (mediteraneanAvenue.houseAmount == 1) {
                                        document.getElementById("payment").innerHTML = " 10"
                                        cash1 -= 10
                                        cash4 += 10
                                    }
                                    else if (mediteraneanAvenue.houseAmount == 2) {
                                        document.getElementById("payment").innerHTML = " 30"
                                        cash1 -= 30
                                        cash4 += 30
                                    }
                                    else if (mediteraneanAvenue.houseAmount == 3) {
                                        document.getElementById("payment").innerHTML = " 90"
                                        cash1 -= 90
                                        cash4 += 90
                                    }
                                    else if (mediteraneanAvenue.houseAmount == 4) {
                                        document.getElementById("payment").innerHTML = " 160"
                                        cash1 -= 160
                                        cash4 += 160
                                    }
                                    else if (mediteraneanAvenue.houseAmount == 5) {
                                        document.getElementById("payment").innerHTML = " 250"
                                        cash1 -= 250
                                        cash4 += 250
                                    }
                                }
                            }
                            if (position1 == 2) {
                                ccCardDraw()
                            }
                            if (position1 == 3) {
                                if (balticAvenue.bought == false) {
                                    document.getElementById("place").innerHTML = " Baltic Avenue "
                                    document.getElementById("buy").style.display = "block"
                                    document.getElementById("price").innerHTML = " " + balticAvenue.price
                                }
                                else if (balticAvenue.owner == 1 && balticAvenue.houseAmount < 5) {
                                    document.getElementById("house").style.display = "block"
                                    document.getElementById("houseprice").innerHTML = " " + 50
                                }
                                else if (balticAvenue.owner == 2) {
                                    document.getElementById("pay").style.display = "block"
                                    document.getElementById("owner").innerHTML = " 2"
                                    if (balticAvenue.houseAmount == 0) {
                                        document.getElementById("payment").innerHTML = " 4"
                                        cash1 -= 4
                                        cash2 += 4
                                    }
                                    else if (balticAvenue.houseAmount == 1) {
                                        document.getElementById("payment").innerHTML = " 20"
                                        cash1 -= 20
                                        cash2 += 20
                                    }
                                    else if (balticAvenue.houseAmount == 2) {
                                        document.getElementById("payment").innerHTML = " 60"
                                        cash1 -= 60
                                        cash2 += 60
                                    }
                                    else if (balticAvenue.houseAmount == 3) {
                                        document.getElementById("payment").innerHTML = " 180"
                                        cash1 -= 180
                                        cash2 += 180
                                    }
                                    else if (balticAvenue.houseAmount == 4) {
                                        document.getElementById("payment").innerHTML = " 320"
                                        cash1 -= 320
                                        cash2 += 320
                                    }
                                    else if (balticAvenue.houseAmount == 5) {
                                        document.getElementById("payment").innerHTML = " 450"
                                        cash1 -= 450
                                        cash2 += 450
                                    }
                                }
                                else if (balticAvenue.owner == 3) {
                                    document.getElementById("pay").style.display = "block"
                                    document.getElementById("owner").innerHTML = " 3"
                                    if (balticAvenue.houseAmount == 0) {
                                        document.getElementById("payment").innerHTML = " 4"
                                        cash1 -= 4
                                        cash3 += 4
                                    }
                                    else if (balticAvenue.houseAmount == 1) {
                                        document.getElementById("payment").innerHTML = " 20"
                                        cash1 -= 20
                                        cash3 += 20
                                    }
                                    else if (balticAvenue.houseAmount == 2) {
                                        document.getElementById("payment").innerHTML = " 60"
                                        cash1 -= 60
                                        cash3 += 60
                                    }
                                    else if (balticAvenue.houseAmount == 3) {
                                        document.getElementById("payment").innerHTML = " 180"
                                        cash1 -= 180
                                        cash3 += 180
                                    }
                                    else if (balticAvenue.houseAmount == 4) {
                                        document.getElementById("payment").innerHTML = " 320"
                                        cash1 -= 320
                                        cash3 += 320
                                    }
                                    else if (balticAvenue.houseAmount == 5) {
                                        document.getElementById("payment").innerHTML = " 450"
                                        cash1 -= 450
                                        cash3 += 450
                                    }
                                }
                                else if (balticAvenue.owner == 4) {
                                    document.getElementById("pay").style.display = "block"
                                    document.getElementById("owner").innerHTML = " 4"
                                    if (balticAvenue.houseAmount == 0) {
                                        document.getElementById("payment").innerHTML = " 4"
                                        cash1 -= 4
                                        cash4 += 4
                                    }
                                    else if (balticAvenue.houseAmount == 1) {
                                        document.getElementById("payment").innerHTML = " 20"
                                        cash1 -= 20
                                        cash4 += 20
                                    }
                                    else if (balticAvenue.houseAmount == 2) {
                                        document.getElementById("payment").innerHTML = " 60"
                                        cash1 -= 60
                                        cash4 += 60
                                    }
                                    else if (balticAvenue.houseAmount == 3) {
                                        document.getElementById("payment").innerHTML = " 180"
                                        cash1 -= 180
                                        cash4 += 180
                                    }
                                    else if (balticAvenue.houseAmount == 4) {
                                        document.getElementById("payment").innerHTML = " 320"
                                        cash1 -= 320
                                        cash4 += 320
                                    }
                                    else if (balticAvenue.houseAmount == 5) {
                                        document.getElementById("payment").innerHTML = " 450"
                                        cash1 -= 450
                                        cash4 += 450
                                    }
                                }
                            }
                            if (position1 == 4) {
                                cash1 -= incomeTax.taxAmount
                                freeParking.collectedTax += incomeTax.taxAmount
                            }
                            if (position1 == 5) {
                                if (readingRailroad.bought == false) {
                                    document.getElementById("place").innerHTML = " Reading Railroad "
                                    document.getElementById("buy").style.display = "block"
                                    document.getElementById("price").innerHTML = " " + readingRailroad.price
                                }
                                if (readingRailroad.owner == 2) {
                                    if (railroadsOwned2 == 1) {
                                        cash1 -= 25
                                        cash2 += 25
                                    }
                                    else if (railroadsOwned2 == 2) {
                                        cash1 -= 50
                                        cash2 += 50
                                    }
                                    else if (railroadsOwned2 == 3) {
                                        cash1 -= 100
                                        cash2 += 100
                                    }
                                    else if (railroadsOwned2 == 4) {
                                        cash1 -= 200
                                        cash2 += 200
                                    }
                                }
                                else if (readingRailroad.owner == 3) {
                                    if (railroadsOwned3 == 1) {
                                        cash1 -= 25
                                        cash3 += 25
                                    }
                                    else if (railroadsOwned3 == 2) {
                                        cash1 -= 50
                                        cash3 += 50
                                    }
                                    else if (railroadsOwned3 == 3) {
                                        cash1 -= 100
                                        cash3 += 100
                                    }
                                    else if (railroadsOwned3 == 4) {
                                        cash1 -= 200
                                        cash3 += 200
                                    }
                                }
                                else if (readingRailroad.owner == 4) {
                                    if (railroadsOwned4 == 1) {
                                        cash1 -= 25
                                        cash4 += 25
                                    }
                                    else if (railroadsOwned4 == 2) {
                                        cash1 -= 50
                                        cash4 += 50
                                    }
                                    else if (railroadsOwned4 == 3) {
                                        cash1 -= 100
                                        cash4 += 100
                                    }
                                    else if (railroadsOwned4 == 4) {
                                        cash1 -= 200
                                        cash4 += 200
                                    }
                                }
                            }
                            if (position1 == 6) {
                                if (orientalAvenue.bought == false) {
                                    document.getElementById("buy").style.display = "block"
                                    document.getElementById("place").innerHTML = " Oriental Avenue "
                                    document.getElementById("price").innerHTML = " " + orientalAvenue.price
                                }
                                else if (orientalAvenue.owner == 1 && orientalAvenue.houseAmount < 5) {
                                    document.getElementById("house").style.display = "block"
                                    document.getElementById("houseprice").innerHTML = " " + 50
                                }
                                else if (orientalAvenue.owner == 2) {
                                    document.getElementById("pay").style.display = "block"
                                    document.getElementById("owner").innerHTML = " 2"
                                    if (orientalAvenue.houseAmount == 0) {
                                        document.getElementById("payment").innerHTML = " 6"
                                        cash1 -= 6
                                        cash2 += 6
                                    }
                                    else if (orientalAvenue.houseAmount == 1) {
                                        document.getElementById("payment").innerHTML = " 30"
                                        cash1 -= 30
                                        cash2 += 30
                                    }
                                    else if (orientalAvenue.houseAmount == 2) {
                                        document.getElementById("payment").innerHTML = " 90"
                                        cash1 -= 90
                                        cash2 += 90
                                    }
                                    else if (orientalAvenue.houseAmount == 3) {
                                        document.getElementById("payment").innerHTML = " 270"
                                        cash1 -= 270
                                        cash2 += 270
                                    }
                                    else if (orientalAvenue.houseAmount == 4) {
                                        document.getElementById("payment").innerHTML = " 400"
                                        cash1 -= 400
                                        cash2 += 400
                                    }
                                    else if (orientalAvenue.houseAmount == 5) {
                                        document.getElementById("payment").innerHTML = " 550"
                                        cash1 -= 550
                                        cash2 += 550
                                    }
                                }
                                else if (orientalAvenue.owner == 3) {
                                    document.getElementById("pay").style.display = "block"
                                    document.getElementById("owner").innerHTML = " 3"
                                    if (orientalAvenue.houseAmount == 0) {
                                        document.getElementById("payment").innerHTML = " 6"
                                        cash1 -= 6
                                        cash3 += 6
                                    }
                                    else if (orientalAvenue.houseAmount == 1) {
                                        document.getElementById("payment").innerHTML = " 30"
                                        cash1 -= 30
                                        cash3 += 30
                                    }
                                    else if (orientalAvenue.houseAmount == 2) {
                                        document.getElementById("payment").innerHTML = " 90"
                                        cash1 -= 90
                                        cash3 += 90
                                    }
                                    else if (orientalAvenue.houseAmount == 3) {
                                        document.getElementById("payment").innerHTML = " 270"
                                        cash1 -= 270
                                        cash3 += 270
                                    }
                                    else if (orientalAvenue.houseAmount == 4) {
                                        document.getElementById("payment").innerHTML = " 400"
                                        cash1 -= 400
                                        cash3 += 400
                                    }
                                    else if (orientalAvenue.houseAmount == 5) {
                                        document.getElementById("payment").innerHTML = " 550"
                                        cash1 -= 550
                                        cash3 += 550
                                    }
                                }
                                else if (orientalAvenue.owner == 4) {
                                    document.getElementById("pay").style.display = "block"
                                    document.getElementById("owner").innerHTML = " 4"
                                    if (orientalAvenue.houseAmount == 0) {
                                        document.getElementById("payment").innerHTML = " 6"
                                        cash1 -= 6
                                        cash4 += 6
                                    }
                                    else if (orientalAvenue.houseAmount == 1) {
                                        document.getElementById("payment").innerHTML = " 30"
                                        cash1 -= 30
                                        cash4 += 30
                                    }
                                    else if (orientalAvenue.houseAmount == 2) {
                                        document.getElementById("payment").innerHTML = " 90"
                                        cash1 -= 90
                                        cash4 += 90
                                    }
                                    else if (orientalAvenue.houseAmount == 3) {
                                        document.getElementById("payment").innerHTML = " 270"
                                        cash1 -= 270
                                        cash4 += 270
                                    }
                                    else if (orientalAvenue.houseAmount == 4) {
                                        document.getElementById("payment").innerHTML = " 400"
                                        cash1 -= 400
                                        cash4 += 400
                                    }
                                    else if (orientalAvenue.houseAmount == 5) {
                                        document.getElementById("payment").innerHTML = " 550"
                                        cash1 -= 550
                                        cash4 += 550
                                    }
                                }
                            }
                            if (position1 == 7) {
                                chanceCardDraw()
                            }
                            if (position1 == 8) {
                                if (vermontAvenue.bought == false) {
                                    document.getElementById("place").innerHTML = " Vermont Avenue "
                                    document.getElementById("buy").style.display = "block"
                                    document.getElementById("price").innerHTML = " " + vermontAvenue.price
                                }
                                else if (vermontAvenue.owner == 1 && vermontAvenue.houseAmount < 5) {
                                    document.getElementById("house").style.display = "block"
                                    document.getElementById("houseprice").innerHTML = " " + 50
                                }
                                else if (vermontAvenue.owner == 2) {
                                    if (vermontAvenue.houseAmount == 0) {
                                        document.getElementById("payment").innerHTML = ""
                                    }
                                    else if (vermontAvenue.houseAmount == 1) {
                                        document.getElementById("payment").innerHTML = ""
                                    }
                                    else if (vermontAvenue.houseAmount == 2) {
                                        document.getElementById("payment").innerHTML = ""
                                    }
                                    else if (vermontAvenue.houseAmount == 3) {
                                        document.getElementById("payment").innerHTML = ""
                                    }
                                    else if (vermontAvenue.houseAmount == 4) {
                                        document.getElementById("payment").innerHTML = ""
                                    }
                                    else if (vermontAvenue.houseAmount == 5) {
                                        document.getElementById("payment").innerHTML = ""
                                    }
                                }
                                else if (vermontAvenue.owner == 3) {
                                    if (vermontAvenue.houseAmount == 0) {

                                    }
                                    else if (vermontAvenue.houseAmount == 1) {

                                    }
                                    else if (vermontAvenue.houseAmount == 2) {

                                    }
                                    else if (vermontAvenue.houseAmount == 3) {

                                    }
                                    else if (vermontAvenue.houseAmount == 4) {

                                    }
                                    else if (vermontAvenue.houseAmount == 5) {

                                    }
                                }
                                else if (vermontAvenue.owner == 4) {
                                    if (vermontAvenue.houseAmount == 0) {

                                    }
                                    else if (vermontAvenue.houseAmount == 1) {

                                    }
                                    else if (vermontAvenue.houseAmount == 2) {

                                    }
                                    else if (vermontAvenue.houseAmount == 3) {

                                    }
                                    else if (vermontAvenue.houseAmount == 4) {

                                    }
                                    else if (vermontAvenue.houseAmount == 5) {

                                    }
                                }
                            }
                            if (position1 == 9) {
                                if (connecticutAvenue.bought == false) {
                                    document.getElementById("place").innerHTML = " Connecticut Avenue "
                                    document.getElementById("buy").style.display = "block"
                                    document.getElementById("price").innerHTML = " " + connecticutAvenue.price
                                }
                                else if (connecticutAvenue.owner == 1 && connecticutAvenue.houseAmount < 5) {

                                }
                                else if (connecticutAvenue.owner == 2) {
                                    if (connecticutAvenue.houseAmount == 0) {

                                    }
                                    else if (connecticutAvenue.houseAmount == 1) {

                                    }
                                    else if (connecticutAvenue.houseAmount == 2) {

                                    }
                                    else if (connecticutAvenue.houseAmount == 3) {

                                    }
                                    else if (connecticutAvenue.houseAmount == 4) {

                                    }
                                    else if (connecticutAvenue.houseAmount == 5) {

                                    }
                                }
                                else if (connecticutAvenue.owner == 3) {
                                    if (connecticutAvenue.houseAmount == 0) {

                                    }
                                    else if (connecticutAvenue.houseAmount == 1) {

                                    }
                                    else if (connecticutAvenue.houseAmount == 2) {

                                    }
                                    else if (connecticutAvenue.houseAmount == 3) {

                                    }
                                    else if (connecticutAvenue.houseAmount == 4) {

                                    }
                                    else if (connecticutAvenue.houseAmount == 5) {

                                    }
                                }
                                else if (connecticutAvenue.owner == 4) {
                                    if (connecticutAvenue.houseAmount == 0) {

                                    }
                                    else if (connecticutAvenue.houseAmount == 1) {

                                    }
                                    else if (connecticutAvenue.houseAmount == 2) {

                                    }
                                    else if (connecticutAvenue.houseAmount == 3) {

                                    }
                                    else if (connecticutAvenue.houseAmount == 4) {

                                    }
                                    else if (connecticutAvenue.houseAmount == 5) {

                                    }
                                }
                            }
                            if (position1 == 11) {
                                if (stCharlesPlace.bought == false) {
                                    document.getElementById("place").innerHTML = " ST. Charles Place "
                                    document.getElementById("buy").style.display = "block"
                                    document.getElementById("price").innerHTML = " " + stCharlesPlace.price
                                }
                                else if (stCharlesPlace.owner == 1 && stCharlesPlace.houseAmount < 5) {

                                }
                                else if (stCharlesPlace.owner == 2) {
                                    if (stCharlesPlace.houseAmount == 0) {

                                    }
                                    else if (stCharlesPlace.houseAmount == 1) {

                                    }
                                    else if (stCharlesPlace.houseAmount == 2) {

                                    }
                                    else if (stCharlesPlace.houseAmount == 3) {

                                    }
                                    else if (stCharlesPlace.houseAmount == 4) {

                                    }
                                    else if (stCharlesPlace.houseAmount == 5) {

                                    }
                                }
                                else if (stCharlesPlace.owner == 3) {
                                    if (stCharlesPlace.houseAmount == 0) {

                                    }
                                    else if (stCharlesPlace.houseAmount == 1) {

                                    }
                                    else if (stCharlesPlace.houseAmount == 2) {

                                    }
                                    else if (stCharlesPlace.houseAmount == 3) {

                                    }
                                    else if (stCharlesPlace.houseAmount == 4) {

                                    }
                                    else if (stCharlesPlace.houseAmount == 5) {

                                    }
                                }
                                else if (stCharlesPlace.owner == 4) {
                                    if (stCharlesPlace.houseAmount == 0) {

                                    }
                                    else if (stCharlesPlace.houseAmount == 1) {

                                    }
                                    else if (stCharlesPlace.houseAmount == 2) {

                                    }
                                    else if (stCharlesPlace.houseAmount == 3) {

                                    }
                                    else if (stCharlesPlace.houseAmount == 4) {

                                    }
                                    else if (stCharlesPlace.houseAmount == 5) {

                                    }
                                }
                            }
                            if (position1 == 12) {
                                if (electricCompany.bought == false) {

                                }
                                else if (electricCompany.owner == 2) {
                                    if (waterWorks.owner == 2) {

                                    }
                                    else {

                                    }
                                }
                                else if (electricCompany.owner == 3) {
                                    if (waterWorks.owner == 3) {

                                    }
                                    else {

                                    }
                                }
                                else if (electricCompany.owner == 4) {
                                    if (waterWorks.owner == 4) {

                                    }
                                    else {
                                        
                                    }
                                }
                            }
                            if (position1 == 13) {

                            }
                            if (position1 == 14) {

                            }
                            if (position1 == 15) {
                                if (pennsylvaniaAvenue.bought == false) {
                                    document.getElementById("place").innerHTML = " Pennsylvania Railroad "
                                    document.getElementById("buy").style.display = "block"
                                    document.getElementById("price").innerHTML = " " + pennsylvaniaRailroad.price
                                }
                                if (pennsylvaniaRailroad.owner == 2) {
                                    if (railroadsOwned2 == 1) {
                                        cash1 -= 25
                                        cash2 += 25
                                    }
                                    else if (railroadsOwned2 == 2) {
                                        cash1 -= 50
                                        cash2 += 50
                                    }
                                    else if (railroadsOwned2 == 3) {
                                        cash1 -= 100
                                        cash2 += 100
                                    }
                                    else if (railroadsOwned2 == 4) {
                                        cash1 -= 200
                                        cash2 += 200
                                    }
                                }
                                else if (pennsylvaniaRailroad.owner == 3) {
                                    if (railroadsOwned3 == 1) {
                                        cash1 -= 25
                                        cash3 += 25
                                    }
                                    else if (railroadsOwned3 == 2) {
                                        cash1 -= 50
                                        cash3 += 50
                                    }
                                    else if (railroadsOwned3 == 3) {
                                        cash1 -= 100
                                        cash3 += 100
                                    }
                                    else if (railroadsOwned3 == 4) {
                                        cash1 -= 200
                                        cash3 += 200
                                    }
                                }
                                else if (pennsylvaniaRailroad.owner == 4) {
                                    if (railroadsOwned4 == 1) {
                                        cash1 -= 25
                                        cash4 += 25
                                    }
                                    else if (railroadsOwned4 == 2) {
                                        cash1 -= 50
                                        cash4 += 50
                                    }
                                    else if (railroadsOwned4 == 3) {
                                        cash1 -= 100
                                        cash4 += 100
                                    }
                                    else if (railroadsOwned4 == 4) {
                                        cash1 -= 200
                                        cash4 += 200
                                    }
                                }
                            }
                            if (position1 == 16) {

                            }
                            if (position1 == 17) {
                                ccCardDraw()
                            }
                            if (position1 == 18) {

                            }
                            if (position1 == 19) {

                            }
                            if (position1 == 20) {
                                cash1 += freeParking.collectedTax
                                freeParking.collectedTax = 0
                            }
                            if (position1 == 21) {

                            }
                            if (position1 == 22) {
                                chanceCardDraw()
                            }
                            if (position1 == 23) {

                            }
                            if (position1 == 24) {

                            }
                            if (position1 == 25) {
                                if (bAndORailroad.bought == false) {
                                    document.getElementById("place").innerHTML = " B & O Railroad "
                                    document.getElementById("buy").style.display = "block"
                                    document.getElementById("price").innerHTML = " " + bAndORailroad.price
                                }
                                if (bAndORailroad.owner == 2) {
                                    if (railroadsOwned2 == 1) {
                                        cash1 -= 25
                                        cash2 += 25
                                    }
                                    else if (railroadsOwned2 == 2) {
                                        cash1 -= 50
                                        cash2 += 50
                                    }
                                    else if (railroadsOwned2 == 3) {
                                        cash1 -= 100
                                        cash2 += 100
                                    }
                                    else if (railroadsOwned2 == 4) {
                                        cash1 -= 200
                                        cash2 += 200
                                    }
                                }
                                else if (bAndORailroad.owner == 3) {
                                    if (railroadsOwned3 == 1) {
                                        cash1 -= 25
                                        cash3 += 25
                                    }
                                    else if (railroadsOwned3 == 2) {
                                        cash1 -= 50
                                        cash3 += 50
                                    }
                                    else if (railroadsOwned3 == 3) {
                                        cash1 -= 100
                                        cash3 += 100
                                    }
                                    else if (railroadsOwned3 == 4) {
                                        cash1 -= 200
                                        cash3 += 200
                                    }
                                }
                                else if (bAndORailroad.owner == 4) {
                                    if (railroadsOwned4 == 1) {
                                        cash1 -= 25
                                        cash4 += 25
                                    }
                                    else if (railroadsOwned4 == 2) {
                                        cash1 -= 50
                                        cash4 += 50
                                    }
                                    else if (railroadsOwned4 == 3) {
                                        cash1 -= 100
                                        cash4 += 100
                                    }
                                    else if (railroadsOwned4 == 4) {
                                        cash1 -= 200
                                        cash4 += 200
                                    }
                                }
                            }
                            if (position1 == 26) {

                            }
                            if (position1 == 27) {

                            }
                            if (position1 == 28) {

                            }
                            if (position1 == 29) {

                            }
                            if (position1 == 30) {
                                position1 = 10
                                inJail1 = 3
                            }
                            if (position1 == 31) {

                            }
                            if (position1 == 32) {

                            }
                            if (position1 == 33) {
                                ccCardDraw()
                            }
                            if (position1 == 34) {

                            }
                            if (position1 == 35) {
                                if (shortLine.bought == false) {
                                    document.getElementById("place").innerHTML = " Short Line "
                                    document.getElementById("buy").style.display = "block"
                                    document.getElementById("price").innerHTML = " " + shortLine.price
                                }
                                if (shortLine.owner == 2) {
                                    if (railroadsOwned2 == 1) {
                                        cash1 -= 25
                                        cash2 += 25
                                    }
                                    else if (railroadsOwned2 == 2) {
                                        cash1 -= 50
                                        cash2 += 50
                                    }
                                    else if (railroadsOwned2 == 3) {
                                        cash1 -= 100
                                        cash2 += 100
                                    }
                                    else if (railroadsOwned2 == 4) {
                                        cash1 -= 200
                                        cash2 += 200
                                    }
                                }
                                else if (shortLine.owner == 3) {
                                    if (railroadsOwned3 == 1) {
                                        cash1 -= 25
                                        cash3 += 25
                                    }
                                    else if (railroadsOwned3 == 2) {
                                        cash1 -= 50
                                        cash3 += 50
                                    }
                                    else if (railroadsOwned3 == 3) {
                                        cash1 -= 100
                                        cash3 += 100
                                    }
                                    else if (railroadsOwned3 == 4) {
                                        cash1 -= 200
                                        cash3 += 200
                                    }
                                }
                                else if (shortLine.owner == 4) {
                                    if (railroadsOwned4 == 1) {
                                        cash1 -= 25
                                        cash4 += 25
                                    }
                                    else if (railroadsOwned4 == 2) {
                                        cash1 -= 50
                                        cash4 += 50
                                    }
                                    else if (railroadsOwned4 == 3) {
                                        cash1 -= 100
                                        cash4 += 100
                                    }
                                    else if (railroadsOwned4 == 4) {
                                        cash1 -= 200
                                        cash4 += 200
                                    }
                                }
                            }
                            if (position1 == 36) {
                                chanceCardDraw()
                            }
                            if (position1 == 37) {

                            }
                            if (position1 == 38) {
                                cash1 -= luxuryTax.taxAmount
                                freeParking.collectedTax += luxuryTax.taxAmount
                            }
                            if (position1 == 39) {
                                if (boardwalk.bought == false) {

                                }
                                else if (boardwalk.owner == 1) {

                                }
                                else if (boardwalk.owner == 2) {

                                }
                                else if (boardwalk.owner == 3) {

                                }
                                else if (boardwalk.owner == 4) {
                                    
                                }
                            }
                        }, 500);
                    }
                }
            }
            else if (double) {
                bankruptCheck()
                roll = false
                document.getElementById("pay").style.display = "none"
                document.getElementById("house").style.display = "none"
                document.getElementById("buy").style.display = "none"
            }
            else {
                bankruptCheck()
                if (inJail1 > 0) inJail1--
                turn1 = false
                roll = false
                turn1over = true
            }
        }
        if (turn1over) {
            turn1over = false
            rollDone = false
            if (player2enter && bankrupt2 == false) turn2 = true
            else if (player3enter && bankrupt3 == false) turn3 = true
            else if (player4enter && bankrupt4 == false) turn4 = true
        }
        if (turn2) {
            if (roll == true) {

            } else {
                turn2 = false
                roll = false
                turn2over = true
            }
        }
        if (turn2over) {
            turn2over = false
            rollDone = false
            if (player3enter) turn3 = true
            else if (player4enter) turn4 = true
            else if (player1enter) turn1 = true
        }
        if (turn3) {
            if (roll == true) {

            } else {
                turn3 = false
                roll = false
                turn3over = true
            }
        }
        if (turn3over) {
            turn3over = false
            rollDone = false
            if (player4enter) turn4 = true
            else if (player1enter) turn1 = true
            else if (player2enter) turn2 = true
        }
        if (turn4) {
            if (roll == true) {

            } else {
                turn4 = false
                rollDone = false
                turn4over = true
            }
        }
        if (turn4over) {
            turn4over = false
            rollDone = false
            if (player1enter) turn1 = true
            else if (player2enter) turn2 = true
            else if (player3enter) turn3 = true
        }
    }
    function aliveCheck() {
        if (alive) {
            draw()
            pastGo()
            move()
        }
        // else if () {
        //     ctx.beginPath()
        //     ctx.fillStyle = "black"
        //     ctx.fillRect(0,0,canvas.width,canvas.height)
        //     ctx.closePath()
        //     document.getElementById("reset").style.display = "block"
        // }
    }
    setInterval(aliveCheck, 30)
}
reset = document.getElementById("reset")
reset.onclick = function () {
    begin()
    document.getElementById("reset").style.display = "none"
}