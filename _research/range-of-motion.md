---
title: "Range of Motion"
short_title: "Range of Motion"
layout: single-portfolio
excerpt: "<img src='/images/research/thumbnail-wps.png' alt=''>"
collection: research
order_number: 1
header: 
og_image: "research/thumbnail-wps.png.png"
# date: 2021-04-01

---
## Range of Motion Assessment using a Digital Voice Assistant

This paper proposes using a Digital Voice Assistant for Range of Motion measurement by utilizing 2D pose estimation techniques to estimate 3D limb pose for specific exercises.

**Authors:** [Hassam Khan Wazir](https://scholar.google.com/citations?user=hBetThYAAAAJ&hl=en&oi=ao), [Kshitij Gaikwad](https://www.linkedin.com/in/kshitij-gaikwad-90bb71216/) and [Vikram Kapila](https://scholar.google.com/citations?user=6PTJF28AAAAJ&hl=en)

**Abstract**

> Range of motion (ROM) is an important indicator of an individual's physical health, and its degradation impacts their ability to perform activities of daily living. The elderly are particularly susceptible to mobility loss due to muscular decline, neuromuscular disorders, sedentary lifestyle, etc. Thus, they must undergo periodic ROM assessments to track their physical well-being and consult doctors for any decline in ROM. An at-home ROM assessment device can assist the elderly to self-perform ROM assessment and facilitate remote monitoring of and compliance to therapy. The pervasive adoption of digital voice assistants (DVAs), that include a monocular camera, offers an opportunity for at-home ROM assessment. This paper proposes using a DVA for ROM measurement by utilizing 2D pose estimation techniques to estimate 3D limb pose for specific exercises. The system employs the MediaPipe library to perform 2D pose estimation and uses the joint coordinates to find the 3D pose of the limb using a 2D projection method. To validate the system, it is first compared with a 3D human model performing various shoulder and elbow exercises in a virtual environment. Next, for further validation, a neurologically intact individual performs the same exercises and the results of the proposed system are compared with the results from a markerless optical motion capture system (Kinect). The Bland-Altman limits of agreement (LOA) are computed and provided for the two sets of comparisons. The results demonstrate the feasibility of the proposed system in providing reliable ROM measurements using a DVA and suggest possible enhancements.  
**Clinical relevance** — This paper introduces the concept of ROM measurement using digital voice assistants embedded with a monocular camera

*(Pyhon programming, MediaPipe, Data acquisition, processing, and visualization)*

**Tech:** Python, MATLAB, Web sockets, IFTTT

[Article](https://ieeexplore.ieee.org/abstract/document/9870888){: .btn--research} [Preprint](/files/pdf/research/-roma-dva-preprint.pdf){: .btn--research}
<!-- [Supplemental Information](/files/pdf/research/Turning the Lights on SI.pdf){: .btn--research} [Replication Archive](https://journals.sagepub.com/doi/suppl/10.1177/07388942211015242){: .btn--research} [GitHub Repo](https://github.com/jayrobwilliams/conflict-preemption){: .btn--research} [Poster](/files/pdf/research/PSS 2018 Poster.pdf){: .btn--research} -->

---
## A Wearable Pendant Sensor to Monitor Compliance with Range of Motion Lymphatic Health Exercise

A portable and wearable medical device to monitor compliance with the TOLF therapy.

**Authors:** [Hassam Khan Wazir](https://scholar.google.com/citations?user=hBetThYAAAAJ&hl=en&oi=ao), [Satish Reddy Bethi](https://scholar.google.com/citations?user=QdEyUtEAAAAJ&hl=en), [Ashwin Raj Kumar](https://scholar.google.com/citations?user=FJXcZW0AAAAJ&hl=en), and [Vikram Kapila](https://scholar.google.com/citations?user=6PTJF28AAAAJ&hl=en)

**Abstract**

> Lymphedema is a chronic and debilitating condition affecting $1$ in $1000$ Americans and there is no known cure for it. The optimal lymph flow (TOLF) is an effective preventive exercise program designed to reduce the risks of lymphedema. This paper proposes a portable and wearable medical device to monitor compliance with the TOLF therapy. Specifically, the wearable pendant sensor (WPS), a low-fidelity prototype of the proposed design, is developed and tested in comparison with a markerless optical motion capture system (Kinect) for measurement accuracy during shoulder abduction-adduction and flexion-extension exercises. It is shown that the Kendall’s Tau between the measurements obtained from the WPS and Kinect devices yields a correlation coefficient $\rho = 0.807$ for abduction-adduction exercise and $\rho = 0.783$ for flexion-extension exercise with a significance level of $p < 0.001$, indicating a strong correlation and high statistical significance. Following careful clinical assessment and validation, preliminary engineering design of this paper can be transformed into an Internet of Things (IoT)-based medical device to facilitate telemonitoring of TOLF therapy. Deployment of such an IoT-based device in patient homes can permit remote assessment of motor function to enhance treatment adherence.  
**Clinical relevance** — This paper documents a WPS with potential to render an IoT-based medical device for monitoring adherence to TOLF exercise program to prevent the risk of post-operative lymphedema.  

*(Arduino programming, Data acquisition, processing, and visualization)*

**Tech:** Arduino, MATLAB, C++

[Article](https://ieeexplore.ieee.org/abstract/document/9175471){: .btn--research} [Preprint](/files/pdf/research/wps-preprint.pdf){: .btn--research}
<!-- [Supplemental Information](/files/pdf/research/Turning the Lights on SI.pdf){: .btn--research} [Replication Archive](https://journals.sagepub.com/doi/suppl/10.1177/07388942211015242){: .btn--research} [GitHub Repo](https://github.com/jayrobwilliams/conflict-preemption){: .btn--research} [Poster](/files/pdf/research/PSS 2018 Poster.pdf){: .btn--research} -->

---
## Wearable Inertial Sensors for Exergames
A wearable multi-sensor based system was developed for upper-extremity range of motion assessment.

**Authors:** [Ashwin Raj Kumar](https://scholar.google.com/citations?user=FJXcZW0AAAAJ&hl=en), [Fabio Vulpi](https://scholar.google.com/citations?user=2iP46TMAAAAJ&hl=en), [Satish Reddy Bethi](https://scholar.google.com/citations?user=QdEyUtEAAAAJ&hl=en),[Hassam Khan Wazir](https://scholar.google.com/citations?user=hBetThYAAAAJ&hl=en&oi=ao), and [Vikram Kapila](https://scholar.google.com/citations?user=6PTJF28AAAAJ&hl=en)

**Abstract**

> This paper presents the design and development of wearable inertial sensors (WIS) for real-time simultaneous triplanar motion capture of the upper extremity (UE). The sensors simultaneously capture in the frontal, sagittal, and horizontal planes UE range of motion (ROM), which is critical to assess an individual’s movement limitations and determine appropriate rehabilitative treatments. Off-the-shelf sensors and microcontrollers are used to develop the WIS system, which wirelessly streams real-time joint orientation for UE ROM measurement. Key developments include: (i) two novel approaches, using earth’s gravity (EG approach) and magnetic field (EGM approach) as references, to correct misalignments in the orientation between the sensor and its housing to minimize measurement errors; (ii) implementation of the joint coordinate system (JCS)-based method for triplanar ROM measurements for clinical use; and (iii) an in-situ guided mounting technique for accurate sensor placement and alignment on human body. The results (i) compare computational time between two orientation misalignment correction approaches (EG approach = $325.05\mu s$ and EGM approach = $92.05\mu s$); (ii) demonstrate the accuracy and repeatability of measurements from the WIS system (percent deviation of measured angle from applied angle is less than $\pm 6.5\%$ and percent coefficient of variation is less than $11\%$, indicating acceptable accuracy and repeatability, respectively); and (iii) demonstrate the feasibility of using the WIS system within the JCS framework for providing anatomically-correct simultaneous triplanar ROM measurements of shoulder, elbow, and forearm movements during several upper limb exercises. 

*(IMUs, Arduino programming, Data acquisition, processing, and visualization)*

**Tech:** Arduino, MATLAB, Unity, C#, C++

[Article](https://doi.org/10.1109/JSEN.2019.2960320){: .btn--research} [Preprint](/files/pdf/research/wise-preprint.pdf){: .btn--research}
