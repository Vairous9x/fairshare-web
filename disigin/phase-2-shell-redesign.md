# Phase 2 — Dashboard Shell Redesign Spec
## FairShare · Spec-Driven Development · Spec Kit Format

---

## 1. Overview

Redesign the dashboard shell (Sidebar, Header, Mobile Nav) to use the Midnight Finance theme. The shell wraps every dashboard page, so this phase gives the entire app a consistent dark identity.

**Scope of files:**
- `components/layout/dashboard-shell.tsx`
- `components/layout/sidebar.tsx`
- `components/layout/header.tsx`
- `components/layout/mobile-nav.tsx`

---

## 2. Hard Constraints (DO NOT VIOLATE)

- **PRESERVE ALL LOGIC**: `initialize()`, `handleSignOut()`, `supabase.auth.onAuthStateChange()`, `setProfile()`, `setLoading()`, `mobileMenuOpen` state — all untouched.
- **PRESERVE ALL IMPORTS**: `Sidebar`, `Header`, `MobileNav`, `Spinner`, router usage, Supabase client calls.
- **ONLY change**: `className` strings and purely decorative wrapper elements.
- **DO NOT** add new npm packages.
- **DO NOT** modify any hook, context, or non-layout file.

---

## 3. Design Tokens (same system as Phase 1)

```
--bg-shell:         #0D0D0D
--bg-sidebar:       #0A0A0A   (slightly deeper than shell)
--bg-sidebar-card:  rgba(255,255,255,0.04)
--border-sidebar:   rgba(255,255,255,0.06)
--bg-header:        rgba(13,13,13,0.85)   + backdrop-blur-xl
--primary:          #75ff9e
--primary-dim:      rgba(117,255,158,0.12)
--text-nav:         #a1a1aa   (inactive)
--text-nav-active:  #ffffff
--text-muted:       #71717a
--nav-active-bg:    rgba(117,255,158,0.08)
--nav-active-border: #75ff9e
```

---

## 4. Shell Layout Spec (`dashboard-shell.tsx`)

```
Root: bg-[#0D0D0D] min-h-screen w-full overflow-x-hidden

Desktop sidebar: fixed left, 260px wide
Content column:  md:pl-[260px] — same as current

Mobile overlay:  bg-black/60 backdrop-blur-sm
Mobile drawer:   bg-[#0A0A0A] border-r border-white/6
```

No structural changes — only background/color classNames.

**ShellSkeleton** update:
```html
<div class="flex min-h-screen items-center justify-center bg-[#0D0D0D]">
  <!-- Same spinner, updated bg only -->
```

---

## 5. Sidebar Spec (`sidebar.tsx`)

### 5.1 Root Element

```html
<!-- Desktop -->
<aside class="fixed inset-y-0 left-0 z-40 hidden w-[260px] flex-col
              border-r border-white/6 bg-[#0A0A0A] md:flex">

<!-- Mobile (isMobile=true) -->
<aside class="flex h-full w-full flex-col bg-[#0A0A0A]">
```

### 5.2 Logo Area

```html
<div class="flex h-16 shrink-0 items-center gap-2.5
            border-b border-white/6 px-6">
  <!-- Logo square: bg-primary rounded-xl -->
  <div class="flex h-9 w-9 items-center justify-center
              rounded-xl bg-primary shadow-[0_0_16px_rgba(117,255,158,0.25)]">
    <span class="text-sm font-black text-[#003918]">F</span>
  </div>
  <!-- Wordmark -->
  <span class="text-lg font-semibold tracking-tight text-white">
    Fair<span class="text-primary">Share</span>
  </span>
</div>
```

### 5.3 Nav Item — Inactive

```html
<a class="group flex items-center gap-3 rounded-xl px-3 py-2.5
          text-sm font-medium text-[#71717a]
          hover:bg-white/5 hover:text-white transition-all duration-200">
  <Icon class="h-[18px] w-[18px] text-[#52525b]
               group-hover:text-[#a1a1aa] transition-colors" />
  <span>{label}</span>
</a>
```

### 5.4 Nav Item — Active

```html
<a class="group relative flex items-center gap-3 rounded-xl px-3 py-2.5
          text-sm font-medium text-white bg-primary/8
          border border-primary/20 transition-all duration-200">
  <!-- Left indicator bar -->
  <div class="absolute -left-[1px] top-1/2 h-5 w-0.5 -translate-y-1/2
              rounded-r-full bg-primary
              shadow-[0_0_8px_rgba(117,255,158,0.6)]" />
  <Icon class="h-[18px] w-[18px] text-primary" />
  <span>{label}</span>
  <ChevronRight class="ml-auto h-4 w-4 text-primary/40" />
</a>
```

### 5.5 "Create Group" CTA

```html
<a class="group flex items-center gap-3 rounded-xl
          border border-dashed border-white/10 px-3 py-2.5
          text-sm font-medium text-[#71717a]
          hover:border-primary/30 hover:bg-primary/5 hover:text-primary/80
          transition-all duration-200">
  <PlusCircle class="h-[18px] w-[18px] text-[#52525b]
                     group-hover:text-primary transition-colors" />
  <span>Create Group</span>
  <Sparkles class="ml-auto h-3.5 w-3.5 text-[#52525b]
                   group-hover:text-primary group-hover:rotate-12 transition-all" />
</a>
```

### 5.6 Bottom User Card

```html
<!-- User profile link -->
<a class="group mb-2 flex items-center gap-3 rounded-xl px-3 py-2.5
          hover:bg-white/5 transition-all duration-200">
  <div class="relative shrink-0">
    <Avatar ... size="sm" />
    <!-- Online dot -->
    <div class="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full
                border-2 border-[#0A0A0A] bg-primary" />
  </div>
  <div class="min-w-0 flex-1">
    <p class="truncate text-sm font-semibold text-white">{displayName}</p>
    <p class="truncate text-[11px] text-[#52525b]">View profile</p>
  </div>
  <ChevronRight class="h-4 w-4 text-[#52525b]
                       group-hover:translate-x-0.5 transition-transform" />
</a>

<!-- Sign out -->
<button class="flex w-full items-center gap-3 rounded-xl px-3 py-2.5
               text-sm font-medium text-[#71717a]
               hover:bg-[#c8475d]/10 hover:text-[#ff8fa3] transition-all">
  <LogOut class="h-[18px] w-[18px]" />
  <span>Sign out</span>
</button>
```

---

## 6. Header Spec (`header.tsx`)

### 6.1 Root Element

```html
<header class="sticky top-0 z-30 flex h-16 items-center
               border-b border-white/6
               bg-[#0D0D0D]/85 backdrop-blur-xl
               px-4 sm:px-6">
```

### 6.2 Mobile Menu Button

```html
<button class="mr-3 flex h-9 w-9 items-center justify-center rounded-xl
               text-[#71717a] hover:bg-white/6 hover:text-white
               transition-colors md:hidden">
  <Menu class="h-5 w-5" />
</button>
```

### 6.3 Brand / Title

```html
<div class="min-w-0 flex-1">
  <a href="/dashboard" class="inline-flex items-center gap-2">
    <!-- Mobile only logo square -->
    <div class="flex h-8 w-8 items-center justify-center rounded-xl
                bg-primary shadow-[0_0_12px_rgba(117,255,158,0.2)] md:hidden">
      <Wallet class="h-4 w-4 text-[#003918]" />
    </div>
    <h1 class="text-lg font-semibold tracking-tight sm:text-xl">
      <span class="text-primary">Fair</span>
      <span class="text-white">Share</span>
    </h1>
  </a>
  <p class="hidden text-xs text-[#52525b] sm:block">{subtitle}</p>
</div>
```

### 6.4 Right Actions

**Icon buttons (Search, QR):**
```html
<button class="flex h-9 w-9 items-center justify-center rounded-xl
               text-[#71717a] hover:bg-white/6 hover:text-white transition-colors">
```

**Notification bell** — keep `NotificationBell` component as-is, just ensure it uses dark-compatible styles (it already uses `bg-gray-950` internally).

**Divider:**
```html
<div class="mx-1 hidden h-5 w-px bg-white/10 sm:block" />
```

**Avatar link:**
```html
<a class="group flex items-center gap-2.5 rounded-xl py-1 pl-1 pr-2
          hover:bg-white/5 transition-all sm:pr-3">
  <div class="relative">
    <Avatar ... size="sm" />
    <!-- Online dot -->
    <div class="absolute -bottom-0.5 -right-0.5 h-2.5 w-2.5 rounded-full
                border-[1.5px] border-[#0D0D0D] bg-primary" />
  </div>
  <p class="hidden truncate text-sm font-medium text-white sm:block">
    {displayName}
  </p>
</a>
```

---

## 7. Mobile Nav Spec (`mobile-nav.tsx`)

### 7.1 Root Container

```html
<nav class="fixed bottom-5 left-4 right-4 z-50 md:hidden">
  <div class="mx-auto max-w-sm rounded-2xl
              border border-white/8
              bg-[#0D0D0D]/90 backdrop-blur-xl
              px-2 py-2
              shadow-[0_8px_32px_rgba(0,0,0,0.6)]">
```

### 7.2 Nav Item — Inactive

```html
<a class="group flex flex-col items-center gap-0.5 px-3 py-1">
  <div class="flex h-8 w-8 items-center justify-center rounded-xl
              text-[#52525b] group-hover:text-[#a1a1aa] transition-colors">
    <Icon class="h-[18px] w-[18px]" />
  </div>
  <span class="text-[10px] font-medium text-[#52525b]">{label}</span>
</a>
```

### 7.3 Nav Item — Active

```html
<a class="group flex flex-col items-center gap-0.5 px-3 py-1 relative">
  <div class="flex h-8 w-8 items-center justify-center rounded-xl
              bg-primary/10 text-primary transition-colors">
    <Icon class="h-[18px] w-[18px]" />
  </div>
  <span class="text-[10px] font-semibold text-primary">{label}</span>
  <!-- Active dot -->
  <div class="absolute -bottom-0.5 h-1 w-1 rounded-full bg-primary
              shadow-[0_0_4px_rgba(117,255,158,0.8)]" />
</a>
```

### 7.4 "New" Special Button (Center)

```html
<a class="group flex flex-col items-center">
  <div class="flex h-12 w-12 items-center justify-center rounded-2xl
              bg-primary text-[#003918]
              shadow-[0_4px_20px_rgba(117,255,158,0.35)]
              hover:shadow-[0_6px_28px_rgba(117,255,158,0.5)]
              transition-all active:scale-95">
    <Plus class="h-5 w-5" />
  </div>
</a>
```

---

## 8. Acceptance Criteria

- [ ] All dashboard pages render with dark `#0D0D0D` background
- [ ] Sidebar shows primary green active indicator and glow
- [ ] Header is dark with blur, green brand accent
- [ ] Mobile nav has dark floating pill with green active states
- [ ] Online dot on avatar is green
- [ ] Sign out hover shows red tone (unchanged UX, just red/pink)
- [ ] All existing routing, auth state checks, profile fetching — untouched
- [ ] No TypeScript errors

---

## 9. Tasks for Coding Agent

```
TASK 2.1 — Update components/layout/dashboard-shell.tsx
  - Change bg-slate-50 → bg-[#0D0D0D] on root
  - Update ShellSkeleton background
  - Update mobile overlay to bg-black/60 backdrop-blur-sm
  - Update mobile drawer to bg-[#0A0A0A] border-white/6
  - Keep: ALL auth logic, initialize(), onAuthStateChange(), handleSignOut()

TASK 2.2 — Restyle components/layout/sidebar.tsx
  - Apply §5 specs to all className strings
  - Keep: NAV_ITEMS array, isActive(), isMobile prop, onSignOut prop, all Link hrefs

TASK 2.3 — Restyle components/layout/header.tsx
  - Apply §6 specs to all className strings
  - Keep: getPageSubtitle(), QR scanner logic, JoinGroupConfirmModal logic,
    NotificationBell component usage, all state

TASK 2.4 — Restyle components/layout/mobile-nav.tsx
  - Apply §7 specs to all className strings
  - Keep: MOBILE_NAV_ITEMS, isActive() logic, all Link hrefs
```
