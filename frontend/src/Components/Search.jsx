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
