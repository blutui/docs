---
title: 'convert_encoding'
description: 'The convert_encoding filter converts a string from one encoding to another.'
---

The first argument is the expected output charset and the second one is the input charset:

```canvas
{{ data | convert_encoding('UTF-8', 'iso-2022-jp') }}
```

## Arguments

Argument | Description        | Type
-------- | ------------------ | -------
`to`     | The output charset | String
`from`   | The input charset  | String
