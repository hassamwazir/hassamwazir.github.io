---
layout: distill
title: Wearable Pendant Sensor for Therapy Compliance
description: A wearable pendant sensor to monitor compliance with range of motion lymphatic health exercise
img: /assets/img/projects/rom-wps/thumbnail-rom-wps.png
importance: 5
category: work
toc:
  - name: Abstract
pretty_table: true
# related_publications: true
bibliography: projects/rom-wps/rom-wps.bib
---

**Publicaiton:** (Wazir et al., 2020)<d-cite key="wazir2020wearable"></d-cite>

## Introduction

Lymphedema is a chronic, incurable condition that affects approximately 1 in 1,000 Americans, often as a result of surgery or radiation therapy, particularly in breast cancer survivors. Characterized by swelling due to fluid buildup in the lymphatic system, lymphedema can cause significant physical and emotional discomfort. One of the most effective preventive exercise programs designed for patients with lymphedema is the Optimal Lymph Flow (TOLF) regimen. However, consistent monitoring and adherence to this exercise plan can be challenging, especially for at-home settings. This post explores the development of a novel wearable device—the Wearable Pendant Sensor (WPS)—designed to monitor compliance with the TOLF therapy.

## The Challenge of Monitoring Lymphedema Therapy

For patients at risk of developing lymphedema, regular exercise can significantly reduce the risk. The TOLF program, specifically developed for post-operative breast cancer patients, includes breathing exercises, shoulder movements, and large muscle activities that improve lymph flow and help prevent the onset of lymphedema. However, monitoring patient adherence and ensuring that exercises are performed correctly are vital to maximizing the therapeutic benefit.

<!-- <p align="center">
    <img src="/assets/img/projects/rom-wps/system-architecture.png" alt="Illustration of proposed IoT and smartphone-based TOLF exercise monitoring system." width="600px">
    <br>
    <em>Figure 1: Illustration of proposed IoT and smartphone-based TOLF exercise monitoring system.</em>
</p> -->

Current methods of motion tracking, such as optical motion capture (MOCAP) systems like Kinect, are either too expensive, require skilled personnel, or compromise patient privacy. Therefore, a need for a more accessible and user-friendly system is clear.

## A Wearable Solution: The Development of the Wearable Pendant Sensor (WPS)

In response to this need, researchers have developed the Wearable Pendant Sensor (WPS), a low-cost, wearable device that can track shoulder range of motion (ROM) and breathing patterns during TOLF exercises. The device consists of eight conductive fabric petals in a 3D-printed enclosure. A pendulum at the center of the sensor rotates according to the user’s arm movement. As the arm moves through space, the pendulum completes an electrical circuit by touching the conductive petals, allowing the device to measure the shoulder's ROM.

<!-- <p align="center">
    <img src="/assets/img/projects/rom-wps/prototype.png" alt="(a) Schematic of the WPS signal flow and components, (b) WPS prototype worn by a user during a shoulder exercise, and (c) pendulum and petals in the wearable sleeve." width="600px">
    <br>
    <em>Figure 2: (a) Schematic of the WPS signal flow and components, (b) WPS prototype worn by a user during a shoulder exercise, and (c) pendulum and petals in the wearable sleeve.</em>
</p> -->

The WPS device is designed to be worn on both upper arms, with each device connected to a smartphone via Bluetooth. The smartphone also plays a crucial role in monitoring breathing patterns, using its microphone to capture breathing during TOLF exercises.

## Accuracy and Validation: Testing the WPS Prototype

To validate the effectiveness of the WPS, researchers conducted a study comparing the measurements obtained from the WPS device with those from the Kinect motion capture system during shoulder abduction-adduction and flexion-extension exercises. The results were highly promising, showing a strong correlation between the two systems. Kendall’s Tau correlation coefficient was 0.807 for abduction-adduction exercises and 0.783 for flexion-extension exercises, with a significance level of p < 0.001, indicating high statistical significance.

**TABLE I:** Comparison of statistical analysis between WPS and Kinect for shoulder exercises.

| Shoulder Exercise            | Kendall’s Tau (𝜌) | RMSE (degrees) |
| :--------------------------- | :---------------: | :------------: |
| Shoulder abduction-adduction |       0.807       |    21.496°     |
| Shoulder flexion-extension   |       0.783       |    27.559°     |

Furthermore, the researchers found that the WPS device could measure maximum ROM and repetitions, two critical parameters for assessing compliance with TOLF. The ability to monitor breathing patterns during exercises, a crucial aspect of TOLF compliance, was also demonstrated using the smartphone's microphone.

<!-- <p align="center">
    <img src="/assets/img/projects/rom-wps/plots.png" alt="(a) Time series plot of angular measurements from WPS and Kinect during shoulder abduction-adduction, (b) time series plot for flexion-extension." width="600px">
    <br>
    <em>Figure 3: (a) Time series plot of angular measurements from WPS and Kinect during shoulder abduction-adduction, (b) time series plot for flexion-extension.</em>
</p> -->

## Future Directions: Integrating IoT for Remote Monitoring

The current low-fidelity WPS prototype is just the beginning. The next step in the development process is to integrate Bluetooth-enabled microcontrollers and machine learning algorithms into the device. This will enable real-time feedback and allow healthcare providers to monitor patient adherence remotely. By connecting the WPS to the cloud, patients can perform their exercises at home, and nurses or therapists can access their data from anywhere, reducing the need for frequent in-person visits and improving the overall cost-effectiveness of lymphedema management.

## Conclusion

The development of the Wearable Pendant Sensor represents a significant step forward in the telemonitoring of lymphedema therapy. By providing real-time data on exercise adherence and accuracy, this device has the potential to improve patient outcomes and reduce the burden on healthcare systems. As we continue to advance this technology, integrating features such as machine learning and IoT connectivity will further enhance the device's capabilities, making remote monitoring more accessible and reliable for patients worldwide.

## Key Takeaways:

> Lymphedema is a debilitating condition with no known cure, affecting many post-operative breast cancer patients.

> The TOLF program is a therapeutic exercise regimen designed to improve lymph flow and reduce the risk of lymphedema.

> The WPS device offers a low-cost, wearable solution for monitoring compliance with TOLF therapy, tracking both shoulder range of motion and breathing patterns.

> Preliminary validation studies show a high correlation between WPS measurements and traditional MOCAP systems like Kinect.

> Future developments will integrate Bluetooth and IoT functionality to enable remote monitoring and improve treatment adherence.

By harnessing wearable technology and data-driven telemonitoring, the WPS device could revolutionize how lymphedema therapy is managed, empowering patients to take control of their health from the comfort of their own homes.

_(MATLAB programming, Wearable Sensor Design, Data acquisition, processing, and visualization)_

**Tech**: MATLAB, C++, Arduino IDE
