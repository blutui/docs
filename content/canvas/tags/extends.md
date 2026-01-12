---
title: 'extends'
---

The **extends** tag can be used to extend a template from another one. Canvas does not support multiple inheritance. So you can only have one extends tag called per rendering. However, Canvas supports horizontal [reuse](/canvas/tags/use). Let's define a base template, `base.html`, which defines a simple HTML skeleton document:

```canvas
<!DOCTYPE html>
<html>
  <head>
    {% block head %}
      <link rel="stylesheet" href="style.css" />
      <title>{% block title %}{% endblock %} - My Webpage</title>
    {% endblock %}
  </head>
  <body>
    <div id="content">{% block content %}{% endblock %}</div>
    <div id="footer">
      {% block footer %}
        &copy; Copyright by <a href="https://domain.invalid/">you</a>.
      {% endblock %}
    </div>
  </body>
</html>
```

In this example, the [block](/canvas/tags/block) tags define four blocks that child templates can fill in. All the **block** tag does is to tell the template engine that a child template may override those portions of the template.

## Child templates

A child template might look like this:

```canvas
{% extends 'base.html' %}

{% block title %}Home{% endblock %}

{% block head %}
  {{ parent() }}
  <style type="text/css">
    .important { color: #336699; }
  </style>
{% endblock %}

{% block content %}
  <h1>Home</h1>
  <p class="important">
    Welcome on my awesome homepage.
  </p>
{% endblock %}
```

The **extends** tag is the key here. It tells the template engine that this template "extends" another template. When the Canvas template engine evaluates this template, first it locates the parent. The extends tag should be the first tag in the template.

Note that since the child template doesn't define the `footer` block, the value from the parent template is used instead.

You can't define multiple block tags with the same name in the same template. This limitation exists because a block tag works in "both" directions. That is, a block tag doesn't just provide a hole to fill - it also defines the content that fills the hole in the parent. If there were two similarly-named block tags in a template, that template's parent wouldn't know which one of the blocks' content to use.

If you want to print a block multiple times you can however use the [block](/canvas/functions/block) function:

```canvas
<title>{% block title %}{% endblock %}</title>
<h1>{{ block('title') }}</h1>
{% block body %}{% endblock %}
```

## Parent blocks

It's possible to render the contents of the parent block by using the [parent](/canvas/functions/parent) function. This gives back the results of the parent block:

```canvas
{% block sidebar %}
  <h3>Table Of Contents</h3>
  ...
  {{ parent() }}
{% endblock %}
```

## Named block end-tags

Canvas allows you to put the name of the block after the end tag for better readability (the name after the `endblock` word must match the block name):

```canvas
{% block sidebar %}
  {% block inner_sidebar %}
    ...
  {% endblock inner_sidebar %}
{% endblock sidebar %}
```

## Block nesting and scope

Blocks can be nested for more complex layouts. Per default, blocks have access to variables from outer scopes:

```canvas
{% for item in list %}
  <li>{% block loop_item %}{{ item }}{% endblock %}</li>
{% endfor %}
```

## Block shortcuts

For blocks with little content, it's possible to use a shortcut syntax. The following constructs do the same thing:

```canvas
{% block title %}
  {{ page_title | title }}
{% endblock %}
```

```canvas
{% block title page_title | title %}
```

## Dynamic inheritance

Canvas supports dynamic inheritance by using a variable as the base template:

```canvas
{% extends some_var %}
```

You can also provide a list of templates that are checked for existence. The first template that exists will be used as a parent:

```canvas
{% extends ['layout.html', 'base_layout.html'] %}
```

## Conditional interitance

As the template name for the parent can be any valid Canvas expression, it's possible to make the inheritance mechanism conditional:

```canvas
{% extends standalone ? 'minimum.html' : 'base.html' %}
```

In this example, the template will extend the "minimum.html" layout template if the `standalone` variable evaluates to `true`, and "base.html" otherwise.
