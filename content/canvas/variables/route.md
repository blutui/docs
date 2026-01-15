---
title: 'route'
description: 'Get information about the current route.'
---

## url

The url of the current page.

```canvas
{{ route.url }}
{# outputs '/' if the current route is the homepage #}
```

## type

The route type.

```canvas
{{ route.type }}
{# outputs 'static' if the current route is static #}
```

## Deprecated

Below are the properties that will be deprecated in the near future, consider using alternative properties in the `route` object:

### uri

**Alternative**: `route.url`

The uri of the current page.
