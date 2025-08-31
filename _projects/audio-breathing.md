---
layout: distill
title: Wireless Earphone-based Monitoring of Breathing Exercises
description: This work proposes using commodity earphones for real-time breathing channel and phase detection for breathing therapy compliance monitoring.
img: /assets/img/projects/audio-breathing/thumbnail-audio-breathing.gif
importance: 1
category: work
toc:
  - name: Introduction
  - name: System Overview
  - name: Custom Dataset Creation
  - name: Real-World Applications and Future Research Directions
  - name: Conclusion
pretty_table: true
bibliography: projects/audio-breathing/audio-breathing.bib
# bibliography: audio-breathing.bib
# related_publications: true
# bib_path: projects/audio-breathing/audio-breathing.bib
---

**Publication:** (Wazir et al., 2022)<d-cite key="wazir2024audio"></d-cite>

[Download Poster](/assets/img/news/embc24-poster.jpg)

## Introduciton

As we continue to advance in the realm of digital health, innovative solutions that leverage everyday technology for at-home therapy are becoming increasingly valuable. My latest research focuses on using wireless earphones to monitor breathing exercises in real-time, offering a novel approach to ensuring therapy compliance and improving patient outcomes.

Breathing exercises are crucial for managing various medical conditions, including hypertension, asthma, and chronic obstructive pulmonary disease (COPD). Regular and accurate performance of these exercises is vital, yet monitoring compliance outside of clinical settings remains a challenge. Traditional monitoring equipment, such as spirometers and capnographs, is typically not available in home environments, leading to gaps in therapy adherence and effectiveness.

<p align="center"> 
  <img src="/assets/img/projects/audio-breathing/systemOverview.png" alt="System Overview." width="600px"> <br> 
  <em>Figure 1: The system overview.</em> 
</p>

## A New Solution with Everyday Technology

In response to these challenges, we developed a system that utilizes the microphones of wireless earphones to capture and analyze breathing sounds. By employing two convolutional neural networks (CNNs), this system can classify different breathing channels (nasal or oral) and phases (inhale or exhale) in real-time, making it a powerful tool for monitoring therapy compliance at home.

Here’s how the system works:

- Channel Classification: The first CNN, the channel classifier, identifies whether the breathing is nasal or oral and detects pauses in breathing.
- Phase Classification: The second CNN, the phase classifier, determines the phase of breathing, distinguishing between inhalation and exhalation.

Together, these classifiers achieved impressive accuracy, with the channel classifier reaching an F1 score of up to 97.99% and the phase classifier up to 89.46%.

<p align="center"> 
  <img src="/assets/img/projects/audio-breathing/architecture.jpg" alt="System Architecture for Detecting Breathing Patterns." width="600px"> <br> 
  <em>Figure 2: The system architecture for detecting pause, breathing channels, and breathing phases.</em> 
</p>

## Creating a Custom Dataset for Improved Accuracy

To train these neural networks, a new dataset of breathing sounds was created using wireless earphones. The dataset collection involved recording audio clips of nasal and oral breathing from eight healthy individuals, aged between 23 and 34 years. These recordings were meticulously labeled to ensure accurate model training.

<p align="center"> 
  <img src="/assets/img/projects/audio-breathing/nasalBreathing.png" alt="Audio Spectrogram for Nasal Breathing." width="600px"> <br>
  <img src="/assets/img/projects/audio-breathing/oralBreathing.jpg" alt="Audio Spectrogram for Oral Breathing." width="600px"> <br> 
  <em>Figure 3: Audio spectrograms for nasal (top) and oral (bottom) breathing.</em> 
</p>

The audio data underwent preprocessing, including resampling and segmentation into 500 ms intervals. This detailed approach to data preparation ensured that the neural networks were trained with high-quality, relevant data, which is crucial for accurate real-time monitoring.

## Real-World Applications and Future Research Directions

This system represents a significant advancement in at-home therapy monitoring, utilizing accessible consumer technology to facilitate therapy compliance. The application developed as part of this research can be run on a smartphone, making it an affordable and convenient solution for patients who need to perform regular breathing exercises at home.

Looking forward, there are numerous opportunities to expand this research. Future work could integrate visual data from cameras or smartphone sensors to develop a more comprehensive monitoring system that tracks both physical movements and breathing patterns. This could lead to personalized therapy solutions that adapt to each user's needs, further enhancing the scope of digital health and telerehabilitation.

## Conclusion

The use of wireless earphones for real-time breathing exercise monitoring is a groundbreaking development in digital health. By leveraging everyday technology, this system provides a practical and effective solution for at-home therapy compliance, making healthcare more accessible and effective for patients worldwide. As we continue to explore the potential of these technologies, we move closer to a future where personalized, remote healthcare is the norm.

_(Python programming, Audio analysis, Deep learning, Convolutional Neural Network, Data acquisition, processing, and visualization)_

**Tech**: Python, PyTorch, Audacity
