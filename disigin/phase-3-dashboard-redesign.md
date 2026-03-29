# Phase 3 — Dashboard Main Page Redesign Spec
## FairShare · Spec-Driven Development · Spec Kit Format

---

## 1. Overview

Redesign the main dashboard page and its four sub-components to match Midnight Finance theme. This is the "home screen" users see after login.

**Scope of files:**
- `app/dashboard/page.tsx`
- `app/dashboard/_components/overview-widget.tsx`
- `app/dashboard/_components/groups-bento-grid.tsx`
- `app/dashboard/_components/recent-activity-feed.tsx`
- `app/dashboard/_components/quick-actions.tsx`

---

## 2. Hard Constraints (DO NOT VIOLATE)

- **PRESERVE ALL LOGIC**: `useDashboard()` hook, all derived values (`totalNet`, `totalOwedToMe`, `totalIOwe`, `groups`, `recentExpenses`, `displayName`, `userId`), all Recharts data transforms — untouched.
- **PRESERVE ALL IMPORTS**: Recharts components, Link, useDashboard, all type imports.
- **ONLY change**: `className` strings and decorative wrapper elements.
- **DO NOT** add new npm packages.
- **DO NOT** modify hooks, types, or non-component files.

---

## 3. Design Tokens

Same as Phase 1 & 2, plus:

```
/* Cards */
--card-bg:         rgba(24, 24, 27, 0.5)
--card-border:     rgba(255, 255, 255, 0.07)
--card-hover-border: rgba(117, 255, 158, 0.15)

/* Financial states */
--positive:        #75ff9e   (owed to me)
--positive-dim:    rgba(117, 255, 158, 0.1)
--negative:        #c8475d   (I owe)
--negative-dim:    rgba(200, 71, 93, 0.1)
--neutral:         #a1a1aa

/* Gradient accents for group cards */
Group card gradients — keep existing GRADIENTS array but ensure they pop on dark bg
```

---

## 4. Dashboard Page Spec (`page.tsx`)

### 4.1 Loading Skeleton

```html
<div class="w-full min-w-0 animate-pulse py-8">
  <!-- All skeleton elements: bg-white/6 instead of bg-gray-200 -->
  <div class="mb-2 h-8 w-3/4 max-w-xs rounded-lg bg-white/6" />
  <div class="mb-8 h-4 w-1/2 max-w-[14rem] rounded bg-white/4" />
  <div class="mb-8 h-80 w-full rounded-3xl bg-white/4" />
  <!-- etc. -->
```

### 4.2 Welcome Section

```html
<div class="mb-6">
  <h2 class="text-2xl font-bold tracking-tight text-white sm:text-3xl">
    Welcome back, {d.displayName}
    <span class="inline-block origin-[70%_70%] animate-[wave_2s_ease-in-out_infinite]">👋</span>
  </h2>
  <p class="mt-1 text-sm text-[#71717a]">
    Here's your financial overview across all groups.
  </p>
</div>
```

### 4.3 Section Headers

**"Your Groups" header:**
```html
<h3 class="text-lg font-bold text-white">Your Groups</h3>
<span class="rounded-full bg-primary/10 px-2.5 py-0.5
             text-xs font-bold text-primary
             ring-1 ring-inset ring-primary/20">
  {d.groups.length}
</span>
<a class="text-xs font-semibold text-primary/70 hover:text-primary transition-colors">
  + New Group
</a>
```

---

## 5. Overview Widget Spec (`overview-widget.tsx`)

### 5.1 Outer Shell

```html
<div class="relative overflow-hidden rounded-3xl bg-[#0A0A0A] p-1
            border border-white/6">
  <!-- Decorative glows -->
  <div class="absolute -right-20 -top-20 h-72 w-72 rounded-full
              bg-primary/5 blur-3xl pointer-events-none" />
  <div class="absolute -bottom-16 -left-16 h-56 w-56 rounded-full
              bg-primary/3 blur-3xl pointer-events-none" />

  <div class="relative rounded-[22px] bg-white/[0.02] p-6 backdrop-blur-xl sm:p-8">
    <!-- content -->
  </div>
</div>
```

### 5.2 "Financial Overview" Label

```html
<div class="flex items-center gap-2 mb-1">
  <div class="flex h-8 w-8 items-center justify-center rounded-lg bg-white/6">
    <Activity class="h-4 w-4 text-primary/70" />
  </div>
  <span class="text-xs font-semibold uppercase tracking-widest text-primary/60">
    Financial Overview
  </span>
</div>
```

### 5.3 Total Balance Hero Number

```html
<p class="mb-1 text-sm text-[#52525b]">Total Balance</p>
<p class="font-mono text-5xl font-black tracking-tight sm:text-6xl
          {totalNet > 0 ? 'text-primary' : totalNet < 0 ? 'text-[#c8475d]' : 'text-white'}">
  {sign}{formatCurrency(totalNet)}
</p>
```

### 5.4 "You are owed" Card

```html
<div class="rounded-2xl border border-primary/15 bg-primary/6 p-4
            hover:border-primary/25 hover:bg-primary/8 transition-all">
  <div class="flex items-center gap-2 mb-2">
    <div class="flex h-7 w-7 items-center justify-center rounded-lg bg-primary/15">
      <TrendingUp class="h-3.5 w-3.5 text-primary" />
    </div>
    <span class="text-xs font-medium text-primary/60">You are owed</span>
  </div>
  <p class="font-mono text-2xl font-bold text-primary">+{formatCurrency(totalOwedToMe)}</p>
</div>
```

### 5.5 "You owe" Card

```html
<div class="rounded-2xl border border-[#c8475d]/15 bg-[#c8475d]/6 p-4
            hover:border-[#c8475d]/25 hover:bg-[#c8475d]/8 transition-all">
  <div class="flex items-center gap-2 mb-2">
    <div class="flex h-7 w-7 items-center justify-center rounded-lg bg-[#c8475d]/15">
      <TrendingDown class="h-3.5 w-3.5 text-[#c8475d]" />
    </div>
    <span class="text-xs font-medium text-[#c8475d]/60">You owe</span>
  </div>
  <p class="font-mono text-2xl font-bold text-[#c8475d]">−{formatCurrency(totalIOwe)}</p>
</div>
```

### 5.6 Recharts Color Updates

Keep all Recharts components identical. Only update these color strings:

```tsx
// Pie chart
PIE_COLORS = hasData ? ["#75ff9e", "#c8475d"] : ["#27272a"]

// Tooltip contentStyle
contentStyle={{
  backgroundColor: "#0A0A0A",
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: "12px",
  fontSize: "12px",
  color: "#e5e2e1",
}}

// CartesianGrid
stroke="#1a1a1a"

// XAxis tick
fill="#52525b"

// Bar Cell fill: keep entry.fill but it already uses green/red
```

### 5.7 "Balance by Group" Section Header

```html
<p class="mb-3 text-xs font-semibold uppercase tracking-widest text-[#52525b]">
  Balance by Group
</p>
```

Wrap in:
```html
<div class="mt-6 rounded-2xl border border-white/5 bg-white/[0.02] p-4">
```

---

## 6. Groups Bento Grid Spec (`groups-bento-grid.tsx`)

### 6.1 Empty State

```html
<div class="rounded-3xl border border-dashed border-white/10 bg-white/[0.02]
            py-20 text-center">
  <FolderOpen class="mx-auto mb-4 h-14 w-14 text-primary/20" />
  <h4 class="text-lg font-bold text-white">No groups yet</h4>
  <p class="mx-auto mt-1 max-w-xs text-sm text-[#71717a]">...</p>
  <a class="mt-6 inline-flex items-center gap-2 rounded-2xl
            bg-primary text-[#003918] px-6 py-3 text-sm font-semibold
            shadow-[0_4px_20px_rgba(117,255,158,0.3)]
            hover:brightness-110 hover:-translate-y-0.5 transition-all">
    Create your first group
  </a>
</div>
```

### 6.2 Group Card

```html
<a class="group relative flex flex-col overflow-hidden rounded-3xl
          border border-white/6 bg-[#111111]
          hover:border-primary/20 hover:bg-[#141414]
          shadow-none hover:shadow-[0_8px_32px_rgba(0,0,0,0.4)]
          transition-all duration-300 hover:-translate-y-1">
```

**Gradient header**: keep existing GRADIENTS array — they look great on dark.

**Balance badge updates:**

```html
<!-- Positive (gets back) -->
<div class="inline-flex items-center gap-1.5 rounded-full
            bg-primary/10 px-3 py-1.5 text-xs font-bold text-primary
            ring-1 ring-inset ring-primary/20">
  <TrendingUp class="h-3 w-3" />
  Gets back {formatCurrency(group.net_balance, group.currency)}
</div>

<!-- Negative (owes) -->
<div class="inline-flex items-center gap-1.5 rounded-full
            bg-[#c8475d]/10 px-3 py-1.5 text-xs font-bold text-[#c8475d]
            ring-1 ring-inset ring-[#c8475d]/20">
  <TrendingDown class="h-3 w-3" />
  Owes {formatCurrency(group.net_balance, group.currency)}
</div>

<!-- Settled -->
<div class="inline-flex items-center gap-1.5 rounded-full
            bg-white/5 px-3 py-1.5 text-xs font-bold text-[#71717a]
            ring-1 ring-inset ring-white/10">
  <Wallet class="h-3 w-3" />
  Settled up
</div>
```

**Group name:**
```html
<h3 class="... text-white transition-colors group-hover:text-primary">
```

**Arrow icon:**
```html
<ArrowUpRight class="h-4 w-4 text-white/20 group-hover:text-primary transition-all ..." />
```

**Bottom accent:**
```html
<span class="rounded-lg bg-white/6 px-2 py-0.5 text-[10px] font-semibold text-[#71717a]">
  {group.currency}
</span>
<span class="text-[10px] text-[#52525b]">
  {date}
</span>
```

---

## 7. Recent Activity Feed Spec (`recent-activity-feed.tsx`)

### 7.1 Empty State Card

```html
<div class="rounded-3xl border border-white/6 bg-[#111111] p-8 text-center">
  <Clock class="mx-auto mb-3 h-10 w-10 text-white/10" />
  <p class="text-sm font-medium text-[#71717a]">No recent activity yet</p>
  <p class="mt-1 text-xs text-[#52525b]">Expenses will appear here as they are added.</p>
</div>
```

### 7.2 Card Wrapper

```html
<div class="rounded-3xl border border-white/6 bg-[#111111] p-6">
```

### 7.3 Section Header

```html
<div class="mb-5 flex items-center gap-2">
  <div class="flex h-8 w-8 items-center justify-center rounded-xl bg-primary/10">
    <Zap class="h-4 w-4 text-primary" />
  </div>
  <h3 class="text-sm font-bold text-white">Recent Activity</h3>
</div>
```

### 7.4 Timeline Line

```html
<div class="absolute bottom-0 left-[15px] top-0 w-px
            bg-gradient-to-b from-primary/20 via-white/5 to-transparent" />
```

### 7.5 Activity Item

```html
<a class="group relative flex items-start gap-4 rounded-2xl p-3
          transition-all hover:bg-white/4">
  <!-- Timeline dot: keep DOT_COLORS but ensure they're vivid enough on dark -->
  <!-- Amount: text-white font-bold -->
  <!-- Name: text-white group-hover:text-primary -->
  <!-- Meta: text-[#52525b] -->
  <!-- Time: text-[#52525b] -->
```

Keep `DOT_COLORS` array as-is.

---

## 8. Quick Actions Spec (`quick-actions.tsx`)

### 8.1 "Create Group" Primary Button

```html
<a class="group inline-flex items-center gap-2.5 rounded-2xl
          bg-primary px-5 py-3 text-sm font-semibold text-[#003918]
          shadow-[0_4px_20px_rgba(117,255,158,0.3)]
          hover:brightness-110 hover:-translate-y-0.5
          hover:shadow-[0_8px_28px_rgba(117,255,158,0.4)]
          transition-all duration-300">
  <div class="flex h-6 w-6 items-center justify-center rounded-lg bg-[#003918]/20">
    <Plus class="h-3.5 w-3.5" />
  </div>
  Create Group
  <Sparkles class="h-3.5 w-3.5 text-[#003918]/70 group-hover:rotate-12 transition-transform" />
</a>
```

### 8.2 Secondary Buttons (Add Friend, Friends)

```html
<a class="group inline-flex items-center gap-2.5 rounded-2xl
          border border-white/8 bg-white/4 px-5 py-3
          text-sm font-semibold text-[#a1a1aa]
          hover:border-primary/20 hover:bg-primary/5 hover:text-primary/80
          hover:-translate-y-0.5 transition-all duration-300">
  <div class="flex h-6 w-6 items-center justify-center rounded-lg bg-white/6
              group-hover:bg-primary/10 transition-colors">
    <UserPlus class="h-3.5 w-3.5 text-[#71717a] group-hover:text-primary transition-colors" />
  </div>
  Add Friend
</a>
```

---

## 9. Acceptance Criteria

- [ ] Dashboard renders all sections with dark theme
- [ ] Balance numbers use correct green/red colors
- [ ] Recharts charts render correctly with dark tooltips and colors
- [ ] Group cards show correct balance badges in dark theme
- [ ] "Create Group" button has green glow
- [ ] Activity feed timeline has green gradient line
- [ ] Empty states display correctly on dark background
- [ ] `useDashboard()` hook completely untouched
- [ ] All Recharts data/logic untouched
- [ ] No TypeScript errors

---

## 10. Tasks for Coding Agent

```
TASK 3.1 — Update app/dashboard/page.tsx
  - Change skeleton bg colors: bg-gray-200 → bg-white/6
  - Update welcome section text colors: text-gray-900 → text-white, text-gray-500 → text-[#71717a]
  - Update section headers per §4.3
  - Keep: useDashboard() hook, all derived values, all Link components

TASK 3.2 — Restyle overview-widget.tsx
  - Apply §5 specs: outer shell, labels, balance hero, owed/owes cards, chart colors
  - Keep: ALL Recharts components, data transforms, formatCurrency calls

TASK 3.3 — Restyle groups-bento-grid.tsx
  - Apply §6 specs: empty state, card wrapper, balance badges, text colors
  - Keep: GRADIENTS array, getCardSpan(), all Link hrefs, group data mapping

TASK 3.4 — Restyle recent-activity-feed.tsx
  - Apply §7 specs: card wrapper, header, timeline, activity items
  - Keep: DOT_COLORS, getRelativeTime(), all data mapping

TASK 3.5 — Restyle quick-actions.tsx
  - Apply §8 specs: primary green button, secondary dark buttons
  - Keep: all Link hrefs
```

---

## 11. Reference Visual

The right panel of the reference design shows:
- Dark `#0D0D0D` / `#131313` surfaces
- Green `#75ff9e` used ONLY for: primary actions, positive balances, active states, glows
- Red/coral `#c8475d` for negative balances / danger
- All text on dark: white for headings, `#71717a`/`#52525b` for secondary text
- Cards: `rgba(24,24,27,0.5)` with `border: rgba(255,255,255,0.07)`
- No harsh white boxes anywhere — everything is dark-native
