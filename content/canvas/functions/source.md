---
title: 'source'
description: 'The source function returns the content of a template without rendering it.'
---

```canvas
{{ source('template.html') }}
{{ source(some_var) }}
```

When you set the `ignore_missing` flag, Canvas will return an empty string if the template does not exist:

```canvas
{{ source('template.html', ignore_missing = true) }}
```

## Arguments

Argument         | Description                                | Type
---------------- | ------------------------------------------ | -------
`name`           | The name of the template to read           | String
`ignore_missing` | Whether to ignore missing templates or not | Boolean
