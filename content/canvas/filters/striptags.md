---
title: 'striptags'
description: 'The striptags filter strips SGML/XML tags and replace adjacent whitespace by one space.'
---

```canvas
{{ some_html | striptags }}
```

You can also provide tags which should not be stripped:

```canvas
{{ some_html | striptags('<br><p>') }}
```

In this example, the `<br/>`, `<br>`, `<p>`, and `</p>` tags won't be removed from the string.

## Arguments

Argument         | Description                       | Type
---------------- | --------------------------------- | ------
`allowable_tags` | Tags which should not be stripped | String
