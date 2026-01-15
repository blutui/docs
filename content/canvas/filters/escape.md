---
title: 'escape'
description: 'The escape filter escapes a string using strategies that depend on the context'
---

```canvas
<p>
  {{ user.username | escape }}
</p>
```

For convenience, the **e** filter is defined as an alias:

```canvas
<p>
  {{ user.username | e }}
</p>
```

The **escape** filter can also be used in contexts other than HTML thanks to an optional argument which defines the escaping strategy to use:

```canvas
{{ user.username | e }}
{# is equivalent to #}
{{ user.username | e('html') }}
```

And here is how to escape variables included in JavaScript code:

```canvas
{{ user.username | escape('js') }}
{{ user.username | e('js') }}
```

The **escape** filter supports the following escaping strategies for HTML documents:

- **html**: escapes a string for the **HTML body** context.
- **js**: escapes a string for the **JavaScript** context.
- **css**: escapes a string for the **CSS** context. CSS escaping can be applied to any string being inserted into CSS and escapes everything except alphanumerics.
- **url**: escapes a string for the **URI or parameter** contexts. This should not be used to escape an entire URI; only a subcomponent being inserted.
- **html_attr**: escapes a string for the **HTML attribute** context.

Note that doing contextual escaping in HTML documents is hard and choosing the right escaping strategy depends on a lot of factors. Please, read related documentation like the [OWASP prevention cheat sheet](https://github.com/OWASP/CheatSheetSeries/blob/master/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.md) to learn more about this topic.

When using automatic escaping, Canvas tries to not double-escape a variable when the automatic escaping strategy is the same as the one applied by the escape filter; but that does not work when using a variable as the escaping strategy:

```canvas
{% set strategy = 'html' %}

{% autoescape 'html' %}
  {{ var | escape('html') }} {# won't be double-escaped #}
  {{ var | escape(strategy) }} {# will be double-escaped #}
{% endautoescape %}
```

When using a variable as the escaping strategy, you should disable automatic escaping:

```canvas
{% set strategy = 'html' %}

{% autoescape 'html' %}
  {{ var | escape(strategy) | raw }} {# won't be double-escaped #}
{% endautoescape %}
```

## Arguments

| Argument   | Description           | Type   |
| ---------- | --------------------- | ------ |
| `strategy` | The escaping strategy | String |
| `charset`  | The string charset    | String |
