---
layout: archive
title: "Publications"
permalink: /publications/
author_profile: true
---

Here is a list of my academic publications. You can also find my articles on my <a href="https://scholar.google.com/citations?user=hBetThYAAAAJ&hl=en">Google Scholar profile</a>.

---
{% include base_path %}

## Journal Articles
{% for post in site.publications reversed %}
  {% if post.type == "Journal" %}
    {% include archive-single.html %}
  {% endif %}
{% endfor %}

---

## Conference Papers
{% for post in site.publications reversed %}
  {% if post.type == "Conference Paper" %}
    {% include archive-single.html %}
    
  {% endif %}
{% endfor %}

---

## Patents
{% for post in site.publications reversed %}
  {% if post.type == "Patent" %}
    {% include archive-single.html %}
  {% endif %}
{% endfor %}
