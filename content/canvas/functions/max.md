---
title: 'max'
description: 'The max function returns the biggest value of a sequence or a set of values.'
---

```canvas
{{ max(1, 3, 2) }}
{{ max([1, 3, 2]) }}
```

When called with a mapping, max ignores keys and only compares values:

```canvas
{{ max({2: "e", 1: "a", 3: "b", 5: "d", 4: "c"}) }}
{# returns "e" #}
```
