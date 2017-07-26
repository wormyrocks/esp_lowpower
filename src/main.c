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
  touch_pad_read(TOUCH_PAD_NUM0, &val); // gpio4, make this configurable
  return val;
}

void esp_deep_sleep_touchpad(int pin){
  touch_pad_config(TOUCH_PAD_NUM0, 700);
  esp_deep_sleep_enable_touchpad_wakeup();
  esp_wifi_stop();
  esp_deep_sleep_start();
}
// void esp_deep_sleep_init(int pin){
//   rtc_gpio_deinit(pin);
// }


 // * Make sure relevant WiFi and BT stack functions are called to close any
 // * connections and deinitialize the peripherals. These include:
 // *     - esp_bluedroid_disable
 // *     - esp_bt_controller_disable
 // *     - esp_wifi_stop