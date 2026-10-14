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

The original URL of the current request, including the query string.

`http://example.com/about?page=2`

```canvas
{{ request.original_url }}
{# outputs 'http://example.com/about?page=2' #}
```

## url

The URL of the current request, including the query string.

`http://example.com/about?page=2`

```canvas
{{ request.url }}
{# outputs 'http://example.com/about?page=2' #}
```

## path

The path of the current request. Always starts with a `/`.

`http://example.com/about?page=2`

```canvas
{{ request.path }}
{# outputs '/about' #}
```

## canonical_url

The canonical URL of the current request. Joins the `host` & `path` properties.

`http://example.com/about?page=2`

```canvas
{{ request.canonical_url }}
{# outputs 'http://example.com/about' #}
```

## user_agent

The `User-Agent` header of the current request. Returns an empty string if the request has no `User-Agent` header.

```canvas
{{ request.user_agent }}
{# outputs 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) ...' #}
```

To check whether the visitor is a person, a bot or an AI agent, use the [`visitor`](/canvas/variables/visitor) variable.

## headers

The `headers` associated to the current request, as `key` & `value` pairs. Header names are lowercase.

```canvas
{{ request.headers }}

{# outputs: {
  'accept-language': 'en-AU',
  'user-agent': 'Mozilla/5.0 ...',
  ...
} #}
```

For privacy and security, the `cookie`, `x-forwarded-for`, `x-forwarded-host` and `x-blutui-local` headers are never included.

## header

Get the value of a header. Header names are case-insensitive. Returns `null` if the header is not present.

```canvas
{{ request.header('Accept-Language') }}
{# outputs 'en-AU' #}
```

## hasHeader

Check if the current request has a header. Header names are case-insensitive. Returns a `boolean` value.

```canvas
{% if request.hasHeader('Accept-Language') %}
  {{ request.header('Accept-Language') }}
{% endif %}
```

## params

The URL parameters as `key` & `value` pairs.

`http://example.com/?foo=bar`

```canvas
{{ request.params }}

{# outputs: {
  'foo': 'bar'
} #}
```

## param

Get the value of a URL parameter. Returns `null` if the parameter is not present.

`http://example.com/blog?page=2`

```canvas
{{ request.param('page') }}
{# outputs '2' #}
```

## hasParam

Check if the current request has a URL parameter. Returns a `boolean` value.

`http://example.com/blog?page=2`

```canvas
{{ request.hasParam('page') }}
{# outputs true #}

{{ request.hasParam('sort') }}
{# outputs false #}
```
