---
layout: default
title: work
---
<div class="page-body">
  <h1 class="page-title">work</h1>
  <p class="page-subtitle">projects, experiments, and things i've made.</p>

  <section class="home-section">
    <h2><span>projects</span></h2>
    <div class="project-grid">
      <div class="project-card">
        <h3><a href="https://github.com/coradenning/coradenning.github.io">coradenning.site</a></h3>
        <p>this very site — built with jekyll, hosted on github pages.</p>
        <div class="project-tags">
          <span class="tag">jekyll</span>
          <span class="tag">scss</span>
          <span class="tag">js</span>
        </div>
        <div class="project-terminal" aria-hidden="true"><span class="t-prompt">~/coradenning.site $</span> cat README.md

            Source: .
       Destination: _site
 Auto-regenerating: enabled
<span class="t-prompt">~/coradenning.site $</span> <span class="t-cursor">▌</span></div>
      </div>
      <div class="project-card">
        <h3>super cool example project!!</h3>
        <p>short description.</p>
        <div class="project-tags">
          <span class="tag">python</span>
          <span class="tag">react</span>
        </div>
        <div class="project-terminal" aria-hidden="true"><span class="t-prompt">~/project $</span> cat README.md
# project name
what it does and why...
<span class="t-prompt">~/project $</span> <span class="t-cursor">▌</span></div>
      </div>
    </div>
  </section>

  <section class="home-section">
    <h2><span>art &amp; design</span></h2>
    <div class="art-grid">

  <article class="art-card" data-title="venice canal" data-medium="pastels" data-full="/assets/art/pastels.jpg">
    <div class="art-card-img">
      <img src="/assets/art/pastels.jpg" alt="a pastel drawing of a canal in venice" loading="lazy">
      <div class="art-card-overlay">
        <span class="art-zoom">⊕ view</span>
      </div>
    </div>
    <div class="art-card-info">
      <h3 class="art-card-title">venice canal</h3>
      <span class="art-card-medium">pastels</span>
      <p class="art-card-desc">worked from a photo i took in venice. trying to capture the light on the water.</p>
    </div>
  </article>

  <article class="art-card" data-title="still life" data-medium="pencil" data-full="/assets/art/charcoal_final.jpg">
    <div class="art-card-img">
      <img src="/assets/art/charcoal_final.jpg" alt="a charcoal drawing of different desk objects" loading="lazy">
      <div class="art-card-overlay">
        <span class="art-zoom">⊕ view</span>
      </div>
    </div>
    <div class="art-card-info">
      <h3 class="art-card-title">still life</h3>
      <span class="art-card-medium">charcoal</span>
      <p class="art-card-desc">the final project for my art class - a large still life</p>
    </div>
  </article>

  <article class="art-card" data-title="still life 2.0" data-medium="charcoal" data-full="/assets/art/charcoal_midterm.jpg">
    <div class="art-card-img">
      <img src="/assets/art/charcoal_midterm.jpg" alt="a charcoal drawing of a collection of objects" loading="lazy">
      <div class="art-card-overlay">
        <span class="art-zoom">⊕ view</span>
      </div>
    </div>
    <div class="art-card-info">
      <h3 class="art-card-title">still life 2.0</h3>
      <span class="art-card-medium">charcoal</span>
      <p class="art-card-desc">my midterm project for art class - a large still life</p>
    </div>
  </article>

  <article class="art-card" data-title="bunny painting" data-medium="watercolor + ink" data-full="/assets/art/watercolor.jpg">
    <div class="art-card-img">
      <img src="/assets/art/watercolor.jpg" alt="a watercolor painting of a small kitchen with bunny figures" loading="lazy">
      <div class="art-card-overlay">
        <span class="art-zoom">⊕ view</span>
      </div>
    </div>
    <div class="art-card-info">
      <h3 class="art-card-title">bunny painting</h3>
      <span class="art-card-medium">watercolor</span>
      <p class="art-card-desc">a gift for mother's day - beatrix potter watercolor exploration</p>
    </div>
  </article>

  </div>
  </section>
</div>

<!-- art lightbox -->
<div id="art-lightbox" role="dialog" aria-modal="true" aria-label="artwork viewer">
  <button class="art-lb-close" aria-label="close">✕</button>
  <div class="art-lb-inner">
    <img id="art-lb-img" src="" alt="">
    <div class="art-lb-meta">
      <h2 id="art-lb-title"></h2>
      <span id="art-lb-medium"></span>
    </div>
  </div>
</div>