---
permalink: /
title: "About me"
excerpt: "About me"
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

I recently graduated with a Ph.D. in Mechanical Engineering with a focus on Digital Health and Telerehabilitation, from the [Mechatronics, Controls, and Robotics Lab](http://mechatronics.engineering.nyu.edu/) at NYU Tandon School of Engineering. My research focuses on leveraging connected devices and commercially available technologies for digital health and telerehabilitation, with a particular emphasis on the geriatric population. My work encompasses various domains, including robotics, mechatronics, Wi-Fi localization, audio analysis, deep learning, and range of motion assessment. Additionally, I have contributed to research efforts in stroke and lymphedema rehabilitation.

Below is a timeline of my research publications. For detailed information on each publication, please visit [publications](/publications/).

{% for post in site.publications reversed %}
- **{{ post.date | date: "%Y" }}**: [{{ post.title }}]({{ post.url }})
{% endfor %}