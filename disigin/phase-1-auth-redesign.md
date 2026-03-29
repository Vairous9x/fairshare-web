# Phase 1 — Auth Pages Redesign Spec
## FairShare · Spec-Driven Development · Spec Kit Format

---

## 1. Overview

Redesign the Login, Register, and Forgot Password pages to match the new **"Midnight Finance"** visual identity: dark backgrounds, electric green primary, glassmorphism cards, split-panel layout on desktop.

**Scope of files:**
- `app/(auth)/layout.tsx`
- `app/(auth)/login/page.tsx`
- `app/(auth)/register/page.tsx`
- `app/(auth)/forgot-password/page.tsx`

---

## 2. Hard Constraints (DO NOT VIOLATE)

- **PRESERVE ALL LOGIC**: Every `useAuth()` hook call, `signIn()`, `signUp()`, `checkUsername()`, `selectSuggestion()`, `resetUsernameCheck()` — untouched.
- **PRESERVE ALL STATE**: All `useState`, `useEffect`, form handlers, validation calls (`validate()`, `forgotPasswordSchema`), error handling, and OAuth Google flow stay identical.
- **ONLY change**: `className` strings, layout wrapper elements, and purely cosmetic SVG/decorative elements.
- **DO NOT** add new npm packages. Use only existing dependencies.
- **DO NOT** modify any file outside `app/(auth)/`.

---

## 3. Design Tokens

```css
/* Colors */
--bg-base:          #0D0D0D;
--bg-surface:       #131313;
--bg-card:          rgba(24, 24, 27, 0.6);
--border-default:   rgba(255, 255, 255, 0.08);
--border-focus:     rgba(117, 255, 158, 0.4);
--primary:          #75ff9e;
--primary-dim:      rgba(117, 255, 158, 0.15);
--text-primary:     #e5e2e1;
--text-muted:       #71717a;
--text-placeholder: #52525b;
--error:            #c8475d;
--error-surface:    rgba(200, 71, 93, 0.1);

/* Typography — use existing next/font or add Google Font via <link> in layout */
--font-display:     'Inter', sans-serif;  /* weight 300–700 */

/* Radius */
--radius-input:     1rem;       /* rounded-2xl equivalent */
--radius-card:      1.5rem;     /* rounded-3xl equivalent */
--radius-button:    1rem;

/* Spacing rhythm: 4px base grid */
```

---

## 4. Layout Spec

### 4.1 Auth Layout (`app/(auth)/layout.tsx`)

Replace current gradient with:

```
┌─────────────────────────────────────────────────────┐
│  bg-[#0D0D0D]  w-full min-h-screen                  │
│                                                      │
│  Desktop (md+): flex-row, h-[100dvh]                │
│  ┌──────────────────┬──────────────────────────────┐ │
│  │  LEFT PANEL      │  RIGHT PANEL                 │ │
│  │  flex-1          │  hidden md:flex flex-1       │ │
│  │  form lives here │  decorative preview          │ │
│  └──────────────────┴──────────────────────────────┘ │
│                                                      │
│  Mobile: single column, form only                    │
└─────────────────────────────────────────────────────┘
```

**Left Panel**: `bg-[#0D0D0D]` · `flex items-center justify-center` · `p-8`
**Right Panel**: `bg-[#0F160F]` · decorative visual (see §4.4)

### 4.2 Login Page

```
LEFT PANEL CONTENT (max-w-md, flex flex-col gap-6):

① Brand mark
   └─ 8×8 rounded-lg bg-primary flex items-center justify-center
      + "account_balance_wallet" icon (white)
   └─ "FairShare" text-xl font-light text-white

② Headline
   └─ text-4xl md:text-5xl font-semibold tracking-tighter
   └─ "Welcome" text-white + " Back" text-primary

③ Subtext — text-sm text-[#71717a]

④ Google OAuth button
   └─ w-full border border-white/10 bg-white/5 rounded-2xl p-4
   └─ backdrop-blur-sm hover:bg-white/8 transition

⑤ Divider — "Or continue with email" with lines

⑥ Email input field (see §4.3)

⑦ Password input field with toggle (see §4.3)

⑧ Row: "Remember me" checkbox + "Forgot password?" link

⑨ Submit button (see §4.3)

⑩ Footer link: "Don't have an account? Create one"
```

### 4.3 Input & Button Specs

**Input Field Wrapper:**
```html
<div class="rounded-2xl border border-white/8 bg-white/5 backdrop-blur-sm
            transition-all focus-within:border-primary/40 focus-within:bg-primary/5">
  <input class="w-full bg-transparent text-sm p-4 rounded-2xl
                focus:outline-none placeholder:text-zinc-600 text-white" />
</div>
```

**Label:**
```html
<label class="text-xs font-medium uppercase tracking-widest text-[#71717a] mb-1.5 block px-1">
```

**Primary Button:**
```html
<button class="w-full bg-primary text-[#003918] font-semibold text-sm
               rounded-2xl p-4 hover:brightness-110 transition-all
               active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed">
```

**Error Banner:**
```html
<div class="flex items-start gap-3 rounded-xl border border-[#c8475d]/20
            bg-[#c8475d]/10 px-4 py-3 text-sm text-[#ff8fa3]">
```

### 4.4 Right Panel — Decorative Preview

A static/semi-static visual mockup (not fetching real data) to fill the right panel:

```
┌───────────────────────────────────┐
│  bg-[#0F160F]  p-12               │
│                                   │
│  "Financial Harmony Starts Here"  │
│   text-4xl font-semibold          │
│   text-white + span.text-primary  │
│                                   │
│  3 floating stat cards:           │
│  ┌─────────┐ ┌─────────┐          │
│  │ Total   │ │ You're  │          │
│  │ Balance │ │  owed   │          │
│  │ +$2,340 │ │ +$890   │          │
│  └─────────┘ └─────────┘          │
│                                   │
│  Mini groups list (3 items)       │
│  animate-fade-slide-in staggered  │
└───────────────────────────────────┘
```

Stat card style:
```html
<div class="rounded-2xl border border-white/8 bg-white/5 backdrop-blur-sm p-5">
```

### 4.5 Register Page Specifics

Same split layout. Left panel content order:
1. Brand
2. Headline: "Create" + " Account" (primary)
3. Username field — preserve ALL real-time availability check UI (spinner, checkmark, suggestions pills)
4. Full Name, Email, Password (with strength meter), Confirm Password — preserve all existing validation indicators
5. Submit button
6. "Already have an account? Sign in" link

The username suggestions pills color:
```html
<button class="rounded-xl border border-primary/20 bg-primary/10
               px-3 py-1.5 text-xs font-medium text-primary
               hover:bg-primary/20 transition-all active:scale-95">
```

### 4.6 Forgot Password Specifics

Simpler single-panel centered card (no right panel needed):
```html
<div class="w-full max-w-md mx-auto">
  <div class="rounded-3xl border border-white/8 bg-white/5 backdrop-blur-sm p-8">
```

---

## 5. Animation Spec

Use these keyframes (add to `app/globals.css` if not present):

```css
@keyframes fadeSlideIn {
  from { opacity: 0; transform: translateY(20px); }
  to   { opacity: 1; transform: translateY(0); }
}

.animate-element { opacity: 0; animation: fadeSlideIn 0.8s cubic-bezier(0.16,1,0.3,1) forwards; }
.animate-delay-100 { animation-delay: 100ms; }
.animate-delay-200 { animation-delay: 200ms; }
.animate-delay-300 { animation-delay: 300ms; }
.animate-delay-400 { animation-delay: 400ms; }
.animate-delay-500 { animation-delay: 500ms; }
```

Apply `animate-element animate-delay-{N}` to each form section sequentially (brand → headline → subtext → fields → button).

---

## 6. Acceptance Criteria

- [ ] Login works end-to-end (email+password and Google OAuth)
- [ ] Register works including real-time username availability check
- [ ] Forgot password email + recovery flow works
- [ ] All error states display correctly (red border + error banner)
- [ ] Password strength meter visible on register
- [ ] Responsive: mobile shows single column, desktop shows split panel
- [ ] No TypeScript errors introduced
- [ ] No existing logic/hooks modified

---

## 7. Tasks for Coding Agent

```
TASK 1.1 — Update app/(auth)/layout.tsx
  - Replace background with bg-[#0D0D0D]
  - Add split-panel flex-row layout for md+ screens
  - Left panel: form content area
  - Right panel: decorative preview component (inline JSX, no new file)
  - Keep existing: ReactNode children rendering

TASK 1.2 — Restyle app/(auth)/login/page.tsx
  - Apply design tokens to all classNames
  - Keep: useAuth(), signIn(), handleSubmit(), handleGoogleLogin(), all state
  - Change: every className string to match §4.2 and §4.3

TASK 1.3 — Restyle app/(auth)/register/page.tsx
  - Apply design tokens to all classNames
  - Keep: ALL username check logic, suggestion pills, password strength meter, form submission
  - Update suggestion pill colors to primary green theme

TASK 1.4 — Restyle app/(auth)/forgot-password/page.tsx
  - Single centered card layout (no split panel)
  - Apply design tokens
  - Keep: all state, email send logic, recovery mode detection, password reset flow
```
