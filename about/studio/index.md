---
title: "About | Reverie Studios"
id: about-studio
layout: page
---

## Our Art

Since 2016 Reverie Studios has designed high quality, immersive co-creative immersive events generally known as 'larp' or 'live action roleplaying'. In a larp, participants take on a persona and engage with the story directly and form strong ties to the events going on, rather than watching passively. Reverie Studios believes that the stories that are generated within the larp by the participants are more important than the story that Reverie would tell. Participants and organizers collaborate to develop character and scene sketches, and then Reverie assists the participants to express themselves during the event. Reverie aims to provide all of the tools we can to assist participants in having a meaningful and impactful story experience.

## Meet the Team

The designers and writers behind Reverie Studios.

{% assign principals = site.staff | where: "type", "principal" | sort: "order" %}
<div id = "principals">
	{% for p in principals %}
	<div class = "staff">

		<div class = "name-title">
		<h3>{{p.first-name}} {{p.last-name}}</h3>
		<h4>{{p.title}}</h4>
		</div>
		
		<div class = "contact">
			{% if p.email %}<div class = "email"><a class = "email" href = "mailto:{{p.email}}">{{p.email}}</a></div>{% endif %}
			{% if p.twitter %}<div class = "twitter"><a class = "twitter" href = "https://www.twitter.com/{{p.twitter}}">@{{p.twitter}}</a></div>{% endif %}
			<div class = "pronouns">({{p.pronouns}})</div>

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

