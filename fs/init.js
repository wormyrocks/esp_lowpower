load('api_gpio.js');
load('api_timer.js');
load('api_lowpower.js');

let led=17;
let print_from_c = ffi('void print_from_c(void)');
let timer_id=0;
let button=0;

// If we have just woken up from deep sleep, make sure to configure pin 0
// as GPIO rather than RTC

// initDeepSleep(button);
lowpower.initTouchpad();

// Blink built-in LED every second
GPIO.set_mode(led, GPIO.MODE_OUTPUT);
GPIO.set_mode(button, GPIO.MODE_INPUT);

Timer.set(1000 /* 1 sec */, true /* repeat */, function() {
  let value = GPIO.toggle(led);
  print(lowpower.readTouchpad(4));
}, null);

GPIO.set_button_handler(button, GPIO.PULL_UP, GPIO.INT_EDGE_NEG, 200, function() {
  print('Going down for deep sleep in 5 seconds - press button again to prolong the inevitable.');
  if (timer_id !== 0){
    Timer.del(timer_id);
  }
  timer_id = Timer.set(5000, false, function() {
    print("I've seen things you people wouldn't believe. Attack ships on fire off the shoulder of Orion.\nI watched C-beams glitter in the dark near the Tannhauser Gate.\nAll those moments will be lost in time, like tears in rain.\nTime to die.\n");
    lowpower.wakeOnTouch(4);
    // lowpower.deepSleepExt0(button,0);
  }, null);
}, null);

