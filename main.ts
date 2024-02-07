if (iscmons.button_is_pressed(pins.LED)) {
    iscmons.servo_turn(pins.LED, 0, 2)
    for (let index = 0; index < 1; index++) {
        iscmons.servo_turn(pins.LED, 100, 15)
    }
}
