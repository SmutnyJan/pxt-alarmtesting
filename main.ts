alarm.onAlarm(function () {
    music.playTone(262, music.beat(BeatFraction.Whole))
})
radio.onReceivedString(function (receivedString) {
    vysledek = alarm.receiveBroadcast(receivedString)
    if (vysledek == true) {
        basic.showLeds(`
            . . # . .
            . # # # .
            . # # # .
            # # # # #
            . . # . .
            `)
    } else {
        basic.showLeds(`
            . . # . .
            . # # # .
            . # # # .
            # # # # #
            . . . . .
            `)
    }
})
let vysledek = false
basic.showLeds(`
    . . # . .
    . # # # .
    . # # # .
    # # # # #
    . . . . .
    `)
radio.setGroup(5)
