---
title: 'autoescape'
---

Autoescaping is turned on by default. You can mark a section of a template to be escaped or not by using the `autoescape` tag:

```canvas
{% autoescape %}
  Everything will be automatically escaped in this block
  using the HTML strategy
{% endautoescape %}

{% autoescape 'html' %}
  Everything will be automatically escaped in this block
  using the HTML strategy
{% endautoescape %}

{% autoescape 'js' %}
  Everything will be automatically escaped in this block
  using the js escaping strategy
{% endautoescape %}

{% autoescape false %}
  Everything will be outputted as is in this block
{% endautoescape %}
```

When automatic escaping is enabled everything is escaped by default except for values explicitly marked as safe. Those can be marked in the template by using the [raw](/docs/canvas/filters/raw) filter:

```canvas
{% autoescape %}
  {{ safe_value | raw }}
{% endautoescape %}
```

Functions and tags returning template data (like [macro](/docs/canvas/tags/macro) and [parent](/docs/canvas/functions/parent)) always return safe markup. Canvas is smart enough to not escape an already escaped value by the [escape](/docs/canvas/filters/escape) filter.

Canvas does not escape static expressions:

```canvas
{% set hello = '<strong>Hello</strong>' %}
{{ hello }}
{{ '<strong>world</strong>' }}
```

Will be rendered as "\<strong\>Hello\<\/strong\> **world**".
