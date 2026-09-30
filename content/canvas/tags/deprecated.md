---
title: 'deprecated'
---

This page is generally useful to Canvas template developers. Canvas generates a deprecation notice where the **deprecated** tag is used in a template:

```canvas
{# base.canvas #}
{% deprecated 'The "base.canvas" template is deprecated, use "layout.canvas" instead.' %}
{% extends 'layout.canvas' %}
```

Also you can deprecate a block in the following way:

```canvas
{% block hey %}
  {% deprecated 'The "hey" block is deprecated, use "greet" instead.' %}
  {{ block('greet') }}
{% endblock %}

{% block greet %}
  Hey you!
{% endblock %}
```

Note that by default, the deprecation notices are silenced and never displayed nor logged.
