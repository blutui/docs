---
title: 'settings'
description: 'Get the site settings.'
---

## site_name

The name of the current site.

## site_handle

The handle of the current site.

## timezone

The timezone of the current site.

## published

If the current site is published.

## meta_description

The meta description of the current site.

```canvas
<meta name="description" content="{{ settings.meta_description }}">
```

## google_verification_code

The Google site verification code of the current site.

```canvas
<meta name="google-site-verification" content="{{ settings.google_verification_code }}">
```

## code_injection_head

The escaped HTML content injected in the `head` tag of the template.

## code_injection_header

The escaped HTML content injected at the beginning of the `body` tag of the template.

## code_injection_footer

The escaped HTML content injected at the end of the `body` tag of the template.

## forms_recaptcha_key

This can be used to configure a custom implementation of Google reCAPTCHA.
