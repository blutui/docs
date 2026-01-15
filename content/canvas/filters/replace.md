---
title: 'replace'
description: 'The replace filter formats a given string by replacing the placeholders.'
---

```canvas
{{ "I like %this% and %that%." | replace({'%this%': foo, '%that%': "bar"}) }}

{# outputs I like foo and bar
  if the foo parameter equals to the foo string. #}

{# using % as a delimiter is purely conventional and optional #}

{{ "I like this and --that--." | replace({'this': foo, '--that--': "bar"}) }}
{# outputs I like foo and bar #}
```

## Arguments

Argument | Description            | Type
-------- | ---------------------- | ------
`from`   | The placeholder values | String
