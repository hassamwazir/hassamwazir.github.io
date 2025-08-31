---
layout: distill
title: A minimalistic puppeteering robot
description: "A minimalistic puppeteering robot that can convey human emotions. The robot was featured in the theatrical production <b><i>Rescate</i></b> at the La Moneda Cultural Center, Chile."
img: /assets/img/projects/speaker-project/thumbnail-speaker-project.png
importance: 10
category: work
---

The design requirements for this project were to build a robot that was shaped like a microphone stand and through its movements could convey human emotions. The robot was designed to be controlled by a human operator who would be able to control the robot’s movements in real time using a smartphone. The robot was built using 3D-printed parts and Dynamixel servos. For the control system, a Raspberry Pi was used to communicate with the Dynamixel servos, and a Unity application was developed to control the robot’s movements.

As an additional feature, the user could physically move the robot and the sequence of movements could be recorded and played back. A total of ten movements could be recorded. Since the robot was designed to be used in a theatrical production, the user interface was designed to be simple and intuitive.

Here are some videos of the initial testing of the robot:

<div class="row">
    <div class="col-md-6 mt-3">
        {% include video.liquid path="https://www.youtube.com/embed/f8IKgpQYCJo" class="embed-responsive-item" width="100%" height="auto" %}
    </div>
    <div class="col-md-6 mt-3">
        {% include video.liquid path="https://www.youtube.com/embed/jI74hmK2QfA" class="embed-responsive-item" width="100%" height="auto" %}
    </div>
</div>
<p align="center">
    <em>(Left) Routine 1 recording, (Right) Routine 1 playback</em>
</p>

<div class="row">
    <div class="col-md-6 mt-3">
        {% include video.liquid path="https://www.youtube.com/embed/ERH4O4kLVSY" class="embed-responsive-item" width="100%" height="auto" %}
    </div>
    <div class="col-md-6 mt-3">
        {% include video.liquid path="https://www.youtube.com/embed/7A9xyBd_F3o" class="embed-responsive-item" width="100%" height="auto" %}
    </div>
</div>
<p align="center">
    <em>(Left) Routine 2 recording, (Right) Routine 2 playback</em>
</p>

The robot's motion could also be controlled manually via the mobile application:

<div class="row justify-content-center align-items-center">
    <div class="col-md-8 mt-3">
        {% include video.liquid path="https://www.youtube.com/embed/JJ2nTnc2ofA" class="embed-responsive-item" width="100%" height="auto" %}
    </div>
</div>
<p align="center">
    <em>Robot motion manually controlled through mobile application</em>
</p>

The robot was featured in the theatrical production [“Rescate”](https://www.cclm.cl/actividades/rescate/) at the La Moneda Cultural Center, Chile.

<div class="row justify-content-sm-center">
    <div class="col-sm-7 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/projects/speaker-project/project-parts.png" title="project parts" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm-5 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/projects/speaker-project/setting-up.png" title="setting up" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<p align="center">
    <em>(Left) The 3D printed parts of the robot, and (Right) Setting up the robot for the theatrical production</em>
</p>
---

**Tech**: Python, Unity, Solidworks, Dynamixel SDK, Raspberry Pi

_(Python programming, Android Application development, Wireless communication, 3D Printing)_
