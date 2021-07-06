---
layout: page
title: Release History
hidden: true
---

<ul class="c-block-list">

    {% for post in site.posts %}
        <li class="c-block-list__item">

			<div class="c-block">
				<h2 class="c-block__heading"><a href="{{ post.url | prepend: site.baseurl }}" class="c-block__link">{{ post.title }}</a></h2>
            	<div class="c-block__desc">
					{{ post.content }}
				</div><!--end c-block__desc-->
			</div><!--end c-block-->

        </li><!--end c-block-list__item-->
    {% endfor %}
	
</ul><!--end c-block-list-->
