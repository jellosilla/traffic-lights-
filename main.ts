// when a button is pressed the cycle will be GYR and after red it will show "don't walk"
input.onButtonPressed(Button.A, function () {
    if (traffic == 1) {
        while (true) {
            pins.digitalWritePin(DigitalPin.P0, 1)
            // when i press b one time ths code will put an arrow for about 10 to 12 seconds 
            basic.showLeds(`
                . . # . .
                . # # # .
                # # # # #
                . . # . .
                . . # . .
                `)
            basic.pause(2000)
            basic.showLeds(`
                . . # . .
                . # # # .
                # # # # #
                . . # . .
                . . # . .
                `)
            basic.pause(2000)
            basic.showLeds(`
                . . # . .
                . # # # .
                # # # # #
                . . # . .
                . . # . .
                `)
            basic.pause(2000)
            basic.showLeds(`
                . . # . .
                . # # # .
                # # # # #
                . . # . .
                . . # . .
                `)
            basic.pause(2000)
            basic.showLeds(`
                . . # . .
                . # # # .
                # # # # #
                . . # . .
                . . # . .
                `)
            pins.digitalWritePin(DigitalPin.P0, 0)
            pins.digitalWritePin(DigitalPin.P1, 1)
            basic.pause(2000)
            traffic = 10
            while (traffic >= 0) {
                basic.showNumber(traffic)
                traffic += -1
                basic.pause(100)
            }
            pins.digitalWritePin(DigitalPin.P1, 0)
            // on red you will have to wait for 13 to 15 seconds after the time  it will go bac to green
            pins.digitalWritePin(DigitalPin.P2, 1)
            basic.pause(100)
            basic.showLeds(`
                # # # # #
                # # # # #
                # # # # #
                # # # # #
                # # # # #
                `)
            basic.pause(2000)
            basic.showLeds(`
                # # # # #
                # # # # #
                # # # # #
                # # # # #
                # # # # #
                `)
            basic.pause(2000)
            basic.showLeds(`
                # # # # #
                # # # # #
                # # # # #
                # # # # #
                # # # # #
                `)
            basic.pause(2000)
            basic.showLeds(`
                # # # # #
                # # # # #
                # # # # #
                # # # # #
                # # # # #
                `)
            basic.pause(2000)
            basic.showLeds(`
                # # # # #
                # # # # #
                # # # # #
                # # # # #
                # # # # #
                `)
            basic.pause(2000)
            basic.showLeds(`
                # # # # #
                # # # # #
                # # # # #
                # # # # #
                # # # # #
                `)
            pins.digitalWritePin(DigitalPin.P2, 0)
            basic.showString("STOP")
        }
    } else if (traffic == 2) {
        walking = 15
        while (walking >= 1) {
            pins.digitalWritePin(DigitalPin.P0, 1)
            basic.showNumber(walking)
            walking += -1
            basic.pause(500)
        }
        basic.showString("STOP WALKING")
        pins.digitalWritePin(DigitalPin.P0, 0)
    } else if (traffic == 3) {
        yellow = 15
        while (yellow >= 0) {
            basic.showNumber(yellow)
            yellow += -1
            basic.pause(100)
            pins.digitalWritePin(DigitalPin.P0, 1)
            basic.pause(100)
            pins.digitalWritePin(DigitalPin.P0, 0)
            basic.pause(100)
        }
    } else if (traffic == 4) {
        // when B is pressed 4 time this code wil be the to active and it will flash red 
        red = 15
        while (red >= 0) {
            basic.showNumber(red)
            red += -1
            basic.pause(100)
            pins.digitalWritePin(DigitalPin.P2, 1)
            basic.pause(100)
            pins.digitalWritePin(DigitalPin.P2, 0)
            basic.pause(100)
        }
    }
    basic.clearScreen()
})
// when b pressed you will have 15seconds to walk across and after that there will be a sign "STOP"
input.onButtonPressed(Button.B, function () {
    traffic += 1
})
let red = 0
let yellow = 0
let walking = 0
let traffic = 0
traffic = 0
basic.showLeds(`
    . . # . .
    . . # . .
    . . # . .
    . # # # .
    . . # . .
    `)
basic.pause(100)
basic.showLeds(`
    . . # . .
    . . # . .
    . # # # .
    . . # . .
    . . . . .
    `)
basic.pause(100)
basic.showLeds(`
    . . # . .
    . # # # .
    . . # . .
    . . . . .
    . . . . .
    `)
basic.pause(100)
basic.showLeds(`
    . # # # .
    . . # . .
    . . . . .
    . . . . .
    . . . . .
    `)
basic.pause(100)
basic.showLeds(`
    . . # . .
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    `)
basic.pause(100)
basic.showIcon(IconNames.Happy)
basic.pause(100)
basic.clearScreen()
