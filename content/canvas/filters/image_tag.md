---
title: 'image_tag'
description: 'The image_tag filter generates a HTML img tag.'
---

You can use the `image_tag` in combination with [`image_url`](/canvas/filters/image_url) to generate a HTML `img` tag:

```canvas
{{ entry.image | image_url({ width: 280, format: 'webp' }) | image_tag }}
{# outputs: <img src="https://cdn.blutui.com/uploads/project_name/image.png?format=webp&width=280" /> #}
```
