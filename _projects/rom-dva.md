---
layout: page
title: Range of Motion Assessment using a Digital Voice Assistant
description: This work proposes using a Digital Voice Assistant for Range of Motion measurement by utilizing 2D pose estimation techniques to estimate 3D limb pose for specific exercises.
img: /assets/img/projects/rom-dva/thumbnail-rom-dva.png
importance: 2
category: work
---

## Abstract

> Range of motion (ROM) is an important indicator of an individual’s physical health, and its degradation impacts their ability to perform activities of daily living. The elderly are particularly susceptible to mobility loss due to muscular decline, neuromuscular disorders, sedentary lifestyle, etc. Thus, they must undergo periodic ROM assessments to track their physical well-being and consult doctors for any decline in ROM. An at-home ROM assessment device can assist the elderly to self-perform ROM assessment and facilitate remote monitoring of and compliance to therapy. The pervasive adoption of digital voice assistants (DVAs), that include a monocular camera, offers an opportunity for at-home ROM assessment. This paper proposes using a DVA for ROM measurement by utilizing 2D pose estimation techniques to estimate 3D limb pose for specific exercises. The system employs the MediaPipe library to perform 2D pose estimation and uses the joint coordinates to find the 3D pose of the limb using a 2D projection method. To validate the system, it is first compared with a 3D human model performing various shoulder and elbow exercises in a virtual environment. Next, for further validation, a neurologically intact individual performs the same exercises and the results of the proposed system are compared with the results from a markerless optical motion capture system (Kinect). The Bland-Altman limits of agreement (LOA) are computed and provided for the two sets of comparisons. The results demonstrate the feasibility of the proposed system in providing reliable ROM measurements using a DVA and suggest possible enhancements.
> Clinical relevance — This paper introduces the concept of ROM measurement using digital voice assistants embedded with a monocular camera

_(Python programming, MediaPipe, Data acquisition, processing, and visualization)_

**Tech**: Python, MATLAB, Web sockets, IFTTT
