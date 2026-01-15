---
title: 'column'
description: 'The column filter returns the values from a single column in the input array.'
---

```canvas
{% set items = [{ 'fruit' : 'apple'}, {'fruit' : 'orange' }] %}
{% set fruits = items | column('fruit') %}
{# fruits now contains ['apple', 'orange'] #}
```

## Arguments

| Argument | Description                | Type   |
| -------- | -------------------------- | ------ |
| `name`   | The column name to extract | String |
