input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 100; index++) {
        music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Entertainer), music.PlaybackMode.InBackground)
        basic.showLeds(`
            . . . . #
            . . . . #
            . . . . #
            . . . . #
            . . . . #
            `)
        basic.showLeds(`
            . . . . #
            . . . . #
            . . . . #
            # . . . #
            . . . . #
            `)
        basic.showLeds(`
            . . . . #
            . . . . #
            # . . . #
            # # . . #
            # . . . #
            `)
        basic.showLeds(`
            . . . . #
            . . . . #
            # # . . #
            # # # . #
            . # . . #
            `)
        basic.showLeds(`
            . . . . #
            . . . . #
            # # # . #
            # # # # #
            # . # . #
            `)
        basic.showLeds(`
            . . . . #
            . . . . #
            . # # # #
            # # # # #
            . # . # #
            `)
        basic.showLeds(`
            . . . . #
            . . . . #
            . . . # #
            . . # # #
            . . . # #
            `)
        basic.showLeds(`
            # . # . #
            . # # # .
            # # . # #
            . # # # .
            # . # . #
            `)
        basic.showLeds(`
            . # . # .
            # . # . #
            . # # # .
            # . # . #
            . # . # .
            `)
    }
})
