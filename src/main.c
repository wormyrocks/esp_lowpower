#include "mgos.h"
#include <stdio.h>
#include "mjs.h"
#include <esp_deep_sleep.h>

enum mgos_app_init_result mgos_app_init(void) {
  return MGOS_APP_INIT_SUCCESS;
}

void print_from_c(void){
  printf("Hello from C\n");
}

void esp_deep_sleep_ext0(int pin, int level) {
  esp_deep_sleep_enable_ext0_wakeup(pin, level);
  esp_deep_sleep_start();
}
