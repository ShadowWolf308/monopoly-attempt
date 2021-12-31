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
    var go, chance1, chance2, chance3, communityChest1, communityChest2, communityChest3, incomeTax, luxuryTax, freeParking, jail, goToJail, readingRailroad, pennsylvaniaRailroad, bAndORailroad, shortLine, utilityFull, electricCompany, waterWorks, brownStreetsFull, mediteraneanAvenue, balticAvenue, lightblueStreetsFull, orientalAvenue, vermontAvenue, connecticutAvenue, pinkStreetsFull, stCharlesPlace, statesAvenue, virginiaAvenue, orangeStreetsFull, stJamesPlace, tennesseeAvenue, newYorkAvenue, redStreetsFull, kentuckyAvenue, indianaAvenue, illinoisAvenue, yellowStreetsFull, atlanticAvenue, ventnorAvenue, marvinGardens, greenStreetsFull, pacificAvenue, northCarolinaAvenue, pennsylvaniaAvenue, blueStreetsFull, parkPlace, boardwalk
    var position1, position2, position3, position4, cash1, cash2, cash3, cash4, turn1, turn2, turn3, turn4, taxTurn1, taxTurn2, taxTurn3, taxTurn4, x1, y1, x2, y2, x3, y3, x4, y4, width, height, roll, yes, no, rollDone, turn1over, turn2over, turn3over, turn4over, rollAmount1, rollAmount2, doubleAmount, double, inJail1, inJail2, inJail3, inJail4, bankrupt1, bankrupt2, bankrupt3, bankrupt4
    cash1 = 2500
    cash2 = 2500
    cash3 = 2500
    cash4 = 2500
    turn1 = false
    turn2 = false
    turn3 = false
    turn4 = false
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
    communityChest1 = {
        'place': 2
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
    chance1 = {
        'place': 7,
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
    jail = {
        'place': 10
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
    communityChest2 = {
        'place': 17,
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
    chance2 = {
        'place': 22
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
    goToJail = {
        'place': 30
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
    communityChest3 = {
        'place': 33
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
    chance3 = {
        'place': 36
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
    function tax() {
        if (position1 == incomeTax.place && taxTurn1 == true) {
            cash1 -= incomeTax.taxAmount
            freeParking.collectedTax += incomeTax.taxAmount
            taxTurn1 = false
        }
        if (position1 == luxuryTax.place && taxTurn1 == true) {
            cash1 -= luxuryTax.taxAmount
            freeParking.collectedTax += luxuryTax.taxAmount
            taxTurn1 = false
        }
        if (position1 == freeParking.place && taxTurn1 == true) {
            cash1 += freeParking.collectedTax
            freeParking.collectedTax = 0
            taxTurn1 = false
        }
        if (position2 == incomeTax.place && taxTurn2 == true) {
            cash2 -= incomeTax.taxAmount
            freeParking.collectedTax += incomeTax.taxAmount
            taxTurn2 = false
        }
        if (position2 == luxuryTax.place && taxTurn2 == true) {
            cash2 -= luxuryTax.taxAmount
            freeParking.collectedTax += luxuryTax.taxAmount
            taxTurn2 = false
        }
        if (position2 == freeParking.place && taxTurn2 == true) {
            cash2 += freeParking.collectedTax
            freeParking.collectedTax = 0
            taxTurn2 = false
        }
        if (position3 == incomeTax.place && taxTurn3 == true) {
            cash3 -= incomeTax.taxAmount
            freeParking.collectedTax += incomeTax.taxAmount
            taxTurn3 = false
        }
        if (position3 == luxuryTax.place && taxTurn3 == true) {
            cash1 -= luxuryTax.taxAmount
            freeParking.collectedTax += luxuryTax.taxAmount
            taxTurn3 = false
        }
        if (position3 == freeParking.place && taxTurn3 == true) {
            cash3 += freeParking.collectedTax
            freeParking.collectedTax = 0
            taxTurn3 = false
        }
        if (position4 == incomeTax.place && taxTurn4 == true) {
            cash1 -= incomeTax.taxAmount
            freeParking.collectedTax += incomeTax.taxAmount
            taxTurn4 = false
        }
        if (position4 == luxuryTax.place && taxTurn4 == true) {
            cash1 -= luxuryTax.taxAmount
            freeParking.collectedTax += luxuryTax.taxAmount
            taxTurn4 = false
        }
        if (position4 == freeParking.place && taxTurn4 == true) {
            cash1 += freeParking.collectedTax
            freeParking.collectedTax = 0
            taxTurn4 = false
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
            if (roll == true) {
                if (rollDone == false) {
                    rollDone = true
                    rollAmount1 = Math.floor(Math.random() * 6) + 1
                    rollAmount2 = Math.floor(Math.random() * 6) + 1
                    position1 += rollAmount1 + rollAmount2
                    document.getElementById("roll").style.display = block
                    document.getElementById("rollamount1").innerHTML = rollAmount1
                    document.getElementById("rollamount2").innerHTML = rollAmount2
                    if (rollAmount1 == rollAmount2) {
                        double = true
                        doubleAmount += 1
                        inJail1 = 0
                        if (doubleAmount = 3) {
                            position1 = 10
                            inJail1 = 3
                        }
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
                                else if (mediteraneanAvenue.owner == 1) {

                                }
                                else if (mediteraneanAvenue.owner == 2) {
                                    document.getElementById("pay").style.display = "block"
                                    document.getElementById("owner").innerHTML = " 2"
                                    if (mediteraneanAvenue.houseAmount == 0) {
                                        document.getElementById("payment").innerHTML = " 2"
                                        if (cash1 - 2 >= 0) {
                                            cash1 -= 2
                                            cash2 += 2
                                        } else {
                                            cash2 += cash1
                                            cash1 = 0
                                            bankrupt1 = true
                                        }
                                    }
                                    else if (mediteraneanAvenue.houseAmount == 1) {
                                        document.getElementById("payment").innerHTML = " 10"
                                        if (cash1 - 10 >= 0) {
                                            cash1 -= 10
                                            cash2 += 10
                                        } else {
                                            cash2 += cash1
                                            cash1 = 0
                                            bankrupt1 = true
                                        }
                                    }
                                    else if (mediteraneanAvenue.houseAmount == 2) {
                                        document.getElementById("payment").innerHTML = " 30"
                                        if (cash1 - 30 >= 0) {
                                            cash1 -= 30
                                            cash2 += 30
                                        } else {
                                            cash2 += cash1
                                            cash1 = 0
                                            bankrupt1 = true
                                        }
                                    }
                                    else if (mediteraneanAvenue.houseAmount == 3) {
                                        document.getElementById("payment").innerHTML = " 90"
                                        if (cash1 - 90 >= 0) {
                                            cash1 -= 90
                                            cash2 += 90
                                        } else {
                                            cash2 += cash1
                                            cash1 = 0
                                            bankrupt1 = true
                                        }
                                    }
                                    else if (mediteraneanAvenue.houseAmount == 4) {
                                        document.getElementById("payment").innerHTML = " 160"
                                        if (cash1 - 160 >= 0) {
                                            cash1 -= 160
                                            cash2 += 160
                                        } else {
                                            cash2 += cash1
                                            cash1 = 0
                                            bankrupt1 = true
                                        }
                                    }
                                    else if (mediteraneanAvenue.houseAmount == 5) {
                                        document.getElementById("payment").innerHTML = " 250"
                                        if (cash1 - 250 >= 0) {
                                            cash1 -= 250
                                            cash2 += 250
                                        } else {
                                            cash2 += cash1
                                            cash1 = 0
                                            bankrupt1 = true
                                        }
                                    }
                                }
                                else if (mediteraneanAvenue.owner == 3) {
                                    document.getElementById("pay").style.display = "block"
                                    document.getElementById("owner").innerHTML = " 3"
                                    if (mediteraneanAvenue.houseAmount == 0) {
                                        document.getElementById("payment").innerHTML = " 2"
                                        if (cash1 - 2 >= 0) {
                                            cash1 -= 2
                                            cash3 += 2
                                        } else {
                                            cash3 += cash1
                                            cash1 = 0
                                            bankrupt1 = true
                                        }
                                    }
                                    else if (mediteraneanAvenue.houseAmount == 1) {
                                        document.getElementById("payment").innerHTML = " 10"
                                        if (cash1 - 10 >= 0) {
                                            cash1 -= 10
                                            cash3 += 10
                                        } else {
                                            cash3 += cash1
                                            cash1 = 0
                                            bankrupt1 = true
                                        }
                                    }
                                    else if (mediteraneanAvenue.houseAmount == 2) {
                                        document.getElementById("payment").innerHTML = " 30"
                                        if (cash1 - 30 >= 0) {
                                            cash1 -= 30
                                            cash3 += 30
                                        } else {
                                            cash3 += cash1
                                            cash1 = 0
                                            bankrupt1 = true
                                        }
                                    }
                                    else if (mediteraneanAvenue.houseAmount == 3) {
                                        document.getElementById("payment").innerHTML = " 90"
                                        if (cash1 - 90 >= 0) {
                                            cash1 -= 90
                                            cash3 += 90
                                        } else {
                                            cash3 += cash1
                                            cash1 = 0
                                            bankrupt1 = true
                                        }
                                    }
                                    else if (mediteraneanAvenue.houseAmount == 4) {
                                        document.getElementById("payment").innerHTML = " 160"
                                        if (cash1 - 160 >= 0) {
                                            cash1 -= 160
                                            cash3 += 160
                                        } else {
                                            cash3 += cash1
                                            cash1 = 0
                                            bankrupt1 = true
                                        }
                                    }
                                    else if (mediteraneanAvenue.houseAmount == 5) {
                                        document.getElementById("payment").innerHTML = " 250"
                                        if (cash1 - 250 >= 0) {
                                            cash1 -= 250
                                            cash3 += 250
                                        } else {
                                            cash3 += cash1
                                            cash1 = 0
                                            bankrupt1 = true
                                        }
                                    }
                                }
                                else if (mediteraneanAvenue.owner == 4) {
                                    document.getElementById("pay").style.display = "block"
                                    document.getElementById("owner").innerHTML = " 4"
                                    if (mediteraneanAvenue.houseAmount == 0) {
                                        document.getElementById("payment").innerHTML = " 2"
                                        if (cash1 - 2 >= 0) {
                                            cash1 -= 2
                                            cash4 += 2
                                        } else {
                                            cash4 += cash1
                                            cash1 = 0
                                            bankrupt1 = true
                                        }
                                    }
                                    else if (mediteraneanAvenue.houseAmount == 1) {
                                        document.getElementById("payment").innerHTML = " 10"
                                        if (cash1 - 10 >= 0) {
                                            cash1 -= 10
                                            cash4 += 10
                                        } else {
                                            cash4 += cash1
                                            cash1 = 0
                                            bankrupt1 = true
                                        }
                                    }
                                    else if (mediteraneanAvenue.houseAmount == 2) {
                                        document.getElementById("payment").innerHTML = " 30"
                                        if (cash1 - 30 >= 0) {
                                            cash1 -= 30
                                            cash4 += 30
                                        } else {
                                            cash4 += cash1
                                            cash1 = 0
                                            bankrupt1 = true
                                        }
                                    }
                                    else if (mediteraneanAvenue.houseAmount == 3) {
                                        document.getElementById("payment").innerHTML = " 90"
                                        if (cash1 - 90 >= 0) {
                                            cash1 -= 90
                                            cash4 += 90
                                        } else {
                                            cash4 += cash1
                                            cash1 = 0
                                            bankrupt1 = true
                                        }
                                    }
                                    else if (mediteraneanAvenue.houseAmount == 4) {
                                        document.getElementById("payment").innerHTML = " 160"
                                        if (cash1 - 160 >= 0) {
                                            cash1 -= 160
                                            cash4 += 160
                                        } else {
                                            cash4 += cash1
                                            cash1 = 0
                                            bankrupt1 = true
                                        }
                                    }
                                    else if (mediteraneanAvenue.houseAmount == 5) {
                                        document.getElementById("payment").innerHTML = " 250"
                                        if (cash1 - 250 >= 0) {
                                            cash1 -= 250
                                            cash4 += 250
                                        } else {
                                            cash4 += cash1
                                            cash1 = 0
                                            bankrupt1 = true
                                        }
                                    }
                                }
                            }
                            if (position1 == 2) {

                            }
                            if (position1 == 3) {

                            }
                            if (position1 == 4) {

                            }
                            if (position1 == 5) {

                            }
                            if (position1 == 6) {

                            }
                            if (position1 == 7) {

                            }
                            if (position1 == 8) {

                            }
                            if (position1 == 9) {

                            }
                            if (position1 == 10) {

                            }
                            if (position1 == 11) {

                            }
                            if (position1 == 12) {

                            }
                            if (position1 == 13) {

                            }
                            if (position1 == 14) {

                            }
                            if (position1 == 15) {

                            }
                            if (position1 == 16) {

                            }
                            if (position1 == 17) {

                            }
                            if (position1 == 18) {

                            }
                            if (position1 == 19) {

                            }
                            if (position1 == 20) {

                            }
                            if (position1 == 21) {

                            }
                            if (position1 == 22) {

                            }
                            if (position1 == 23) {

                            }
                            if (position1 == 24) {

                            }
                            if (position1 == 25) {

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

                            }
                            if (position1 == 31) {

                            }
                            if (position1 == 32) {

                            }
                            if (position1 == 33) {

                            }
                            if (position1 == 34) {

                            }
                            if (position1 == 35) {

                            }
                            if (position1 == 36) {

                            }
                            if (position1 == 37) {

                            }
                            if (position1 == 38) {

                            }
                            if (position1 == 30) {

                            }
                        }, 500);
                    }
                }
            }
            else if (double) {
                roll = false
            }
            else {
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
            tax()
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