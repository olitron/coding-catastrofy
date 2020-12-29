input.onLogoEvent(TouchButtonEvent.LongPressed, function () {
    basic.showString("Loser wahhh")
})
input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Heart)
    basic.showIcon(IconNames.Skull)
    basic.showIcon(IconNames.Ghost)
})
input.onGesture(Gesture.TiltLeft, function () {
    music.playMelody("C5 G B A F A C5 B ", 120)
})
input.onButtonPressed(Button.AB, function () {
    music.playMelody("C5 G B A F A C5 B ", 120)
    basic.showString("Olitron's the winner!!!")
})
input.onButtonPressed(Button.B, function () {
    basic.showString("Olitron's the best")
})
input.onGesture(Gesture.TiltRight, function () {
    music.playMelody("E B C5 A B G A F ", 120)
})
input.onLogoEvent(TouchButtonEvent.Touched, function () {
    basic.showArrow(ArrowNames.North)
})
music.playMelody("C5 B A G A B C5 - ", 120)
basic.showString("Welcome Olitron")
