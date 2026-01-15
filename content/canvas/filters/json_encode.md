---
title: 'json_encode'
description: 'The json_encode filter returns the JSON representation of a value.'
---

```canvas
{{ data | json_encode() }}
```

## Arguments

Argument  | Description                                              | Type
--------- | -------------------------------------------------------- | ------
`options` | A bitmask of [json_encode options](#options) | String

## Options

The following constants can be combined to form options for the **json_encode** filter:

```canvas
{{ data | json_encode(constant('JSON_PRETTY_PRINT')) }}
```

- `JSON_HEX_TAG`: All **<** and **>** are converted to \u003C and \u003E.
- `JSON_HEX_AMP`: All **&** are converted to \u0026.
- `JSON_HEX_APOS`: All **'** are converted to \u0027.
- `JSON_HEX_QUOT`: All **"** are converted to \u0022.
- `JSON_FORCE_OBJECT`: Outputs an object rather than an array when a non-associative array is used. Especially useful when the recipient of the output is expecting an object and the array is empty.
- `JSON_NUMERIC_CHECK`: Encodes numeric strings as numbers.
- `JSON_PRETTY_PRINT`: Use whitespace in returned data to format it.
- `JSON_UNESCAPED_SLASHES`: Don't escape **/**.
- `JSON_UNESCAPED_UNICODE`: Encode multibyte Unicode characters literally (default is to escape as \uXXXX).
- `JSON_PARTIAL_OUTPUT_ON_ERROR`: Substitute some unencodable values instead of failing.
- `JSON_PRESERVE_ZERO_FRACTION`: Ensures that float values are always encoded as a float value.
- `JSON_UNESCAPED_LINE_TERMINATORS`: The line terminators are kept unescaped when *JSON_UNESCAPED_UNICODE* is supplied.
