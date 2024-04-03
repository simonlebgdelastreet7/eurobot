if (iscmons.button_is_pressed(pins.LED)) {
    iscmons.motor_forward(pins.P16, pins.P20)
    pause(2000)
    iscmons.motor_stop(pins.P16, pins.P20)
}
