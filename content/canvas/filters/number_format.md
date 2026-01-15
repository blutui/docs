---
title: 'number_format'
description: 'The number_format filter formats numbers.'
---

```canvas
{{ 200.35 | number_format }}
```

You can control the number of decimal places, decimal point, and thousands separator using the additional arguments:

```canvas
{{ 9800.333 | number_format(2, '.', ',') }}
```

To format negative numbers or math calculation, wrap the previous statement with parentheses (needed because of Canvas [precedence of operators](/canvas/getting-started/expressions)):

```canvas
{{ -9800.333 | number_format(2, '.', ',') }} {# outputs : -9 #}
{{ (-9800.333) | number_format(2, '.', ',') }} {# outputs : -9,800.33 #}
{{  1 + 0.2 | number_format(2) }} {# outputs : 1.2 #}
{{ (1 + 0.2) | number_format(2) }} {# outputs : 1.20 #}
```

If no formatting options are provided then Canvas will use the default formatting options of:

- `0` decimal places.
- `.` as the decimal point.
- `,` as the thousands separator.

## Arguments

| Argument        | Description                                         | Type   |
| --------------- | --------------------------------------------------- | ------ |
| `decimal`       | The number of decimal points to display             | Number |
| `decimal_point` | The character(s) to use for the decimal point       | String |
| `thousand_sep`  | The character(s) to use for the thousands separator | String |
