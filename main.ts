input.onButtonPressed(Button.A, function () {
    pins.servoWritePin(AnalogPin.P0, 0)
    basic.showLeds(`
        . . . . .
        . . . . .
        # . . . #
        . # . # .
        . . # . .
        `)
})
input.onButtonPressed(Button.AB, function () {
    basic.showIcon(IconNames.Diamond)
    pins.servoWritePin(AnalogPin.P0, 90)
})
radio.onReceivedString(function (receivedString) {
    if (receivedString.includes("AB")) {
        control.raiseEvent(
        EventBusSource.MICROBIT_ID_BUTTON_AB,
        EventBusValue.MICROBIT_BUTTON_EVT_CLICK
        )
    } else {
        if (receivedString.includes("A")) {
            control.raiseEvent(
            EventBusSource.MICROBIT_ID_BUTTON_A,
            EventBusValue.MICROBIT_BUTTON_EVT_CLICK
            )
        } else {
            if (receivedString.includes("B")) {
                control.raiseEvent(
                EventBusSource.MICROBIT_ID_BUTTON_B,
                EventBusValue.MICROBIT_BUTTON_EVT_CLICK
                )
            }
        }
    }
})
input.onButtonPressed(Button.B, function () {
    pins.servoWritePin(AnalogPin.P0, 180)
    basic.showLeds(`
        . . # . .
        . # . # .
        # . . . #
        . . . . .
        . . . . .
        `)
})
basic.showString("DLPL")
basic.showIcon(IconNames.Diamond)
radio.setGroup(54)
