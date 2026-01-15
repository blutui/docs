---
title: 'defined'
description: 'The defined test checks if a variable is defined in the current context.'
---

```canvas
{# defined works with variable names #}
{% if foo is defined>
  ...
{% endif %}

{# and attributes on variables names #}
{% if foo.bar is defined>
  ...
{% endif %}

{% if foo['bar'] is defined>
  ...
{% endif %}
```

When using the `defined` test on an expression that uses variables in some method calls, be sure that they are all defined first:

```canvas
{% if var is defined and foo.method(var) is defined>
  ...
{% endif %}
```
