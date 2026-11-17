---
layout: page
permalink: /publications/
title: publications
description:
nav: true
nav_order: 2
---

<div class="publications">

<h2 class="year"><span class="en">Published</span><span class="zh">已发表</span></h2>
{% bibliography --group_by none --query @*[status=published]* %}

<h2 class="year"><span class="en">Under Review</span><span class="zh">审稿中</span></h2>
{% bibliography --group_by none --query @*[status=review]* %}

<h2 class="year"><span class="en">In Preparation</span><span class="zh">撰写中</span></h2>
{% bibliography --group_by none --query @*[status=prep]* %}

</div>
