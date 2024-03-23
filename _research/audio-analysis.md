---
title: "Audio Analysis"
short_title: "Audio Analysis"
layout: single-portfolio
excerpt: "<img src='/images/research/thumbnail-audio.png' alt=''>"
collection: research
order_number: 10
header: 
og_image: "research/thumbnail-audio.png"
# date: 2021-05-12

---
## Wireless Earphone-based Real-Time Monitoring of Breathing Exercises: A Deep Learning Approach

This paper proposes using commodity earphones for real-time breathing channel and phase detection for breathing therapy compliance monitoring.

**Authors:** [Hassam Khan Wazir](https://scholar.google.com/citations?user=hBetThYAAAAJ&hl=en&oi=ao), [Zaid Waghoo](https://www.linkedin.com/in/zaid-waghoo/) and [Vikram Kapila](https://scholar.google.com/citations?user=6PTJF28AAAAJ&hl=en)

**Abstract**

> Several therapy routines require deep breathing exercises as a key component and patients undergoing such therapies must perform these exercises regularly. Assessing the outcome of a therapy and tailoring its course necessitates monitoring a patient's compliance with the therapy. While therapy compliance monitoring is routine in a clinical environment, it is challenging to do in an at-home setting. This is so because a home setting lacks access to specialized equipment and skilled professionals needed to effectively monitor the performance of a therapy routine by a patient. For some types of therapies, these challenges can be addressed with the use of consumer-grade hardware, such as earphones and smartphones, as practical solutions. To accurately monitor breathing exercises using wireless earphones, this paper proposes a framework that has the potential for assessing a patient's compliance with an at-home therapy. The proposed system performs real-time detection of breathing phases and channels with high accuracy by processing a $500$ ms audio signal through two convolutional neural networks. The first network, called a channel classifier, distinguishes between nasal and oral breathing, and a pause. The second network, called a phase classifier, determines whether the audio segment is from inhalation or exhalation. According to $k$-fold cross-validation, the channel and phase classifiers achieved a maximum F1 score of $97.99\%$ and $89.46\%$, respectively. The results demonstrate the potential of using commodity earphones for real-time breathing channel and phase detection for breathing therapy compliance monitoring.
**Clinical relevance** — This paper introduces a real-time monitoring system for breathing that can facilitate therapy compliance for several breathing-based exercises.

*(Pyhon programming, Audio analysis, Deep learning, Convolutional Neural Network, Data acquisition, processing, and visualization)*

**Tech:** Python, PyTorch, Audacity

[Article](){: .btn--research} [Preprint](/files/pdf/research/lymph-brom-preprint.pdf){: .btn--research}
<!-- [Supplemental Information](/files/pdf/research/Turning the Lights on SI.pdf){: .btn--research} [Replication Archive](https://journals.sagepub.com/doi/suppl/10.1177/07388942211015242){: .btn--research} [GitHub Repo](https://github.com/jayrobwilliams/conflict-preemption){: .btn--research} [Poster](/files/pdf/research/PSS 2018 Poster.pdf){: .btn--research} -->