---
title: "A minimalistic puppeteering robot that can convey human emotions"
short_title: "A minimalistic puppeteering robot that can convey human emotions"
layout: single-portfolio
excerpt: "<img src='/images/research/thumbnail-audio.png' alt=''>"
permalink: /projects/speaker-project
collection: projects
order_number: 10
header: 
og_image: "research/thumbnail-audio.png"

# date: 2021-05-12

---

<style>
.video-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px; /* Increased gap to accommodate caption spacing */
}

.video-item, .image-item {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.video-item .video-wrapper, .image-item .image-wrapper {
  position: relative;
  width: 100%;
  padding-bottom: 100%; /* 16:9 aspect ratio */
  height: 0;
}

.video-item .video-wrapper iframe, .image-item .image-wrapper img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.caption {
  margin-top: 10px;
  text-align: center;
  font-size: 12px;
}
</style>

**Authors:** [Hassam Khan Wazir](https://scholar.google.com/citations?user=hBetThYAAAAJ&hl=en&oi=ao) and [Alejandro Moreno](https://filmfreeway.com/AlejandroMorenoJashes)

The design requirements for this project were to build a robot that was shaped like a microphone stand and through its movements could convey human emotions. The robot was designed to be controlled by a human operator who would be able to control the robot's movements in real-time using a smartphone. The robot was built using 3D printed parts and Dynamixel servos. For the control system, a Raspberry Pi was used to communicate with the Dynamixel servos and a Unity application was developed to control the robot's movements.



As an additional feature, the user could physically move the robot and the sequence of movements could be recorded and played back. A total of ten movements could be recorded. Since the robot was designed to be used in a theatrical production, the user interface was designed to be simple and intuitive.

<div class="video-grid">
  <div class="video-item">
    <iframe
      src="https://www.youtube.com/embed/f8IKgpQYCJo"
      frameborder="1"
      allow="autoplay; encrypted-media"
      allowfullscreen
    ></iframe>
    <p class="caption">Routine 1 recording</p>
  </div>
  <div class="video-item">
    <iframe
      src="https://www.youtube.com/embed/jI74hmK2QfA"
      frameborder="1"
      allow="autoplay; encrypted-media"
      allowfullscreen
    ></iframe>
    <p class="caption">Routine 1 playback</p>
  </div>
  <div class="video-item">
    <iframe
      src="https://www.youtube.com/embed/ERH4O4kLVSY"
      frameborder="1"
      allow="autoplay; encrypted-media"
      allowfullscreen
    ></iframe>
    <p class="caption">Routine 2 recording</p>
  </div>
  <div class="video-item">
    <iframe
      src="https://www.youtube.com/embed/7A9xyBd_F3o"
      frameborder="1"
      allow="autoplay; encrypted-media"
      allowfullscreen
    ></iframe>
    <p class="caption">Routine 2 playback</p>
  </div>
    <div class="video-item">
    <iframe
      src="https://www.youtube.com/embed/JJ2nTnc2ofA"
      frameborder="1"
      allow="autoplay; encrypted-media"
      allowfullscreen
    ></iframe>
    <p class="caption">Robot motion manually controlled through mobile application</p>
  </div>
</div>

The robot was featured in the theatrical production [“Rescate”](https://www.cclm.cl/actividades/rescate/) at the La Moneda Cultural Center, Chile.

<div class="video-grid">
  <div class="image-item">
    <div class="image-wrapper">
      <img
        src="/files/images/projects/speaker-project/project-parts.jpg"
        alt="The 3D printed parts of the robot."
      />
    </div>
    <p class="caption">The 3D printed parts of the robot</p>
  </div>
  <div class="image-item">
    <div class="image-wrapper">
      <img
        src="/files/images/projects/speaker-project/setting-up.jpg"
        alt="Setting up the robot for the theatrical production."
      />
    </div>
    <p class="caption">Setting up the robot for the theatrical production</p>
  </div>
</div>

<!-- ![image](/files/images/projects/speaker-project/setting-up.jpg) -->

*(Python programming, Android Application development, Wireless communication, 3D Printing)*

**Tech:** Python, Unity, Solidworks, Dynamixel SDK, Raspberry Pi