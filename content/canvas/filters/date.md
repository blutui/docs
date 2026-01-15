---
title: 'date'
description: 'The date filter formats a date to a given format.'
---

```canvas
{{ post.published_at | date('m/d/Y') }}
```

For more information on how to [format](#format) a date see the table below.

The **date** filter accepts strings. For instance, to display the current date, filter the word "now":

```canvas
{{ 'now' | date('m/d/Y') }}
```

To escape words and characters in the date format use `\\` in front of each character:

```canvas
{{ post.published_at | date('F jS \\a\\t g:ia') }}
```

If the value passed to the **date** filter is `null`, it will return the current date by default. If an empty string is desired instead of the current date, use a ternary operator:

```canvas
{{ post.published_at is empty ? '' : post.published_at | date('m/d/Y') }}
```

If no format is provided, Canvas will use: `F j, Y H:i`

## Timezone

By default, the date is displayed by applying the default timezone, but you can override it by explicitly specifying a timezone:

```canvas
{{ post.published_at | date('m/d/Y', 'Europe/Paris') }}
```

## Arguments

Argument   | Description       | Type
---------- | ----------------- | -------
`format`   | The date format   | String
`timezone` | The date timezone | String

## Format

The format of the outputted date string. See the formatting options below:

character         | Description                                      | Example
----------------- | ------------------------------------------------ | ---------------
**Day**           | ---                                              | ---
d                 | Day of the month, 2 digits with leading zeros    | 01 to 31
D                 | A textual representation of a day, three letters | Mon through Sun
j                 | Day of the month without leading zeros           | 1 to 31
l (lowercase 'L') | A full textual representation of the day of the week | Sunday through Saturday
N | ISO-8601 numeric representation of the day of the week | 1 (for Monday) through 7 (for Sunday)
S | English ordinal suffix for the day of the month, 2 characters | st, nd, rd or th. Works well with j
w | Numeric representation of the day of the week | 0 (for Sunday) through 6 (for Saturday)
z | The day of the year (starting from 0) | 0 through 365
**Week** | --- | ---
W | ISO-8601 week number of year, weeks starting on Monday | Example: 42 (the 42nd week in the year)
**Month** | --- | ---
F | A full textual representation of a month, such as January or March | January through December
m | Numeric representation of a month, with leading zeros | 01 through 12
M | A short textual representation of a month, three letters | Jan through Dec
n | Numeric representation of a month, without leading zeros | 1 through 12
t | Number of days in the given month | 28 through 31
**Year** | --- | ---
L | Whether it's a leap year | 1 if it is a leap year, 0 otherwise.
o | ISO-8601 week-numbering year. This has the same value as Y, except that if the ISO week number (W) belongs to the previous or next year, that year is used instead. | Examples: 1999 or 2003
Y | A full numeric representation of a year, 4 digits | Examples: 1999 or 2003
y | A two digit representation of a year | Examples: 99 or 03
**Time** | --- | ---
a | Lowercase Ante meridiem and Post meridiem | am or pm
A | Uppercase Ante meridiem and Post meridiem | AM or PM
B | Swatch Internet time | 000 through 999
g | 12-hour format of an hour without leading zeros | 1 through 12
G | 24-hour format of an hour without leading zeros | 0 through 23
h | 12-hour format of an hour with leading zeros | 01 through 12
H | 24-hour format of an hour with leading zeros | 00 through 23
i | Minutes with leading zeros | 00 to 59
s | Seconds with leading zeros | 00 through 59
u | Microseconds | Example: 654321
v | Milliseconds | Example: 654
**Timezone** | --- | ---
e | Timezone identifier | Examples: UTC, GMT, Atlantic/Azores
I (capital i) | Whether or not the date is in daylight saving time | 1 if Daylight Saving Time, 0 otherwise.
O | Difference to Greenwich time (GMT) without colon between hours and minutes | Example: +0200
P | Difference to Greenwich time (GMT) with colon between hours and minutes | Example: +02:00
T | Timezone abbreviation | Examples: EST, MDT ...
Z | Timezone offset in seconds. The offset for timezones west of UTC is always negative, and for those east of UTC is always positive. | -43200 through 50400
**Full Date/Time** | --- | ---
c | ISO 8601 date | 2004-02-12T15:19:21+00:00
r | [RFC 2822](http://www.faqs.org/rfcs/rfc2822) formatted date | Example: Thu, 21 Dec 2000 16:01:07 +0200
U | Seconds since the Unix Epoch (January 1 1970 00:00:00 GMT) | ---
