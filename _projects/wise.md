---
layout: distill
title: Werable Inertial Sensors for Exergames
description: This work presents the design and development of wearable inertial sensors (WIS) for real-time simultaneous triplanar motion capture of the upper extremity.
img: /assets/img/projects/wise/thumbnail-wise.png
importance: 4
category: work
toc:
  - name: Abstract
pretty_table: true
# related_publications: true
bibliography: projects/wise/wise.bib
---

**Publicaiton:** (Rajkumar et al., 2019)<d-cite key="rajkumar2019wise"></d-cite>

## Abstract

> This paper presents the design and development of wearable inertial sensors (WIS) for real-time simultaneous triplanar motion capture of the upper extremity (UE). The sensors simultaneously capture in the frontal, sagittal, and horizontal planes UE range of motion (ROM), which is critical to assess an individual’s movement limitations and determine appropriate rehabilitative treatments. Off-theshelf sensors and microcontrollers are used to develop the WIS system, which wirelessly streams real-time joint orientation for UE ROM measurement. Key developments include: (i) two novel approaches, using earth’s gravity (EG approach) and magnetic field (EGM approach) as references, to correct misalignments in the orientation between the sensor and its housing to minimize measurement errors; (ii) implementation of the joint coordinate system (JCS)-based method for triplanar ROM measurements for clinical use; and (iii) an in-situ guided mounting technique for accurate sensor placement and alignment on human body. The results (i) compare computational time between two orientation misalignment correction approaches (EG approach = 325.05 μs and EGM approach = 92.05μs); (ii) demonstrate the accuracy and repeatability of measurements from the WIS system (percent deviation of measured angle from applied angle is less than ±6.5% and percent coefficient of variation is less than 11%, indicating acceptable accuracy and repeatability,respectively); and (iii) demonstrate the feasibility of using the WIS system within the JCS framework for providing anatomicallycorrect simultaneous triplanar ROM measurements of shoulder, elbow, and forearm movements during several upper limb exercises.

*(MATLAB programming, Inertial Measurement Unit, Data acquisition, processing, and visualization)*

**Tech**: MATLAB, C++, Arduino IDE
