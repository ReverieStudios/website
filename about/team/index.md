---
title: "About | Reverie Studios"
id: team
layout: page
---

## Meet the Team

The designers and writers behind Reverie Studios.

{% assign principals = site.staff | where: "type", "principal" | sort: "order" %}
<div id = "principals">
	{% for p in principals %}
	<div class = "staff">

		<div class = "name-title">
			<h4>{{p.first-name}} {{p.last-name}}</h4>
			
			<p class = "contact">
				{{p.title}} <br />
				({{p.pronouns}}) <br />
				<a class = "email" href = "mailto:{{p.email}}">{{p.email}}</a>
			</p>
		</div>
		
		{% if p.image %}
		<div class = "image">
			<img src = "{{p.image}}" />
		</div>
		{% endif %}
		
		<div class = "content">
		{{p.content}}
		</div>
	
	</div>

	{% endfor %}
</div>

