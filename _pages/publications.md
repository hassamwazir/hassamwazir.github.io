---
title:  Publications
page_title: Publications
layout: archive
permalink: /publications/
author_profile: true
comments: false
---

You can also find my articles on my <a href="https://scholar.google.com/citations?user=hBetThYAAAAJ&hl=en">Google Scholar profile</a>.

---
{% include base_path %}

{% for post in site.publications reversed %}
  {% include archive-single.html %}
  ---
{% endfor %}
