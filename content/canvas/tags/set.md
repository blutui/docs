---
title: 'set'
---

In your Canvas templates you can also assign values to variables. Assignments use the `set` tag and can have multiple targets. Here is how you can assign the `bar` value to the `foo` variable:

```canvas
{% set foo = 'bar' %}
```

After the `set` call, the `foo` variable is avilable in the template like any other variables:

```canvas
{{ foo }} {# Returns: bar #}
```

The assigned value can be any valid expression:

```canvas
{% set foo = [1, 2] %}
{% set foo = { 'foo': 'bar' } %}
{% set foo = 'foo' ~ 'bar' %}
```

Serveral variables can also be assigned in one block:

```canvas
{% set foo, bar = 'foo', 'bar' %}

{# is equivalent to #}

{% set foo = 'foo' %}
{% set bar = 'bar' %}
```

Note that loops are scoped, therefore a variable declared inside a [for](/canvas/tags/for) loop is not accessible outside the loop itself:

```canvas
{% for item in list %}
  {% set foo = item %}
{% endfor %}

{# foo is NOT available #}
```

If you want to access the variable, just declare it before the loop:

```canvas
{% set foo = '' %}
{% for item in list %}
  {% set foo = item %}
{% endfor %}

{# foo is available #}
```
