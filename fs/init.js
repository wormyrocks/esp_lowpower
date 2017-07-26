load('api_gpio.js');
load('api_timer.js');
load('api_lowpower.js');

let led=17;
let timer_id=0;
let button=0;

// If we have just woken up from deep sleep, make sure to configure pin 0
// as GPIO rather than RTC

// this doesn't work yet!!

// initDeepSleep(button);

// initialize touchpad input
lowpower.initTouchpad();

// Blink LED connected to GPIO17 every second
GPIO.set_mode(led, GPIO.MODE_OUTPUT);
GPIO.set_mode(button, GPIO.MODE_INPUT);

Timer.set(1000, true, function() {
  // blinky
  let value = GPIO.toggle(led);

  // use this for touchpad threshold calibration
  // TOUCHPAD_NUM0 = GPIO4, btw
  print(lowpower.readTouchpad(0));
}, null);

GPIO.set_button_handler(button, GPIO.PULL_UP, GPIO.INT_EDGE_NEG, 200, function() {
  print('Going down for deep sleep in 5 seconds - press button again to prolong the inevitable.');
  if (timer_id !== 0){
    Timer.del(timer_id);
  }
  timer_id = Timer.set(5000, false, function() {
    print("I've seen things you people wouldn't believe. Attack ships on fire off the shoulder of Orion.");
    print("I watched C-beams glitter in the dark near the Tannhauser Gate.");
    print("All those moments will be lost in time, like tears in rain.");
    print("Time to die.");

    // wake on touch
    lowpower.wakeOnTouch(4);

    // or: wake on button press (only works once because I haven't figured out how to use rtc_gpio_deinit)
    // lowpower.deepSleepExt0(button,0);
  }, null);
}, null);

