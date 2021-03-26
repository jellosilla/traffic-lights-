let traffic = 0
let yellow = 0
let walking = 0
input.onButtonPressed(Button.A, function () {
    // on the yellow there is 4 seconds of you slowing down 
    while (true) {
        traffic = 0
        if (traffic >= 0) {
            pins.digitalWritePin(DigitalPin.P0, 1)
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
            traffic = 4
            while (traffic >= 0) {
                basic.showNumber(traffic)
                traffic += -1
                basic.pause(100)
            }
            pins.digitalWritePin(DigitalPin.P1, 0)
            // on red you will have to wit for 4 seconds it will go back to green light  
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
            pins.digitalWritePin(DigitalPin.P2, 0)
            basic.showString("don't walk ")
        } else {
            basic.clearScreen()
        }
    }
})
input.onButtonPressed(Button.AB, function () {
    yellow = 15
    while (yellow >= 1) {
        basic.showNumber(yellow)
        walking += -1
        basic.pause(100)
        pins.digitalWritePin(DigitalPin.P0, 1)
        basic.pause(100)
        pins.digitalWritePin(DigitalPin.P0, 1)
        basic.pause(100)
    }
})
// when a pressed you will have 15second to walk across and after that the screen will be cleared and after that it will go back to the cycle of the RYG forever 
input.onButtonPressed(Button.B, function () {
    traffic += 1
    if (traffic >= 1) {
        walking = 15
        while (true) {
            pins.digitalWritePin(DigitalPin.P1, 1)
            basic.showNumber(walking)
            walking += -1
            basic.pause(100)
        }
        basic.showLeds(`
            . # # # .
            # # . # #
            # . # . #
            # # . # #
            . # # # .
            `)
    }
})
