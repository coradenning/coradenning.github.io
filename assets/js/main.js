(function () {
  'use strict';

  var CHARS = ['\u00b7', '\u2218', '\u22c6', '\u2219', '\u25e6', '\u2738', '\u2726'];
  var COLOR = '#BAB178';

  var container = document.getElementById('spore-field');
  if (container) {
    var canvas = document.createElement('canvas');
    var ctx = canvas.getContext('2d');
    container.appendChild(canvas);
    function resize() { canvas.width = window.innerWidth; canvas.height = window.innerHeight; }
    resize();
    window.addEventListener('resize', resize, { passive: true });
    var spores = [];
    for (var si = 0; si < 38; si++) {
      spores.push({ x: Math.random() * window.innerWidth, y: Math.random() * window.innerHeight, vy: -(0.05 + Math.random() * 0.12), vx: (Math.random() - 0.5) * 0.15, o: 0.05 + Math.random() * 0.12, sz: 9 + Math.random() * 6, ch: CHARS[Math.floor(Math.random() * CHARS.length)] });
    }
    var mx = -999, my = -999;
    window.addEventListener('mousemove', function (e) { mx = e.clientX; my = e.clientY; }, { passive: true });
    function draw() {
      var W = canvas.width, H = canvas.height;
      ctx.clearRect(0, 0, W, H);
      for (var i = 0; i < spores.length; i++) {
        var s = spores[i];
        var dx = s.x - mx, dy = s.y - my;
        var dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 80 && dist > 0) { s.x += (dx / dist) * 0.5; s.y += (dy / dist) * 0.5; }
        s.x += s.vx; s.y += s.vy;
        if (s.y < -12) { s.y = H + 12; s.x = Math.random() * W; }
        if (s.x < -12) s.x = W + 12;
        if (s.x > W + 12) s.x = -12;
        ctx.globalAlpha = s.o;
        ctx.fillStyle = COLOR;
        ctx.font = s.sz + 'px "JetBrains Mono",monospace';
        ctx.fillText(s.ch, s.x, s.y);
      }
      ctx.globalAlpha = 1;
      requestAnimationFrame(draw);
    }
    draw();
  }

  var pool = [];
  for (var pi = 0; pi < 14; pi++) {
    var pel = document.createElement('span');
    pel.setAttribute('aria-hidden', 'true');
    pel.style.cssText = 'position:fixed;pointer-events:none;z-index:9999;font-family:"JetBrains Mono",monospace;color:' + COLOR + ';opacity:0;transform:translate(-50%,-50%);user-select:none;';
    document.body.appendChild(pel);
    pool.push({ el: pel, timer: null });
  }
  var pidx = 0, lx = -999, ly = -999;
  window.addEventListener('mousemove', function (e) {
    var dx = e.clientX - lx, dy = e.clientY - ly;
    if (dx * dx + dy * dy < 196) return;
    lx = e.clientX; ly = e.clientY;
    var p = pool[pidx++ % pool.length];
    p.el.textContent = CHARS[Math.floor(Math.random() * CHARS.length)];
    p.el.style.left = lx + 'px'; p.el.style.top = ly + 'px';
    p.el.style.fontSize = (8 + Math.random() * 8) + 'px';
    p.el.style.opacity = '0.6';
    clearTimeout(p.timer);
    p.timer = setTimeout((function (el) { return function () { el.style.opacity = '0'; }; }(p.el)), 400);
  }, { passive: true });

  var tagEl = document.getElementById('typed-tagline');
  if (tagEl) {
    var lines = ['cs + graphic design student.', 'currently building things in indiana.', 'making things where nature meets code.'];
    var li = 0, ci = 0, del = false;
    tagEl.innerHTML = '';
    var tn = document.createTextNode('');
    var cur = document.createElement('span');
    cur.className = 'cursor'; cur.setAttribute('aria-hidden', 'true');
    tagEl.appendChild(tn); tagEl.appendChild(cur);
    function tick() {
      var line = lines[li];
      if (!del) { ci++; tn.textContent = line.slice(0, ci); if (ci >= line.length) { setTimeout(function () { del = true; tick(); }, 2600); return; } }
      else { ci--; tn.textContent = line.slice(0, ci); if (ci <= 0) { del = false; li = (li + 1) % lines.length; setTimeout(tick, 350); return; } }
      setTimeout(tick, del ? 22 : 50);
    }
    setTimeout(tick, 800);
  }

  var heroName = document.getElementById('hero-name');
  if (heroName) {
    var txt = heroName.textContent, html = '';
    for (var hi = 0; hi < txt.length; hi++) {
      html += txt[hi] === ' ' ? ' ' : '<span class="letter" style="--i:' + hi + '" aria-hidden="true">' + txt[hi] + '</span>';
    }
    heroName.innerHTML = html; heroName.setAttribute('aria-label', txt);
  }

  var readVine = document.getElementById('read-vine');
  if (readVine) {
    window.addEventListener('scroll', function () { var d = document.documentElement; readVine.style.transform = 'scaleX(' + (d.scrollTop / Math.max(1, d.scrollHeight - d.clientHeight)) + ')'; }, { passive: true });
  }

  var lb = document.getElementById('lightbox'), lbImg = document.getElementById('lightbox-img');
  if (lb && lbImg) {
    var gi2 = document.querySelectorAll('.art-gallery img');
    for (var gi = 0; gi < gi2.length; gi++) { gi2[gi].addEventListener('click', (function (img) { return function () { lbImg.src = img.src; lbImg.alt = img.alt; lb.classList.add('open'); document.body.style.overflow = 'hidden'; }; }(gi2[gi]))); }
    function closeLb() { lb.classList.remove('open'); document.body.style.overflow = ''; }
    lb.addEventListener('click', closeLb);
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeLb(); });
  }

  var sprite = document.getElementById('footer-sprite'), clicks = 0, ct;
  if (sprite) { sprite.addEventListener('click', function () { clicks++; clearTimeout(ct); ct = setTimeout(function () { clicks = 0; }, 1000); if (clicks >= 3) { clicks = 0; window.location.href = '/garden'; } }); }

  var soilMsg = document.getElementById('soil-message'), footerEl = document.querySelector('.site-footer');
  var MSGS = ['the mycelium remembers.', 'something is growing here.', 'you found the roots.', 'this site runs on loam and css.', 'made with care in indiana.'];
  var soilTimer;
  if (footerEl && soilMsg) {
    footerEl.addEventListener('mouseenter', function () { soilTimer = setTimeout(function () { soilMsg.textContent = MSGS[Math.floor(Math.random() * MSGS.length)]; soilMsg.classList.add('visible'); }, 2000); });
    footerEl.addEventListener('mouseleave', function () { clearTimeout(soilTimer); soilMsg.classList.remove('visible'); });
  }

  var K = ['ArrowUp','ArrowUp','ArrowDown','ArrowDown','ArrowLeft','ArrowRight','ArrowLeft','ArrowRight','b','a'], ki = 0;
  document.addEventListener('keydown', function (e) {
    ki = (e.key === K[ki]) ? ki + 1 : (e.key === K[0] ? 1 : 0);
    if (ki < K.length) return; ki = 0;
    document.body.classList.toggle('fairy-mode');
    for (var fi = 0; fi < 26; fi++) { (function (n) { setTimeout(function () { var s = document.createElement('span'); s.setAttribute('aria-hidden','true'); s.textContent = ['\u2726','\u2727','\u22c6','\u2218'][n%4]; s.style.cssText='position:fixed;pointer-events:none;z-index:9999;left:'+(10+Math.random()*80)+'vw;top:'+(10+Math.random()*80)+'vh;opacity:.9;font-size:'+(10+Math.random()*18)+'px;color:#c98bbf;transform:translate(-50%,-50%);font-family:"JetBrains Mono",monospace;'; document.body.appendChild(s); setTimeout(function(){s.style.opacity='0';setTimeout(function(){s.parentNode&&s.parentNode.removeChild(s);},500);},300+Math.random()*200); }, n*48); }(fi)); }
  });

}());
