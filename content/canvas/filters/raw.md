---
title: 'raw'
description: 'The raw filter marks the value as being "safe".'
---

In an environment with automatic escaping enabled this variable will not be escaped if `raw` is the last filter applied to it:

```canvas
{% autoescape %}
  {{ var | raw }} {# var won't be escaped #}
{% endautoescape %}
```
