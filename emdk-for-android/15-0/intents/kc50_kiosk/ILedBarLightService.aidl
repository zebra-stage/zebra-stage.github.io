// ILedBarLightService.aidl
package com.zebra.ledbarlightservice;
interface ILedBarLightService {
      /**
       * Sets the color of the LED with the specified ID.
       *
       * @param ledId The ID of the LED to control.
       * @param color The color value to set for the LED.
       */
      void setLight(int ledId, int color);
       /**
        * Turns off the LED.
        */
      void setLedOff();
       /**
        * sets the sequence of led to flash with the specific color till the respective times given.
        */
      void setLightSequence(int ledId, int color1, int period1, int color2, int period2);
      /**
       * sets the led sequence to off and display the color specified. If color is not specified, the LED will turn off.
       */
      void setLedSequenceOff(int ledId, int color);


 }



