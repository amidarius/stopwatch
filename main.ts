let start = 0
let elapsed = 0
input.onButtonPressed(Button.A, function () {
    start = input.runningTime()
})
input.onButtonPressed(Button.AB, function () {
    start = 0
    basic.showNumber(0)
})
input.onButtonPressed(Button.B, function () {
    elapsed = input.runningTime() - start
    basic.showNumber(elapsed / 1000)
})
basic.forever(function () {
    basic.showNumber(0)
})
