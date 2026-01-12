---
title: 'default'
description: 'The default filter returns the passed default value if the value is undefined or empty, otherwise the value of the variable.'
---

```canvas
{{ var | default('var is not defined') }}

{{ var.foo | default('foo item on var is not defined') }}

{{ var['foo'] | default('foo item on var is not defined') }}

{{ '' | default('passed var is empty') }}
```

When using the **default** filter on an expression that uses variables in some method calls, be sure to use the **default** filter whenever a variable can be undefined:

```canvas
{{ var.method(foo | default('foo')) | default('foo') }}
```

Using the **default** filter on a boolean variable might trigger unexpected behaviour, as `false` is treated as an empty value. Consider using `??` instead:

```canvas
{% set foo = false %}
{{ foo | default(true) }} {# true #}
{{ foo ?? true }} {# false #}
```

Read the documentation for the [defined](/canvas/tests/defined) and [empty](/canvas/tests/empty) tests to learn more about their semantics.

## Arguments

| Argument  | Description       | Type   |
| --------- | ----------------- | ------ |
| `default` | The default value | String |
