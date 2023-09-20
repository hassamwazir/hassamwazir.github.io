---
title:  Research
page_title: Research
layout: single
permalink: /research/
author_profile: true
comments: false
---

My research focuses on advancing digital health and telerehabilitation by converging frontier technologies, with a particular emphasis on applications for the geriatric population. With the global population aging and healthcare demands increasing, traditional methods are no longer sufficient. Therefore, I aim to introduce data-driven strategies to optimize at-home treatment and empower older individuals to proactively monitor their health, preventing further complications.

To achieve this, I integrate consumer devices with mechatronic and robotic systems for digital health and rehabilitation. For instance, I explore the use of a robot to remotely control a dialysis machine's touchscreen, providing a valuable solution to reduce contagion risks. I also leverage the camera of a digital voice assistant device for range of motion assessment in the home environment as part of an ongoing research which aims to develop a long-term assessment system for detecting upper-extremity range of motion degradation and facilite lymphedema rehabilitation through acoustic-based breathing tracking.

In addition, I develop a system using ambient Wi-Fi for indoor localization of the elderly, ensuring their safety in case of accidents like falls, while respecting their privacy. Lastly, I apply deep learning techniques to enhance stuttering speech recognition for speech therapy provided by speech-language pathologists. Through these technologies and applications, I hope to contribute to the advancement of digital health and telerehabilitation, ultimately improving care for the geriatric population.

<nbsp>

{% include base_path %}

{% assign ordered_pages = site.research | sort:"order_number" %}

{% for post in ordered_pages %}
  {% include archive-single.html type="grid" %}
{% endfor %}
