---
title: 'nl2br'
description: 'The nl2br filter inserts HTML line breaks before all newlines in a string.'
---

```canvas
{{ 'I like Canvas.\nYou will like it too.' | nl2br }}

{# outputs

  I like Canvas.<br />
  You will like it too.

#}
```

The **nl2br** filter pre-escapes the input before applying the transformation.
