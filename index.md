---
layout: default
title: home
---

<section class="hero">
  <span class="hero-eyebrow">$ whoami</span>
  <h1 class="hero-name">cora denning</h1>
  <p class="hero-tagline" id="typed-tagline"></p>
  <div class="hero-links">
    <a href="/portfolio" class="btn btn-primary">see my work</a>
    <a href="/blog" class="btn">read the log →</a>
    <a href="https://github.com/coradenning" class="btn" target="_blank" rel="noopener">github ↗</a>
  </div>
</section>

<div class="ascii-divider" aria-hidden="true">⠀⠀⠀⡎⢉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡎⢉⠀⠀⠀
⠀⠀⠀⢈⣁⠆⡀⠀⠀⠀⠀⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢈⣁⠆⡀⠀</div>

<h2>recent writing</h2>
<ul class="post-list">
  {% for post in site.posts limit:3 %}
  <li>
    <a href="{{ post.url }}">{{ post.title }}</a>
    <span class="post-date">{{ post.date | date: "%Y·%m·%d" }}</span>
  </li>
  {% else %}
  <li style="color:var(--muted); font-size:.9rem; border-bottom:1px solid var(--border); padding:.7rem 0">
    nothing yet — first post incoming.
  </li>
  {% endfor %}
</ul>

<h2>latest work</h2>
<div class="project-grid">
  <div class="project-card">
    <h3>coradenning.site</h3>
    <p>this very site — built with jekyll, hosted on github pages.</p>
    <div class="project-tags">
      <span class="tag">jekyll</span>
      <span class="tag">scss</span>
      <span class="tag">js</span>
    </div>
    <div class="project-terminal" aria-hidden="true">
<span class="t-prompt">~/coradenning.site $</span> git log --oneline
a3f9c2e initial structure
b1d8e4a added scss + fonts
c7a2f1b mycelium nav
<span class="t-prompt">~/coradenning.site $</span> <span class="cursor" style="animation:blink .9s step-end infinite">▌</span>
    </div>
  </div>
  <div class="project-card">
    <h3>your project here</h3>
    <p>description of what you built and what's interesting about it.</p>
    <div class="project-tags">
      <span class="tag">python</span>
      <span class="tag">react</span>
    </div>
    <div class="project-terminal" aria-hidden="true">
<span class="t-prompt">~/project $</span> cat README.md
# project name
what it does...
<span class="t-prompt">~/project $</span> <span class="cursor">▌</span>
    </div>
  </div>
</div>
