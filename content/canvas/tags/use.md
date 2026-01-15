---
title: 'use'
---

Horizontal reuse is an advanced Canvas feature that is hardly ever used in regular templates. It is mainly used by projects that need to make template blocks reusable without using inheritance.

Template inheritance is one of the most powerful features of Canvas but it is limited to single inheritance; a template can only extend one other template. This limitation makes template inheritance simple to understand and easy to debug.

```canvas
{% extends 'base.html' %}

{% block title %}{% endblock %}
{% block content %}{% endblock %}
```

Horizontal reuse is a way to achieve the same goal as multiple inheritance, but without the associated complexity:

```canvas
{% extends 'base.html' %}

{% use 'blocks.html' %}

{% block title %}{% endblock %}
{% block content %}{% endblock %}
```

The **use** statement tells Canvas to import the blocks defined in `blocks.html` into the current template (it's like macros, but for blocks):

```canvas
{# blocks.html #}

{% block sidebar %}{% endblock %}
```

In this example, the **use** statement imports the `sidebar` block into the main template. The code is mostly equivalent to the following one (the imported blocks are not outputted automatically):

```canvas
{% extends 'base.html' %}

{% block sidebar %}{% endblock %}
{% block title %}{% endblock %}
{% block content %}{% endblock %}
```

The **use** tag only imports a template if it does not extend another template, if it does not define macros, and if the body is empty. But it can _use_ other templates. Because **use** statements are resolved independtly of the context passed to the template, the template reference cannot be an expression.

The main template can also override any imported block. If the template already defines the `sidebar` block, then the one defined in `blocks.html` is ignored. To avoid name conflicts, you can rename imported blocks:

```canvas
{% extends 'base.html' %}

{% use 'blocks.html' with sidebar as base_sidebar, title as base_title>

{% block sidebar %}{% endblock %}
{% block title %}{% endblock %}
{% block content %}{% endblock %}
```

The [parent()](/canvas/functions/parent) function automatically determines the correct inheritance tree, so it can be used when overriding a block defined in an imported template:

```canvas
{% extends 'base.html' %}

{% use 'blocks.html' %}

{% block sidebar %}
  {{ parent() }}
{% endblock %}

{% block title %}{% endblock %}
{% block content %}{% endblock %}
```

In this example, the **parent()** function will correctly call the `sidebar` block from the `blocks.html` template.

Renaming allows you to simulate inheritance by calling the "parent" block:

```canvas
{% extends 'base.html' %}

{% use 'blocks.html' with sidebar as parent_sidebar %}

{% block sidebar %}
  {{ block('parent_sidebar') }}
{% endblock %}
```

You can use as many **use** statements as you want in any given template. If two imported templates define the same block, the latest one wins.
