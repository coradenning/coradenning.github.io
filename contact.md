---
layout: default
title: contact
---

<h1>get in touch</h1>
<p style="color:var(--muted); max-width:28rem; margin-bottom:2.5rem">
  use the form below, or find me on <a href="https://github.com/coradenning" target="_blank" rel="noopener">github</a>.
</p>

<form class="contact-form" action="https://formspree.io/f/xqegyyoq" method="POST">
  <div class="form-field">
    <label for="email">your email</label>
    <input type="email" id="email" name="email" required placeholder="you@example.com">
  </div>
  <div class="form-field">
    <label for="message">message</label>
    <textarea id="message" name="message" required placeholder="say hello..."></textarea>
  </div>
  <button type="submit" class="btn btn-primary">send →</button>
</form>
