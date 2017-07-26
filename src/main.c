#include "mgos.h"
#include <stdio.h>
#include <esp_deep_sleep.h>
#include "esp_wifi.h"

void print_from_c(void){
  printf("Hello from C\n");
}

void esp_deep_sleep_ext0(int pin, int level) {
  esp_deep_sleep_enable_ext0_wakeup(pin, level);
  esp_wifi_stop();
  esp_deep_sleep_start();
}

void touchpad_init(){
  touch_pad_init();
}

int print_touchpad_value(int pin){
  uint16_t val=0;
  touch_pad_read(pin, &val);
  return val;
}

void esp_deep_sleep_touchpad(int pin){
  touch_pad_config(pin, 700);
  esp_deep_sleep_enable_touchpad_wakeup();
  esp_wifi_stop();
  esp_deep_sleep_start();
}

// This doesn't work ;_;

// void esp_deep_sleep_init(int pin){
//   rtc_gpio_deinit(pin);
// }