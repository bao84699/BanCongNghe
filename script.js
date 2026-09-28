
const MEMBERS = [
  {
    n: 'Nguyễn Minh Triết', i: 'MT', role: 'rd', bg: '#1a1e32', fg: '#6a80f7', lv: 24, pr: 8, rank: 'g', online: true,
    bio: 'Đam mê thiết kế trải nghiệm người dùng và luôn tìm kiếm sự đơn giản trong những điều phức tạp.',
    tags: ['Figma', 'UI/UX', 'Design System'], rl: 'DESIGNER'
  },
  {
    n: 'Trần Hoàng Khoa', i: 'HK', role: 'rv', bg: '#101e14', fg: '#2ec97d', lv: 21, pr: 12, rank: 's', online: true,
    bio: 'Thích xây dựng những thứ có ý nghĩa. Code là ngôn ngữ tôi dùng để giải quyết vấn đề.',
    tags: ['React', 'TypeScript', 'Node.js'], rl: 'DEVELOPER'
  },
  {
    n: 'Phạm Quốc Bảo', i: 'QB', role: 'rl', bg: '#251c10', fg: '#d4a030', lv: 28, pr: 15, rank: 'g', online: false,
    bio: 'Tin rằng công nghệ là cầu nối. Luôn học hỏi, luôn chia sẻ.',
    tags: ['Scrum', 'OKR', 'Strategy'], rl: 'LEADER'
  },
  {
    n: 'Lê Thị Hương', i: 'LH', role: 'rd', bg: '#1a1030', fg: '#9060d0', lv: 18, pr: 6, rank: 's', online: true,
    bio: 'Thiết kế không chỉ là đẹp — là giải quyết vấn đề bằng hình ảnh.',
    tags: ['Adobe XD', 'Wireframe', 'Prototype'], rl: 'DESIGNER'
  },
];

const TICK_DATA = [
  { t: '150+ Thành Viên', c: '' },
  { t: 'BCN Cityscape Live', c: 'green' },
  { t: '42 Online Now', c: 'green' },
  { t: 'Season 4 Active', c: 'purple' },
  { t: '12 Dự Án Đang Chạy', c: '' },
  { t: 'Hackathon IUH 2024', c: 'orange' },
  { t: 'New Members Welcome', c: 'green' },
  { t: 'BCN Platform v1.0', c: 'purple' },
  { t: 'Tuyển Thành Viên Mới', c: 'orange' },
  { t: 'KTPM · IUH · 2024', c: '' },
];
const TICK_COLORS = { green: 'var(--online)', purple: 'var(--designer)', orange: 'var(--leader)', '': 'var(--blue)' };

const BDATA_FG = [
  { w: 22, h: 200, ac: '#7c6af7', role: 'd' }, { w: 14, h: 100, ac: '#34a8e0', role: 'v' },
  { w: 32, h: 240, ac: '#7c6af7', role: 'd', tall: true }, { w: 12, h: 80, ac: '#4f8ef7', role: 'v' },
  { w: 38, h: 270, ac: '#34a8e0', role: 'v', tall: true }, { w: 18, h: 130, ac: '#e0913a', role: 'l' },
  { w: 26, h: 175, ac: '#2ec97d', role: 'v' }, { w: 14, h: 90, ac: '#4f8ef7', role: 'v' },
  { w: 22, h: 190, ac: '#7c6af7', role: 'd' }, { w: 36, h: 250, ac: '#34a8e0', role: 'v', tall: true },
  { w: 16, h: 110, ac: '#e0913a', role: 'l' }, { w: 20, h: 155, ac: '#7c6af7', role: 'd' },
  { w: 30, h: 210, ac: '#4f8ef7', role: 'v' }, { w: 18, h: 120, ac: '#2ec97d', role: 'v' },
  { w: 24, h: 170, ac: '#34a8e0', role: 'v' }, { w: 14, h: 85, ac: '#7c6af7', role: 'd' },
  { w: 34, h: 225, ac: '#e0913a', role: 'l', tall: true }, { w: 20, h: 140, ac: '#34a8e0', role: 'v' },
  { w: 16, h: 95, ac: '#7c6af7', role: 'd' }, { w: 28, h: 180, ac: '#4f8ef7', role: 'v' },
];
const BDATA_BG = [
  { w: 28, h: 160, ac: '#4f8ef7' }, { w: 18, h: 100, ac: '#7c6af7' },
  { w: 40, h: 200, ac: '#34a8e0' }, { w: 16, h: 85, ac: '#4f8ef7' },
  { w: 32, h: 180, ac: '#7c6af7' }, { w: 24, h: 130, ac: '#e0913a' },
  { w: 36, h: 190, ac: '#34a8e0' }, { w: 20, h: 110, ac: '#7c6af7' },
  { w: 30, h: 170, ac: '#4f8ef7' }, { w: 14, h: 75, ac: '#2ec97d' },
  { w: 44, h: 215, ac: '#34a8e0' }, { w: 22, h: 125, ac: '#7c6af7' },
  { w: 26, h: 145, ac: '#e0913a' }, { w: 18, h: 95, ac: '#4f8ef7' },
];


function buildTicker() {
  const tt = document.getElementById('tt');
  const data = [...TICK_DATA, ...TICK_DATA];
  tt.innerHTML = data.map(d => `
    <div class="ti">
      <div class="ti-dot" style="background:${TICK_COLORS[d.c] || 'var(--blue)'}"></div>
      ${d.t}
    </div>`).join('');
}


function initStars() {
  const c = document.getElementById('starCanvas');
  if (!c) return;
  const ctx = c.getContext('2d');
  const W = c.offsetWidth, H = c.offsetHeight;
  c.width = W; c.height = H;
  const stars = Array.from({ length: 120 }, () => ({
    x: Math.random() * W, y: Math.random() * H * 0.7,
    r: Math.random() * 1.2 + .2,
    a: Math.random(),
    s: Math.random() * .5 + .3
  }));
  function drawStars() {
    ctx.clearRect(0, 0, W, H);
    stars.forEach(s => {
      s.a += s.s * .005;
      const alpha = .2 + .6 * (Math.sin(s.a) * .5 + .5);
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255,255,255,${alpha})`;
      ctx.fill();
    });
    requestAnimationFrame(drawStars);
  }
  drawStars();
}


function buildCityStars() {
  const c = document.getElementById('cityStars');
  if (!c) return;
  c.innerHTML = Array.from({ length: 50 }, () => {
    const x = Math.random() * 100;
    const y = Math.random() * 60;
    const s = Math.random() * 1.5 + .3;
    const d = Math.random() * 3 + 1;
    return `<div class="city-star-dot" style="
      left:${x}%;top:${y}%;
      width:${s}px;height:${s}px;
      background:rgba(255,255,255,${.3 + Math.random() * .5});
      animation:blink ${d}s ease-in-out ${Math.random() * 3}s infinite;
    "></div>`;
  }).join('');
}


function buildBuilding(b, isFg, index) {
  const bgDark = '#1a1c2c';
  const cols = Math.max(2, Math.floor(b.w / 9));
  const rows = Math.max(3, Math.floor(b.h / 18));
  let windowsHtml = '';
  for (let r = 0; r < rows; r++) {
    for (let cc = 0; cc < cols; cc++) {
      const rand = Math.random();
      let cls = 'blk-win';
      if (rand > .55) {
        if (rand > .82) cls += ' lit-purple';
        else if (rand > .68) cls += ' lit-blue';
        else cls += ' lit';
      }
      windowsHtml += `<div class="${cls}"></div>`;
    }
  }
  const delay = (index * .04).toFixed(2);
  const antenna = isFg && b.tall ? '<div class="blk-antenna"></div>' : '';
  return `<div class="blk" style="
    width:${b.w}px;height:${b.h}px;
    --blk-bg:${bgDark};
    --blk-ac:${b.ac};
    animation:riseIn .6s cubic-bezier(.4,0,.2,1) ${delay}s both;
  ">
    ${antenna}
    <div class="blk-top"></div>
    <div class="blk-windows" style="grid-template-columns:repeat(${cols},1fr);grid-template-rows:repeat(${rows},1fr);">
      ${windowsHtml}
    </div>
    <div class="blk-base"></div>
  </div>`;
}


function buildCity() {
  const fg = document.getElementById('cityBuildings');
  const bg = document.getElementById('cityBg');
  if (fg) fg.innerHTML = BDATA_FG.map((b, i) => buildBuilding(b, true, i)).join('');
  if (bg) bg.innerHTML = BDATA_BG.map((b, i) => buildBuilding(b, false, i)).join('');
  setTimeout(() => {
    setInterval(() => {
      const wins = document.querySelectorAll('#cityBuildings .blk-win:not(.lit):not(.lit-blue):not(.lit-purple)');
      if (wins.length) {
        const pick = wins[Math.floor(Math.random() * wins.length)];
        pick.classList.add('lit');
        setTimeout(() => pick.classList.remove('lit'), 800 + Math.random() * 1200);
      }
      const lits = document.querySelectorAll('#cityBuildings .blk-win.lit');
      if (lits.length) {
        const pick2 = lits[Math.floor(Math.random() * lits.length)];
        pick2.classList.remove('lit');
      }
    }, 180);
  }, 1200);
}


function buildMembers() {
  const grid = document.getElementById('mgrid');
  if (!grid) return;
  grid.innerHTML = MEMBERS.map(m => `
    <div class="mcard ${m.role}" onclick="toast('→ Mở hồ sơ ${m.n}')">
      <div class="mc-top">
        <div class="mc-arow">
          <div class="mc-ava" style="background:${m.bg};color:${m.fg}">
            <div class="mc-ava-inner">${m.i}</div>
            ${m.online ? '<div class="mc-od"></div>' : ''}
          </div>
          <div class="mc-rank ${m.rank}">
            <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
          </div>
        </div>
        <div class="mc-name">${m.n}</div>
        <span class="mc-chip">${m.rl}</span>
        <div class="mc-bio">${m.bio}</div>
      </div>
      <div class="mc-tags">${m.tags.map(t => `<span class="mc-tag">${t}</span>`).join('')}</div>
      <div class="mc-bot">
        <div><div class="mc-sv">${m.lv}</div><div class="mc-sl">Level</div></div>
        <div><div class="mc-sv">${m.pr}</div><div class="mc-sl">Dự Án</div></div>
        <button class="mc-vbtn">Hồ Sơ <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg></button>
      </div>
    </div>`).join('');
}


function cu(id, target, suffix = '', delay = 0) {
  setTimeout(() => {
    const el = document.getElementById(id); if (!el) return;
    let n = 0; const step = Math.max(1, Math.ceil(target / 28));
    const t = setInterval(() => {
      n = Math.min(n + step, target); el.textContent = n + suffix;
      if (n >= target) clearInterval(t);
    }, 28);
  }, delay);
}


function animateAboutBars() {
  setTimeout(() => {
    const r1 = document.getElementById('rbar1');
    const r2 = document.getElementById('rbar2');
    const r3 = document.getElementById('rbar3');
    if (r1) r1.style.width = '38%';
    if (r2) r2.style.width = '45%';
    if (r3) r3.style.width = '17%';
  }, 300);
}


const rio = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('in');
      // trigger about bars when about section enters view
      if (e.target.closest('#about')) animateAboutBars();
      rio.unobserve(e.target);
    }
  });
}, { threshold: .07 });
document.querySelectorAll('.rev').forEach(el => rio.observe(el));

const riol = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in-l'); riol.unobserve(e.target) } });
}, { threshold: .07 });
document.querySelectorAll('.rev-l').forEach(el => riol.observe(el));


const statsEl = document.querySelector('.stats-band');
let statsDone = false;
const statsObs = new IntersectionObserver(entries => {
  if (entries[0].isIntersecting && !statsDone) {
    statsDone = true;
    cu('s1', 150); cu('s2', 36); cu('s3', 18); cu('s4', 94); cu('s5', 4);
    statsObs.disconnect();
  }
}, { threshold: .2 });
if (statsEl) statsObs.observe(statsEl);


window.addEventListener('scroll', () => {
  const pct = window.scrollY / (document.body.scrollHeight - window.innerHeight) * 100;
  document.getElementById('sp').style.width = Math.min(pct, 100) + '%';
  document.getElementById('nav').classList.toggle('up', window.scrollY > 6);
}, { passive: true });


function goto(id) { const el = document.querySelector(id); if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' }) }
function handleJoin() { toast('✓ Đã gửi đăng ký! BCN sẽ liên hệ trong 48 giờ.') }
function toast(msg) {
  const old = document.querySelector('.toast');
  if (old) { clearTimeout(old._t); old.remove() }
  const el = document.createElement('div'); el.className = 'toast'; el.textContent = msg;
  document.body.appendChild(el);
  el._t = setTimeout(() => {
    el.style.transition = 'opacity .22s'; el.style.opacity = '0';
    setTimeout(() => el.remove(), 240);
  }, 2800);
}


function flickerLive() {
  const el = document.getElementById('liveCount');
  if (!el) return;
  setInterval(() => {
    const base = 42;
    const delta = Math.floor(Math.random() * 5) - 2;
    el.textContent = base + delta;
  }, 4500);
}


function toggleConsole() {
  const cc = document.getElementById('codeConsole');
  if (cc) {
    cc.classList.toggle('hidden');
    // focus input when opened
    if (!cc.classList.contains('hidden')) {
      const input = document.getElementById('consoleInput');
      if (input) input.focus();
    }
  }
}
window.addEventListener('load', () => {
  buildTicker();
  buildCity();
  buildMembers();
  buildCityStars();
  initStars();
  flickerLive();
  cu('h1', 150, '+', 400); cu('h2', 36, '', 500); cu('h3', 4, '', 600); cu('h4', 18, '+', 700);
});


(function () {
  const pet = document.getElementById('cyber-pet');
  const speech = document.getElementById('pet-speech');
  if (!pet || !speech) return;

  let defaultTop = window.innerHeight * 0.72;
  let defaultLeft = window.innerWidth * 0.82;
  let idleTimer;
  let isAwake = false; // Pet chưa thức
  let hasBeenDragged = false;

  window.addEventListener('resize', () => {
    if (!hasBeenDragged && isAwake) {
      defaultTop = window.innerHeight * 0.72;
      defaultLeft = Math.min(window.innerWidth * 0.82, window.innerWidth - 100);
      pet.style.top = `${defaultTop}px`;
      pet.style.left = `${defaultLeft}px`;
    }
  });

  // 0. TRẠNG THÁI TĨNH BAN ĐẦU — nằm tại hero-bcn-logo
  function positionAtLogo() {
    const logo = document.querySelector('.hero-bcn-logo');
    if (logo) {
      const rect = logo.getBoundingClientRect();
      pet.style.top = `${rect.top + rect.height / 2 - 45}px`;
      pet.style.left = `${rect.left + rect.width / 2 - 45}px`;
    }
    pet.classList.add('state-dormant');
  }
  
  if (window.innerWidth <= 1100) {
    // Avoid overflowing off right edge on small screens
    defaultLeft = Math.min(window.innerWidth * 0.82, window.innerWidth - 100);
    wakeUp();
  } else {
    positionAtLogo();
  }

  // Khi scroll lần đầu → thức dậy
  function wakeUp() {
    if (isAwake) return;
    isAwake = true;
    window.removeEventListener('scroll', wakeUp);

    // Thu nhỏ và bay về vị trí nghỉ
    pet.classList.remove('state-dormant');
    pet.style.top = `${defaultTop}px`;
    pet.style.left = `${defaultLeft}px`;
    showSpeech("> ACTIVATED.");
    setTimeout(() => speech.classList.remove('active'), 2500);
    resetIdleTimer();
  }
  window.addEventListener('scroll', wakeUp, { passive: true });

  pet.addEventListener('click', () => {
    if (!isAwake) {
      pet.classList.add('state-peeking');
      setTimeout(() => {
        if (!isAwake) pet.classList.remove('state-peeking');
      }, 3000);
    }
  });

  // 1. HỆ THỐNG TRẠNG THÁI SINH HỌC & TREO MÁY (IDLE DETECTOR)
  function resetIdleTimer() {
    if (!isAwake) return;
    pet.classList.remove('state-idle');
    clearTimeout(idleTimer);

    // Sau 5 giây không đụng chuột -> Pet ngủ
    idleTimer = setTimeout(() => {
      pet.classList.add('state-idle');
      showSpeech("> STANDBY_MODE...");
    }, 5000);
  }

  document.addEventListener('mousemove', resetIdleTimer);
  document.addEventListener('keydown', resetIdleTimer);

  // Ánh mắt kỹ thuật số đuổi theo chuột
  document.addEventListener('mousemove', (e) => {
    if (!isAwake || pet.classList.contains('state-idle')) return;
    const petRect = pet.getBoundingClientRect();
    const petCenterX = petRect.left + petRect.width / 2;
    const petCenterY = petRect.top + petRect.height / 2;

    const angle = Math.atan2(e.clientY - petCenterY, e.clientX - petCenterX);
    const dist = 3;
    const mx = Math.cos(angle) * dist;
    const my = Math.sin(angle) * dist;

    document.getElementById('p-eye-l').style.setProperty('--ex', `${mx}px`);
    document.getElementById('p-eye-l').style.setProperty('--ey', `${my}px`);
    document.getElementById('p-eye-r').style.setProperty('--ex', `${mx}px`);
    document.getElementById('p-eye-r').style.setProperty('--ey', `${my}px`);
  });

  function movePetToElement(el, position) {
    if (!el) return;
    const rect = el.getBoundingClientRect();
    if (position === 'right') {
      pet.style.top = `${rect.top + (rect.height / 2) - 45}px`;
      pet.style.left = `${rect.right - 10}px`;
    } else if (position === 'down') {
      pet.style.top = `${rect.bottom + 15}px`;
      pet.style.left = `${rect.left + 10}px`;
    }
  }

  function showSpeech(text) {
    speech.innerText = text;
    speech.classList.add('active');
  }

  // 2. HỆ THỐNG KÝ SINH TỰ ĐỘNG
  function setupParasite(selector, text, glitchDuration = 0) {
    const els = document.querySelectorAll(selector);
    els.forEach(el => {
      el.addEventListener('mouseenter', () => {
        if (!isAwake) wakeUp();
        pet.classList.remove('state-idle');
        pet.classList.add('state-alert'); // Mắt mở to

        // Hiệu ứng giật Glitch Cyberpunk
        if (glitchDuration > 0) {
          pet.classList.add('state-glitch');
          setTimeout(() => pet.classList.remove('state-glitch'), glitchDuration);
        }

        movePetToElement(el, 'right');
        showSpeech(text);
      });

      el.addEventListener('mouseleave', () => {
        if (!isAwake) return;
        pet.classList.remove('state-alert'); // Mắt bình thường lại
        if (!hasBeenDragged) {
          defaultTop = window.innerHeight * 0.72;
          defaultLeft = Math.min(window.innerWidth * 0.82, window.innerWidth - 100);
        }
        pet.style.top = `${defaultTop}px`;
        pet.style.left = `${defaultLeft}px`;
        speech.classList.remove('active');
      });
    });
  }

  setupParasite('.btn-p', '> ACCESSING_DATA...', 200);
  setupParasite('.btn-g', '> LINKING_PORTAL...', 400);
  setupParasite('.hrc', '> WARNING: SCAN_?', 600);
  setupParasite('.fi, .fsel, .fta', '> INPUT_DETECTED...', 0); // Ô nhập liệu

  // 3. KÉO THẢ TỰ DO + CẬP NHẬT ĐIỂM NGHỈ NGƠI
  let isDragging = false;
  let offsetX, offsetY;

  pet.addEventListener('mousedown', (e) => {
    pet.classList.add('state-glitch');
    if (!isAwake) return;
    isDragging = true;
    pet.style.transition = 'none';
    offsetX = e.clientX - pet.getBoundingClientRect().left;
    offsetY = e.clientY - pet.getBoundingClientRect().top;
  });

  document.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    const x = e.clientX - offsetX;
    const y = e.clientY - offsetY;
    pet.style.left = `${x}px`;
    pet.style.top = `${y}px`;
    defaultLeft = x; defaultTop = y;
  });

  document.addEventListener('mouseup', () => {
    pet.classList.remove('state-glitch');
    if (isDragging) {
      isDragging = false;
      hasBeenDragged = true;
      pet.style.transition = 'top 0.6s cubic-bezier(0.16, 1, 0.3, 1), left 0.6s cubic-bezier(0.16, 1, 0.3, 1)';
      showSpeech("> POSITION_SAVED.");
    }
  });
})();
