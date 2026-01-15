---
title: 'include'
---

The **include** statement includes a template and returns the rendered content of that file:

```canvas
{% include 'header.html' %}
  Body
{% include 'footer.html' %}
```

It is recommended to use the [include](/canvas/functions/include) function instead as it provides the same features with a bit more flexibility:

- The [include](/canvas/functions/include) function is semantically more "correct" (including a template outputs its rendered contents in the current scope; a tag should not display anything);
- The include function is more "composable":

```canvas
{# Store a rendered template in a variable #}
{% set content %}
  {% include 'template.html' %}
{% endset %}
{# vs #}
{% set content = include('template.html') %}

{# Filter a rendered template #}
{% filter upper %}
  {% include 'template.html' %}
{% endfilter %}
{# vs #}
{{ include('template.html') | upper }}
```

- The [include](/canvas/functions/include) function does not impose any specific order for arguments thanks to named arguments.

Included templates have access to the variables of the active context. You can add additional variables by passing them after the `with` keyword:

```canvas
{# template.html will have access to the variables from the current context and the additional ones provided #}
{% include 'template.html' with { 'foo': 'bar' } %}

{% set vars = { 'foo': 'bar' } %}
{% include 'template.html' with vars %}
```

You can disable access to the context by appending the `only` keyword:

```canvas
{# only the foo variable will be accessible #}
{% include 'template.html' with { 'foo': 'bar' } only %}
```

```canvas
{# no variables will be accessible #}
{% include 'template.html' only %}
```

The template name can be any valid Canvas expression:

```canvas
{% include some_var %}
{% include ajax ? 'ajax.html' : 'not_ajax.html' %}
```

You can mark an include with `ignore missing` in which case Canvas will ignore the statement if the template to be included does not exist. It has to be placed just after the template name. Here are some valid examples:

```canvas
{% include 'sidebar.html' ignore missing %}
{% include 'sidebar.html' ignore missing with { 'foo': 'bar' } %}
{% include 'sidebar.html' ignore missing only %}
```

You can also provide a list of templates that are checked for existence before inclusion. The first template that exists will be included:

```canvas
{% include ['page_detailed.html', 'page.html'] %}
```

If `ignore missing` is given, it will fall back to rendering nothing if none of the templates exist, otherwise it will throw an exception.
