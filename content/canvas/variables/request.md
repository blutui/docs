---
title: 'request'
description: 'Get information about the current request.'
---

## hostname

The hostname of the current request.

`http://example.com`

```canvas
{{ request.hostname }}
{# outputs 'example.com' #}
```

## host

The URL of the current request with the request protocol.

`http://example.com`

```canvas
{{ request.host }}
{# outputs 'http://example.com' #}
```

## secure

If the current request secure. Returns a `boolean` value.

`http://example.com`

```canvas
{{ request.secure }}
{# outputs false #}
```

## original_url

The original URL of the current request.

## url

The URL of the current request.

## path

The path of the current request.

## canonical_url

The canonical URL of the current request. Joins the `host` & `path` properties.

## headers

The `headers` associated to the current request.

## params

The URL parameters as `key` & `value` pairs.

`http://example.com/?foo=bar`

```canvas
{{ request.params }}

{# outputs: {
  'foo': 'bar'
} #}
```
