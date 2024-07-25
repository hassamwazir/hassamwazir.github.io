---
title: "A minimalistic puppeteering robot that can convey human emotions"
short_title: "A minimalistic puppeteering robot that can convey human emotions"
layout: single-portfolio
excerpt: "<img src='/images/research/thumbnail-audio.png' alt=''>"
permalink: /project/microphone-project
collection: projects
order_number: 10
header: 
og_image: "research/thumbnail-audio.png"

# date: 2021-05-12

---

We were tasked with designing and building a minimalistic puppeteering robot that can convey human emotions. The robot was featured in the theatrical production “Rescate” at the La Moneda Cultural Center, Chile.

**Authors:** [Hassam Khan Wazir](https://scholar.google.com/citations?user=hBetThYAAAAJ&hl=en&oi=ao) and [Alejandro Moreno](https://filmfreeway.com/AlejandroMorenoJashes)

The design requirements were to build a robot that was shaped like a microphone stand and through its movements could convey human emotions. The robot was designed to be controlled by a human operator who would be able to control the robot's movements in real-time using a smartphone. The robot was built using 3D printed parts and Dynamixel servos. For the control system, a Raspberry Pi was used to communicate with the Dynamixel servos and a Unity application was developed to control the robot's movements.

<iframe
  width="160"
  height="120"
  src="https://www.youtube.com/embed/X3xGDrRx9pg"
  frameborder="1"
  allow="autoplay; encrypted-media"
  allowfullscreen
>
</iframe>

As an additional feature, the user could physically move the robot and the sequence of movements could be recorded and played back. A total of ten movements could be recorded. Since the robot was designed to be used in a theatrical production, the user interface was designed to be simple and intuitive. The robot was featured in the theatrical production [“Rescate”](https://www.cclm.cl/actividades/rescate/) at the La Moneda Cultural Center, Chile.

<!-- **Abstract**

> Several therapy routines require deep breathing exercises as a key component and patients undergoing such therapies must perform these exercises regularly. Assessing the outcome of a therapy and tailoring its course necessitates monitoring a patient's compliance with the therapy. While therapy compliance monitoring is routine in a clinical environment, it is challenging to do in an at-home setting. This is so because a home setting lacks access to specialized equipment and skilled professionals needed to effectively monitor the performance of a therapy routine by a patient. For some types of therapies, these challenges can be addressed with the use of consumer-grade hardware, such as earphones and smartphones, as practical solutions. To accurately monitor breathing exercises using wireless earphones, this paper proposes a framework that has the potential for assessing a patient's compliance with an at-home therapy. The proposed system performs real-time detection of breathing phases and channels with high accuracy by processing a $500$ ms audio signal through two convolutional neural networks. The first network, called a channel classifier, distinguishes between nasal and oral breathing, and a pause. The second network, called a phase classifier, determines whether the audio segment is from inhalation or exhalation. According to $k$-fold cross-validation, the channel and phase classifiers achieved a maximum F1 score of $97.99\%$ and $89.46\%$, respectively. The results demonstrate the potential of using commodity earphones for real-time breathing channel and phase detection for breathing therapy compliance monitoring.  
**Clinical relevance** — This paper introduces a real-time monitoring system for breathing that can facilitate therapy compliance for several breathing-based exercises. -->

*(Python programming, Android Application development, Wireless communication, 3D Printing)*

**Tech:** Python, Unity, Solidworks, Dynamixel SDK, Raspberry Pi

<!-- [Article](){: .btn--research} [Preprint](/files/pdf/research/lymph-brom-preprint.pdf){: .btn--research} -->
