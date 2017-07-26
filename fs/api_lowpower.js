let lowpower = {
  // initDeepSleep:  ffi('void esp_deep_sleep_init(int)'),
  deepSleepExt0:  ffi('void esp_deep_sleep_ext0(int, int)'),
  wakeOnTouch:  ffi('void esp_deep_sleep_touchpad(int)'),
  readTouchpad:  ffi('int print_touchpad_value(int)'),
  initTouchpad:  ffi('void touchpad_init(void)'),
};
