#include "mgos.h"

enum mgos_app_init_result mgos_app_init(void) {
  printf("hello world from mgos empty app main.c\n");
  return MGOS_APP_INIT_SUCCESS;
}
