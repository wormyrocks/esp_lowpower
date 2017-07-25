#include "mgos.h"
#include <stdio.h>
#include "mjs.h"

enum mgos_app_init_result mgos_app_init(void) {
  return MGOS_APP_INIT_SUCCESS;
}

void print_from_c(void){
  printf("Hello from C\n");
}
