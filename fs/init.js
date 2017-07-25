load('api_gpio.js');
load('api_timer.js');
load('api_lowpower.js');

let led=17;
let print_from_c = ffi('void print_from_c(void)');
let timer_id=0;

// Blink built-in LED every second
GPIO.set_mode(led, GPIO.MODE_OUTPUT);
Timer.set(1000 /* 1 sec */, true /* repeat */, function() {
  let value = GPIO.toggle(led);
  print("print from javascript\n");
  print_from_c();
}, null);

GPIO.set_button_handler(0, GPIO.PULL_UP, GPIO.INT_EDGE_NEG, 200, function() {
  print('Going down for deep sleep in 5 seconds - press button again to prolong the inevitable.');
  if (timer_id !== 0){
    Timer.del(timer_id);
  }
  timer_id = Timer.set(5000, false, function() {
    print("I've seen things you people wouldn't believe. Attack ships on fire off the shoulder of Orion.\nI watched C-beams glitter in the dark near the Tannhauser Gate.\nAll those moments will be lost in time, like tears in rain.\nTime to die.\n");
    lowpower.deepSleepExt0(0,0);
  }, null);
}, null);

