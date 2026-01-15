---
title: 'trim'
description: 'The trim filter strips whitespace (or other characters) from the beginning and end of a string.'
---

```canvas
{{ '  I like Canvas.  ' | trim }}
{# outputs 'I like Canvas.' #}

{{ '  I like Canvas.' | trim('.') }}
{# outputs '  I like Canvas' #}

{{ '  I like Canvas.  ' | trim(side = 'left') }}
{# outputs 'I like Canvas.  ' #}

{{ '  I like Canvas.  ' | trim(' ', 'right') }}
{# outputs '  I like Canvas.' #}
```

## Arguments

Argument         | Description                       | Type
---------------- | --------------------------------- | ------
`character_mask` | The characters to strip           | String
`side`           | The default is to strip from the left and the right (both) sides, but left and right will strip from either the left side or right side only | String
