---
title: "About | Reverie Studios"
id: about-studio
layout: page
---

## Our Vision

Reverie is a participatory experience design agency based in Boston, MA that produces educational and fun co-creative immersive events, generally known as 'larping' or 'live action roleplaying events'. Participants take on a persona and engage with the story directly and form strong ties to the events going on, rather than watching passively.

## Our Story

Tyler, Ken and Garett have known each other for years, but recently decided that rather than participating in their passions through the experience produced by others, that they would seek to create experiences on their own. After Grand Masquerade in New Orleans 2016, they resolved to forge a new group with a new purpose in their hometown of Boston.

## Meet the Team

{% assign principals = site.staff | where: "type", "principal" %}
<div id = "principals">
	{% for p in principals %}
	<div class = "staff">

		<div class = "name-title">
		<h3>{{p.first-name}} {{p.last-name}}</h3>
		<h4>{{p.title}}</h4>
		</div>
		
		<div class = "contact">
		{% if p.email %}<div class = "email"><a href = "mailto:{{p.email}}">{{p.email}}</a></div>{% endif %}
		{% if p.twitter %}<div class = "twitter"><a href = "https://www.twitter.com/{{p.twitter}}">@{{p.twitter}}</a></div>{% endif %}
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

