---
title:  Research
page_title: Research
layout: single
permalink: /research/
author_profile: true
comments: false
---

<!-- My research focuses on the convergence of frontier technologies to advance digital health and telerehabilitation, with a particular emphasis on applications for the geriatric population.

In today's world, where the global population is both increasing and aging, it is becoming increasingly crucial to explore new approaches to healthcare delivery. The traditional methods are no longer efficient enough to cater to the growing demands and complexities of an aging population. Therefore, my research seeks to introduce modern, data-driven strategies that can optimize the provision of at-home treatment and enable older individuals to monitor their health proactively, preventing further health complications.

To achieve these goals, my work explores the integration of consumer devices with mechatronic and robotic systems for digital health and rehabilitation. One aspect of my research involves using a robot to remotely control the instrument control panel touchscreen of a dialysis machine, which can prove to be valuable during emergency situations such as a pandemic, and mitigate the risk of contagion. Furthermore, I have leveraged the camera of a digital voice assistant device for range of motion assessment in the home environment. This ongoing research aims to develop a long-term assessment system capable of detecting degradation in upper-extremity range of motion and facilitating lymphedema rehabilitation through coupling with an acoustic-based breathing tracking system.

Additionally, I have developed a system for indoor localization of the elderly using ambient Wi-Fi, which would aid in locating individuals in the event of accidents such as falls, as well as allow caregivers to monitor the elderly while respecting their privacy. Finally, I am applying deep learning techniques to facilitate stuttering speech recognition for speech therapy administered by speech-language pathologists.

By exploring these cutting-edge technologies and their applications, my thesis seeks to contribute to the advancement of digital health and telerehabilitation, ultimately enhancing the quality of care for the geriatric population. I invite you to explore the rest of my website to learn more about my research and its potential impact on the future of healthcare. -->

My research focuses on advancing digital health and telerehabilitation by converging frontier technologies, with a particular emphasis on applications for the geriatric population. With the global population aging and healthcare demands increasing, traditional methods are no longer sufficient. Therefore, I aim to introduce data-driven strategies to optimize at-home treatment and empower older individuals to proactively monitor their health, preventing further complications.

To achieve this, I integrate consumer devices with mechatronic and robotic systems for digital health and rehabilitation. For instance, I explore the use of a robot to remotely control a dialysis machine's touchscreen, providing a valuable solution to reduce contagion risks. I also leverage the camera of a digital voice assistant device for range of motion assessment in the home environment as part of an ongoing research which aims to develop a long-term assessment system for detecting upper-extremity range of motion degradation and facilite lymphedema rehabilitation through acoustic-based breathing tracking.

In addition, I develop a system using ambient Wi-Fi for indoor localization of the elderly, ensuring their safety in case of accidents like falls, while respecting their privacy. Lastly, I apply deep learning techniques to enhance stuttering speech recognition for speech therapy provided by speech-language pathologists. Through these technologies and applications, I hope to contribute to the advancement of digital health and telerehabilitation, ultimately improving care for the geriatric population.

<nbsp>

{% include base_path %}

{% assign ordered_pages = site.research | sort:"order_number" %}

{% for post in ordered_pages %}
  {% include archive-single.html type="grid" %}
{% endfor %}
