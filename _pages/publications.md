---
layout: page
permalink: /publications/
title: publications
description:
nav: true
nav_order: 2
---

My research spans corpus methodology, discourse analysis, and their application across disciplinary boundaries.

<ul class="nav nav-tabs" id="pubTabs" role="tablist">
  <li class="nav-item">
    <a class="nav-link active" id="theme-tab" data-toggle="tab" href="#theme" role="tab">By theme</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" id="year-tab" data-toggle="tab" href="#year" role="tab">By year</a>
  </li>
</ul>

<div class="tab-content publications" id="pubTabContent">
  <div class="tab-pane fade show active" id="theme" role="tabpanel">

<h2>Discourse, methodology and meaning</h2>
{% bibliography --query @*[keywords=discourse-methodology-meaning] %}

<h2>Argumentation mining</h2>
{% bibliography --query @*[keywords=argumentation-mining] %}

<h2>Applications in the legal and medical domain</h2>
{% bibliography --query @*[keywords=legal-medical-applications] %}

<h2>Corpora, resources and infrastructure</h2>
{% bibliography --query @*[keywords=corpora-resources-infrastructure] %}

  </div>
  <div class="tab-pane fade" id="year" role="tabpanel">

{% bibliography %}

  </div>
</div>