---
title: 'date_modify'
description: 'The date_modify filter modifies a date with a given modifier string.'
---

```canvas
{{ post.published_at | date_modify('+1 day') | date('m/d/Y') }}
```

The **date_modify** filter accepts strings. You can combine it with the [date](/canvas/filters/date) filter for formatting.

## Arguments

| Argument   | Description  | Type   |
| ---------- | ------------ | ------ |
| `modifier` | The modifier | String |
