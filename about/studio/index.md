---
title: "About | Reverie Studios"
id: about-studio
layout: page
---

## Our Vision

Reverie is a participatory experience design agency based in Boston, MA that produces educational and fun co-creative immersive events, generally known as 'larping' or 'live action roleplaying events'. Participants take on a persona and engage with the story directly and form strong ties to the events going on, rather than watching passively.

## Our Ethos

Reverie believes that the stories that are generated within the larp by the participants are more important than the story that Reverie would tell. Participants and organizers collaborate to develop character and scene sketches, and then Reverie assists the participants to express themselves during the event. Reverie aims to provide all of the tools we can to assist participants in having a meaningful and impactful story experience.

## Our Story

Reverie Studios began in 2016 with small, bespoke larp events. Since then the studio has run or hosted half a dozen larp events ranging from intimate and intense affairs to large scale blockbuster style events. Reverie continues to grow and explore new larp formats and experiences, with plans on the horizon to partner with other organizations and run even more events. 

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

## Collaborators

At Reverie Studios we believe in cooperative production and collaboration, and as such we have worked with a number of individuals and organizations to create art. Often, these artists are those who want to see this kind of theater thrive and have given us their services free or at reduced rates. We would like to promote them and to showcase their work, and if you are interested in them to visit their pages.

{% assign collab = site.staff | where: "type", "collaborator" %}
<div id = "collaborators">
	{% for c in collab %}
	<div class = "staff">

		<h3>{{c.first-name}} {{c.last-name}}</h3>
		
		{{c.content}}
	
	</div>

	{% endfor %}
</div>

