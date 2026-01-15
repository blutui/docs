---
title: 'map'
description: 'The map filter applies an arrow function to the elements of a sequence or a mapping.'
---

The arrow function receives the value of the sequence or mapping:

```canvas
{% set people = [
  { first: 'Bob', last: 'Smith' },
  { first: 'Alice', last: 'Dupond' },
] %}

{{ people | map(p => "#{p.first} #{p.last}") | join(', ') }}

{# outputs Bob Smith, Alice Dupond #}
```

The arrow function also receives the key as a second argument:

```canvas
{% set people = {
  "Bob": "Smith",
  "Alice": "Dupond",
} %}

{{ people | map((value, key) => "#{key} #{value}") | join(', ') }}
{# outputs Bob Smith, Alice Dupond #}
```

## Arguments

| Argument | Description        | Type     |
| -------- | ------------------ | -------- |
| `arrow`  | The arrow function | Function |
