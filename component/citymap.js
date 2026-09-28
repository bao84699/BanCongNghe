// =====================================================
// CITYMAP — Bin-Packing Grid (không khoảng trống)
// Dùng CSS Grid + absolute positioning
// UNIT = 122px, COLS = 9, GAP = 6px -> Chiều rộng cố định 1146px
// =====================================================

let UNIT = 122;     // Sẽ tính toán động theo kích thước màn hình
const GAP  = 6;     // px gap
let COLS = 8;       // Sẽ tính toán động theo kích thước màn hình (8 cột trên desktop)

// Global filter & sort state
const filterState = {
  search: "",
  role: "all",
  rank: "all",
  sortBy: "level"
};

const MEMBERS = [
  { id:1,  name:"Thái Hồng Sơn",  role:"LEADER",  team:"Web", tier:1, tierLabel:"cộng tác viên",
    desc:"Tin rằng công nghệ là cầu nối giữa con người và ý tưởng. Luôn học hỏi, luôn cải tiến.",
    skills:["Team Lead","Project Mgmt"], projects:5, stars:48, initials:"HS", w:2, h:2, link:"user-detail.html",
    level:34, exp:5856, joined:"04/2021", online:true,
    colorTheme: { bg: "rgba(61, 127, 232, 0.15)", border: "#3d7fe8" } },
  { id:2,  name:"Dư Văn Hùng",     role:"DESIGNER",    team:"design",  tier:2, tierLabel:"Thành viên",
    desc:"",
    skills:["Prototyping","Design System","Illustration","UI/UX"], projects:5, stars:31, initials:"VH", w:2, h:1, link:"user-detail.html",
    level:34, exp:8887, joined:"11/2021", online:true,
    colorTheme: { bg: "rgba(0, 212, 170, 0.12)", border: "#00d4aa" } },
  { id:3,  name:"Bạch Việt Đức",   role:"DESIGNER",      team:"design",   tier:2, tierLabel:"Thành viên",
    desc:"",
    skills:["Adobe XD","Figma","Illustration","Design System"], projects:10, stars:22, initials:"VĐ", w:2, h:1, link:"user-detail.html",
    level:33, exp:5247, joined:"07/2021", online:true,
    colorTheme: { bg: "rgba(220, 100, 40, 0.12)", border: "#e06020" } },
  { id:4,  name:"Hoàng Văn Dũng",  role:"Team Leader", team:"Web",tier:2, tierLabel:"Thành viên",
    desc:"",
    skills:[], projects:10, stars:62, initials:"VD", w:2, h:1, link:"user-detail.html",
    level:31, exp:3200, joined:"08/2021", online:true,
    colorTheme: { bg: "rgba(220, 150, 40, 0.12)", border: "#e09020" } },
  { id:5,  name:"Tô Minh Quân",    role:"DESIGNER",        team:"design", tier:1, tierLabel:"Thành viên",
    desc:"Thích xây dựng những thứ thực sự có ý nghĩa. Code là ngôn ngữ tôi dùng để giải quyết vấn đề.",
    skills:["Wireframing","Adobe XD","Design System","Figma"], projects:5, stars:5, initials:"MQ", w:2, h:2, link:"user-detail.html",
    level:34, exp:5856, joined:"01/2023", online:false,
    colorTheme: { bg: "rgba(61, 127, 232, 0.15)", border: "#3d7fe8" } },
  { id:6,  name:"Kiều Ngọc Hân",   role:"Team Leader",         team:"Web",  tier:2, tierLabel:"Thành viên",
    desc:"",
    skills:[], projects:2, stars:3, initials:"NH", w:2, h:1,
    level:31, exp:2420, joined:"12/2022", online:true,
    colorTheme: { bg: "rgba(150, 80, 220, 0.12)", border: "#a050db" } },
  { id:7,  name:"Trịnh Thu Hà",    role:"Team Leader",     team:"Web",  tier:2, tierLabel:"Thành viên",
    desc:"",
    skills:[], projects:10, stars:27, initials:"TH", w:2, h:1, link:"user-detail.html",
    level:31, exp:4100, joined:"05/2022", online:false,
    colorTheme: { bg: "rgba(61, 127, 232, 0.15)", border: "#3d7fe8" } },
  { id:8,  name:"Thương Bảo Châu", role:"DEV",         team:"Web",   tier:3, tierLabel:"Thực tập sinh",
    desc:"",
    skills:[], projects:1, stars:4, initials:"BC", w:2, h:1,
    level:28, exp:1600, joined:"01/2024", online:false,
    colorTheme: { bg: "rgba(220, 80, 150, 0.12)", border: "#e05096" } },
  { id:9,  name:"TB",              role:"DEV",  team:"Web", tier:2, tierLabel:"Thành viên",
    desc:"", skills:[], projects:0, stars:0, initials:"TB", w:1, h:1, link:"user-detail.html",
    level:26, exp:3100, joined:"08/2023", online:true,
    colorTheme: { bg: "rgba(220, 150, 40, 0.12)", border: "#e09020" } },
  { id:10, name:"VC",              role:"DEV",    team:"Web",   tier:1, tierLabel:"cộng tác viên",
    desc:"", skills:[], projects:0, stars:0, initials:"VC", w:1, h:1, link:"user-detail.html",
    level:35, exp:6200, joined:"03/2023", online:true,
    colorTheme: { bg: "rgba(61, 127, 232, 0.15)", border: "#3d7fe8" } },
  { id:11, name:"TL",              role:"DEV",       team:"Web",tier:3, tierLabel:"Thực tập sinh",
    desc:"", skills:[], projects:0, stars:0, initials:"TL", w:1, h:1,
    level:9, exp:380, joined:"01/2024", online:false,
    colorTheme: { bg: "rgba(220, 100, 40, 0.12)", border: "#e06020" } },
  { id:12, name:"TM",              role:"DEV",    team:"Web",  tier:2, tierLabel:"Thành viên",
    desc:"", skills:[], projects:0, stars:0, initials:"TM", w:1, h:1, link:"user-detail.html",
    level:29, exp:3800, joined:"06/2024", online:true,
    colorTheme: { bg: "rgba(61, 127, 232, 0.15)", border: "#3d7fe8" } }
];

// Tier colors — dark theme
const TIER_COLORS = {
  1: { fg:"#6C9EFF", bg:"rgba(108,158,255,0.15)", border:"rgba(108,158,255,0.25)", badge:"#3d6bff", glow:"#4a7fff" },
  2: { fg:"#4ECDC4", bg:"rgba(78,205,196,0.12)",  border:"rgba(78,205,196,0.20)", badge:"#2bb5ac", glow:"#3dd4c8" },
  3: { fg:"#8B8B9E", bg:"rgba(139,139,158,0.10)", border:"rgba(139,139,158,0.15)", badge:"#6e6e82", glow:"#6e6e82" }
};

// Star SVG icon for tier 1 (cộng tác viên)
const STAR_SVG = `<svg viewBox="0 0 24 24" fill="currentColor" width="10" height="10"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.27 5.82 22 7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>`;

// Helper to filter by role categories
function matchRole(memberRole, category) {
  if (category === "all") return true;
  const r = memberRole.toLowerCase();
  if (category === "Designer") {
    return r.includes("design") || r.includes("ux") || r.includes("ui");
  }
  if (category === "Dev") {
    return r.includes("dev") || r.includes("engineer") || r.includes("app");
  }
  if (category === "Leader") {
    return r.includes("lead") || r.includes("tech");
  }
  return false;
}

// ─── Bin Packing ──────────────────────────────────────
function packItems(items, cols) {
  const grid = [];
  function ensureRows(n) { while (grid.length < n) grid.push(new Array(cols).fill(false)); }
  function canPlace(row, col, w, h) {
    if (col + w > cols) return false;
    ensureRows(row + h);
    for (let r = row; r < row + h; r++)
      for (let c = col; c < col + w; c++)
        if (grid[r][c]) return false;
    return true;
  }
  function place(row, col, w, h) {
    ensureRows(row + h);
    for (let r = row; r < row + h; r++)
      for (let c = col; c < col + w; c++)
        grid[r][c] = true;
  }
  function findSlot(w, h) {
    for (let row = 0; ; row++) {
      ensureRows(row + h);
      for (let col = 0; col <= cols - w; col++) {
        if (canPlace(row, col, w, h)) return { row, col };
      }
    }
  }
  return items.map(item => {
    const { row, col } = findSlot(item.w, item.h);
    place(row, col, item.w, item.h);
    return { ...item, row, col };
  });
}

// ─── Format number ────────────────────────────────────
function formatExp(n) {
  if (n >= 1000) return (n / 1000).toFixed(3).replace('.', ',');
  return n.toString();
}

// ─── Card Builder ─────────────────────────────────────
function buildCard(m) {
  const tier = TIER_COLORS[m.tier];
  const pxW = m.w * UNIT + (m.w - 1) * GAP;
  const pxH = m.h * UNIT + (m.h - 1) * GAP;
  const pxX = m.col * (UNIT + GAP);
  const pxY = m.row * (UNIT + GAP);

  const isSmall = m.w === 1 && m.h === 1;
  const isWide  = m.w >= 2 && m.h === 1;
  const isBig   = m.w >= 2 && m.h >= 2;

  // Online dot
  const onlineDot = `<span class="mc-online ${m.online ? 'is-online' : ''}"></span>`;

  // Star badge (tier 1 only) - định vị tuyệt đối ở góc thẻ
  const starBadge = m.tier === 1
    ? `<span class="mc-star">${STAR_SVG}</span>` : "";

  // Level badge
  const levelBadge = `<span class="mc-level">Lv${m.level || 0}</span>`;

  // Role badge
  const roleBadge = `<span class="mc-role-badge" style="--badge-color:${tier.fg}">${m.role}</span>`;

  // Skills
  const skillCount = isSmall ? 0 : isWide ? 3 : 4;
  const skillsHTML = m.skills.slice(0, skillCount)
    .map(s => `<span class="mc-skill">${s}</span>`).join("");

  // Link button
  const linkHTML = m.link
    ? `<a href="#" onclick="openUserDetail(${m.id}); return false;" class="mc-link-btn" title="Xem hồ sơ">
        <span>Hồ Sơ</span>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
          <path d="M7 17L17 7M17 7H7M17 7v10"/>
        </svg>
       </a>` : "";

  // Tooltip
  const tooltipHTML = isSmall
    ? `<div class="mc-tooltip">${m.name} · ${m.role}</div>` : "";

  // Bottom tier line
  const bottomLine = `<div class="mc-bottom-line" style="background:linear-gradient(90deg, ${tier.fg}, transparent)"></div>`;

  // Custom Avatar Style
  const avaStyle = `width:${isWide ? '36px' : '48px'};height:${isWide ? '36px' : '48px'};font-size:${isWide ? '12px' : '16px'};background:${m.colorTheme.bg};color:${m.colorTheme.border};border-color:${m.colorTheme.border};`;

  // ──── Card HTML by size ────

  if (isSmall) {
    return `
    <div class="mcard mcard-sm" data-team="${m.team}" data-id="${m.id}"
      onclick="openUserDetail(${m.id})"
      style="position:absolute; left:${pxX}px; top:${pxY}px; width:${pxW}px; height:${pxH}px;
        --tier-fg:${tier.fg}; --tier-bg:${tier.bg}; --tier-border:${tier.border}; cursor: pointer;">
      ${starBadge}
      ${tooltipHTML}
      <div class="mc-inner-sm">
        <div class="mc-avatar-wrap">
          <div class="mc-avatar" style="${avaStyle}">${m.initials}</div>
          ${onlineDot}
        </div>
      </div>
      ${bottomLine}
    </div>`;
  }

  if (isWide) {
    return `
    <div class="mcard mcard-wide" data-team="${m.team}" data-id="${m.id}"
      onclick="openUserDetail(${m.id})"
      style="position:absolute; left:${pxX}px; top:${pxY}px; width:${pxW}px; height:${pxH}px;
        --tier-fg:${tier.fg}; --tier-bg:${tier.bg}; --tier-border:${tier.border}; cursor: pointer;">
      ${starBadge}
      <div class="mc-inner-wide">
        <!-- Top: Avatar + Name + Level -->
        <div class="mc-top-row-wide">
          <div class="mc-avatar-wrap">
            <div class="mc-avatar" style="${avaStyle}">${m.initials}</div>
            ${onlineDot}
          </div>
          <div class="mc-info-wide">
            <div class="mc-name" style="font-size: 13px;">${m.name}</div>
            ${m.role === "Team Leader" ? `<div class="mc-role-label">${m.role}</div>` : `<div style="margin-top: 2px;">${roleBadge}</div>`}
          </div>
          ${levelBadge}
        </div>
        
        <!-- Middle: Skills -->
        ${skillsHTML ? `<div class="mc-skills-wide">${skillsHTML}</div>` : ""}
        
        <!-- Divider line -->
        <div class="mc-divider"></div>
        
        <!-- Bottom: Stats + Joined -->
        <div class="mc-bottom-row-wide">
          <div class="mc-stats-wide">
            <div class="mc-stat-wide"><span class="mc-stat-val">${m.level}</span><span class="mc-stat-lbl">LEVEL</span></div>
            <div class="mc-stat-wide"><span class="mc-stat-val">${m.projects}</span><span class="mc-stat-lbl">DỰ ÁN</span></div>
            <div class="mc-stat-wide"><span class="mc-stat-val">${formatExp(m.exp)}</span><span class="mc-stat-lbl">EXP</span></div>
          </div>
          <div class="mc-joined-wide">
            <span class="mc-joined-code">BCA${m.id.toString().padStart(3, '0')}</span>
            <span class="mc-joined-date">${m.joined || '01/2025'}</span>
          </div>
        </div>
      </div>
      ${bottomLine}
    </div>`;
  }

  // Big cards (2x2)
  return `
    <div class="mcard mcard-big" data-team="${m.team}" data-id="${m.id}"
      style="position:absolute; left:${pxX}px; top:${pxY}px; width:${pxW}px; height:${pxH}px;
        --tier-fg:${tier.fg}; --tier-bg:${tier.bg}; --tier-border:${tier.border};">
      ${starBadge}
      <div class="mc-inner-big">
        <div class="mc-top-row-big">
          <div class="mc-left-big">
            <span class="mc-joined-code-big">BCA${m.id.toString().padStart(3, '0')} · ${m.joined || '01/2025'}</span>
            <div class="mc-name mc-name-lg" style="margin: 4px 0 6px 0;">${m.name}</div>
            ${roleBadge}
          </div>
          <div class="mc-right-big">
            <div class="mc-avatar-wrap">
              <div class="mc-avatar" style="${avaStyle}">${m.initials}</div>
              ${onlineDot}
            </div>
            ${levelBadge}
          </div>
        </div>
        
        <p class="mc-desc-big">${m.desc}</p>
        
        ${skillsHTML ? `<div class="mc-skills-big">${skillsHTML}</div>` : ""}
        
        <div class="mc-divider" style="margin: 10px 0;"></div>
        
        <div class="mc-bottom-row-big">
          <div class="mc-stats-big">
            <div class="mc-stat-big"><span class="mc-stat-val-big">${m.level}</span><span class="mc-stat-lbl-big">LEVEL</span></div>
            <div class="mc-stat-big"><span class="mc-stat-val-big">${m.projects}</span><span class="mc-stat-lbl-big">DỰ ÁN</span></div>
            <div class="mc-stat-big"><span class="mc-stat-val-big">${formatExp(m.exp)}</span><span class="mc-stat-lbl-big">EXP</span></div>
          </div>
          ${linkHTML}
        </div>
      </div>
      ${bottomLine}
    </div>`;
}

// ─── Open User Detail ─────────────────────────────────
window.openUserDetail = function(id) {
  const m = MEMBERS.find(x => x.id === id);
  if (m) {
    localStorage.setItem('selectedUser', JSON.stringify(m));
    window.location.href = 'user-detail.html';
  }
};

// ─── Render ───────────────────────────────────────────
function renderGrid() {
  const grid = document.getElementById("citymap-grid");
  if (!grid) return;

  // Lấy chiều rộng thực tế của phần tử cha (citymap-wrap)
  const containerWidth = grid.parentElement.clientWidth;

  // Giữ cố định 8 cột trên màn hình rộng để các thẻ gọn gàng
  if (containerWidth >= 1100) {
    COLS = 8;
  } else if (containerWidth >= 800) {
    COLS = 6;
  } else if (containerWidth >= 500) {
    COLS = 4;
  } else {
    COLS = 2;
  }

  // Tính toán kích thước UNIT động dựa trên chiều rộng container
  UNIT = Math.floor((containerWidth - (COLS - 1) * GAP) / COLS);

  // Giới hạn UNIT tối thiểu để tránh vỡ chữ trên màn hình quá nhỏ
  if (UNIT < 110) {
    COLS = Math.max(1, COLS - 1);
    UNIT = Math.floor((containerWidth - (COLS - 1) * GAP) / COLS);
  }

  // Apply filters to MEMBERS
  let items = [...MEMBERS];

  // 1. Search Filter (name, skills)
  if (filterState.search) {
    const q = filterState.search.toLowerCase();
    items = items.filter(m => 
      m.name.toLowerCase().includes(q) || 
      m.skills.some(s => s.toLowerCase().includes(q))
    );
  }

  // 2. Role Filter (Designer, Developer, Leader)
  if (filterState.role !== "all") {
    items = items.filter(m => matchRole(m.role, filterState.role));
  }

  // 3. Rank Filter (Gold: tier 1, Silver: tier 2)
  if (filterState.rank !== "all") {
    items = items.filter(m => m.tier.toString() === filterState.rank);
  }

  // 4. Sort
  items.sort((a, b) => {
    if (filterState.sortBy === "level") return b.level - a.level;
    if (filterState.sortBy === "projects") return b.projects - a.projects;
    if (filterState.sortBy === "exp") return b.exp - a.exp;
    return 0;
  });

  const packed = packItems(items, COLS);
  const totalRows = Math.max(...packed.map(m => m.row + m.h), 0);
  const totalH = totalRows > 0 ? (totalRows * UNIT + (totalRows - 1) * GAP) : 0;
  const totalW = COLS * UNIT + (COLS - 1) * GAP;

  grid.style.position = "relative";
  grid.style.width = totalW + "px";
  grid.style.height = totalH + "px";
  grid.style.margin = "0 auto"; // Căn giữa lưới
  grid.innerHTML = totalRows > 0 
    ? packed.map(buildCard).join("") 
    : `<div style="color:var(--text-3); font-size:14px; text-align:center; padding: 40px 0; width:100%;">Không tìm thấy thành viên phù hợp.</div>`;

  // Animate
  grid.querySelectorAll(".mcard").forEach((el, i) => {
    el.style.opacity = "0";
    el.style.transform = "scale(0.94)";
    setTimeout(() => {
      el.style.transition = "opacity 0.22s ease, transform 0.22s ease";
      el.style.opacity = "1";
      el.style.transform = "scale(1)";
    }, i * 30);
  });

  // Counter
  const statEl = document.getElementById("stat-members");
  if (statEl) {
    statEl.textContent = items.length;
  }
}

// ─── Setup Event Listeners for Filter Bar ──────────────
function initFilters() {
  // Search
  const searchInput = document.getElementById("cf-search-input");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      filterState.search = e.target.value.trim();
      renderGrid();
    });
  }

  // Role Buttons
  document.querySelectorAll(".cf-btn[data-role]").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".cf-btn[data-role]").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      filterState.role = btn.dataset.role;
      renderGrid();
    });
  });

  // Rank Buttons
  document.querySelectorAll(".cf-btn[data-rank]").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".cf-btn[data-rank]").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      filterState.rank = btn.dataset.rank;
      renderGrid();
    });
  });

  // Sort Select
  const sortSelect = document.getElementById("cf-sort-select");
  if (sortSelect) {
    sortSelect.addEventListener("change", (e) => {
      filterState.sortBy = e.target.value;
      renderGrid();
    });
  }

  // Reset Button
  const resetBtn = document.getElementById("cf-reset-btn");
  if (resetBtn) {
    resetBtn.addEventListener("click", () => {
      filterState.search = "";
      filterState.role = "all";
      filterState.rank = "all";
      filterState.sortBy = "level";

      // Reset DOM elements state
      if (searchInput) searchInput.value = "";
      
      document.querySelectorAll(".cf-btn[data-role]").forEach(b => {
        b.classList.toggle("active", b.dataset.role === "all");
      });

      document.querySelectorAll(".cf-btn[data-rank]").forEach(b => {
        b.classList.toggle("active", b.dataset.rank === "all");
      });

      if (sortSelect) sortSelect.value = "level";

      renderGrid();
    });
  }
}

// Resize handler tự động co giãn lưới
let resizeTimer;
window.addEventListener('resize', () => {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    renderGrid();
  }, 100);
});

// Run init
initFilters();
renderGrid();
