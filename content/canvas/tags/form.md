---
title: 'form'
description: 'Generates a HTML form tag.'
---

The `form` tag generates an HTML form tag, including any required input tags to submit the form. The `form` tag requires a handle to render it's contents, usually found in your project dashboard:

```canvas
{% form 'handle' %}
  <!-- form content -->
{% endform %}
```

```html {% filename="HTML Output" %}
<form method="POST" action="/" enctype="multipart/form-data">
  <input type="hidden" name="_form" value="handle" />
  <input type="hidden" name="_token" value="..." autocomplete="off" />
  <!-- form content -->
</form>
```

## The form variable

Inside the `form` block you have access to the form instance:

| Variable      | Description                      |
| ------------- | -------------------------------- |
| `form.name`   | The name of the current form.    |
| `form.handle` | The handle for the current form. |
| `form.fields` | The fields for the current form. |

The `form.fields` variable will give you access to each field for the current form, where `{name}` is the name of the field (eg. `form.fields.message`):

| Variable                           | Description                                                                   |
| ---------------------------------- | ----------------------------------------------------------------------------- |
| `form.fields.{name}.name`          | The name of the form field.                                                   |
| `form.fields.{name}.label`         | The label for the form field.                                                 |
| `form.fields.{name}.order`         | The order number for the form field.                                          |
| `form.fields.{name}.errors`        | An array of errors for the form field.                                        |
| `form.fields.{name}.value`         | The previous value for the form field.                                        |
| `form.fields.{name}.id`            | The unique ID for the form field.                                             |
| `form.fields.{name}.help_text`     | The help text value for the form field.                                       |
| `form.fields.{name}.placeholder`   | The placeholder value for the form field.                                     |
| `form.fields.{name}.required`      | Indicates whether the form field is required or not required.                 |
| `form.fields.{name}.default_value` | The default value for the form field.                                         |
| `form.fields.{name}.type`          | The type value for the form field.                                            |
| `form.fields.{name}.max`           | The max character limit of the form field.                                    |
| `form.fields.{name}.options`       | An array of available options for `select`, `radio` & `checkbox` type fields. |

```canvas
{% form 'contact' %}
  <h1>{{ form.name }}</h1>

  <input type="{{ form.fields.email.type }}" name="{{ form.fields.email.name }}" value="{{ form.fields.email.value }}" />

  <button type="submit">Submit</button>
{% endform %}
```

## Custom HTML attributes

The `form` tag also provides the ability to define custom HTML attributes for the HTML `<form>` element:

```canvas
{% form 'contact' with { id: 'contact' } %}
  <!-- form content -->
{% endform %}
```

```html {% filename="HTML Output" %}
<form method="POST" action="/" enctype="multipart/form-data" id="contact">
  <input type="hidden" name="_form" value="contact" />
  <input type="hidden" name="_token" value="..." autocomplete="off" />
  <!-- form content -->
</form>
```

You can also access the custom HTML attributes inside the `form` block:

```canvas
{% form 'contact' with { id: 'contact' } %}
  <input type="hidden" name="form_id" value="{{ attributes.id }}" />
  <!-- form content -->
{% endform %}
```

```html {% filename="HTML Output" %}
<form method="POST" action="/" enctype="multipart/form-data" id="contact">
  <input type="hidden" name="_form" value="contact" />
  <input type="hidden" name="_token" value="..." autocomplete="off" />
  <input type="hidden" name="form_id" value="contact" />
  <!-- form content -->
</form>
```
