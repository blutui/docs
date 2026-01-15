---
title: 'slug'
description: 'The slug filter returns a URL friendly version of the value.'
---

```canvas
{{ 'Hello, World!' | slug }}

{# outputs 'hello-world' #}
```

The `slug` filter takes a `separator` value as the first argument:

```canvas
{{ 'Hello, World!' | slug('_') }}

{# outputs 'hello_world' #}
```

## Arguments

Argument    | Description                     | Type
----------- | ------------------------------- | -------
`separator` | The separator                   | String
`language`  | The language. Defaults to `en`  | String
