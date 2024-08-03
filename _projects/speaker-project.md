---
layout: page
title: A minimalistic puppeteering robot
description: "A minimalistic puppeteering robot that can convey human emotions. The robot was featured in the theatrical production <b><i>Rescate</i></b> at the La Moneda Cultural Center, Chile."
img: /assets/img/projects/speaker-project/thumbnail-speaker-project.png
importance: 10
category: work
---

The design requirements for this project were to build a robot that was shaped like a microphone stand and through its movements could convey human emotions. The robot was designed to be controlled by a human operator who would be able to control the robot’s movements in real-time using a smartphone. The robot was built using 3D printed parts and Dynamixel servos. For the control system, a Raspberry Pi was used to communicate with the Dynamixel servos and a Unity application was developed to control the robot’s movements.

As an additional feature, the user could physically move the robot and the sequence of movements could be recorded and played back. A total of ten movements could be recorded. Since the robot was designed to be used in a theatrical production, the user interface was designed to be simple and intuitive.

Here are some videos of the initial testing of the robot:

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include video.liquid path="https://www.youtube.com/embed/f8IKgpQYCJo" title="Routine1 Record" class="embed-responsive-item" width="384" height="216" caption="Routine 1 recording" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include video.liquid path="https://www.youtube.com/embed/jI74hmK2QfA" title="Routine1 Playback" class="embed-responsive-item" width="384" height="216" caption="Routine 1 playback" %}
    </div>
</div>
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include video.liquid path="https://www.youtube.com/embed/ERH4O4kLVSY" title="Routine2 Record" class="embed-responsive-item" width="384" height="216" caption="Routine 2 recording" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include video.liquid path="https://www.youtube.com/embed/7A9xyBd_F3o" title="Routine2 Playback" class="embed-responsive-item" width="384" height="216" caption="Routine 2 playback" %}
    </div>
</div>

The robot motion could also be controlled manually via the mobile application:

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include video.liquid path="https://www.youtube.com/embed/JJ2nTnc2ofA" title="Routine2 Record" class="embed-responsive-item" width="384" height="216" caption="Robot motion manually controlled through mobile application" %}
    </div>
</div>

The robot was featured in the theatrical production [“Rescate”](https://www.cclm.cl/actividades/rescate/) at the La Moneda Cultural Center, Chile.

<div class="row justify-content-sm-center">
    <div class="col-sm-7 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/projects/speaker-project/project-parts.png" title="project parts" class="img-fluid rounded z-depth-1" caption="The 3D printed parts of the robot" %}
    </div>
    <div class="col-sm-5 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/projects/speaker-project/setting-up.png" title="setting up" class="img-fluid rounded z-depth-1" caption="Setting up the robot for the theatrical production" %}
    </div>
</div>

*(Python programming, Android Application development, Wireless communication, 3D Printing)*

**Tech**: Python, Unity, Solidworks, Dynamixel SDK, Raspberry Pi
