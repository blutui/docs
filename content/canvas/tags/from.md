---
title: 'from'
---

The `from` tag imports [macro](/canvas/tags/macro) names into the current namespace. The tag is documented in detail in the documentation for the [macro](/canvas/tags/macro) tag.

```canvas
{% from 'forms.html' import input as input, textarea %}

<p>{{ input('password', '', 'password') }}</p>
<p>{{ textarea('comment') }}</p>
```
