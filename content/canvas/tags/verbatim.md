---
title: 'verbatim'
---

The **verbatim** tag marks sections as being raw text that should not be parsed. For example to put Canvas syntax as example into a template you can use this snippet:

```canvas
{% verbatim %}
  <ul>
    {% for item in list %}
      <li>{{ item }}</li>
    {% endfor %}
  </ul>
{% endverbatim %}
```
