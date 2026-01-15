---
title: 'Deprecated filters'
description: 'A list of Canvas filters that are considered deprecated.'
---

It is recommended that you use the alternative filters listed below.

## sort_by

Alternatives: [sort](/canvas/filters/sort)

The `sort_by` filter sorts an array:

```canvas
{% for user in users | sort_by('key', true) %}
  ...
{% endfor %}
```

### Arguments

| Argument  | Description                                          | Type    |
| --------- | ---------------------------------------------------- | ------- |
| `key`     | The `key` to sort by.                                | String  |
| `reverse` | Reverse the sorting of the array (default: `false`). | Boolean |
