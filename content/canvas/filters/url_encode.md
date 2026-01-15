---
title: 'url_encode'
description: 'The url_encode filter percent encodes a given string as URL segment or an array as query string.'
---

```canvas
{{ 'path-seg*ment' | url_encode }}
{# outputs "path-seg%2Ament" #}

{{ 'string with spaces' | url_encode }}
{# outputs "string%20with%20spaces" #}

{{ {'param': 'value', 'foo': 'bar'} | url_encode }}
{# outputs "param=value&foo=bar" #}
```
