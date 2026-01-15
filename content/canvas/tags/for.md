---
title: 'for'
---

Loop over each item in a sequence. For example, to display a list of users provided in a variable called `users`:

```canvas
<h1>Members</h1>
<ul>
  {% for user in users %}
    <li>{{ user.username | e }}</li>
  {% endfor %}
</ul>
```

If you do need to iterate over a sequence of numbers, you can use the `..` operator:

```canvas
{% for i in 0..10 %}
  * {{ i }}
{% endfor %}
```

The above snippet of code would print all numbers from 0 to 10. It can be also useful with letters:

```canvas
{% for letter in 'a'..'z' %}
  * {{ letter }}
{% endfor %}
```

The `..` operator can take any expression at both sides:

```canvas
{% for letter in 'a'|upper..'z'|upper %}
  * {{ letter }}
{% endfor %}
```

## The loop variable

Inside of a `for` loop block you can access some special variables:

| Variable         | Description                                                   |
| ---------------- | ------------------------------------------------------------- |
| `loop.index`     | The current iteration of the loop. (1 indexed)                |
| `loop.index0`    | The current iteration of the loop. (0 indexed)                |
| `loop.revindex`  | The number of iterations from the end of the loop (1 indexed) |
| `loop.revindex0` | The number of iterations from the end of the loop (0 indexed) |
| `loop.first`     | True if first iteration                                       |
| `loop.last`      | True if last iteration                                        |
| `loop.length`    | The number of items in the sequence                           |
| `loop.parent`    | The parent context                                            |

```canvas
{% for user in users %}
    {{ loop.index }} - {{ user.username }}
{% endfor %}
```

## The else clause

If no iteration took place because the sequence was empty, you can render a replacement block by using `else`:

```canvas
<ul>
  {% for user in users %}
    <li>{{ user.username | e }}</li>
  {% else %}
    <li><em>no user found</em></li>
  {% endfor %}
</ul>
```

## Iterating over keys

By default, a loop iterates over the values of the sequence. You can iterate on keys by using the `keys` filter:

```canvas
<h1>Members</h1>
<ul>
    {% for key in users | keys %}
        <li>{{ key }}</li>
    {% endfor %}
</ul>
```

## Iterating over keys and values

You can also access both keys and values:

```canvas
<h1>Members</h1>
<ul>
    {% for key, user in users %}
        <li>{{ key }}: {{ user.username | e }}</li>
    {% endfor %}
</ul>
```

## Iterating over a subset

You might want to iterate over a subset of values. This can be achieved using the [slice](/canvas/filters/slice) filter:

```canvas
<h1>Top Ten Members</h1>
<ul>
    {% for user in users | slice(0, 10) %}
        <li>{{ user.username | e }}</li>
    {% endfor %}
</ul>
```
