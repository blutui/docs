---
title: 'cms'
description: 'The cms function allows you to retrieve CMS content.' 
---

## blog

`cms.blog` function returns the given blog and its posts:

```canvas
{{ cms.blog('news') }}
```

#### Arguments

Argument | Description                                            | Type
-------- | ------------------------------------------------------ | ------
`slug`   | The slug of the blog (specified in the site Dashboard) | String

#### Response

Example:

```json
{
  "name": "News",
  "slug": "news",
  "description": null,
  "uri": "/news",
  "layout": "templates/blogs/index.html",
  "posts": [
    {
      "id": "f55baa72-5be5-43f5-9063-d2b35559c900",
      "title": "Post 1",
      "slug": "/post--b5mpy-",
      "publish_date": "2020-06-09T13:52:38.000000Z",
      "author": "Fred",
      "description": "Description",
      "belongs_to": "5e522fd7-da46-4807-b9c7-d5f7e28e6240",
      "cover_image": null,
      "created_at": "2020-06-09T01:53:04.000000Z",
      "updated_at": "2020-06-09T01:53:04.000000Z",
      "content": "<p>This is a post</p>"
    },
    ...
  ],
  "post_count": 1,
  "posts_layout": "templates/blogs/post.html"
}
```

## collection

`cms.collection` function returns the given collections entries:

```canvas
{{ cms.collection('staff') }}
```

#### Arguments

Argument | Description                                            | Type
-------- | ------------------------------------------------------ | ------
`slug`   | The slug of the collection (specified in the site Dashboard) | String

#### Response

Example:

```json
[
  {
    "id": "c6a2c920-5bbc-4e78-b3c3-b97726ef0086",
    "collection_id": "bfe81a4a-b819-4d70-999b-6da1c6f7cb92",
    "updated_at": "2020-06-09 02:07:43",
    "created_at": "2020-06-09 02:07:43",
    "foreign_keys": [],
    "description": "This is a bit about Fred.", // custom collection field
    "name": "Fred" // custom collection field
  },
  ...
]
```

## form

`cms.form` function returns the given form:

```canvas
{{ cms.form('contact') }}
```

#### Arguments

Argument | Description                                            | Type
-------- | ------------------------------------------------------ | ------
`slug`   | The slug of the form (specified in the site Dashboard) | String

#### Response

Example:

```json
{
  "name": "Contact",
  "handle": "contact",
  "template": "forms/contact.html",
  "fields": {
    "name": {
      "name": "name",
      "label": "Name",
      "order": null,
      "errors": null,
      "value": null,
      "max": "255",
      "default_value": null,
      "placeholder": null,
      "type": "text",
      "help_text": null,
      "required": "1"
    },
    "message": {
      "name": "message",
      "label": "Message",
      "order": "2",
      "errors": null,
      "value": null,
      "max": null,
      "default_value": null,
      "placeholder": null,
      "type": "textarea",
      "required": "1",
      "help_text": null
    },
    "email": {
      "name": "email",
      "label": "Email",
      "order": "1",
      "errors": null,
      "value": null,
      "required": "1",
      "help_text": null,
      "default_value": null,
      "placeholder": null,
      "type": "email"
    }
  }
}
```

## menu

`cms.menu` function returns the given menu:

```canvas
{{ cms.menu('primary') }}
```

#### Arguments

Argument | Description                                            | Type
-------- | ------------------------------------------------------ | ------
`slug`   | The slug of the menu (specified in the site Dashboard) | String

#### Response

Example:

```json
{
  "name": "Primary",
  "handle": "primary",
  "items": [
    {
      "order": 0,
      "active": true, // if the menu item is enabled.
      "label": "Home",
      "href": "/",
      "opens_new_tab": false,
      "items": []
    },
    {
      "order": 1,
      "active": true, // if the menu item is enabled.
      "label": "About Us",
      "href": "/about",
      "opens_new_tab": false,
      "items": []
    }
  ]
}
```
