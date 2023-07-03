---
layout: archive
title: "Research"
permalink: /research/
author_profile: true
header:
  og_image: "research/ecdf.png"
---

My research focuses on the convergence of frontier technologies to advance digital health and telerehabilitation, with a particular emphasis on applications for the geriatric population.

In today's world, where the global population is both increasing and aging, it is becoming increasingly crucial to explore new approaches to healthcare delivery. The traditional methods are no longer efficient enough to cater to the growing demands and complexities of an aging population. Therefore, my research seeks to introduce modern, data-driven strategies that can optimize the provision of at-home treatment and enable older individuals to monitor their health proactively, preventing further health complications.

To achieve these goals, my work explores the integration of consumer devices with mechatronic and robotic systems for digital health and rehabilitation. One aspect of my research involves using a robot to remotely control the instrument control panel touchscreen of a dialysis machine, which can prove to be valuable during emergency situations such as a pandemic, and mitigate the risk of contagion. Furthermore, I have leveraged the camera of a digital voice assistant device for range of motion assessment in the home environment. This ongoing research aims to develop a long-term assessment system capable of detecting degradation in upper-extremity range of motion and facilitating lymphedema rehabilitation through coupling with an acoustic-based breathing tracking system.

Additionally, I have developed a system for indoor localization of the elderly using ambient Wi-Fi, which would aid in locating individuals in the event of accidents such as falls, as well as allow caregivers to monitor the elderly while respecting their privacy. Finally, I am applying deep learning techniques to facilitate stuttering speech recognition for speech therapy administered by speech-language pathologists.

By exploring these cutting-edge technologies and their applications, my thesis seeks to contribute to the advancement of digital health and telerehabilitation, ultimately enhancing the quality of care for the geriatric population. I invite you to explore the rest of my website to learn more about my research and its potential impact on the future of healthcare.

<nbsp>

{% include base_path %}

{% assign ordered_pages = site.research | sort:"order_number" %}

{% for post in ordered_pages %}
  {% include archive-single.html type="grid" %}
{% endfor %}
