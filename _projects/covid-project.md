---
layout: distill
title: Remote Control of a Dialysis Machine using a Human-Robot Interaction
description: In this work we propose an emergency, non-invasive remote monitoring and control response system to retrofit dialysis machines with robotic manipulators for safely supporting the treatment of patients with acute kidney disease.
img: /assets/img/projects/covid/thumbnail-covid-project.png
importance: 4
category: work
toc:
  - name: "Remote Control of Dialysis Machines: A Game Changer for Healthcare During Pandemics"
  - name: "The Challenge: Safeguarding Healthcare Workers and Patients"
  - name: "The Solution: Remote Control of Dialysis Machines"
  - name: "How It Works: A User-Friendly Interface"
  - name: "Testing and User Experience"
  - name: "The Future of Telerobotics in Healthcare"
  - name: "Suggested Improvement Based on User Tests"
bibliography: projects/covid-project/covid-project.bib
pretty_table: true
related_publications: true
---

**Publication:** (Wazir et al., 2021)<d-cite key="wazir2021covid"></d-cite>

## Remote Control of Dialysis Machines: A Game Changer for Healthcare During Pandemics

<p align="center"> 
  <img src="/assets/img/projects/covid/schematic1.jpg" alt="Schematic of a remote dialysis control system." width="600px"> 
  <br> <em>Figure 1: (A) Dialysis patient receiving treatment during the COVID-19 pandemic, with healthcare workers using baby monitors. (B) Typical schematic of a dialysis patient receiving treatment at a dialysis center.</em> 
</p>

The COVID-19 pandemic brought significant challenges to healthcare systems worldwide. Hospitals were overwhelmed, personal protective equipment (PPE) shortages were widespread, and healthcare workers were at high risk of contracting the virus. Among the most vulnerable populations during the pandemic were dialysis patients, many of whom are elderly and immunocompromised, making them more susceptible to severe complications if infected. With dialysis treatments being life-sustaining, it became critical to find innovative ways to reduce the risk of virus transmission while ensuring that patients continued receiving care.

Enter telerobotics and human-robot interaction (HRI). These cutting-edge technologies, once the domain of research labs, are now finding life-saving applications in real-world healthcare settings. My recent research explores a novel system that enables the remote control of dialysis machines, drastically reducing the need for healthcare workers to physically interact with patients during treatment. This system leverages intuitive mobile interfaces, such as smartphones and tablets, combined with affordable off-the-shelf robotic manipulators. Let’s dive into how this solution works and why it has the potential to revolutionize patient care during pandemics.

## The Challenge: Safeguarding Healthcare Workers and Patients

<p align="center"> 
  <img src="/assets/img/projects/covid/gambro.jpg" alt="Gambro X-36 Phoenix dialysis machine." width="600px"> 
  <br> <em>Figure 2: The Gambro X-36 Phoenix dialysis machine used in our system for remote control testing.</em>
</p>

During the height of the COVID-19 pandemic, hospitals and dialysis centers were facing critical shortages of PPE. Healthcare workers, such as doctors and nurses, were directly exposed to pathogens, particularly in shared spaces where patients with contagious diseases were treated. This raised the risk of cross-contamination, especially as the virus could spread through asymptomatic carriers.

Dialysis patients were especially at risk. In New York City, during the early days of the pandemic, the New York Times reported that dialysis patients were facing a “close-up” risk from the coronavirus, as staff shortages and PPE rationing made it difficult to implement stringent protocols. As a result, hospitals were forced to adopt stop-gap measures like baby monitors to reduce direct contact between healthcare workers and patients.

## The Solution: Remote Control of Dialysis Machines

To mitigate these risks, we proposed a remote monitoring and control system for dialysis machines that allows healthcare workers to operate the machine’s instrument panel without entering the patient’s room. Our system consists of a four-degree-of-freedom (DoF) robotic manipulator mounted with a USB camera. The robot is controlled via a smartphone or tablet interface connected to the same wireless network, enabling healthcare professionals to operate it from a safe distance.

<p align="center"> 
  <img src="/assets/img/projects/covid/system_schematic.jpg" alt="Schematic of the remote monitoring and control system." width="600px"> 
  <br> <em>Figure 3: Remote monitoring and control system for medical instruments. The user interface on the tablet is used to control the robotic manipulator interacting with the dialysis machine's touchscreen.</em> 
</p>

The key advantage of this solution is its simplicity and accessibility. Instead of relying on specialized, expensive medical robots, our system uses cost-effective and commercially available hardware, which can be easily retrofitted onto existing dialysis machines. This makes it possible to quickly deploy the solution in case of a pandemic or other healthcare emergencies, where time and resources are of the essence.

## How It Works: A User-Friendly Interface

<p align="center"> 
  <img src="/assets/img/projects/covid/robot_prototype.jpg" alt="Robot manipulator CAD model and prototype." width="600px"> 
  <br> <em>Figure 4: (A) CAD model of the robotic manipulator and (B) the built prototype interacting with the dialysis machine.</em> 
</p>

<p align="center"> 
  <img src="/assets/img/projects/covid/marker_approach.jpg" alt="Four-marker and single-marker approach for tracking." width="600px"> 
  <br> <em>Figure 5: (A) Four-marker approach and (B) single-marker approach for tracking the touchscreen interface of the dialysis machine.</em> 
</p>

The robot interacts with the dialysis machine’s touchscreen (the instrument control panel or ICPT), mimicking the actions that a healthcare worker would perform in person. Using a mobile app, the healthcare worker taps on a virtual interface displayed on their smartphone or tablet. The system then maps these inputs to the corresponding positions on the ICPT, allowing the robot to press buttons or adjust controls.

To ensure accuracy, we employed a combination of marker-based tracking and intuitive user interfaces. The camera on the robotic manipulator captures the dialysis machine’s instrument panel, and the mobile app uses this feed to provide real-time feedback to the user. This setup allows the healthcare worker to directly interact with the robot and the dialysis machine as though they were physically present in the room.

## Testing and User Experience

We conducted a study involving 33 participants to evaluate the usability and performance of our system. Participants were divided into two groups: some interacted with the robot using a tablet device from an adjacent room, while others controlled the robot remotely via the internet. Tasks were designed to mimic real-world interactions, such as pressing buttons or adjusting sliders on the dialysis machine’s touchscreen.

The results were promising. Participants were able to complete tasks successfully, and the system demonstrated a high degree of accuracy, with a maximum average error of just 2.56 mm. Moreover, users reported that the interface was easy to use, requiring minimal effort to operate. However, there were some challenges, such as the speed of the robot’s movements and occasional skewed camera angles, which we addressed by adding features like perspective correction to the video feed.

<p align="center"> 
  <img src="/assets/img/projects/covid/user_setup.jpg" alt="HRI interface and system setup." width="600px"> 
  <br> <em>Figure 6: (A) The HRI interface and (B) complete system setup used for user study experiments.</em> 
</p> 
  
<p align="center"> 
  <img src="/assets/img/projects/covid/user_interface.jpg" alt="Annotated image of the user interface." width="600px"> 
  <br> <em>Figure 7: Annotated user interface with interactive tasks performed by participants in the user study.</em> 
</p>

<div class="row justify-content-center align-items-center">
  <div class="col-md-8">
    {% include video.liquid path="https://www.youtube.com/embed/X3xGDrRx9pg" class="embed-responsive-item rounded z-depth-1" controls=true width="100%" %}
  </div>
</div>
<p align="center"> 
  <em>Video 1: The robotic manipulator interacting with the ICPT, controlled remotely using a tablet.</em> 
</p>

## The Future of Telerobotics in Healthcare

While our current system focuses on dialysis machines, the potential applications of this technology extend far beyond that. Telerobotic systems could be adapted to control various medical instruments, providing healthcare workers with a versatile tool for managing a wide range of treatments remotely. This could reduce their exposure to infectious diseases, decrease the reliance on PPE, and ensure that patients continue to receive high-quality care even during pandemics.

<p align="center"> 
  <img src="/assets/img/projects/covid/performance_results.jpg" alt="Performance test results." width="600px"> 
  <br> <em>Figure 8: Results from the NASA-RTLX task load and SUS questionnaire assessing the usability of the system.</em> 
</p>

Additionally, the use of mobile devices as the primary interface makes the system highly accessible. Unlike traditional medical robots, which require specialized training and equipment, our solution can be operated by anyone with a smartphone or tablet. This democratizes access to advanced medical technology and ensures that it can be rapidly deployed in emergency situations.

## Conclusion

The COVID-19 pandemic underscored the urgent need for innovative solutions to protect healthcare workers and patients alike. Our research into the remote control of dialysis machines using mobile HRI is one such solution, providing a safe and effective way to manage essential medical treatments without putting healthcare staff at risk. As we continue to refine and expand this technology, we envision a future where telerobotics becomes a standard tool in hospitals and healthcare facilities worldwide.

By reducing the need for direct physical interaction, this system not only protects healthcare workers but also ensures that vulnerable patients can continue receiving life-saving treatments during crises. The rapid deployment and user-friendly nature of this solution make it a game changer in the world of healthcare robotics, and we look forward to further exploring its potential in other areas of medical care.

## Suggested Improvement Based on User Tests

During our user study, some participants pointed out that the video feed from the robot’s camera displayed on the tablet could appear skewed due to perspective distortion. This made it challenging for users to interact precisely with the dialysis machine’s interface, especially when using the single-marker approach for tracking.

In response to this feedback, we implemented a perspective correction feature to improve the user experience. When the mobile app starts, it prompts the user to manually select the four corners of the dialysis machine’s instrument control panel (ICPT) on the video feed displayed on the tablet. This allows the system to calculate a transformation matrix and correct the skewed perspective.

Once the correction is applied, the user sees a distortion-free, straightened view of the ICPT on their tablet, which makes it easier to interact with the machine's buttons and sliders. The robot then maps the user’s touch input on the corrected image back to the original video feed’s perspective, ensuring accurate control of the robotic manipulator.

This feature significantly improves the system's usability by making the interaction more intuitive and reducing errors caused by misalignment. It enhances the precision of the robot’s actions, ensuring that healthcare workers can confidently control the dialysis machine from a distance with minimal visual distortion.

<p align="center"> 
  <img src="/assets/img/projects/covid/perspective_correction.jpg" alt="Perspective correction." width="600px"> 
  <br> <em>Figure 9: (A) User-selected corners for perspective correction and (B) distortion-corrected image on the tablet interface.</em> 
</p>

By integrating this perspective correction, we address the issue of camera skew, making remote control of the dialysis machine more efficient and user-friendly. Future iterations of this system will continue to refine this feature, as well as test its applications across other medical devices with varying interface layouts.

<!-- ## Abstract

> This paper presents the design and development of wearable inertial sensors (WIS) for real-time simultaneous triplanar motion capture of the upper extremity (UE). The sensors simultaneously capture in the frontal, sagittal, and horizontal planes UE range of motion (ROM), which is critical to assess an individual’s movement limitations and determine appropriate rehabilitative treatments. Off-theshelf sensors and microcontrollers are used to develop the WIS system, which wirelessly streams real-time joint orientation for UE ROM measurement. Key developments include: (i) two novel approaches, using earth’s gravity (EG approach) and magnetic field (EGM approach) as references, to correct misalignments in the orientation between the sensor and its housing to minimize measurement errors; (ii) implementation of the joint coordinate system (JCS)-based method for triplanar ROM measurements for clinical use; and (iii) an in-situ guided mounting technique for accurate sensor placement and alignment on human body. The results (i) compare computational time between two orientation misalignment correction approaches (EG approach = 325.05 μs and EGM approach = 92.05μs); (ii) demonstrate the accuracy and repeatability of measurements from the WIS system (percent deviation of measured angle from applied angle is less than ±6.5% and percent coefficient of variation is less than 11%, indicating acceptable accuracy and repeatability,respectively); and (iii) demonstrate the feasibility of using the WIS system within the JCS framework for providing anatomicallycorrect simultaneous triplanar ROM measurements of shoulder, elbow, and forearm movements during several upper limb exercises. -->

_(MATLAB programming, Inertial Measurement Unit, Data acquisition, processing, and visualization)_

**Tech**: MATLAB, C++, Arduino IDE
