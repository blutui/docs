---
title: 'date'
description: 'The date function converts an argument to a date to allow date comparison.'
---

```canvas
{% if date(user.created_at) < date('-2days') %}
  {# do something #}
{% endif %}
```

You can pass a timezone as the second argument:

```canvas
{% if date(user.created_at) < date('-2days', 'Europe/Paris') %}
  {# do something #}
{% endif %}
```

If no argument is passed, the function returns the current date:

```canvas
{% if date(user.created_at) < date() %}
  {# always! #}
{% endif %}
```

## Arguments

Argument   | Description  | Type
---------- | ------------ | ------
`date`     | The date     | Any
`timezone` | The timezone | String
