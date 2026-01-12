---
title: 'spaceless'
description: 'Use the spaceless filter to remove whitespace between HTML tags.'
---

The `spaceless` does not remove whitespace within HTML tags or whitespace in plain text:

```canvas
{{
  "<div>
     <strong>foo</strong>
   </div>
  " | spaceless }}

{# output will be <div><strong>foo</strong></div> #}
```

You can combine **spaceless** with the [apply](/canvas/tags/apply) tag to apply the transformation on large amounts of HTML:

```canvas
{% apply spaceless %}
  <div>
    <strong>foo</strong>
  </div>
{% endapply %}

{# output will be <div><strong>foo</strong></div> #}
```

This tag is not meant to "optimize" the size of the generated HTML content but merely to avoid extra whitespace between HTML tags to avoid browser rendering quirks under some circumstances.
