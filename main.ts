function verloren () {
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
    basic.showLeds(`
        . # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # .
        `)
    basic.showLeds(`
        . . # # #
        # # # # #
        # # # # #
        # # # # #
        # # # . .
        `)
    basic.showLeds(`
        . . . # #
        # # # # #
        # # # # #
        # # # # #
        # # . . .
        `)
    basic.showLeds(`
        . . . . #
        # # # # #
        # # # # #
        # # # # #
        # . . . .
        `)
    basic.showLeds(`
        . . . . .
        # # # # #
        # # # # #
        # # # # #
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        # # # # .
        # # # # #
        . # # # #
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        # # # # .
        . # # # .
        . # # # #
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . # # # .
        . # # # .
        . # # # .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . # # .
        . # # # .
        . # # . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . # .
        . # # # .
        . # . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . # # # .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
}
input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    eimer.change(LedSpriteProperty.X, -1)
})
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    eimer.change(LedSpriteProperty.X, 1)
})
let eimer: game.LedSprite = null
basic.setLedColor(0x00ff00)
let wasser = game.createSprite(2, 0)
eimer = game.createSprite(2, 4)
let leben = 5
let spielstand = 0
music.setVolume(70)
basic.forever(function () {
    if (leben == 0) {
        game.pause()
        basic.clearScreen()
        verloren()
        basic.showString("Game over!")
        basic.showString("Punkte:" + spielstand)
        leben = 3
        basic.setLedColor(0x00ff00)
        game.resume()
    }
    if (wasser.get(LedSpriteProperty.Y) < 4) {
        wasser.change(LedSpriteProperty.Y, 1)
    } else {
        if (wasser.isTouching(eimer)) {
            if (leben == 3) {
                basic.setLedColor(0x00ff00)
                spielstand += 1
                music.playTone(494, music.beat(BeatFraction.Whole))
                music.playTone(523, music.beat(BeatFraction.Whole))
                music.playTone(554, music.beat(BeatFraction.Whole))
            }
            if (leben < 3) {
                spielstand += 1
                music.playTone(494, music.beat(BeatFraction.Whole))
                music.playTone(523, music.beat(BeatFraction.Whole))
                music.playTone(554, music.beat(BeatFraction.Whole))
            }
        } else {
            leben += -1
            music.playTone(294, music.beat(BeatFraction.Whole))
            music.playTone(262, music.beat(BeatFraction.Whole))
            if (leben == 2) {
                basic.setLedColors(0x00ff00, 0x00ff00, 0xff0000)
            }
            if (leben == 1) {
                basic.setLedColors(0x00ff00, 0xff0000, 0xff0000)
            }
            if (leben == 0) {
                basic.setLedColors(0xff0000, 0xff0000, 0xff0000)
            }
        }
        wasser.set(LedSpriteProperty.X, randint(0, 4))
        wasser.set(LedSpriteProperty.Y, 0)
    }
    basic.pause(500)
})
