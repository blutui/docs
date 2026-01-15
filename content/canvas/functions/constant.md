---
title: 'constant'
description: 'The constant function returns the constant value for a given string.'
---

```canvas
{{ some_date | date(constant('DATE_W3C')) }}
```

You can read constants from object instances as well:

```canvas
{{ constant('RSS', date) }}
```

Use the **defined** test to check if a constant is defined:

```canvas
{% if constant('SOME_CONST') is defined %}
  ...
{% endif %}
```
