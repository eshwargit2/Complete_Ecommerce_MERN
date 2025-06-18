import React, { useState } from 'react';
import Navbar from './Navbar';
import Footer from '../Footer';

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const Products1 = [
    {
      id: 1,
      img: 'https://projectpoint.in/image/cache/catalog/CFR_Resistor_Kit-1280x720.jpg',
      name: 'Resistors Pack - 49 Values (100 To 1M Ohm)',
      price: '200.0',
      description: `490 Pieces, 49 Values (100 Ohms to 1M Ohms) Assorted, Carbon Film Resistors.`,
      Availability: 'Available 6 pcs In Stock',
      Sold: '5 pcs',
      Weight: '154.00g ±5%',
      Category: 'Resistors Assorted-Kits',
    },
    {
      id: 2,
      img: 'https://hubtronics.in/image/cache/catalog/RLC%20Images/MFR-550x550.jpg',
      name: 'MFR 0.25W 150Ω 150Ohm 1% Tolerance Through',
      price: '200.0',
      description: `Great Kit FOR STUDENTS AND HOBBYIST.`,
      Availability: 'Available 6 pcs In Stock',
      Sold: '5 pcs',
      Weight: '154.00g ±5%',
      Category: 'Resistors Assorted-Kits',
    },
    {
      id: 3,
      img: 'https://m.media-amazon.com/images/I/517sCkbv+nL._AC_UF1000,1000_QL80_.jpg',
      name: 'Resistor kit pack',
      price: '200.0',
      description: `150 Pieces Total Resistors, 30 Different values Resistors of 1/4 Watts.`,
      Availability: 'Available 6 pcs In Stock',
      Sold: '5 pcs',
      Weight: '154.00g ±5%',
      Category: 'Basic Resistors, Resistors Packs',
    },
    {
      id: 4,
      img: 'https://electroglobal.in/wp-content/uploads/2024/12/ELECRO-GLOBAL-EG00101-1.jpg',
      name: '220K Ohm Resistor Pack',
      price: '200.0',
      description: `High Quality 1/4W Resistors with Resistance Color Code`,
      Availability: 'Available 6 pcs In Stock',
      Sold: '16 pcs',
      Weight: '154.00g ±5%',
      Category: 'Basic Resistors, Resistors Packs',
    },
    {
      id: 5,
      img: 'https://i.ebayimg.com/images/g/8eAAAOSwiHFdVTTB/s-l1600.webp',
      name: '1/2W 0.5W Metal Film Resistor 1%',
      price: '200.0',
      description: `High Quality 1/4W Resistors with Resistance Color Code`,
      Availability: 'Available 6 pcs In Stock',
      Sold: '16 pcs',
      Weight: '154.00g ±5%',
      Category: 'Basic Resistors, Resistors Packs',
    },
    { id: 6, img:'https://witblox.com/cdn/shop/files/products_2F5-mm-ldr---light-dependent-resistorpack-of-5_2FzelD9N1tA2.jpg?v=1717490307', 
      name: '5 mm LDR Light Dependent Resistor(Pack of 5)', 
       price: '200.0',
       description:`220K Ohm Resistor Pack – High Quality 1/4W Resistors with Resistance `,
Availability:'Available 6 pcs In Stock',
Sold:"16 pcs",
Weight:"154.00g ±5%",
Category:" Basic Resistors, Resistors, Resistors Packs"
 },
{ id: 7, img:'https://cherryelectronics.in/wp-content/uploads/2023/11/2n4403-pnp-general-purpose-transistor-400x4001-1.jpg', 
      name: '2N4403 PNP General Purpose Transistor', 
       price: '13.0',
       description:`2N4403 is a semiconductor device used to amplify or switch electronic signals and electrical power. `,
       Availability:'Available 16 pcs In Stock',
Sold:"16 pcs",
Weight:"154.00g ±5%",
Category:" Basic Resistors, Resistors, Resistors Packs"
 },
{ id: 8, img:'https://www.ktron.in/wp-content/uploads/2020/02/kstt0433-transistor-2n3904-npn-th-2.jpg', 
      name: 'Buy 2N3904 Transistor-NPN -40V 200mA ', 
       price: '13.0',
       description:`2N4403 is a semiconductor device used to amplify or switch electronic signals and electrical power. `,
       Availability:'Available 6 pcs In Stock',
Sold:"16 pcs",
Weight:"154.00g ±5%",
Category:" Basic Resistors, Resistors, Resistors Packs"
 },
  { id: 9, img:'https://www.flyrobo.in/image/cache/wp/gj/50-watt-soldering-iron-siron/50-watt-soldering-iron-siron-1%20(3)-1100x1100.webp', 
      name: '50W Soldering Iron - High Quality Solder Product',
       price: '200.0',
       description:`50W Soldering Iron is popular among the makers who need heavy-duty soldering in less time. The best quality material provides superior operation and safety to the user while handling heavy soldering.`,
       Availability:'Available 14 pcs In Stock',
Sold:"1",
Weight:"Tip to ground resistance: under 2W",
Category:"Electronics"
 },
    { id: 10, img:`https://www.flyrobo.in/image/cache/wp/gj/solder-wire-40-gsm-for-most-electrical-repair-soldering-purpose/solder-wire-40-gsm-for-most-electrical-repair-soldering-purpose1-1100x1100.webp`, 
      name: 'Solder Wire 60/40 - 50gm',
       price: '200.0',
       description:`Solder Wire is a fusible metal alloy used to join together metal workpieces and having a melting point below that of the workpiece(s).
This solder wire has good solderability, insulation resistance, No spattering, and non-corrosive. Its composition is 60:40 of Tin and Lead respectively.  Widely used in electrical and electronics, solder parts like a circuit board, electronics devices, and others.`,
       Availability:'Available 14 pcs In Stock',
Sold:"1",
Weight:"Tip to ground resistance: under 2W",
Category:"Electronics"
 },
    { id: 11, img:`https://www.flyrobo.in/image/cache/wp/gj/product/20cm-male-to-female-jumper-cable-wire-for-arduino-10pcs-1100x1100.webp`, 
      name: '20cm Male To Female Jumper Cable Wire For Arduino - 10pcs',
       price: '200.0',
       description:`This is 10pcs 20cm male to female color breadboard jumper cable dupont wire for Arduino
10pcs chromatic male to female color jumper cable
High quality and in good working condition
Durable and reusable
Easy to install and use
A popular choice for construction or repair
Be used for electronic project and Genuine Arduino product`,
       Availability:'Available 14 pcs In Stock',
Sold:"1",
Weight:"Tip to ground resistance: under 2W",
Category:"Electronics"
 },
    { id: 12, img:`https://www.flyrobo.in/image/cache/wp/gj/Breadboard/gl-12-1100x1100.webp`, 
      name: 'BREADBOARD GL-12 840 TIE POINTS SOLDERLESS ',
       price: '200.0',
       description:`Tie-point 840
Solderless breadboard (GL-12)
Wire size: Suitable for 29-20 AWG wires
Size: About 16.5*5.6*1cm`,
       Availability:'Available 14 pcs In Stock',
Sold:"1",
Weight:"1 X  GL-12 Breadboard 830 Point Solderless PCB",
Category:"Electronics"
 },
    { id: 13, img:`https://www.flyrobo.in/image/cache/wp/gj/ad620-microvolt-millivolt-voltage-amplifier-module/ad620-microvolt-millivolt-voltage-amplifier-module1-1100x1100w.webp`, 
      name: 'AD620 Microvolt/Millivolt Voltage Amplifier Module',
       price: '200.0',
       description:`This is a High Precision Signal Amplifier Board/Voltage Amplifier Module based upon AD620 Instrumentation amplifier IC, Input voltage range: DC 3~12V, Amplification: adjustable 1.5~1000 times, Adjustable zero to improve accuracy. Can be used for AC, DC signal amplification.

1: Wide input range - This product adopts AD620 to amplify and can amplify microvolts and millivolts. Compared withLM358 on the market, it has high amplification precision and good linearity. The maximum voltage output range is ±10V. 

2: Magnification -  The potentiometer is used to amplify the input signal. The magnification is up to 1000 times and can be adjusted only by a potentiometer.  

3: Adjustable zero-point - Adjust the zero point by zeroing potentiometer, improve the accuracy, and there will be no zero drift phenomenon to meet customer needs.

4: The negative pressure output  - This module uses 7660A negative voltage chip output negative pressure ( -Vin ), which can be supplied to customers to drive other dual power loads.  `,
       Availability:'Available 14 pcs In Stock',
Sold:"1",
Weight:"1 X  GL-12 Breadboard 830 Point Solderless PCB",
Category:"Electronics"
 },
    { id: 14, img:`https://www.flyrobo.in/image/cache/wp/gj/lm386-audio-amplifier-module/lm386-audio-amplifier-module-10-1100x1100w.webp`, 
      name: 'LM386 Audio Amplifier Module',
       price: '200.0',
       description:`LM386 Audio Amplifier Module is a miniature module for amateur projects. Simply connect a 4-8 Ohm speaker and amplify your sound. It can be used with the FM receiver kit or WTV020SD-16P music module. You can definitely use this module for other musical projects also. The chip pin leads can directly input the audio signal.

Features:

Onboard LM386 Chip.
200 multiplier benefits circuit design.
On-board speaker wiring Block.
On-board 10K variable resistor, you can adjust the volume of the enlarged.
Onboard power indicator.`,
       Availability:'Available 14 pcs In Stock',
Sold:"1",
Weight:"1 X  GL-12 Breadboard 830 Point Solderless PCB",
Category:"Electronics"
 },  { id: 15, img:'https://www.flyrobo.in/image/cache/wp/gj/arduino-nano-v3.0-atmega328p-ch340-chip-i-type-c-soldered/arduino-nano-v3.0-atmega328p-ch340-chip-i-type-c-soldered9-1100x1100.webp', 
      name: 'Arduino Nano V3.0 ATmega328P CH340 Chip I Type-C UNSOLDERED',
       price: '200.0',
       description:`Based on the ATmega328, the Arduino Nano is a compact, comprehensive, and breadboard-friendly board (Arduino Nano). It only lacks a DC power jack and utilizes a Mini-B USB cable as opposed to a conventional one.

Features:

Utilizes a bootloader-installed Atmel Atmega328P-AU MCU
ISP download is supported, as is USB download and Power over Mini-B Mini USB connector
Provided with connector pins (headers) but not soldered to the board to allow for user flexibility.
Package Includes:

1 x Arduino Nano V3.0 ATmega328P CH340 Chip I Type-C UNSOLDERED`,
Availability:'Available 6 pcs In Stock',
Sold:"5 pcs",
Weight:"154.00g ±5%",
Category:"Resistors Assorted-Kits"
 },
    { id: 16, img:'https://www.flyrobo.in/image/cache/wp/ge/40-pin-avr-project-board-for-atmel-microcontroller/40-pin-avr-project-board-for-atmel-microcontroller16-1100x1100.webp', 
      name: '40 Pin AVR Project Board For Atmel Microcontroller',
       price: '200.0',
       description:`With this board, you can develop and prototype with any of Microchip's 40 pins AVR microcontrollers. The board has a User button and a status LED. The bridge rectifier allows this board to be powered with both AC and DC power supply adapters.

with this board, you can make any prototype that supports 40 pins Atmel Microcontrollers. you also connect LCD to this board and it has an RS232 serial port.

Features :


Reset button.

DIL40 microcontroller socket.

Power plug-in jack(power supply AC/DC 12V).

Quartz crystal 16 MHz

An RS232 Serial Port.

1 testing LED.

GND bus and VCC bus.

ISP Socket for Flashing thru AVR Dude and AVR Prog.

Extension slot on every uC pin. `,
Availability:'Available 6 pcs In Stock',
Sold:"5 pcs",
Weight:"154.00g ±5%",
Category:"Resistors Assorted-Kits"
 },
    { id: 17, img:`https://www.flyrobo.in/image/cache/wp/gj/product/arduino-uno-r3-+-cable-for-arduino-uno-1100x1100.webp`, 
      name: 'Arduino Uno R3 Compatible board+ Cable for Arduino Uno',
       price: '200.0',
       description:`The Arduino Uno R3 Compatible board is an electronic hardware device used to build and program electronic circuits and projects. The board is based on the ATmega328P microcontroller and is designed to be compatible with the Arduino Uno R3 board, which means that it can be programmed using the Arduino software and libraries.

The board features 14 digital input/output pins, 6 analog inputs, a 16 MHz quartz crystal, a USB connection, a power jack, and an ICSP header. The digital pins can be used as input or output pins and can be easily controlled using the Arduino programming language. The analog inputs allow the board to read analog signals, such as those from sensors, and convert them into digital signals for processing.

The board also features a power regulator that can accept a range of input voltages, from 7 to 20 volts, and regulate it to a 5-volt output that is used to power the microcontroller and other components on the board. Additionally, the board includes a reset button, which can be used to restart the program running on the board, as well as an LED indicator that can be used for debugging and status monitoring.

The Arduino Uno R3 Compatible board is an excellent choice for hobbyists, students, and professionals who are looking for a low-cost, easy-to-use, and flexible platform for building and prototyping electronic projects. The board is compatible with a wide range of sensors, actuators, and other components, making it ideal for a wide range of applications, including robotics, automation, data logging, and more. Its open-source nature and large community of developers and enthusiasts make it an excellent platform for learning, experimentation, and innovation.


 `,
Availability:'Available 6 pcs In Stock',
Sold:"5 pcs",
Weight:"154.00g ±5%",
Category:"Resistors Assorted-Kits"
 },
    { id: 18, img:`https://www.flyrobo.in/image/cache/wp/gj/arduino-uno-r3-smd-board-cable-for-arduino-uno-1/arduino-uno-r3-smd-board-cable-for-arduino-uno-13-1100x1100.webp`, 
      name: 'Arduino Uno R3 SMD Compatible Development Board',
       price: '200.0',
       description:`The Arduino Uno R3 Compatible Board is a microcontroller board which is based on the ATmega328. Arduino Uno has 14 digital input or output pins(where 6 can be used as PWM outputs), 6 analog inputs, a 16 MHz ceramic resonator, a USB connection, a power jack, an ICSP header, and a reset button. It has everything needed to support the microcontroller, you need to simply connect it to a computer with a USB cable or power it with an AC-to-DC adapter or battery to get started.`,
Availability:'Available 6 pcs In Stock',
Sold:"5 pcs",
Weight:"154.00g ±5%",
Category:"Resistors Assorted-Kits"
 },
    { id: 19, img:`https://www.flyrobo.in/image/cache/wp/gj/product2/arduino-mega-r3-atmega2560-16au-development-board-1100x1100w.webp`, 
      name: 'Arduino MEGA R3 ATmega2560-16AU Development Compatible Board',
       price: '200.0',
       description:`The Arduino Mega is a microcontroller board based on the ATmega2560. It has 54 digital input/output pins (of which 14 can be used as PWM outputs), 16 analog inputs, 4 UARTs (hardware serial ports), a 16 MHz crystal oscillator, a USB connection, a power jack, an ICSP header, and a reset button. It contains everything needed to support the microcontroller; simply connect it to a computer with a USB cable or power it with an AC-to-DC adapter or battery to get started. The Mega is compatible with most shields designed for the Arduino Duemilanove or Diecimila.

The Mega 2560 R3 also adds SDA and SCL pins next to the AREF. In addition, there are two new pins placed near the RESET pin. One is the IOREF that allow the shields to adapt to the voltage provided by the board. The other is not connected and is reserved for future purposes. The Mega 2560 R3 works with all existing shields but can adapt to new shields that use these additional pins.

Arduino is an open-source physical computing platform based on a simple i/o board and a development environment that implements the Processing/Wiring language. Arduino can be used to develop stand-alone interactive objects or can be connected to software on your computer (e.g. Flash, Processing, MaxMSP). The open-source IDE can be downloaded for free (currently for Mac OS X, Windows, and Linux).`,
Availability:'Available 6 pcs In Stock',
Sold:"5 pcs",
Weight:"154.00g ±5%",
Category:"Resistors Assorted-Kits"
 },
    { id: 20, img:`https://www.flyrobo.in/image/cache/wp/gj/product2/arduino-mega-r3-atmega2560-16au-development-board-1100x1100w.webp`, 
      name: 'Arduino Leonardo R3 Compatible Board',
       price: '200.0',
       description:`Compared to other versions of the Arduino using a separate USB-Serial converter chip, the Leonardo innovatively uses a single-chip solution. Only with an Atmega32u4 USB communication and control. The Leonardo differs from all preceding boards in that the ATmega32u4 has built-in USB communication, eliminating the need for a secondary processor. This allows the Leonardo to appear to a connected computer as a mouse and keyboard, in addition to a virtual (CDC) serial / COM port. It also has other implications for the behavior of the board. Greatly improve the applications. Arduino Leonardo needs the new version above Arduino IDE1.01.`,
Sold:"5 pcs",
Weight:"154.00g ±5%",
Category:"Resistors Assorted-Kits"
 },  { id: 21, img:`https://www.flyrobo.in/image/cache/wp/gj/product/esp8266-esp-01-wifi-transceiver-wireless-module-1100x1100.webp `, 
      name: 'ESP8266 ESP-01 WIFI Transceiver Wireless Module',
       price: '200.0',
       description:`ESP-01 8266 is a WiFi module, which means it can connect to a WiFi network to send and receive data. It is also a basic part of IoT, which is lower in cost than other development boards and modules. The module is easy to use with Arduino and other controllers can run with the available libraries. This WiFi module developed based on ESP-01 8266 SDK, which has the functionality of the overall Arduino WiFi library, however, you can load different firmwares to make your own application on the modules' memory and processor The module is integrated with SOC with TCP/IP protocol which can access the WiFi and has both Tx and Rx on-chip.

ESP8266 is transforming the world with its low cost and high features which makes it an ideal module for the Internet Of Things (IoT). It can be used in any application where you need to connect a device to your local network or the internet. This module ESP01 has 2 GPIOs accessible on pin headers. 

Note: The ESP8266 Module is compatible only with 3.3V logic level and will not work directly with 5V devices (for both serial and GPIO access). You need a 3.3V compatible device or you will need to convert the levels before you use it.`,
Availability:'3ps ',
Sold:"5 pcs",
Weight:"+19.5dBm output power in 802.11b mode",
Category:"Integrated low power 32-bit CPU could be used as an application processor"
 },
     { id: 22, img:`https://www.flyrobo.in/image/cache/wp/gj/esp32-cam-wifi-bluetooth-development-board-with-ov2640-camera-module/esp32-cam-wifi-bluetooth-development-board-with-ov2640-camera-module-1100x1100.webp`, 
      name: 'ESP32 CAM WiFi Bluetooth Development Board with OV2640 Camera Module',
       price: '200.0',
       description:`The ESP32 CAM WiFi Bluetooth Development Board with OV2640 Camera Module based on the ESP32 chip with the additional facility of using a camera. The ESP32-CAM has a very competitive small-sized camera module that can operate independently as a minimum system.

ESP32 CAM can be widely used in various IoT applications. It is suitable for home smart devices, industrial wireless control, wireless monitoring, QR wireless identification, wireless positioning system signals, and other IoT applications. `,
Availability:'1ps ',
Sold:"5 pcs",
Weight:"+19.5dBm output power in 802.11b mode",
Category:"SP32 CAM WiFi Bluetooth Development Board with OV2640 Camera Module."
 },
     { id: 23, img:`https://www.flyrobo.in/image/cache/wp/gj/nodemcu-esp8266-cp2102-wifi-development-board/nodemcu-esp8266-cp2102-wifi-development-board2-1100x1100w.webp`, 
      name: 'NodeMcu ESP8266 CP2102 WIFI Development Board',
       price: '200.0',
       description:`NodeMCU ESP-8266 WIFI Board CP2102. The Development Kit based on ESP8266 integrates GPIO, PWM, IIC, 1-Wire, and ADC all in one board. Power your development in the fastest way combines with NodeMCU Firmware! R2 version had CP2102 USB-TTL instead, larger current support, the slim board can put on a breadboard.`,
Availability:'1ps ',
Sold:"5 pcs",
Weight:"+19.5dBm output power in 802.11b mode",
Category:"SP32 CAM WiFi Bluetooth Development Board with OV2640 Camera Module."
 },
     { id: 24, img:`https://www.flyrobo.in/image/cache/wp/gj/esp-wroom-32-wifi-bluetooth-networking-smart-component-development-board/esp-wroom-32-wifi-bluetooth-networking-smart-component-development-board2-1100x1100.webp`, 
      name: 'ESP-WROOM-32 WIFI Bluetooth Module (30PIN)',
       price: '200.0',
       description:`The ESP WROOM 32 MCU Module is shown. The ESP WROOM 32 is a powerful, all-purpose WiFi-BT-BLE MCU module that can handle a broad range of functions, including speech encoding, music streaming, and MP3 decoding, as well as low-power sensor networks.

The ESP32S chip, which is intended to be scalable and adaptable, lies at the heart of this module. The clock frequency of the two CPU cores, which can be adjusted from 80 MHz to 240 MHz, may each be separately controlled or powered.

The CPU can be turned off if the user prefers, and the low-power coprocessor can be used to continuously check the peripherals for changes or the crossing of thresholds. Capacitive touch sensors, Hall sensors, low-noise sensing amplifiers, an SD card interface, Ethernet, high-speed SDIO/SPI, UART, and I2C are just a few of the peripherals that are integrated within the ESP32S.`,
Availability:'1ps ',
Sold:"5 pcs",
Weight:"+19.5dBm output power in 802.11b mode",
Category:" ESP-WROOM-32 WIFI Bluetooth Networking Smart Component Development Board "
 },
     { id: 25, img:`https://www.flyrobo.in/image/cache/wp/ge/nodemcu-esp8266-wifi-plus-0.96-inch-oled-board/nodemcu-esp8266-wifi-plus-0.96-inch-oled-board1-1100x1100.webp`, 
      name: 'ESP-WROOM-32 WIFI Bluetooth Module (30PIN)',
       price: '200.0',
       description:`Nodemcu ESP8266 Wifi 0.96 Inch OLED Board development board integrates the ESP8266 0.96 Inch OLED having a resolution of 128x64. OLED is a self light-emitting technology composed of a thin, multi-layered organic film placed between an anode and cathode the next generation of flat-panel displays.`,
Availability:'1ps ',
Sold:"5 pcs",
Weight:"+19.5dBm output power in 802.11b mode",
Category:" Nodemcu ESP8266 Wifi + 0.96 Inch OLED Board "
 },
     { id: 26, img:`https://www.flyrobo.in/image/cache/wp/gj/esp8266-esp12f-serial-wifi-witty-cloud-development-board-with-mini-nodemcu/esp8266-esp12f-serial-wifi-witty-cloud-development-board-with-mini-nodemcu1-1100x1100.webp`, 
      name: 'ESP8266 ESP12F Serial WIFI Witty Cloud Development Board with MINI nodeMCU',
       price: '200.0',
       description:`ESP8266 ESP12F Serial WIFI Witty Cloud Development Board with MINI nodeMCU is a small Wi-Fi transceiver, a perfect solution for Home Automation and IoT applications. The ESP8266 is a highly integrated chip, including an antenna and power management converter.`,
Availability:'1ps ',  
Sold:"5 pcs",
Weight:"+19.5dBm output power in 802.11b mode",
Category:"ESP8266 ESP12F Serial WIFI Witty Cloud Development Board with MINI nodeMCU"
 },

     { id: 27, img:`https://www.flyrobo.in/image/cache/wp/gj/product/ultrasonic-module-hc-sr04-distance-measuring-sensor-1100x1100.webp`,
      name:"Ultrasonic Module HC-SR04 Distance Measuring Sensor",
       price: '57.0',
       description:`This HC-SR04-Ultrasonic Distance Measuring Sensor is a very popular sensor which is found in many applications where it requires to measure distance and detect the objects.

The module has two eyes like projects in the front which form the Ultrasonic transmitter and Receiver.  The HC-SR04 ultrasonic sensor uses sonar to determine the distance to an object like bats or dolphins do.
This Ultrasonic Sensor module is a transmitter, a receiver, and a control circuit in one single pack!! It has a very handy and compact construction. It offers excellent range accuracy and stable readings in an easy-to-use package. Its operation is not affected by sunlight or black material like Sharp rangefinders are (although acoustically soft materials like cloth can be difficult to detect).`,
Availability:'limited',
Sold:"5 pcs",
Weight:"High Precision: Up to 0.3cm",
Category:"Sensor Module Output Signal: Electric frequency signal, high-level 5V, low-level 0V."
 },
     { id: 28, img:`https://www.flyrobo.in/image/cache/wp/gj/infrared_obstacle_avoidance_sensor/IR-Sensor-1100x1100.webp`,
      name:"Infrared Line Following and Obstacle Avoidance Sensor",
       price: '22.0',
       description:`The sensor module light is adaptable to the environment, with a working voltage of 3.3 V to 5 V. It has a pair of infrared transmitting and receiving tubes when detecting direction meet with obstacles (reflecting surface), reflected infrared receiving by the tube.

After the comparator circuit processing, a green indicator will light up, at the same time the signal output interface output a digital signal (a low-level signal), can adjust the detection distance through the potentiometer knob, effective distance range 2 ~ 80 cm, easy to assemble and use. So it can be widely used in robot obstacle avoidance, obstacle avoidance car, line count, and so on many occasions.`,
Availability:'limited',
Sold:"5 pcs",
Weight:"High Precision: Up to 0.3cm",
Category:"Sensor Module Obstacle detector sensor"
 },
     { id: 29, img:`https://www.flyrobo.in/image/cache/wp/gj/pir-motion-detector-sensor-module/pir-sensor-3-1100x1100.webp `,
      name:"PIR Motion Detector Sensor Module",
       price: '57.0',
       description:`The HC-SR501 PIR Motion Detector Sensor Module is a pyroelectric device that detects motion by measuring changes in the infrared levels emitted by surrounding objects. This motion can be detected by checking for a high signal on a single I/O pin.

The module has an onboard pyroelectric sensor, conditioning circuitry, and a dome-shaped Fresnel lens. It has a delay time adjustment Potentiometer and sensitivity adjustment Potentiometer. 

It is used to sense the movement of people, animals, or other objects. They are commonly used in burglar alarms and automatically-activated lighting systems. Compatible with ARDUINO, RASPBERRY PI, AVR, PIC, 8051, etc.`,
Availability:'limited',
Sold:"5 pcs",
Weight:"Compact size ",
Category:"Sensor Module Turn to Right, Distance Increases (About 7M); Turn to Left, Distance Reduce (About 3M)"
 },
     { id: 30, img:`https://www.flyrobo.in/image/cache/wp/gj/soil-moisture-meter-andsoil-humidity-sensor-andwater-sensor-andsoil-hygrometer-for-ardunio/soil-moisture-meter-andsoil-humidity-sensor-andwater-sensor-andsoil-hygrometer-for-ardunio-1-1100x1100.webp`,
      name:"Soil Moisture Meter, Soil Humidity Sensor",
       price: '₹33',
       description:`This is a simple water sensor that can be used to detect soil moisture when the soil moisture deficit module plant waterer device, so that the plants in your garden without people to manage. It gives a digital output of 5V when the moisture level is high and 0V when the moisture level is low in the soil. `,
Availability:'limited',
Sold:"5 pcs",
Weight:"Compact size ",
Category:"Sensor Module Dual output mode, analog output more accurate."
 },
     { id: 31, img:`https://www.flyrobo.in/image/cache/wp/gj/product/am2302-dht22-temperature-and-humidity-sensor-module-1100x1100.webp`,
      name:"AM2302 DHT22 Temperature And Humidity Sensor Module",
       price: '₹155',
       description:`AM2302 Humicap digital temperature and humidity module is a digital output signal containing a calibrated temperature and humidity combined sensor.

It uses dedicated digital modules capture technology and the temperature and humidity sensor technology to ensure that products with high reliability and excellent long-term stability.

The sensor includes a capacitive humidity sensing element and high-precision temperature measurement devices, and a high-performance 8-bit microcontroller connected. Therefore, the product has the excellent quality, fast response, anti-interference ability, high cost, and other advantages. Ultra-small size, low power consumption, signal transmission distance up to 20 meters.`,
Availability:'limited',
Sold:"5 pcs",
Weight:"Dimension: 40 x 23mm",
Category:"Sensor Module Full range temperature compensated"
 },
     { id: 32, img:`https://www.flyrobo.in/image/cache/wp/gj/ds18b20_digital_temperature_sensor_module_for_arduino/ds18b20_digital_temperature_sensor_module_for_arduino11-1100x1100.webp`,
      name:'DS18B20 Digital Temperature Sensor Module',
       price: '₹66',
       description:`DS18B20 Temperature Sensor Module is a Digital temperature sensor DS18B20 that will tell you temperature with 9 to 12-bit resolution! Uses only 1 wire to the Arduino or other microcontroller for communication. With the One Wire protocol, you can operate a large number of these sensors from one Arduino pin. The connection of this sensor to the Arduino via the 1-wire protocol is established. Therefore, several sensors can be connected only through one common wire to Arduino.

This is the latest DS18B20 1-Wire digital temperature sensor from Maxim IC. Reports °C with 9 to 12-bit precision, -55°C to 125°C (+/-0.5°C). Each sensor has a unique 64-Bit Serial number etched into it allows for a huge number of sensors to be used on one data bus.

This is a wonderful part that is the cornerstone of many data-logging and temperature control projects.`,
Availability:'limited',
Sold:"5 pcs",
Weight:"Compact size",
Category:"Sensor Module Multi-drop capability simplifies distributed temperature sensing applications"
 },
   { id: 33, img:`https://www.flyrobo.in/image/cache/wp/gj/max31865-rtd-platinum-pt100-pt1000-temperature-digital-voltage-converter/max31865-rtd-platinum-pt100-pt1000-temperature-digital-voltage-converter1-1100x1100w.webp`,
      name:"MAX31865 RTD Platinum PT100 to PT1000 Temperature",
       price: '₹462',
       description:`The MAX31865 is an easy-to-use thermistor to digital output converter optimized for platinum resistance temperature detectors (RTD). The external resistor sets the RTD sensitivity, and the high-precision Δ- ΣADC converts the RTD resistor and the reference resistor to digital output. The MAX31865 input has overvoltage protection of up to ± 45V, providing configurable RTD and cable open, short circuit condition detection.`,
Availability:'limited',
Sold:"5 pcs",
Weight:"25mm x 28mm",
Category:"Sensor Module"
 },
     { id: 34, img:`https://www.flyrobo.in/image/cache/wp/gj/lm393-photosensitive-ldr-sensor-module/lm393-photosensitive-ldr-sensor-module1-1100x1100.webp`,
      name:"LM393 Photosensitive LDR Sensor Module",
       price: '₹30',
       description:`The LDR Sensor Module is used to detect the presence of light / measuring the intensity of light. The output of the module goes high in the presence of light and it becomes low in the absence of light. The sensitivity of signal detection can be adjusted using a potentiometer.`,
Availability:'limited',
Sold:"5 pcs",
Weight:"Compact size",
Category:"Sensor Module"
 },
     { id: 35, img:`https://www.flyrobo.in/image/cache/wp/gj/Color-sensor-TCS230-TCS3200-Color-Recognition-Sensor-Detector-Module-DC/color-sensor-tcs230-tcs3200-color-recognition-sensor-detector-module-1100x1100.webp`,
      name:"Color sensor TCS230 TCS3200 Color Recognition Sensor",
       price: '₹344',
       description:`TCS230 8-pin SOIC surface-mount package, on a single chip,, has 64 photodiodes. These diodes are divided into four types. 16 of the photodiode with a red filter; 16 photodiodes with a green filter; 16 photodiodes with a blue filter; the remaining 16 without any filter, may all the optical information through. The photodiode chip is staggered, it is possible that minimize non-uniformity of the incident radiation, thereby increasing the accuracy of the color recognition; on the other hand, the same color of the photodiode 16 is connected in parallel, uniformly distributed in the diode array, you can eliminate the position error color.
Work by two programmable pins to dynamically select the desired filter. The typical output frequency range of the sensor from 2 Hz ~ 500 kHz, users can also select two programmable pins to 100%, 20%, or 2% of the output scale factor, or power-off mode. Output scale factor so that the output of the sensor can be adapted to different measurement range and increases its ability to adapt. For example, when using a low-speed frequency counter, you can choose a small scaling value that TCS230 output frequency and counter match.`,
Availability:'limited',
Sold:"5 pcs",
Weight:"Compact size",
Category:"Sensor Module"
 },
     { id: 36, img:`https://www.flyrobo.in/image/cache/wp/gj/raindrop-detection-sensor-module/raindrop-detection-sensor-module1-1100x1100.webp`,
      name:"Raindrop Detection Sensor Module",
       price: '₹45',
       description:`The raindrop sensor module is used for rain detection. It is also for measuring rainfall intensity. The module includes a rain board and a control board that is separate for more convenience. It has a power indicator LED and an adjustable sensitivity though a potentiometer.

The module is based on the LM393 op-amp. It includes a printed circuit board that “collects” the raindrops. As raindrops are collected on the circuit board, they create paths of parallel resistance that are measured via the op-amp. The lower the resistance, the lower the voltage output. Conversely, the less water, the greater the output voltage on the analog pin. A completely dry board, for example, will cause the module to output five volts.`,
Availability:'limited',
Sold:"5 pcs",
Weight:"Compact size",
Category:"Sensor Module"
 },
     { id: 37, img:`https://www.flyrobo.in/image/cache/wp/gj/cjmcu-75-lm75-temperature-sensor-high-speed-i2c-development-board/cjmcu-75-lm75-temperature-sensor-high-speed-i2c-development-board1-1100x1100.webp`,
      name:"CJMCU-75 LM75 Temperature Sensor High-speed",
       price: '₹85',
       description:`It is a high-speed I2C interface temperature sensor. In the temperature range of -55 ℃ ~ + 125 ℃, the temperature was directly converted to digital signals, and to achieve the accuracy of 0.125 ℃. MCU can read data of its internal registers directly via the I2C bus and can operate four registers through I2C to set different operating modes. LM75A has three selectable logic address pins, making it possible to connect eight devices at the same time without address conflict on the same bus.`,
Availability:'limited',
Sold:"5 pcs",
Weight:"Compact size",
Category:"Sensor Module , stand-alone temperature controller"
 },
     { id: 38, img:`https://www.flyrobo.in/image/cache/wp/gj/gas-sensor/MQ-2/MQ-2-1100x1100.webp`,
      name:"MQ-2 Smoke/LPG/CO Gas Sensor Module",
       price: '₹85',
       description:`The analog gas sensor - MQ2 is used in gas leakage (like Smoke methane and liquified flammable gas) detecting equipment in consumer and industry markets, this sensor is suitable for detecting LPG, i-butane, Propane, Methane, Alcohol, Hydrogen, and Smoke. It has high sensitivity and fast response time and the sensitivity can be adjusted using the potentiometer.

This is very easy to use low-cost semiconductor Gas sensor Module with analog and digital output. This module uses the MQ2 Smoke & Flammable gas sensor as a gas sensing element. It requires no external components just plug in Vcc & ground pins and you are ready to go.

Using this module you can easily interface MQ2 Smoke & Combustible gas Sensor to any Microcontroller, Arduino, or even Raspberry Pi.`,
Availability:'limited',
Sold:"5 pcs",
Weight:"Compact size",
Category:"Sensor Module , Can be used to Measure or detect LPG, Alcohol, Propane, Hydrogen, CO, and even methane."
 },
     { id: 39, img:`https://www.flyrobo.in/image/cache/wp/gJ/product/l298n-motor-driver-module-for-arduino-1100x1100.webp`,
      name:"L298N Motor Driver Module For Arduino",
       price: '₹147',
       description:`L298N 2A Based Motor Driver is a high power motor driver perfect for driving DC Motors and Stepper Motors.

It uses the popular L298 motor driver IC and has an onboard 5V regulator which it can supply to an external circuit. It can control up to 4 DC motors, or 2 DC motors with directional and speed control.

This motor driver is perfect for robotics and mechatronics projects and perfect for controlling motors from microcontrollers, switches, relays, etc. Perfect for driving DC and Stepper motors for micro mouse, line-following robots, robot arms, etc.`,
Availability:'limited',
Sold:"5 pcs",
Weight:"Compact size",
Category:"motor driver"
 },
     { id: 40, img:`https://www.flyrobo.in/image/cache/wp/gJ/product/l293d-motor-driver-shield-for-arduino-1100x1100.webp`,
      name:"L293D Motor Driver Shield For Arduino",
       price: '₹122',
       description:`L293D use 16 pin DIP package, its internal integration is bipolar H - bridge circuit.
This kind of bipolar pulse width method has many advantages, such as the current continuous, or microcurrent vibration when the motor stops, which as a lubrication effect. It can eliminate the dead zone of static friction when positive and negative.`,
Availability:'limited',
Sold:"5 pcs",
Weight:"Compact size",
Category:"motor driver"
 },
     { id: 41, img:`https://www.flyrobo.in/image/cache/wp/gJ/product/16-channel-pwm-servo-motor-driver-i2c-module-1100x1100.webp`,
      name:"16 Channel PWM Servo Motor Driver I2C Module",
       price: '₹223',
       description:`﻿This is 16 Channel PWM Servo Motor Driver 12C Module.`,
Availability:'limited',
Sold:"5 pcs",
Weight:"Compact size",
Category:"motor driver"
 },
     { id: 42, img:`https://www.flyrobo.in/image/cache/wp/gJ/product/l293d-motor-drive-module-1100x1100.webp`,
      name:"L293D Motor Drive Module",
       price: '₹223',
       description:`The Device is a monolithic integrated high voltage, high current four channel driver designed to accept standard DTL or TTL logic levels and drive inductive loads (such as relays solenoids, DC and stepping motors) and switching power transistors.

To simplify use as two bridges each pair of channels is equipped with an enable input. A separate supply input is provided for the logic, allowing operation at a lower voltage, and internal clamp diodes are included. This device is suitable for use in switching applications at frequencies up to 5 kHz.`,
Availability:'limited',
Sold:"5 pcs",
Weight:"Compact size",
Category:"motor driver"
 },
     { id: 43, img:`https://www.flyrobo.in/image/cache/wp/gj/DRV8825/drv8825-stepper-motor-driver-with-aluminum-heat-sink-1100x1100.webp`,
      name:"DRV8825 Stepper Motor Driver with Aluminum Heat Sink",
       price: '₹103',
       description:`The DRV8825 stepper motor driver carrier is a breakout board for TI’s DRV8825 micro-stepping bipolar stepper motor driver. The DRV8825 features adjustable current limiting, over-current and over-temperature protection, and six microstep resolutions (down to 1/32-step). It operates from 8.2 – 45 V and can deliver up to approximately 1.5 A per phase without a heat sink or forced air flow (rated for up to 2.2 A per coil with sufficient additional cooling).

This product is a carrier board or breakout board for TI’s DRV8825 stepper motor driver; we therefore recommend careful reading of the DRV8825 datasheet before using this product. This stepper motor driver lets you control one bipolar stepper motor at up to 2.2 A output current per coil. `,
Availability:'limited',
Sold:"5 pcs",
Weight:"Compact size",
Category:"motor driver"
 },
     { id: 44, img:`https://www.flyrobo.in/image/cache/wp/gJ/Motor-and-Driver/tb6612fng-dual-motor-driver-module-1a-for-arduino-micro-controller-1100x1100.webp`,
      name:"TB6612FNG Dual Motor Driver Module 1A",
       price: '173',
       description:`The TB6612FNG Module motor driver can control up to two DC motors at a constant current of 1.2A (3.2A peak). Two input signals (IN1 and IN2) can be used to control the motor in one of four function modes – CW, CCW, short-brake, and stop.

The two motor outputs (A and B) can be separately controlled, the speed of each motor is controlled via a PWM input signal with a frequency up to 100kHz. The STBY pin should be pulled high to take the motor out of standby mode.

Logic supply voltage (VCC) can be in the range of 2.7-5.5VDC, while the motor supply (VM) is limited to a maximum voltage of 15VDC. The output current is rated up to 1.2A per channel (or up to 3.2A for a short, single pulse).

Decoupling capacitors are included on both supply lines. All pins of the TB6612FNG are broken out to two 0.1″ pitch headers; the pins are arranged such that input pins are on one side and output pins are on the other.`,
Availability:'limited',
Sold:"5 pcs",
Weight:"Compact size",
Category:"motor driver"
 },
      { id: 45, img:`https://www.flyrobo.in/image/cache/wp/gj/product/dc-3-6v-bo-gear-motor-with-plastic-tire-wheel-for-arduino-smart-car-1100x1100.webp`,
      name:"DC 200RPM 3-6v BO Gear Motor",
       price: '₹79',
       description:`Plastic Tire Wheel With DC 3-6v Gear Motor For Arduino Smart Car`,
Availability:'limited',
Sold:"5 pcs",
Weight:"Motor Weight (g): 29/each",
Category:" DC motor"
 },
     { id: 46, img:`https://www.flyrobo.in/image/cache/wp/gj/200rpm-dc-3-12v-l-shape-bo-gear-motor-one-side-shaft-for-arduino-smart-car/200rpm-dc-3-12v-l-shape-bo-gear-motor-one-side-shaft-for-arduino-smart-car-5-1100x1100h.webp`,
      name:"200RPM DC 3-12V L-Shape BO Gear Motor",
       price: '₹79',
       description:`The 200 RPM Single Shaft L- Shaped BO Motor motor gives good torque and rpm at lower operating voltages, which is the biggest advantage of these motors. It is an alternative to our metal gear DC motors. It comes with an operating voltage of 3-6V and is perfect for building small and medium robots.


A small shaft with matching wheels gives an optimized design for your application or robot. Mounting holes on the body & lightweight makes it suitable for in-circuit placement. The motor is ideal for DIY enthusiasts. This motor set is inexpensive, small, easy to install, and ideally suited for use in a mobile robot car.`,
Availability:'limited',
Sold:"5 pcs",
Weight:"Motor Weight (g): 29/each",
Category:" DC motor"
 },
     { id: 47, img:`https://www.flyrobo.in/image/cache/wp/gj/12v-500rpm-n20-metal-gear-motor/12v-500rpm-n20-metal-gear-motor1-1100x1100.webp`,
      name:"12V 500rpm N20 Metal Gear Motor",
       price: '₹228',
       description:`Please welcome our strong 12V 500 rpm N20 Metal Gear Motor. This engine is built to be durable and efficient, despite its small size. Its 500 revolutions per minute (rpm) speed allows it to function admirably in a variety of applications. It is perfect for tiny machinery, do-it-yourself projects, and robots because of the metal gears that guarantee dependable and smooth performance.

Our N20 Metal Gear Motor's dependability and strength will enhance your efforts.`,
Availability:'limited',
Sold:"5 pcs",
Weight:"Compact size",
Category:" DC motor"
 },
     { id: 48, img:`https://www.flyrobo.in/image/cache/wp/gj/high-torque-motor/1-1100x1100w.webp`,
      name:"1000RPM High Torque Side Shaft DC Metal Geared",
       price: '₹228',
       description:`1000 RPM 12V DC Johnson high torque geared motors for robotics applications. It gives a massive torque of 10Kgcm. The motor comes with metal gearbox and off-cantered shaft.`,
Availability:'limited',
Sold:"5 pcs",
Weight:"180gm",
Category:"gear motor"
 },
     { id: 49, img:`https://www.flyrobo.in/image/cache/wp/gp/12v-60-rpm-25ga-370-dc-gear-motor/12v-60-rpm-25ga-370-dc-gear-motor-1-1100x1100.webp`,
      name:"12V-60 RPM 25GA-370 DC Gear Motor",
       price: '₹898',
       description:`The 12V-60 RPM 25GA-370 DC Gear Motor is a compact and efficient motor ideal for various low-speed, high-torque applications. It features a robust 25mm diameter gearbox paired with a durable 370 DC motor. Designed for reliable performance, it operates at 60 RPM under a 12V input, delivering consistent speed and torque. Its metal gears enhance durability and reduce wear, making it suitable for robotics, DIY projects, and industrial use. With a lightweight design, it ensures easy integration into compact spaces. The motor's quiet operation and energy efficiency add to its versatility in precision-driven applications.`,
Availability:'limited',
Sold:"5 pcs",
Weight:"Compact size",
Category:"gear motor"
 },
     { id: 50, img:`https://www.flyrobo.in/image/cache/wp/ge/c1a-reduction-gearbox-gear-motor/c1a-reduction-gearbox-gear-motor-5-1100x1100.webp`,
      name:"C1A Reduction Gearbox Gear Motor",
       price: '₹68',
       description:`The C1A Reduction Gearbox Gear Motor is a compact and efficient motor solution designed for applications requiring low-speed, high-torque output. It features a durable gearbox that ensures consistent performance and long service life. With precision-engineered gears, it minimizes noise and improves efficiency in demanding environments. The motor supports a wide range of voltages, making it versatile for robotics, automation, and DIY projects. Its compact size allows for easy integration into tight spaces. Reliable and cost-effective, the C1A motor is ideal for powering small mechanisms and devices.`,
Availability:'limited',
Sold:"5 pcs",
Weight:"Compact size",
Category:"gear motor"
 },
     { id: 51, img:`https://www.flyrobo.in/image/cache/wp/gj/raspberry-pi-zero-in-built-wifi-and-bluetooth/raspberry-pi-zero-in-built-wifi-and-bluetooth-1100x1100.webp`,
      name:"Raspberry Pi Zero With In-Built Wifi and Bluetooth",
       price: '1899',
       description:`After the Success of Pi Zero V1.3, Raspberry Pi has launched a new Upgraded version of Raspberry Pi Zero with inbuilt Wifi and Bluetooth. The most important part about this board is cost-effectiveness. Zero W is the Smallest in the Raspberry pi Family measures only 65mm long by 30mm wide and 5mm deep.

It has the same Processor as Pi 1 i.e Broadcom BCM2835 processor but clock speed is 1 GHz which is 40% faster. The Pi Zero W has all the functionality of the original Pi Zero but comes with added connectivity with 2 Micro USB Ports(1 port for Power and other for USB Connectivity), 1 mini HDMI Port, and 1 Micro SD Card Slot and has 512MB of RAM. Just like Pi3, a CYW43438 Wireless chip has been added to get Wifi on Board.`,
Availability:'limited',
Sold:"5 pcs",
Weight:"",
Category:"micro computer processor	Broadcom BCM2835 @1GHz "
 },
     { id: 52, img:`https://www.flyrobo.in/image/cache/wp/gj/raspberry-pi-4-model-b/raspberry-pi-4-model-b-with-4-gb-ram-1100x1100.webp`,
      name:"Raspberry Pi 4 Model-B with 4 GB RAM",
       price: '5036',
       description:`This product’s key features include a high-performance 64-bit quad-core processor, dual-display support at resolutions up to 4K via a pair of micro-HDMI ports, hardware video decode at up to 4Kp60, 4 GB RAM, dual-band 2.4/5.0 GHz wireless LAN, Bluetooth 5.0, Gigabit Ethernet, USB 3.0, and PoE capability (via a separate PoE HAT add-on).

Raspberry Pi 4 Model B is the latest product in the popular Raspberry Pi range of computers. It offers ground-breaking increases in processor speed, multimedia performance, memory, and connectivity compared to the prior-generation Raspberry Pi 3 Model B+ while retaining backward compatibility and similar power consumption. For the end-user, Raspberry Pi 4 Model B provides desktop performance comparable to entry-level x86 PC systems.

Raspberry Pi Foundation has launched Raspberry Pi 4 Model B in 3 versions:`,
Availability:'limited',
Sold:"5 pcs",
Weight:"",
Category:"micro computerProcessor	Broadcom BCM2711, quad-core Cortex-A72 (ARM v8) 64-bit SoC @ 1.5GHz"
 },
     { id: 53, img:`https://robocraze.com/cdn/shop/files/6_Raspberry_Pi_5_Model_2GB_RAM.png?v=1743772960&width=713`,
      name:"Raspberry Pi 5 Model 2GB RAM",
       price: '5129',
       description:`The Raspberry Pi 5 Model 2GB RAM is the latest major addition announced by the Raspberry Pi Foundation. Compared to the previous Raspberry Pi 4, this model delivers a 2-3× gain in CPU speed with its Arm Cortex-A76 processor which clocked at 2.4GHz with 64 bits overall.

In this board connectivity is top-notch, featuring dual-band 2.4GHz and 5.0GHz 802.11ac Wi-Fi and Bluetooth 5.0 and Bluetooth Low Energy (BLE) for seamless wireless communication. 

The Raspberry Pi 5 with a 2 GB RAM board also comes with an 800MHz VideoCore VII GPU, which substantially boosts graphics power and supports dual 4Kp60 display output via HDMI. Also, it includes great camera capabilities for its newly redesigned Raspberry Pi Image Signal Processor which makes it perfect for advanced multimedia projects.`,
Availability:'limited',
Sold:"5 pcs",
Weight:"",
Category:"micro computerProcessor	Broadcom BCM2711, quad-core Cortex-A72 (ARM v8) 64-bit SoC @ 1.5GHz"
 },
     { id: 54, img:`https://robocraze.com/cdn/shop/files/WhatsApp_Image_2024-07-02_at_13.42.57_3ad67472.jpg?v=1743772989&width=713`,
      name:"Official Raspberry Pi Model 1 B+",
       price: '2840',
       description:`The Raspberry Pi Model 1 B+ is a more powerful version of the original Raspberry Pi, it's perfect for projects that require a bit more power and flexibility. It features a 700 MHz CPU and 512 MB of memory. Has four USB ports, an HDMI connector for connecting to a TV or monitor, and a unique 40-pin header for attaching sensors and other components. Also, It has a jack for audio and video output, as well as interfaces for connecting a camera or display screen.

This version of the Raspberry Pi is designed to be easier to use and more efficient. The USB ports are aligned with the edge of the board for a cleaner look, and it has a micro SD slot that’s simpler to handle than the older models.

It is ideal for long-term applications as It consumes less power. The sound quality has also increased, and the board's square mounting holes make installation simple. The Raspberry Pi Model B+ is an excellent choice for all of your projects and educational requirements.

`,
Availability:'limited', 
Sold:"5 pcs",
Weight:"",
Category:"micro computerProcessor	Broadcom BCM2711, quad-core Cortex-A72 (ARM v8) 64-bit SoC @ 1.5GHz"
 },
     { id: 55, img:`https://robocraze.com/cdn/shop/products/1_-mrnxod3ibjq-llqqggchwapproved_e0a17463-61ef-456c-9c0a-d8fc16c7ddd6.jpg?v=1743774978&width=533`,
      name:"Raspberry Pi 3 Model A+",
       price: '2558',
       description:`The Raspberry Pi 3A+ is the newest release from the Raspberry Pi Foundation. This minimalist board based on the 3B+ has many of the same features crammed into a smaller footprint. It retains the same 64-bit 1.4 GHz quad-core processor, dual-band WiFi, and Bluetooth 4.3/BLE as the Raspberry Pi 3B+ but the Ethernet and 3 USB ports have been removed to fit into the smaller 65 x 56mm form factor. The onboard RAM has also been slimmed to 512MB.

The Pi 3A+ has the same 40 pin GPIO header and mounting holes, so any standard HATs and mounting plates that work with the 3B+ will work with this version as well. Any software or operating systems compatible with the 3B+ should also be compatible with the 3A+.

`,
Availability:'limited', 
Sold:"5 pcs",
Weight:"",
Category:"micro computerProcessor	Processor	Broadcom BCM2837B0, Cortex-A53 (ARMv8) 64-bit SoC @ 1.4GHz"
 },
     { id: 56, img:`https://robocraze.com/cdn/shop/files/1_65995c99-4975-4836-afb9-6283b2bab94a.png?v=1743769414&width=533`,
      name:"Official Raspberry Pi 5 Model 16GB RAM",
       price: '12599',
       description:`Double your computing power with the new Raspberry Pi 5 16GB RAM variant! With expanded memory, this model handles resource-intensive tasks effortlessly—perfect for AI projects, data processing, and multimedia work.

The Raspberry Pi 5 16GB is identical to previous Pi 5 models, supporting the same accessories, cases, and overclocking options. The only difference is the increased RAM, giving you more flexibility for demanding applications.

Ideal for developers, hobbyists, and educators, this upgrade joins the 2GB, 4GB, and 8GB models, offering more power for your projects. Unlock new possibilities and take your computing to the next level with this 16GB Raspberry Pi 5 model!
`,
Availability:'limited', 
Sold:"5 pcs",
Weight:"",
Category:"micro computerProcessor	Processor	Broadcom BCM2837B0, Cortex-A53 (ARMv8) 64-bit SoC @ 1.4GHz"
 },
    { id: 57, img:`https://robocraze.com/cdn/shop/products/3.2inch-rpi-lcd-b-2_30120c54-32a5-4594-af2e-c57094490728.jpg?v=1743775626&width=713`,
      name:"3.2in Raspberry Pi Touch Screen",
       price: '1179',
       description:`The 3.2inch standard display, support HDMI input, refresh rate of 60FPS or more. It has a physical resolution 320*240. It can be used as display for raspberry pi, with touch control function (need to install touch drive). It also can be used as a computer monitor, TV box, PSP and other standard HDMI output device (without touch function). The 3.2 inch display module is compatible and can be inserted directly into all versions of raspberry pi board (raspberry pi, 1 generation B and Zero, HDMI line).

This 3.2 Inch TFT LCD display is an alternative solution for Raspberry Pi compatible HDMI displays; the 3.2 inches Resistive TFT Touch Screen Display communicates with the main processor via SPI Protocol (serial peripheral interface). This display can be directly connected to the GPIO pins and does not require an external power source.

check out : 2.4inch Raspberry Pi Display Hat - 4D Systems`,
Availability:'limited',
Sold:"5 pcs",
Weight:"",
Category:"respberry pi display touch Screen"
 },
     { id: 58, img:`https://robocraze.com/cdn/shop/products/top.jpg?v=1743774996&width=713`,
      name:"Waveshare HDMI 7 inch Display",
       price: '4384',
       description:`Waveshare 7 inch Resistive HDMI LCD display has an IPS display panel and a 1024 x 600 screen resolution. This Portable 7 inch HDMI touch display has a resistive touch screen and is made of toughened glass. This Waveshare 7 inch HDMI display is compatible with multiple mini-PCs such as the Raspberry Pi and the BeagleBone Black, as well as standard desktop computers. It also has an HDMI display interface and a USB interface for touch control.

When working with Raspberry Pi, supports Raspbian, Ubuntu, WIN10 IoT, single touch, and driver When working with other mini-PCs, the driver is required and should be developed by users.

This 7" Capacitive Touch Screen LCD enhances the UI experience in any project. It supports various systems such as Raspberry Pi/ Banana Pi/Banana Pro. `,
Availability:'limited',
Sold:"5 pcs",
Weight:"",
Category:"respberry pi display touch Screen"
 },
     { id: 59, img:`https://robocraze.com/cdn/shop/files/802.11bgnwirelessLAN_Bluetooth4.1_BLE_._92.png?v=1743774793&width=713`,
      name:"5 inch LCD HDMI Touch Screen Display TFT LCD Panel Module",
       price: '2479',
       description:`The 5 Inch Touch Screen HDMI Interface TFT LCD Module is a good solution for those who are seeking a bigger resolution display. This TFT LCD Display for Raspberry Pi has a 5″ size and features an 800×480 pixel resolution. This 5 Inch Touch Screen HDMI Interface TFT LCD Module is a mini panel-mountable HDMI monitor. `,
Availability:'limited',
Sold:"5 pcs",
Weight:"",
Category:"respberry pi display touch Screen"
 },
     { id: 60, img:`https://robocraze.com/cdn/shop/files/Raspberry_Pi_4_8GB_Kit_with_Touchscreen.png?v=1743773565&width=713`,
      name:"Official Raspberry Pi 4 8gb Starter Kit with 7 inch Touchscreen Display",
       price: '18299',
       description:`Official Raspberry Pi 4 8gb Starter Kit with 7 inch Touchscreen Display
Build your own powerful computer with the Raspberry Pi 4 8GB RAM Kit! This all-in-one kit includes everything you need to get started, including the latest Raspberry Pi 4 Model B with 8GB RAM, an official 7" touchscreen display, a case, power adapter, HDMI cable, and a 32GB MicroSD card.

The powerful 1.5GHz quad-core processor and 8GB of RAM ensure smooth operation for a variety of tasks, making this Raspberry Pi touchscreen display kit ideal for beginners and enthusiasts alike.

The Raspberry Pi 4 is a credit-card-sized computer that allows you to learn programming, and electronics, and build amazing projects.

With the included official touchscreen display, you can enjoy an intuitive user experience perfect for browsing, gaming, and multimedia applications. The high-quality  case with dual cooling fans keeps your Raspberry Pi cool and protected, even during extended use.

This official Raspberry Pi 4 8GB Kit with screen is easy to use and maintain, making it a perfect choice for beginners. With the included accessories in this Raspberry Pi Kit and online resources, you can get started quickly and begin building your own creations!

 `,
Availability:'limited',
Sold:"5 pcs",
Weight:"",
Category:"respberry pi display touch Screen"
 },
     { id: 61, img:`https://robocraze.com/cdn/shop/files/7_inch_LCD_Capacitive_Touch_Panel_with_HDMI_and_USB_Cable.png?v=1743775036&width=713`,
      name:"7 inch LCD Capacitive Touch Panel with HDMI and USB Cable",
       price: '3799',
       description:`This 7 inch LCD Capacitive Touch Panel is not only for mini-PCs, but it can also work as a computer monitor just like any other general HDMI screen. This Display supports Raspbian, Ubuntu, WIN10 IoT, single touch, and multi-touch and when working with other mini-PCs, the 7-inch LCD driver is required and should be developed by users.

The 7-inch Capacitive touch Display is activated with anything containing an inductive load such as a finger or stylus. It allows for multi-touch options. When using the capacitive touch screen, the display needs a separate controller to interface with the touch panel.

The display for capacitive touch is brighter since the touch panel is transparent. The Transmissive polarizer is best used for displays that run with the backlight on all the time. This polarizer provides the brightest backlight possible.  If you need a bright backlight with a lower power drain, transmissive is a good choice for this 7-inch LCD touchscreen.

If you want to use this display for raspberry pi then you will need a few handy
 `,
Availability:'limited',
Sold:"5 pcs",
Weight:"",
Category:"respberry pi display touch Screen"
 },
     { id: 62, img:`https://robocraze.com/cdn/shop/products/waveshare-101-inch-capacitive-hdmi-lcd-display-b-with-case-1280800-800x800_a9379096-f1ca-4ebc-a21d-cc8096916d9d.jpg?v=1743774908&width=713`,
      name:"Original Waveshare 10.1 inch Raspberry Pi Touch Screen Display with Case",
       price: '11499',
       description:`10.1 inch IPS HDMI Display with a case has 1280x800 high-resolution capacitive touch display, supports up to ten-point touch When works with Raspberry Pi, supports Raspbian, Ubuntu, Windows, single touch, and driver free When work as a computer monitor, supports Windows 8.1/8/7, ten-points touch, and driver free Supports Banana Pi, Banana Pro, comes with Ubuntu, Raspbian images Supports BB Black, comes with Angstrom image HDMI interface for displaying, USB interface for touch control Backlight control to lower power consumption The case Material: high-quality black Acrylic Comes with back holder, 45ø tilt angle Features mounting holes for Raspberry Pi 3B/3B+/2B/B+/A+/B, BB Black, Banana Pi.
 `,
Availability:'limited',
Sold:"5 pcs",
Weight:"",
Category:"respberry pi display touch Screen"
 },

  ];
  const filteredProducts = Products1.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

 const addToCart = (product) => {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const existingIndex = cart.findIndex(item => item.id === product.id);

    if (existingIndex !== -1) {
      cart[existingIndex].quantity += 1;
    } else {
      cart.push({ ...product, quantity: 1 });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    setShowAlert(true);
     window.scrollTo({ top: 0, behavior: 'smooth' });
    setTimeout(() => setShowAlert(false), 3000);
  };


    

    const [showAlert, setShowAlert] = useState(false);  

  return (
    <div className=''  >
      <div className="container mt-4">
        
        <h2 className="mb-3">Online Shop</h2>
           
            {showAlert && (
          <div className="flex items-center p-4 mb-4 text-sm text-blue-800 border border-blue-300 rounded-lg bg-blue-50" role="alert">
            <svg className="shrink-0 inline w-4 h-4 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
            </svg>
            <span className="font-medium">Item added!</span> Product successfully added to your cart.
          </div>
        )}
        <div className="row mb-4">
          <div className="col-12 d-flex justify-content-center">
            <input
              type="search"
              className="form-control"
              placeholder="🔍 Search the products"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>  
         
        </div>

        <div className="row d-flex justify-content-center"  >
          {filteredProducts.length > 0 ? (
            filteredProducts.map((details) => (
              <div key={details.id} className="col-md-4 mb-4 d-flex justify-content-center" >
                <div className="card h-100 shadow-sm" style={{width:'300px'}}>
                  <img
                    src={details.img}
                    className="card-img-top"
                    alt={details.name}
                    style={{ height: '200px', objectFit: 'contain' }}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{details.name}</h5>
                    <p className="card-text text-success">₹{details.price}</p>
                 
                    <p className="card-text">
                      <strong>Availability:</strong> {details.Availability}
                    </p>
                     <div class="flex items-center space-x-1 rtl:space-x-reverse">
                <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                </svg>
                <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                </svg>
                <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                </svg>
                <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                </svg>
                <svg class="w-4 h-4 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                </svg>
                 <span class="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-sm dark:bg-blue-200 dark:text-blue-800 ms-3">5.0</span>
            </div>
           
                    <button className="btn btn-primary w-100 mt-2"  onClick={() => addToCart(details)}>Add to Cart</button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-12 text-center">
              <p>No products found.</p>
            </div>
          )}
        </div>
      </div>

      <Footer />
      <Navbar />
    </div>
  );
};

export default Search;
