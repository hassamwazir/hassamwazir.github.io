---
layout: archive
title: "Projects"
permalink: /projects/
author_profile: true
---

---
<!-- ## PhD Projects -->

<div class="project-container">
  <div class="project-item">
    <a href="/projects/rom-dva">
      <img src="/images/research/thumbnail-dva.png" alt="DVA project" class="project-image">
    </a>
    <div class="project-text">
      <a href="/projects/rom-dva">
        <h3>Range of Motion Assessment using a Digital Voice Assistant</h3>
      </a>
      <p>Utilized digital voice assistant devices for range of motion assessment and evaluated their feasibility for at-home therapy compliance among the elderly.</p>
    </div>
  </div>

  <div class="project-item">
    <a href="/projects/audio-analysis">
      <img src="/images/research/thumbnail-audio.gif" alt="Earbuds Project" class="project-image">
    </a>
    <div class="project-text">
    <a href="/projects/audio-analysis">
      <h3>Wireless Earphone-based Real-Time Monitoring of Breathing Exercises: A Deep Learning Approach</h3>
    </a>
      <p>A system for tracking breathing exercises that can detect nasal and oral breathing, as well as distinguish between inhaling and exhaling. This system can be used for at-home therapy compliance to prevent lymphedema.</p>
    </div>
  </div>

  <div class="project-item">
    <a href="/projects/wise">
      <img src="/images/research/thumbnail-wise.png" alt="Project 3 Image" class="project-image">
    </a>
    <div class="project-text">
      <a href="/projects/wise">
        <h3>Wearable Inertial Sensors for exergames (WISE)</h3>
      </a>
      <p>Wearable inertial sensor modules capable of capturing human upper extremity range of motion for stroke rehabilitation.</p>
    </div>
  </div>

  <div class="project-item">
    <a href="/projects/speaker-project">
      <img src="/images/research/thumbnail-speaker-project.png" alt="Project 1 Image" class="project-image">
    </a>
    <div class="project-text">
      <a href="/projects/speaker-project">
        <h3>A minimalistic puppeteering robot that can convey human emotions</h3>
      </a>
      <p>Designed and built a minimalistic puppeteering robot that can convey human emotions. The robot was featured in the theatrical production “Rescate” at the La Moneda Cultural Center, Chile.</p>
    </div>
  </div>

  
</div>

<!-- --- -->
<!-- ## Masters Projects -->

<!-- <div class="project-container">
  <div class="project-item">
    <a href="link_to_project_page_1">
      <img src="/images/research/thumbnail-placeholder.png" alt="Project 41 Image" class="project-image">
    </a>
    <div class="project-text">
      <h3>Project Title 1</h3>
      <p>Short description of project 1. This project involves...</p>
    </div>
   </div>
  

  <div class="project-item">
    <a href="link_to_project_page_2">
      <img src="/images/research/thumbnail-placeholder.png" alt="Project 5 Image" class="project-image">
    </a>
    <div class="project-text">
      <h3>Project Title 2</h3>
      <p>Short description of project 2. This project involves...</p>
    </div>
  </div>
</div> -->

<!-- --- -->
<!-- ## Undergraduate Projects -->

<!-- <div class="project-container">
  <div class="project-item">
    <a href="link_to_project_page_1">
      <img src="/images/research/thumbnail-placeholder.png" alt="Project 6 Image" class="project-image">
    </a>
    <div class="project-text">
      <h3>Project Title 1</h3>
      <p>Short description of project 1. This project involves...</p>
    </div>
   </div>
  

  <div class="project-item">
    <a href="link_to_project_page_2">
      <img src="/images/research/thumbnail-placeholder.png" alt="Project 7 Image" class="project-image">
    </a>
    <div class="project-text">
      <h3>Project Title 2</h3>
      <p>Short description of project 2. This project involves...</p>
    </div>
  </div>
</div> -->

<style>
  .project-container {
    display: flex;
    flex-direction: column;
    margin-top: 40px;
  }

  .project-item {
    display: flex;
    align-items: flex-start;
    margin-bottom: 20px;
  }

  .project-image {
    width: 150px; /* Adjust the width as needed */
    height: 150px;
    object-fit: cover; /* Ensure the image covers the space without distorting */
    margin-right: 20px;
    transition: transform 0.3s, box-shadow 0.3s; /* Smooth transition effect */
  }

  .project-image:hover {
    transform: scale(1.05); /* Slightly enlarge the image */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.7); /* Add a shadow effect */
  }

  .project-text {
    max-width: calc(100% - 170px); /* Prevent text container from stretching too much */
    height: 150px; /* Match the height of the image */
    display: flex;
    flex-direction: column;
    justify-content: flex-start; /* Align text content to the top */
  }

  .project-text h3 {
    margin: 0; /* Remove default margin for better alignment */
  }

  .project-text p {
    margin: 0; /* Remove default margin for better alignment */
    overflow: hidden; /* Hide overflow content */
    text-overflow: ellipsis; /* Add ellipsis for overflowing text */
  }
</style>