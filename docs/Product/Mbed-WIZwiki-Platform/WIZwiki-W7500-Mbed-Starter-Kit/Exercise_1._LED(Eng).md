---
id: exercise_1_led_eng
title: Exercise 1. LED(Eng)
date: 2020-04-08
---

# Blinking LED

## Outline

Users can connect the mbed platform board with the PC and compile
online. Users can also blink the LED using the example program provided
for the platform board.

## What you need

  - WIZwiki-W7500 board
  - USB cable

## Log on to mbed website

Please log on to 🌎[mbed website](https://developer.mbed.org)mbed website
for further testing. If you haven’t signed up yet, please sign up.
[Sign-up at ARM mbed Developer
Site](sign_up_at_arm_mbed_eng)

#### Connect the PC with mbed platform board

Connect the PC with WIZwiki-W7500 using the USB cable.
<a target="_blank" href={require("/img/products/wizwiki_mbed_kit/kit_en/bd_usb_connected.jpg").default}><img src={require("/img/products/wizwiki_mbed_kit/kit_en/bd_usb_connected.jpg").default} alt=""/></a> The PC will
read the driver like a USB driver.

#### Open the mbed compiler

Click “Open mbed Compiler” as shown below.

<a target="_blank" href={require("/img/products/wizwiki_mbed_kit/kit_en/105_wizwiki.png").default}><img src={require("/img/products/wizwiki_mbed_kit/kit_en/105_wizwiki.png").default} alt=""/></a>

A pop-up will appear and “Blinky LED Hello World” will be set as the
template and “mbed\_blinky” will be set as the Default program name.

<a target="_blank" href={require("/img/products/wizwiki_mbed_kit/kit_en/106_program_name.png").default}><img src={require("/img/products/wizwiki_mbed_kit/kit_en/106_program_name.png").default} alt=""/></a>

Click OK and the mbed\_blinky program will be copied to my Program
Workspace.

<a target="_blank" href={require("/img/products/wizwiki_mbed_kit/kit_en/107_mbed_blinky_main.png").default}><img src={require("/img/products/wizwiki_mbed_kit/kit_en/107_mbed_blinky_main.png").default} alt=""/></a>

Clik the Compile icon from the menu to compile the example code. Success
message will appear below if an error is not occurred during compiling.

<a target="_blank" href={require("/img/products/wizwiki_mbed_kit/kit_en/108_compile_end.png").default}><img src={require("/img/products/wizwiki_mbed_kit/kit_en/108_compile_end.png").default} alt=""/></a>

Once compiling is successful, download the
mbed\_blinky\_WIZWIKI-W7500.bin file to the PC.

<a target="_blank" href={require("/img/products/wizwiki_mbed_kit/kit_en/109_bin.png").default}><img src={require("/img/products/wizwiki_mbed_kit/kit_en/109_bin.png").default} alt=""/></a>
### Example Code

``` c
#include "mbed.h"

DigitalOut myled(LED1);

int main(/) {
    while(1) {
        myled = 1;
        wait(0.2);
        myled = 0;
        wait(0.2);
    }
}
```

### Run exercise and Check test result

Copy and paste the mbed\_blinky\_WIZWIKI\_W7500.bin file to the mbed
driver (E: or F:) <a target="_blank" href={require("/img/products/wizwiki_mbed_kit/kit_en/110_copy.png").default}><img src={require("/img/products/wizwiki_mbed_kit/kit_en/110_copy.png").default} alt=""/></a>

Then press the reset pin. The LED (blue circle) shown in the below image
will blink every 0.2 second. <a target="_blank" href={require("/img/products/wizwiki_mbed_kit/kit_en/wizwiki_led1.png").default}><img src={require("/img/products/wizwiki_mbed_kit/kit_en/wizwiki_led1.png").default} alt="WIZwiki-W7500 LED1"/></a>

If the LED blinks successfully, it means that the example code is
operating on the WIZwiki-W7500 board. This exercise making the LED blink
is called “Hello World.”

Users can test with different time value of the wait function.

## Related Links

   * [Starter Kit Tutorial](tutorial_eng)