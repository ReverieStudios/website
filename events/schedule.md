---
title: Event Schedule | Reverie Studios
id: schedule
layout: page
---

{% assign future_events = site.emptyArray %}
{% assign past_events = site.emptyArray %}
{% assign now = 'now' | date: '%Y-%m-%d' %}

{% for e in site.events %}
	{% assign e_past = e.runs | where_exp: "run", "run.date < now" %}
	{% assign e_future = e.runs | where_exp: "run", "run.date >= now" %}
	{% assign past_events = past_events | concat: e_past %}
	{% assign future_events = future_events | concat: e_future %}
{% endfor %}

{% assign past_events = past_events | sort: 'date' | reverse %}
{% assign future_events = future_events | sort: 'date' | reverse %}

{% if future_events.size > 0 %}

## Upcoming Events

{% for f in future_events %}

### {{f.title}}

#### {{f.display-date}}

[Learn more about this event.](/events/{{f.event}})

{% endfor %}

{% endif %}
	
## Past Events

{% for p in past_events %}

### {{p.title}}

#### {{p.display-date}}

[Learn more about this event.](/events/{{p.event}})

{% endfor %}