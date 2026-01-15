---
title: 'reading_time'
description: 'The reading_time filter estimates the total reading time of a value.'
---

```canvas
{{ post.content | reading_time }}
{# outputs '1 minute, 59 seconds' #}
```

The default `words_per_minute` count is `250`, this value is based on the average reading speed which is between 230 - 280 words per minute. You can control the `words_per_minute` count by setting the first argument:

```canvas
{{ post.content | reading_time(200) }}
{# outputs '2 minutes, 29 seconds' #}
```

The **reading_time** filter can also output `raw` data, this allows you control how the data is displayed:

```canvas
{{ post.content | reading_time(raw = true) }}
{# outputs { minutes: 1, seconds: 59 } #}

{% set reading_time = post.content | reading_time(raw = true) %}
{{ reading_time.minutes }} {# outputs '1' #}
{{ reading_time.seconds }} {# outputs '59' #}
```

## Arguments

Argument           | Description                                         | Type
------------------ | --------------------------------------------------- | ------
`words_per_minute` | The number words per minutes to read the given text | Number
`raw`              | Output raw time data. Default: `false`              | Boolean
