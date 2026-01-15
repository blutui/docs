---
title: 'block'
---

Blocks are used for inheritance and act as placeholders and replacements at the same time. They are documented in detail in the documentation for the [extends](/docs/canvas/tags/extends) tag. Block names should consist of alphanumeric characters, and underscores. Dashes are not permitted.

## How do blocks work?

A block provides a way to change how a certain part of a template is rendered but it does not interfere in any way with the logic around it.

Let's take the following example to illustrate how a block works and more importantly, how it does not work:

```canvas
{# base.html #}

{% for post in posts %}
  {% block post %}
    <h1>{{ post.title }}</h1>
    <p>{{ post.body }}</p>
  {% endblock %}
{% endfor %}
```

If you render this template, the result would be exactly the same with or without the `block` tag. The `block` inside the `for` loop is just a way to make it overridable by a child template:

```canvas
{# child.html #}

{% extends 'base.html' %}

{% block post %}
  <article>
    <header>{{ post.title }}</header>
    <section>{{ post.text }}</section>
  </article>
{% endblock %}
```

Now, when rendering the child template, the loop is going to use the block defined in the child template instead of the one defined in the base one; the executed template is then equivalent to the following one:

```canvas
{% for post in posts %}
  <article>
    <header>{{ post.title }}</header>
    <section>{{ post.text }}</section>
  </article>
{% endfor %}
```

Let's take another example: a block included within an **if** statement:

```canvas
{% if posts is empty %}
  {% block head %}
    {{ parent() }}

    <meta name="robots" content="noindex, follow">
  {% endblock head %}
{% endif %}
```

Contrary to what you might think, this template does not define a block conditionally; it just makes overridable by a child template the output of what will be rendered when the condition is `true`. If you want the output to be displayed conditionally, use the following instead:

```canvas
{% block head %}
  {{ parent() }}

  {% if posts is empty %}
    <meta name="robots" content="noindex, follow">
  {% endif %}
{% endblock head %}
```
