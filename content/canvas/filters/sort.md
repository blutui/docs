---
title: 'sort'
description: 'The sort filter sorts an array.'
---

```canvas
{% for user in users | sort %}
  ...
{% endfor %}
```

You can pass an arrow function to sort the array:

```canvas
{% set fruits = [
  { name: 'Apples', quantity: 5 },
  { name: 'Oranges', quantity: 2 },
  { name: 'Grapes', quantity: 4 },
] %}

{% for fruit in fruits | sort((a, b) => a.quantity <=> b.quantity) | column('name') %}
  {{ fruit }}
{% endfor %}
```

_Note the usage of the spaceship operator to simplify the comparison._

## Arguments

| Argument | Description        | Type     |
| -------- | ------------------ | -------- |
| `arrow`  | The arrow function | Function |
