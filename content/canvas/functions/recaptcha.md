---
title: 'recaptcha'
description: 'The recaptcha function renders the required elements for a recaptcha component.'
---

```canvas
{{ recaptcha() }}
```

The following HTML is rendered:

```html
<script src="https://www.google.com/recaptcha/api.js" async defer></script>
<div class="g-recaptcha" data-sitekey="{{ data.key }}" data-theme="light" data-size="normal" data-tabindex="0" data-callback="" data-expired-callback="" data-error-callback=""></div>
<!-- data.key is a value from the site settings -->
```

You can also update the default `recaptcha` arguments:

```canvas
{{ recaptcha(theme = 'dark', tabindex = 1) }}
```

## Recaptcha arguments

Argument           | Description                                          | Type
------------------ | ---------------------------------------------------- | -------
`theme`            | The color theme of the widget. Accepts `light` or `dark`. Default: light | String
`size`             | The size of the widget. Accepts `compact` or `normal` Default: normal | String
`tabindex`         | The tabindex of the widget and challenge. If other elements in your page use tabindex, it should be set to make user navigation easier. Default: 0 | Number
`callback`         | The name of your callback function, executed when the user submits a successful response. The g-recaptcha-response token is passed to your callback. | --
`expired_callback` | The name of your callback function, executed when the reCAPTCHA response expires and the user needs to re-verify. | --
`error_callback`   | The name of your callback function, executed when reCAPTCHA encounters an error (usually network connectivity) and cannot continue until connectivity is restored. If you specify a function here, you are responsible for informing the user that they should retry. | --

## honeypot_field

The `honeypot_field` functions renders the required HTML to protect your form from robots:

```canvas
{{ honeypot_field() }}
```

The following HTML is rendered:

```html
<span style="display: none;">
  <input type="text" name="{{ honeypot.name }}" id="honeyeater">
  <input type="text" name="{{ honeypot.validFromName }}" value="{{ honeypot.validFromValue }}" id="honeyeater-ttl">
</span>
```
