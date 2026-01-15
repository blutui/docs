---
title: 'group_by'
description: 'The group_by filter groups array items by a given key.'
---

```canvas
{% set items = [
  { account_id: 'account-x10', product: 'Chair' },
  { account_id: 'account-x10', product: 'Bookcase' },
  { account_id: 'account-x11', product: 'Desk' },
] | group_by('account_id') %}

{# output:
{
  'account-x10': [
      { account_id: 'account-x10', product: 'Chair' },
      { account_id: 'account-x10', product: 'Bookcase' },
  ],
  'account-x11': [
      { account_id: 'account-x11', product: 'Desk' },
  ]
}
#}
```

### Arguments

Argument   | Description            | Type
---------- | ---------------------- | ------
`key`      | The `key` to group by. | String
