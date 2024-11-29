---
title: "EECS 373 All-Nighter"
date: 2024-06-10 00:00
---

EECS 373: Introduction to Embedded System Design is a class at the University of Michigan that is
"focused on the principles and practices of modern embedded system design." The final project is
creating a substantial embedded system with a group of 4 people. My group was myself, H, W, and M.

Our project was LazyCart: The Autonomous Shopping Cart. It was a motorized grocery cart that would
automatically follow the user. It utilized a STM32L4 microcontroller that interfaced a PixyCam (I2C)
for user recognition, two ultrasonic sensors (input capture timing) for user distance tracking, and
an IR sensor (analog) for low-object collision detection. As extra features, the MCU also interfaced
a pressure sensor (analog) for the built-in produce scale and an LCD screen (SPI) to display
information to the user.

Everything was going well throughout the semester. Then, a couple of days before the demo day,
everything fell apart. All that was left to integrate was the IR sensor. We had the
analog-to-digital converter (ADC) for both the IR sensor and the pressure sensor on separate boards,
but we had only just started to test integrating the two onto the same board. According to all
resources we found online, the STM32L4 should have easily been able to handle two analog signals
perfectly fine. The IR sensor would go on one ADC channel, and the pressure sensor would simply go
on another channel. However, we couldn't get this working. We tried every single possible online
tutorial, GitHub example, and YouTube tutorial. We read through the STM32L4 datasheet and usage
guide over and over again. Nothing worked. We were getting skill issued so hard by this MCU.

At this point, the IR sensor doesn't work and it's the final night before the demo day. H, W, and I
just finished writing up our EECS 470 report. We head over to the EECS 373 lab with little hope.
It seems like we would have to just remove the IR sensor completely from our project.

At around 1 AM, after a couple hours of getting nowhere, we decide to send M home. The plan would be
for him to rest up so we could have at least one group member awake and conscious during demo day.

A couple hours later, and still no progress, W also decides to head home. The chances seemed slim,
but H and I decided to stay in the lab and hope for a miracle. We silently sat there defeated.
After looking around, we realized that there was a project next to us using 8 of the same IR
sensors that we were using. In awe, we decided to inspect a bit further. After a bit of inspection,
we discovered how they did it: an external mux that could take up to 8 analog signal inputs and
output a single signal based on 3 select pins. We were in disbelief. Our solution was right in
front of us. All of the pain and debugging. Gone with a simple
[$6 breakout board](https://www.sparkfun.com/products/9056). We frantically tried to look for one.
We were thinking there was absolutely no shot we'd find an extra one of these boards. But, after
a couple of minutes of searching, we actually found one in a random bin. We could not believe our
eyes. It was genuinely unbelievable. We were so happy that we started jumping up and down hugging
each other.

After the most botched soldering job ever, incredibly sus wiring, and the addition of a second
battery (one battery did not meet our power requirements), we were able to get everything
implemented by 9 AM. "It just works out in the end" is our procrastination motto. It actually
did just work out in the end. Surely, this line of thinking never fails us. Surely...
