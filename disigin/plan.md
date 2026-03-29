<!DOCTYPE html><html class="dark" lang="en"><head>
<meta charset="utf-8">
<meta content="width=device-width, initial-scale=1.0" name="viewport">
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&amp;display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet">
<script id="tailwind-config">tailwind.config = {darkMode: "class", theme: {extend: {colors: {primary: "#75ff9e", "on-primary": "#003918", background: "#131313", surface: "#131313", "on-surface": "#e5e2e1", "on-surface-variant": "#bacbb9", outline: "#859585", border: "rgba(255, 255, 255, 0.1)", card: "rgba(24, 24, 27, 0.4)", muted: {DEFAULT: "#71717a", foreground: "#a1a1aa"}, "error-dim": "#c8475d", secondary: "#88d899", "on-secondary-container": "#87d899", "primary-dim": "#eeeae9", "on-error-container": "#ffdad6", "on-secondary-fixed": "#00210b", "surface-tint": "#00e475", "tertiary-dim": "#ecebea", "surface-container-low": "#1c1b1b", tertiary: "#ffdec4", "primary-fixed-dim": "#00e475", error: "#ffb4ab", "inverse-on-surface": "#313030", "on-primary-fixed-variant": "#005226", "surface-container-high": "#2a2a2a", "secondary-container": "#02602d", "surface-container": "#201f1f", "on-secondary-fixed-variant": "#005226", "on-primary-fixed": "#00210b", "on-tertiary-fixed-variant": "#6a3c03", "secondary-fixed": "#a3f5b3", "on-primary-container": "#00612e", "surface-dim": "#131313", "surface-container-highest": "#353534", "inverse-primary": "#006d35", "tertiary-fixed": "#ffdcbf", "surface-variant": "#353534", "secondary-dim": "#b8b9b9", "outline-variant": "#3b4a3d", "tertiary-container": "#ffba79", "tertiary-fixed-dim": "#fdb878", "primary-fixed": "#62ff96", "on-secondary": "#003918", "inverse-surface": "#e5e2e1", "secondary-fixed-dim": "#88d899", "on-background": "#e5e2e1", "primary-container": "#00e676", "on-tertiary-fixed": "#2d1600", "error-container": "#93000a", "surface-bright": "#3a3939", "surface-container-lowest": "#0e0e0e", "on-error": "#690005", "on-tertiary": "#4b2800", "on-tertiary-container": "#794810"}, fontFamily: {headline: ["Inter"], body: ["Inter"], label: ["Inter"], geist: ["Inter"], display: "Inter"}, borderRadius: {DEFAULT: "0.25rem", lg: "0.5rem", xl: "0.75rem", full: "9999px"}, animation: {"fade-slide-in": "fadeSlideIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards", "slide-right": "slideRightIn 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards", testimonial: "testimonialIn 1s cubic-bezier(0.16, 1, 0.3, 1) forwards"}, keyframes: {fadeSlideIn: {"0%": {opacity: "0", transform: "translateY(20px)"}, "100%": {opacity: "1", transform: "translateY(0)"}}, slideRightIn: {"0%": {opacity: "0", transform: "translateX(40px)"}, "100%": {opacity: "1", transform: "translateX(0)"}}, testimonialIn: {"0%": {opacity: "0", transform: "scale(0.95) translateY(10px)"}, "100%": {opacity: "1", transform: "scale(1) translateY(0)"}}}}}};</script>
<style>
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
        .animate-element {
            opacity: 0;
            animation: fadeSlideIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .animate-delay-100 { animation-delay: 100ms; }
        .animate-delay-200 { animation-delay: 200ms; }
        .animate-delay-300 { animation-delay: 300ms; }
        .animate-delay-400 { animation-delay: 400ms; }
        .animate-delay-500 { animation-delay: 500ms; }
        .animate-delay-600 { animation-delay: 600ms; }
        .animate-delay-700 { animation-delay: 700ms; }
        .animate-delay-800 { animation-delay: 800ms; }
        .animate-delay-900 { animation-delay: 900ms; }
        .animate-delay-1000 { animation-delay: 1000ms; }
        .animate-delay-1200 { animation-delay: 1200ms; }
        .animate-delay-1400 { animation-delay: 1400ms; }

        .animate-slide-right {
            opacity: 0;
            animation: slideRightIn 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .animate-testimonial {
            opacity: 0;
            animation: testimonialIn 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .custom-checkbox {
            appearance: none;
            width: 1.25rem;
            height: 1.25rem;
            border: 1px solid rgba(255, 255, 255, 0.2);
            border-radius: 6px;
            background: rgba(255, 255, 255, 0.05);
            cursor: pointer;
            position: relative;
            transition: all 0.2s;
        }
        .custom-checkbox:checked {
            background: #6366F1;
            border-color: #6366F1;
        }
        .custom-checkbox:checked::after {
            content: 'check';
            font-family: 'Material Symbols Outlined';
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            color: white;
            font-size: 14px;
        }

        @keyframes fadeSlideIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideRightIn {
            from { opacity: 0; transform: translateX(40px); }
            to { opacity: 1; transform: translateX(0); }
        }
        @keyframes testimonialIn {
            from { opacity: 0; transform: scale(0.95) translateY(10px); }
            to { opacity: 1; transform: scale(1) translateY(0); }
        }
    </style>
</head>
<body class="bg-[#0D0D0D] text-on-surface font-geist selection:bg-primary/30 min-h-screen overflow-x-hidden">
<div class="h-[1024px] flex flex-col md:flex-row w-[100dvw]">
<!-- Left column: sign-in form -->
<section class="flex-1 flex items-center justify-center p-8 bg-[#0D0D0D]">
<div class="w-full max-w-md">
<div class="flex flex-col gap-6">
<!-- Brand -->
<div class="animate-element animate-delay-100 flex items-center gap-2 mb-2">
<div class="h-8 w-8 bg-primary rounded-lg flex items-center justify-center">
<span class="material-symbols-outlined text-white text-xl" style="">account_balance_wallet</span>
</div>
<span class="text-xl font-light tracking-tight text-white" style="">FairShare</span>
</div>
<h1 class="animate-element animate-delay-100 text-4xl md:text-5xl font-semibold leading-tight tracking-tighter" style="">
                        Financial <span class="text-primary" style="">Harmony</span> Starts Here
                    </h1>
<p class="animate-element animate-delay-200 text-muted-foreground" style="">Access your account and continue your journey with us</p>
<form action="/login" class="space-y-5" method="POST">
<div class="animate-element animate-delay-300">
<label class="text-xs font-medium uppercase tracking-widest text-muted-foreground mb-1.5 block px-1" style="">Email Address</label>
<div class="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm transition-all focus-within:border-primary/50 focus-within:bg-primary/5 group">
<input class="w-full bg-transparent text-sm p-4 rounded-2xl focus:outline-none placeholder:text-zinc-600" name="email" placeholder="mustafa@gmail.com" required="" type="email">
</div>
</div>
<div class="animate-element animate-delay-400">
<label class="text-xs font-medium uppercase tracking-widest text-muted-foreground mb-1.5 block px-1" style="">Password</label>
<div class="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm transition-all focus-within:border-primary/50 focus-within:bg-primary/5 relative">
<input class="w-full bg-transparent text-sm p-4 pr-12 rounded-2xl focus:outline-none placeholder:text-zinc-600" id="password-input" name="password" placeholder="••••••••" required="" type="password">
<button class="absolute inset-y-0 right-4 flex items-center text-muted-foreground hover:text-white transition-colors" onclick="const input = document.getElementById('password-input'); const icon = this.querySelector('span'); if(input.type === 'password') { input.type = 'text'; icon.innerText = 'visibility_off'; } else { input.type = 'password'; icon.innerText = 'visibility'; }" type="button" style="">
<span class="material-symbols-outlined text-xl" style="">visibility</span>
</button>
</div>
</div>
<div class="animate-element animate-delay-500 flex items-center justify-between text-sm">
<label class="flex items-center gap-3 cursor-pointer group" style="">
<input class="custom-checkbox" name="rememberMe" type="checkbox">
<span class="text-muted-foreground group-hover:text-on-surface transition-colors" style="">Keep me signed in</span>
</label>
<a class="text-primary hover:text-primary/80 transition-colors font-medium" href="/forgot-password" style="">Reset password</a>
</div>
<button class="animate-element animate-delay-600 w-full rounded-2xl bg-white py-4 font-bold text-black hover:bg-zinc-200 transition-all active:scale-[0.98] shadow-[0_0_20px_rgba(99,102,241,0.2)]" type="submit" style="">Sign in</button>
</form>
<div class="animate-element animate-delay-700 relative flex items-center justify-center py-2">
<span class="w-full border-t border-white/5"></span>
<span class="px-4 text-[10px] uppercase tracking-[0.2em] text-zinc-500 bg-black absolute" style="">Or continue with</span>
</div>
<button class="animate-element animate-delay-800 w-full flex items-center justify-center gap-3 border border-white/20 bg-white/5 rounded-2xl py-4 hover:bg-white/10 transition-all active:scale-[0.98]" onclick="window.location.href='/auth/google'" style="">
<svg class="h-5 w-5" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
<path d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8-6.627 0-12-5.373-12-12s12-5.373 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-2.641-.21-5.236-.611-7.743z" fill="#FFC107"></path>
<path d="M6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 16.318 4 9.656 8.337 6.306 14.691z" fill="#FF3D00"></path>
<path d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238C29.211 35.091 26.715 36 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z" fill="#4CAF50"></path>
<path d="M43.611 20.083H42V20H24v8h11.303c-.792 2.237-2.231 4.166-4.087 5.571l6.19 5.238C42.022 35.026 44 30.038 44 24c0-2.641-.21-5.236-.611-7.743z" fill="#1976D2"></path>
</svg>
<span class="text-sm font-medium" style="">Continue with Google</span>
</button>
<p class="animate-element animate-delay-900 text-center text-sm text-muted-foreground" style="">
                        New to FairShare? <a class="text-primary hover:underline transition-colors font-medium" href="/register" style="">Create Account</a>
</p>
</div>
</div>
</section>
<!-- Right column: hero image + testimonials -->
<section class="hidden md:block flex-1 relative p-4 overflow-hidden bg-[#121212] border-l border-white/5">
<!-- Background Glows -->
<div class="absolute top-1/4 -right-20 w-96 h-96 bg-primary/20 blur-[120px] rounded-full"></div>
<div class="absolute bottom-1/4 -left-20 w-80 h-80 bg-indigo-500/10 blur-[100px] rounded-full"></div>
<div class="animate-slide-right animate-delay-300 absolute inset-4 rounded-3xl bg-cover bg-center overflow-hidden border border-white/5" style="background-image: url(&quot;https://lh3.googleusercontent.com/aida/ADBb0uhcsoChsL8lFWJcwhOJ1iFsNFrpNIPDepy_Wf_BgyMeDRsS3W4NY_wI8jB5kaAwYu9tAsM9WTCRg16g5jPrKzXgA37c4HnnhjqJaXaLmaHyIgW2Im7EhY56Rt6e7KzBLqQ0o4AuanpBzeiu7Aw2n-FqgZMsPmvrTqMFjD1GGXPX9USxm-Hy5KkXmQ5qqtRyZSyMI0vwOqVvegGC6DztqV928DcOfisYY2ZmMcp27O8qOslpF-cqoiYyYq6Nnp8nR8QwXggCRVupQnU&quot;);">
<div class="absolute inset-0 bg-black/20 backdrop-brightness-90"></div>
</div>
<div class="absolute bottom-12 left-0 right-0 flex gap-4 px-12 w-full justify-center">
<!-- Testimonial 1 -->
<div class="animate-testimonial animate-delay-1000 flex items-start gap-3 rounded-3xl backdrop-blur-2xl border border-white/10 p-5 w-72 shadow-2xl bg-white/10">
<img alt="Sarah Chen" class="h-10 w-10 object-cover rounded-xl" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDhfEiCljX-yvAN2ICqOePyAAVjapCZnT3CiFv_yAtCb3PP2u9rj2A3qEwhqlJZp2UEJRTf0AFWfenG4CEgS7fBwGSxOurPwHfo_3pGAardD69Ec2xlJLR8kHRlM09E2oUrM08k7RbKABrvMBe4V7tvcdqKeopurGuhgzFjQFtDphZH5p2MmwtbXZfPUBAXJyVVn3scgIo0Z30E4o4xfrPK20yef0djRqF0F8Lc_d0sQb4CzNxp8lCOwi6V9efdOIxC2nA8vT-ij7yO" style="">
<div class="text-sm leading-snug">
<p class="flex items-center gap-1 font-bold text-white" style="">Sarah Chen</p>
<p class="text-zinc-500 text-xs" style="">@sarahdigital</p>
<p class="mt-2 text-zinc-300 italic font-light" style="">"The user experience is seamless and the features are exactly what I needed for my global assets."</p>
</div>
</div>
<!-- Testimonial 2 (Large screens) -->
<div class="hidden xl:flex animate-testimonial animate-delay-1200 items-start gap-3 rounded-3xl backdrop-blur-2xl border border-white/10 p-5 w-72 shadow-2xl bg-white/10">
<div class="h-10 w-10 bg-gradient-to-tr from-primary to-indigo-400 rounded-xl flex items-center justify-center flex-shrink-0">
<span class="material-symbols-outlined text-white text-xl" style="">verified_user</span>
</div>
<div class="text-sm leading-snug">
<p class="flex items-center gap-1 font-bold text-white" style="">Marcus Thorne</p>
<p class="text-zinc-500 text-xs" style="">@mthorne_wealth</p>
<p class="mt-2 text-zinc-300 italic font-light" style="">"FairShare has completely redefined how I perceive my liquid portfolio."</p>
</div>
</div>
</div>
</section>
</div>
</body></html>


2- ligt mode dashboard 

<!DOCTYPE html>

<html class="light" lang="en" style="width: 1280px; height: 1140px; overflow: hidden; position: relative;"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Dashboard</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,typography"></script>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/icon?family=Material+Icons+Outlined" rel="stylesheet"/>
<script>
        tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    colors: {
                        primary: "#00E676",
                        "background-light": "#F2F2F2",
                        "background-dark": "#1A1D21",
                        "card-light": "#FFFFFF",
                        "card-dark": "#212428",
                        "text-main-light": "#11142D",
                        "text-main-dark": "#FFFFFF",
                        "text-muted-light": "#808191",
                        "text-muted-dark": "#808191",
                        "border-light": "#E4E4E4",
                        "border-dark": "#2A2E33",
                        "success-bg-light": "#E2F9E8",
                        "success-text-light": "#34C759",
                        "success-bg-dark": "rgba(0, 230, 118, 0.1)",
                        "success-text-dark": "#00E676",
                        "danger-bg-light": "#FFE5E5",
                        "danger-text-light": "#FF3B30",
                        "danger-bg-dark": "rgba(255, 59, 48, 0.1)",
                        "danger-text-dark": "#FF3B30",
                    },
                    fontFamily: {
                        sans: ["Inter", "sans-serif"],
                    },
                    borderRadius: {
                        DEFAULT: "0.5rem",
                        'xl': '1rem',
                        '2xl': '1.5rem',
                    },
                    boxShadow: {
                        'soft': '0 4px 20px -2px rgba(0, 0, 0, 0.05)',
                    }
                },
            },
        };
    </script>
<style>
        .material-icons-outlined {
            font-size: 20px;
        }
        .donut-chart {
            transform: rotate(-90deg);
        }
    </style>
</head>
<body class="bg-background-light dark:bg-background-dark text-text-main-light dark:text-text-main-dark font-sans min-h-screen flex p-4 sm:p-6 lg:p-8 transition-colors duration-200">
<aside class="w-[250px] flex-shrink-0 flex flex-col hidden lg:flex bg-card-light dark:bg-card-dark rounded-2xl shadow-soft dark:shadow-none p-6 mr-8 transition-colors duration-200">
<div class="flex items-center gap-3 mb-10">
<div class="w-10 h-10 rounded-full bg-black dark:bg-white flex items-center justify-center relative overflow-hidden">
<div class="absolute inset-0 border-[4px] border-white dark:border-[#1A1D21] rounded-full"></div>
<div class="w-full h-0.5 bg-white dark:bg-[#1A1D21] absolute top-1/2 -translate-y-1/2"></div>
<div class="w-0.5 h-full bg-white dark:bg-[#1A1D21] absolute left-1/2 -translate-x-1/2"></div>
</div>
<span class="font-bold text-xl tracking-tight hidden lg:block" style="">Core</span>
</div>
<nav class="flex-1 space-y-2">
<a class="flex items-center gap-3 px-4 py-3 rounded-xl bg-background-light dark:bg-border-dark text-text-main-light dark:text-text-main-dark font-semibold transition-colors" href="#" style="">
<span class="material-icons-outlined" style="">dashboard</span>
                Dashboard
            </a>
<a class="flex items-center gap-3 px-4 py-3 rounded-xl text-text-muted-light dark:text-text-muted-dark hover:bg-background-light dark:hover:bg-border-dark transition-colors font-medium" href="#" style="">
<span class="material-icons-outlined" style="">inventory_2</span>Groups </a>
<div class="flex items-center justify-between px-4 py-3 rounded-xl text-text-muted-light dark:text-text-muted-dark hover:bg-background-light dark:hover:bg-border-dark transition-colors font-medium cursor-pointer">
<div class="flex items-center gap-3" style="">Friends </div>
<span class="material-icons-outlined text-sm" style="">expand_more</span>
</div>
<a class="flex items-center gap-3 px-4 py-3 rounded-xl text-text-muted-light dark:text-text-muted-dark hover:bg-background-light dark:hover:bg-border-dark transition-colors font-medium" href="#" style="">
<span class="material-icons-outlined" style="">storefront</span>
                Shop
            </a>
<div class="flex items-center justify-between px-4 py-3 rounded-xl text-text-muted-light dark:text-text-muted-dark hover:bg-background-light dark:hover:bg-border-dark transition-colors font-medium cursor-pointer">
<div class="flex items-center gap-3" style="">
<span class="material-icons-outlined" style="">trending_up</span>Analysis </div>
<span class="material-icons-outlined text-sm" style="">expand_more</span>
</div>
<a class="flex items-center gap-3 px-4 py-3 rounded-xl text-text-muted-light dark:text-text-muted-dark hover:bg-background-light dark:hover:bg-border-dark transition-colors font-medium" href="#" style="">
<span class="material-icons-outlined" style="">campaign</span>
                Promote
            </a>
</nav>
<div class="mt-auto space-y-3 pt-6">
<button class="w-10 h-10 rounded-full flex items-center justify-center text-text-muted-light dark:text-text-muted-dark hover:bg-background-light dark:hover:bg-border-dark transition-colors border border-border-light dark:border-border-dark shadow-sm dark:shadow-none" style="">
<span class="material-icons-outlined" style="">chat_bubble_outline</span>
</button>
<div class="bg-background-light dark:bg-border-dark rounded-full p-1 w-10 flex flex-col items-center shadow-sm dark:shadow-none">
<button class="w-8 h-8 rounded-full flex items-center justify-center text-text-muted-light dark:text-text-muted-dark hover:text-text-main-light dark:hover:text-text-main-dark transition-colors" style="">
<span class="material-icons-outlined text-[18px]" style="">light_mode</span>
</button>
<button class="w-8 h-8 rounded-full flex items-center justify-center bg-white dark:bg-card-dark text-text-main-light dark:text-text-main-dark shadow-sm" style="">
<span class="material-icons-outlined text-[18px]" style="">dark_mode</span>
</button>
</div>
</div>
</aside>
<main class="flex-1 flex flex-col min-w-0 max-w-7xl mx-auto gap-8">
<header class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
<h1 class="text-3xl font-bold tracking-tight" style="">Dashboard</h1>
<div class="flex items-center gap-3 w-full sm:w-auto">
<div class="relative flex-1 sm:w-64 lg:w-80">
<span class="material-icons-outlined absolute left-3 top-1/2 -translate-y-1/2 text-text-muted-light dark:text-text-muted-dark" style="">search</span>
<input class="w-full pl-10 pr-4 py-2.5 bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all shadow-soft dark:shadow-none text-sm placeholder-text-muted-light dark:placeholder-text-muted-dark text-text-main-light dark:text-text-main-dark" placeholder="Search anything..." type="text"/>
</div>
<button class="bg-text-main-light dark:bg-white text-white dark:text-text-main-light px-6 py-2.5 rounded-xl font-semibold hover:opacity-90 transition-opacity whitespace-nowrap text-sm shadow-soft dark:shadow-none" style="">
                    Create
                </button>
<div class="hidden sm:flex items-center gap-3">
<button class="w-10 h-10 rounded-full bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark flex items-center justify-center text-text-muted-light dark:text-text-muted-dark hover:text-text-main-light dark:hover:text-text-main-dark shadow-soft dark:shadow-none" style="">
<span class="material-icons-outlined" style="">notifications_none</span>
</button>
<button class="w-10 h-10 rounded-full bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark flex items-center justify-center text-text-muted-light dark:text-text-muted-dark hover:text-text-main-light dark:hover:text-text-main-dark shadow-soft dark:shadow-none" style="">
<span class="material-icons-outlined" style="">chat_bubble_outline</span>
</button>
<button class="w-10 h-10 rounded-full overflow-hidden border border-border-light dark:border-border-dark shadow-soft dark:shadow-none" style="">
<img alt="User avatar" class="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuApotFC5f3ZU6cyppuAGH6-k-I2v4o2Du0GawaFNGItBPOGUXtqpJCzMjQv4g8IZyIoYkDnIcFDgKDkdahfBiDfgqDapLJe_Ip49Q-orcwX681h9wMw0dO5M4OGkJsRRJggaFmCUYyHGG23N7sUwkcV2dzPbg_lUcLH-lkaNY-0FDqpBg1--bPmOBsXz35ogpWupL-ERZdzMaDT89D9esNzjCvpVj-TMjnUdjgpl9luy-PvFSwnRhtKB6HfVqFMP030RG_lYLTyR6X0" style=""/>
</button>
</div>
</div>
</header>
<div class="grid grid-cols-1 xl:grid-cols-3 gap-6 lg:gap-8">
<div class="xl:col-span-2 flex flex-col gap-6 lg:gap-8">
<div class="bg-card-light dark:bg-card-dark rounded-2xl p-6 lg:p-8 shadow-soft dark:shadow-none flex flex-col gap-8 transition-colors duration-200">
<div class="flex justify-between items-center">
<h2 class="text-xl font-bold" style="">Overview</h2>
<button class="flex items-center gap-2 px-4 py-2 rounded-lg border border-border-light dark:border-border-dark text-sm font-medium hover:bg-background-light dark:hover:bg-border-dark transition-colors" style="">
                            Last month
                            <span class="material-icons-outlined text-sm" style="">expand_more</span>
</button>
</div>
<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
<div class="bg-card-light dark:bg-card-dark rounded-xl p-5 border border-border-light dark:border-border-dark shadow-soft dark:shadow-none">
<div class="flex items-center gap-2 text-text-main-light dark:text-text-main-dark font-medium mb-3" style="">
<span class="material-icons-outlined text-text-muted-light dark:text-text-muted-dark" style="">person_outline</span>You owe</div>
<div class="flex items-end gap-4">
<span class="text-4xl lg:text-5xl font-bold tracking-tight" style="">1,293</span>
<div class="flex flex-col mb-1">
<span class="inline-flex items-center gap-1 text-xs font-semibold px-2 py-0.5 rounded-full bg-danger-bg-light dark:bg-danger-bg-dark text-danger-text-light dark:text-danger-text-dark w-max" style="">
<span class="material-icons-outlined text-[12px]" style="">arrow_downward</span>
                                        36.8%
                                    </span>
<span class="text-xs text-text-muted-light dark:text-text-muted-dark mt-1" style="">vs last month</span>
</div>
</div>
</div>
<div class="bg-background-light dark:bg-border-dark rounded-xl p-5 border border-transparent dark:border-border-dark">
<div class="flex items-center gap-2 text-text-main-light dark:text-text-main-dark font-medium mb-3" style="">
<span class="material-icons-outlined text-text-muted-light dark:text-text-muted-dark" style="">account_balance_wallet</span>You are owed</div>
<div class="flex items-end gap-4">
<span class="text-4xl lg:text-5xl font-bold tracking-tight" style="">256k</span>
<div class="flex flex-col mb-1">
<span class="inline-flex items-center gap-1 text-xs font-semibold px-2 py-0.5 rounded-full bg-success-bg-light dark:bg-success-bg-dark text-success-text-light dark:text-success-text-dark w-max" style="">
<span class="material-icons-outlined text-[12px]" style="">arrow_upward</span>
                                        36.8%
                                    </span>
<span class="text-xs text-text-muted-light dark:text-text-muted-dark mt-1" style="">vs last month</span>
</div>
</div>
</div>
</div>
<div>
<div class="mb-4">
<h3 class="font-bold text-base" style="">857 new friends today!</h3>
<p class="text-text-muted-light dark:text-text-muted-dark text-sm" style="">Send a welcome message to all new customers.</p>
</div>
<div class="flex flex-wrap items-center gap-4 lg:gap-6 mt-6">
<div class="flex flex-col items-center gap-2">
<img alt="Gladyce" class="w-12 h-12 rounded-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAxqXfYzoK6X1NRsW-seyfJl6iE4H7dz1P2ziQte96IMteEs-4lVqOT_aoIfqMBtZ5UU3GrZMeWdoA6Xp6E_TBttidzk6N1NkydwQteksccZPNvjKeuqHY5YBySdIP1TZM7H0WsMnfhy9wS5I4SirpGipyJnE-m3fzJa-DhQNSIbWVz-GG7x-AcIRLIdCp2VjpVe_wCGQhU8znBRPCfeXRL5wsU1sdyDh2086L_Icn3buMVIhnTkC9FfAZYAEWN_2Rb0C-00JTbD2s5" style=""/>
<span class="text-xs font-medium text-text-muted-light dark:text-text-muted-dark" style="">Gladyce</span>
</div>
<div class="flex flex-col items-center gap-2">
<img alt="Elbert" class="w-12 h-12 rounded-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCPS_JTfjk_QBwZqCR9h9TMrBIv_HvzzhEqDYHhS8RFJUXjOweyMYM_9r0CWIv46AkPfgwV2nbrvj_JO6V2MWnZvMwlhAYzPlvV7YjYfTZb8fB1he59Y62MhX39iwQ4BuMtBQUcuRmB_MglLdhGMwYkYiAqsXTC320wtVXESqGJTI449sKq6TdO3du_SZv-gT_fCtvartl1T2BexkoP-gkhi9UNBSqZp2J0bwbjwdj2N0hQ8WqOGqWZVexDntO9jHpeLLC1M7AxY1Z7" style=""/>
<span class="text-xs font-medium text-text-muted-light dark:text-text-muted-dark" style="">Elbert</span>
</div>
<div class="flex flex-col items-center gap-2">
<img alt="Dash" class="w-12 h-12 rounded-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBnWEHRsM4x1luwLNlX2-3-IrxRC8BJHn4aJjpkIxPF6vDyxwyJXZ1BnMcl1X0LN3KsyKbOuqG8rL9pNIWoZGh25QBR1Od8O7veahtLrAjmEjTrMyOz3fH4opcEce4TeHqdwi9Ox-md0b7ip8hw2b13uvMrO9G2yFrb-_n1eS-hnj0qrK64UEdx-vyOUhuvOx3l9Qogs416ZoMEBsRcDtjVKOMBPGV7G6oDs77RunHSYRhsYfuP4aTnUAzN3-AaHmMbPsFq2zxfijPn" style=""/>
<span class="text-xs font-medium text-text-muted-light dark:text-text-muted-dark" style="">Dash</span>
</div>
<div class="flex flex-col items-center gap-2">
<img alt="Joyce" class="w-12 h-12 rounded-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA1r7mcVaprQgkBOCS7q0eZX5pIWBa2dYQ_N0KCr68QiBNIWuJLc47M3JfwiQwYxIi2xxdJFt2Ka66nriRU-PSP6oncI3oV40fSp4WjYTW8v5R8zd171ojSm7se2YBUWZWl1WI-6RRg8daiZx8T8IryAY8QViSrlka1LaMnWwulkpAT0Cd4XMdkEuGSWFlIsxn6Z3rquOtFwQP6uKXpe4uKyQyYtjKfFDiaoDNu58zKZ-tZ2tJknPrPT0SRyVFjF_fYNwgcrI4UEXxl" style=""/>
<span class="text-xs font-medium text-text-muted-light dark:text-text-muted-dark" style="">Joyce</span>
</div>
<div class="flex flex-col items-center gap-2">
<img alt="Marina" class="w-12 h-12 rounded-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBkJun5UEhR4GJI4rGLyO3s_LnwA6QX4Kgoibo2nRuKdSrpLBv7Nt5FBRBoUvAT-KJtrejgmKyWTVjyc9ER9Gi5tVlxVSaGK_TgzXBakIQsdje9s3kDvVcA4VE2aNbziEF-0dm0OOt8s8Yx8ftEhhJoJyTlhypI_rvej4mV4QyCv2UwDaDt2P1H_4e0qk2rUH8p5hPEHQc7iBs5gfVgtUUfw1j0mYCJM6TV-QLO3ZvO1uote_LX2PAFT9Qg5SBEbbVWattIhRbvleXA" style=""/>
<span class="text-xs font-medium text-text-muted-light dark:text-text-muted-dark" style="">Marina</span>
</div>
<div class="flex flex-col items-center gap-2 ml-auto lg:ml-0">
<button class="w-12 h-12 rounded-full border border-border-light dark:border-border-dark flex items-center justify-center text-text-muted-light dark:text-text-muted-dark hover:bg-background-light dark:hover:bg-border-dark transition-colors" style="">
<span class="material-icons-outlined" style="">arrow_forward</span>
</button>
<span class="text-xs font-medium text-text-muted-light dark:text-text-muted-dark" style="">View all</span>
</div>
</div>
</div>
</div>
<div class="bg-card-light dark:bg-card-dark rounded-2xl p-6 lg:p-8 shadow-soft dark:shadow-none flex flex-col relative overflow-hidden transition-colors duration-200">
<div class="flex justify-between items-center mb-8 relative z-10">
<h2 class="text-xl font-bold" style="">Financial view</h2>
<button class="flex items-center gap-2 px-4 py-2 rounded-lg border border-border-light dark:border-border-dark text-sm font-medium hover:bg-background-light dark:hover:bg-border-dark transition-colors" style="">
                            Last 7 days
                            <span class="material-icons-outlined text-sm" style="">expand_more</span>
</button>
</div>
<div class="flex-1 flex items-end gap-2 sm:gap-4 md:gap-6 min-h-[250px] relative z-10 pb-6">
<div class="flex-1 bg-background-light dark:bg-border-dark rounded-t-lg h-[40%] opacity-70"></div>
<div class="flex-1 bg-background-light dark:bg-border-dark rounded-t-lg h-[60%] opacity-70"></div>
<div class="flex-1 bg-background-light dark:bg-border-dark rounded-t-lg h-[30%] opacity-70"></div>
<div class="flex-1 bg-gradient-to-t from-primary/20 to-primary rounded-t-lg h-[80%] relative group cursor-pointer flex flex-col items-center">
<div class="absolute -top-10 bg-text-main-light dark:bg-card-light text-white dark:text-text-main-light text-xs font-bold px-3 py-1.5 rounded-lg whitespace-nowrap opacity-100 transition-opacity flex flex-col items-center shadow-lg" style="">
                                2.2m
                                <div class="w-2 h-2 bg-text-main-light dark:bg-card-light rotate-45 absolute -bottom-1"></div>
</div>
<div class="absolute -top-3 w-2 h-2 rounded-full border-2 border-primary bg-white dark:bg-card-dark"></div>
<span class="material-icons-outlined absolute top-4 text-white" style="">ads_click</span>
</div>
<div class="flex-1 bg-background-light dark:bg-border-dark rounded-t-lg h-[50%] opacity-70"></div>
<div class="flex-1 bg-background-light dark:bg-border-dark rounded-t-lg h-[25%] opacity-70"></div>
<div class="flex-1 bg-background-light dark:bg-border-dark rounded-t-lg h-[65%] opacity-70"></div>
</div>
<div class="absolute bottom-6 left-6 lg:left-8 z-20">
<div class="text-4xl lg:text-5xl font-bold tracking-tight text-text-main-light dark:text-text-main-dark mb-2" style="">$10.2m</div>
<div class="flex items-center gap-3">
<span class="inline-flex items-center gap-1 text-xs font-semibold px-2 py-0.5 rounded-full bg-success-bg-light dark:bg-success-bg-dark text-success-text-light dark:text-success-text-dark w-max" style="">
<span class="material-icons-outlined text-[12px]" style="">arrow_upward</span>
                                36.8%
                            </span>
<span class="text-xs text-text-muted-light dark:text-text-muted-dark" style="">vs last month</span>
</div>
</div>
</div>
</div>
<div class="flex flex-col gap-6 lg:gap-8">
<div class="bg-card-light dark:bg-card-dark rounded-2xl p-6 lg:p-8 shadow-soft dark:shadow-none flex flex-col gap-6 transition-colors duration-200">
<h2 class="text-xl font-bold mb-4" style="">Spending Breakdown</h2>
<div class="flex flex-col items-center">
<div class="relative w-48 h-48 mb-8">
<svg class="donut-chart w-full h-full" viewbox="0 0 36 36">
<circle class="stroke-background-light dark:stroke-border-dark" cx="18" cy="18" fill="transparent" r="15.91549430918954" stroke-width="3"></circle>
<circle class="stroke-primary" cx="18" cy="18" fill="transparent" r="15.91549430918954" stroke-dasharray="12.5 87.5" stroke-dashoffset="0" stroke-width="3"></circle>
</svg>
<div class="absolute inset-0 flex flex-col items-center justify-center">
<span class="text-3xl font-bold">12.5%</span>
<span class="text-xs text-text-muted-light dark:text-text-muted-dark">Mobile</span>
</div>
<div class="absolute top-2 right-2 bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark shadow-lg rounded-2xl p-2 px-3 flex flex-col items-center">
<span class="text-[10px] font-bold text-text-muted-light dark:text-text-muted-dark">Mobile</span>
<span class="text-xs font-bold">1,485</span>
<div class="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-card-light dark:bg-card-dark border-r border-b border-border-light dark:border-border-dark rotate-45"></div>
</div>
</div>
<div class="w-full h-px bg-border-light dark:bg-border-dark mb-6"></div>
<div class="grid grid-cols-3 gap-4 w-full">
<div class="flex flex-col">
<div class="flex items-center gap-1.5 mb-1">
<span class="material-icons-outlined text-sm text-text-muted-light">shopping_bag</span>
<span class="text-[11px] font-semibold text-text-muted-light dark:text-text-muted-dark">Grocery</span>
</div>
<span class="font-bold text-sm">15.20%</span>
</div>
<div class="flex flex-col">
<div class="flex items-center gap-1.5 mb-1">
<span class="material-icons-outlined text-sm text-text-muted-light">flight</span>
<span class="text-[11px] font-semibold text-text-muted-light dark:text-text-muted-dark">Travel</span>
</div>
<span class="font-bold text-sm">17.1%</span>
</div>
<div class="flex flex-col">
<div class="flex items-center gap-1.5 mb-1">
<span class="material-icons-outlined text-sm text-text-muted-light">restaurant</span>
<span class="text-[11px] font-semibold text-text-muted-light dark:text-text-muted-dark">Food</span>
</div>
<span class="font-bold text-sm">66.62%</span>
</div>
</div>
</div>
</div>
<div class="bg-card-light dark:bg-card-dark rounded-2xl p-6 lg:p-8 shadow-soft dark:shadow-none flex flex-col gap-6 transition-colors duration-200">
<h2 class="text-xl font-bold" style="">Popular groups</h2>
<div class="space-y-5">
<div class="flex items-center gap-4">
<img alt="Crypter NFT UI Kit" class="w-14 h-14 rounded-xl object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD7SWp2bzJPpcO4a8lC5QjwguRRrNQiGNSI4Lv8-IlDHhUG5V7h_XqPiGyScKXTVB8WewGtzdd_g_8yVzPtnJE9o8CI5g-3KJ_qY6QuXoaZ0LsxgvcFqDdK6nnLxKQKpTo2168zjvGJQWwdVsLpxvioA_-xWpuEwrAzgkZu3G5NtRm1R-0TKQWZ0JbledUqaKNLuZJznh_ysErzPrl9fx6pE6RTng0K3mAMhOSS0Lk9_qBb0iQp54g8X9l-u4Pzge7-rYd5pTv5GlpL" style=""/>
<div class="flex-1">
<h4 class="font-bold text-sm mb-1" style="">Crypter - NFT UI Kit</h4>
</div>
<div class="text-right">
<div class="font-bold text-sm mb-1" style="">$3,250.00</div>
<span class="text-[10px] font-semibold uppercase tracking-wider text-success-text-light dark:text-success-text-dark border border-success-text-light/30 dark:border-success-text-dark/30 px-2 py-0.5 rounded-full" style="">Active</span>
</div>
</div>
<div class="flex items-center gap-4">
<img alt="Bento Pro 2.0" class="w-14 h-14 rounded-xl object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBIdbNV3_MV7ubsTsZazX47u-AyS9Y-Z-sTlnMhdFSxUv_k8iRvFAcT8Y3tKDYQmAo9A7OV27EtJQRAr0k01giLD9ePQvQCpm_eU25SpDGJX1S9rphsNkU8YGdKXONSX4MFtpHRsLMuqHLa1vJ3ydjy2yzsvP2kF4h7VxFIRySf5sr1qShF980WKzTFcpzyRSLIOrcjVYHOPu6Ff1HS58jVeoG5R6-a9ym8pRZ-d7-ugLwrGmokM2Bvg-EhgWZnc_FK4-1rwWbOAwED" style=""/>
<div class="flex-1">
<h4 class="font-bold text-sm mb-1" style="">Bento Pro 2.0 Illustrations</h4>
</div>
<div class="text-right">
<div class="font-bold text-sm mb-1" style="">$7,890.00</div>
<span class="text-[10px] font-semibold uppercase tracking-wider text-success-text-light dark:text-success-text-dark border border-success-text-light/30 dark:border-success-text-dark/30 px-2 py-0.5 rounded-full" style="">Active</span>
</div>
</div>
<div class="flex items-center gap-4">
<div class="w-14 h-14 rounded-xl bg-gray-100 flex items-center justify-center overflow-hidden">
<div class="w-8 h-8 bg-orange-500 rounded-sm transform rotate-12"></div>
</div>
<div class="flex-1">
<h4 class="font-bold text-sm mb-1" style="">Fleet - travel shopping kit</h4>
</div>
<div class="text-right">
<div class="font-bold text-sm mb-1" style="">$1,500.00</div>
<span class="text-[10px] font-semibold uppercase tracking-wider text-danger-text-light dark:text-danger-text-dark border border-danger-text-light/30 dark:border-danger-text-dark/30 px-2 py-0.5 rounded-full" style="">Offline</span>
</div>
</div>
<div class="flex items-center gap-4">
<img alt="SimpleSocial UI" class="w-14 h-14 rounded-xl object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAjzXgIW2ZmXuOMrEGRBlOV_smkwiUSthMs8LdDH05UXqbBjaVNohEUhprmETpXaii4BpyeW1vsKXzxSgwxTqbMxnn22GOuF8VpCthBBRzO8QuNQCaS8aHLSKlhxrDyjgok_WWXFHFg43ZCqKNQ6IG9hDpHJN61OGxPCLISyvlYyvNNPfEGalYmP6-Ne4kwzI7GO4Dztv71FYxaomP2GRhU6ObIDBONkepxj2neR3jnOpOkZMTVDSJasXnVFK0zNRCpcHxeO6RS26Fh" style=""/>
<div class="flex-1">
<h4 class="font-bold text-sm mb-1" style="">SimpleSocial UI Design Kit</h4>
</div>
<div class="text-right">
<div class="font-bold text-sm mb-1" style="">$9,999.99</div>
<span class="text-[10px] font-semibold uppercase tracking-wider text-success-text-light dark:text-success-text-dark border border-success-text-light/30 dark:border-success-text-dark/30 px-2 py-0.5 rounded-full" style="">Active</span>
</div>
</div>
</div>
<button class="w-full py-3 mt-2 rounded-xl border-2 border-border-light dark:border-border-dark font-semibold text-sm hover:bg-background-light dark:hover:bg-border-dark transition-colors" style="">
                        All groups</button>
</div>
</div>
</div>
</main>
</body></html>


// 3- dark mode dashbord

<!DOCTYPE html><html class="dark" lang="en" style=""><head>
<meta charset="utf-8">
<meta content="width=device-width, initial-scale=1.0" name="viewport">
<title>Dashboard</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,typography"></script>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&amp;display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/icon?family=Material+Icons+Outlined" rel="stylesheet">
<script>
        tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    colors: {
                        primary: "#00E676",
                        "background-light": "#F3F4F6",
                        "background-dark": "#0D0D0D",
                        "surface-dark": "#181818",
                        "surface-darker": "#121212",
                        "surface-darkest": "#000000",
                        "surface-light": "#FFFFFF",
                        "border-dark": "#2A2A2A",
                        "border-light": "#E5E7EB",
                        "text-dark-primary": "#FFFFFF",
                        "text-dark-secondary": "#A1A1AA",
                        "text-light-primary": "#111827",
                        "text-light-secondary": "#6B7280",
                        "success": "#00E676",
                        "danger": "#FF4D4F",
                        "danger-bg": "rgba(255, 77, 79, 0.1)",
                        "success-bg": "rgba(0, 230, 118, 0.1)"
                    },
                    fontFamily: {
                        display: ["Inter", "sans-serif"],
                    },
                    borderRadius: {
                        DEFAULT: "1rem",
                        "xl": "1.5rem",
                        "2xl": "2rem"
                    },
                },
            },
        };
    </script>
<style>
        body {
            font-family: 'Inter', sans-serif;
        }
        .material-icons-outlined {
            font-size: 20px;
        }
    </style>
</head>
<body class="bg-background-light dark:bg-background-dark text-text-light-primary dark:text-text-dark-primary min-h-screen flex antialiased p-4 lg:p-6 gap-6 transition-colors duration-200">
<aside class="w-64 flex-shrink-0 flex flex-col justify-between rounded-3xl p-6 shadow-sm border hidden md:flex border-white/5 bg-[#121212]">
<div>
<div class="flex items-center gap-3 mb-10">
<div class="w-10 h-10 rounded-full bg-black flex items-center justify-center relative overflow-hidden">
<div class="absolute inset-0 border-[4px] border-white rounded-full"></div>
<div class="w-full h-0.5 bg-white absolute top-1/2 -translate-y-1/2"></div>
<div class="w-0.5 h-full bg-white absolute left-1/2 -translate-x-1/2"></div>
</div>
<span class="font-bold text-xl tracking-tight text-text-light-primary text-white" style="">Core</span>
</div>
<nav class="space-y-1">
<a class="flex items-center gap-3 px-4 py-3 rounded-xl font-bold transition-colors bg-white/10 text-white text-zinc-400 hover:bg-white/5 hover:text-white" href="#" style="">
<span class="material-icons-outlined" style="">dashboard</span>
                Dashboard
            </a>
<a class="flex items-center gap-3 px-4 py-3 rounded-xl transition-colors font-medium text-zinc-400 hover:bg-white/5 hover:text-white" href="#" style="">
<span class="material-icons-outlined" style="">inventory_2</span>Groups&nbsp;</a>
<div class="flex items-center justify-between px-4 py-3 rounded-xl transition-colors font-medium cursor-pointer text-zinc-400 hover:bg-white/5 hover:text-white">
<div class="flex items-center gap-3" style="">
<span class="material-icons-outlined" style="">people_outline</span>
                    Friends
                </div>
<span class="material-icons-outlined text-sm" style="">expand_more</span>
</div>
<a class="flex items-center gap-3 px-4 py-3 rounded-xl transition-colors font-medium text-zinc-400 hover:bg-white/5 hover:text-white" href="#" style="">
<span class="material-icons-outlined" style="">storefront</span>
                Sitting&nbsp;</a>
<div class="flex items-center justify-between px-4 py-3 rounded-xl transition-colors font-medium cursor-pointer text-zinc-400 hover:bg-white/5 hover:text-white">
<div class="flex items-center gap-3" style="">
<span class="material-icons-outlined" style="">trending_up</span>
                    Analysis
                </div>
<span class="material-icons-outlined text-sm" style="">expand_more</span>
</div>
<a class="flex items-center gap-3 px-4 py-3 rounded-xl transition-colors font-medium text-zinc-400 hover:bg-white/5 hover:text-white" href="#" style="">
<span class="material-icons-outlined" style="">campaign</span>About us</a>
</nav>
</div>
<div class="space-y-3 pt-6">
<button class="w-10 h-10 rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors border border-border-light text-zinc-400 border-white/10" style="">
<span class="material-icons-outlined text-zinc-400" style="">chat_bubble_outline</span>
</button>
<div class="rounded-full p-1 w-10 flex flex-col items-center bg-white/5">
<button class="w-8 h-8 rounded-full flex items-center justify-center hover:text-text-light-primary transition-colors text-zinc-400 border-white/10" style="">
<span class="material-icons-outlined text-[18px] text-zinc-400" style="">light_mode</span>
</button>
<button class="w-8 h-8 rounded-full flex items-center justify-center bg-white text-text-light-primary shadow-sm text-zinc-400 border-white/10 bg-white/10 text-white" style="">
<span class="material-icons-outlined text-[18px] text-zinc-400" style="">dark_mode</span>
</button>
</div>
</div>
</aside>
<main class="flex-1 flex flex-col min-w-0 overflow-hidden">
<header class="h-16 flex items-center justify-between mb-8">
<h1 class="text-3xl font-bold tracking-tight text-text-light-primary dark:text-text-dark-primary" style="">Dashboard</h1>
<div class="flex-1 flex items-center justify-center max-w-xl mx-8">
<div class="relative w-full">
<div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
<span class="material-icons-outlined text-text-light-secondary text-lg" style="">search</span>
</div>
<input class="block w-full pl-11 pr-3 py-2.5 border-none rounded-full bg-surface-light dark:bg-surface-dark text-sm text-text-light-primary dark:text-text-dark-primary placeholder-text-light-secondary focus:ring-0 shadow-sm" placeholder="Search anything..." type="text">
</div>
</div>
<div class="flex items-center gap-3">
<button class="px-6 py-2.5 bg-gray-900 dark:bg-white text-white dark:text-black text-sm font-semibold rounded-xl hover:opacity-90 transition-opacity" style="">
            Create
        </button>
<button class="w-10 h-10 rounded-full bg-surface-light dark:bg-surface-dark flex items-center justify-center text-text-light-secondary dark:text-text-dark-secondary hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors shadow-sm border border-border-light dark:border-border-dark" style="">
<span class="material-icons-outlined" style="">notifications_none</span>
</button>
<button class="w-10 h-10 rounded-full bg-surface-light dark:bg-surface-dark flex items-center justify-center text-text-light-secondary dark:text-text-dark-secondary hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors shadow-sm border border-border-light dark:border-border-dark" style="">
<span class="material-icons-outlined" style="">chat_bubble_outline</span>
</button>
<button class="w-10 h-10 rounded-full border border-border-light dark:border-border-dark overflow-hidden flex-shrink-0 shadow-sm" style="">
<img alt="Profile avatar" class="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAjlf-I7FH6rYyC4KJehkLJ5VBeL05orjTCH4VLj5PxCQUhpERj-X70NjxaNl2QPumDN9YJOZO24JZwu-Oh_HN0xfqwdzFIT9655DxKt9AVj8F3OYjQeIPjiMSyIne5V7McNTX9ZYYJdKqO_MYUOhZBaLOUPGP_qOJTfrd3RPGcKRUpKLqcHufTSCHNFAmpg-aJZV_UoQj6tTZ60nzosULvzAP-zNQZRfghPQzbUZlOa8v1IWLVv-lUzS61poIBEVm_plmyIyJBOjcM" style="">
</button>
</div>
</header>
<div class="flex-1 overflow-y-auto">
<div class="grid grid-cols-1 xl:grid-cols-3 gap-6 h-full pb-4">
<div class="xl:col-span-2 flex flex-col gap-6">
<div class="bg-surface-light dark:bg-surface-dark rounded-3xl p-6 shadow-sm dark:shadow-none border border-border-light dark:border-border-dark">
<div class="flex items-center justify-between mb-6">
<h2 class="text-xl font-bold" style="">Overview</h2>
<div class="relative">
<select class="appearance-none bg-gray-100 dark:bg-[#202020] border-none rounded-xl pl-4 pr-10 py-2 text-sm font-medium text-text-light-secondary dark:text-text-dark-secondary focus:ring-0 cursor-pointer">
<option>Last 7 days</option>
<option>Last 30 days</option>
</select>
<div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-text-light-secondary dark:text-text-dark-secondary">
<span class="material-icons-outlined text-sm" style="">expand_more</span>
</div>
</div>
</div>
<div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
<div class="bg-gray-50 dark:bg-[#1A1A1A] rounded-2xl p-5 border border-border-light dark:border-border-dark">
<div class="flex items-center gap-2 text-text-light-secondary dark:text-text-dark-secondary mb-3">
<span class="material-icons-outlined text-sm" style="">person_outline</span>
<span class="text-sm font-medium" style="">You owe&nbsp;</span>
</div>
<div class="flex items-end gap-4">
<span class="text-4xl font-bold" style="">1,293</span>
<div class="flex flex-col mb-1">
<div class="flex items-center gap-1 text-danger bg-danger-bg px-2 py-0.5 rounded-lg text-xs font-semibold w-fit mb-1" style="">
<span class="material-icons-outlined text-[10px]" style="">arrow_downward</span>
                                            36.8%
                                        </div>
<span class="text-xs text-text-light-secondary dark:text-text-dark-secondary" style="">vs last month</span>
</div>
</div>
</div>
<div class="bg-gray-50 dark:bg-[#1A1A1A] rounded-2xl p-5 border border-border-light dark:border-border-dark">
<div class="flex items-center gap-2 text-text-light-secondary dark:text-text-dark-secondary mb-3">
<span class="material-icons-outlined text-sm" style="">account_balance_wallet</span>
<span class="text-sm font-medium" style="">You are owed&nbsp;</span>
</div>
<div class="flex items-end gap-4">
<span class="text-4xl font-bold" style="">256k</span>
<div class="flex flex-col mb-1">
<div class="flex items-center gap-1 text-success bg-success-bg px-2 py-0.5 rounded-lg text-xs font-semibold w-fit mb-1" style="">
<span class="material-icons-outlined text-[10px]" style="">arrow_upward</span>
                                            36.8%
                                        </div>
<span class="text-xs text-text-light-secondary dark:text-text-dark-secondary" style="">vs last month</span>
</div>
</div>
</div>
</div>
<div class="mt-4">
<h3 class="font-semibold text-base mb-1" style="">857 new friends today!</h3>
<p class="text-sm text-text-light-secondary dark:text-text-dark-secondary mb-4" style="">View friends you've interacted with recently</p>
<div class="flex flex-wrap gap-4 items-center">
<div class="flex flex-col items-center gap-2">
<img alt="Gladlyce" class="w-12 h-12 rounded-full object-cover border-2 border-surface-light dark:border-surface-dark" src="https://lh3.googleusercontent.com/aida-public/AB6AXuABkqVpNtHBNfHTU18P9IkLcVDb1LucprSedbmaCvyBMuUaW87s0BhMvJVUBDu3r8ZQqzsPoP37Zlqg-03Ix13sCP-LjOqP64ttEwVNf3Egwt6U0pYPnokBRU9VHhXF5CndHAsbGSTNJlOVQ4oyOsP7FSdS4qQ3v84Ye-Ah9YUmktVTtO3X-3Ur8mzmJSqhnN8S55sZXFjCc5onMIasYhmqRY2N5kdQGNvAjWjNtB8R9s4yVVpfy_7WIqAXFzFUSGQ7pae6jamrPQB3" style="">
<span class="text-xs text-text-light-secondary dark:text-text-dark-secondary" style="">Gladyce</span>
</div>
<div class="flex flex-col items-center gap-2">
<img alt="Elbert" class="w-12 h-12 rounded-full object-cover border-2 border-surface-light dark:border-surface-dark" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBLKMMsDtYZtJnD7NBOkHwbmlZf63muZdzvR4tk9iYCBY2zuekvOXeL8l_zUqnzHoM_LK-dH2-g2EShSaZXIaDWHT-S_dHxmnaQIkYl8tFDuF7H1SxfCfs3r1kdposhwst29ga5oTKx_nhmwrxSIFdMe3L6Wo2crdJsb19xkqQsE95JYej0z3fQttGIbTPVLlCtoyDrZoHblVzt9asnkLbNbhAHI5fIbL0u-RU6rYihiJ0WxCsEk4KKY6oOGHixKe30NIkftaKecXzy" style="">
<span class="text-xs text-text-light-secondary dark:text-text-dark-secondary" style="">Elbert</span>
</div>
<div class="flex flex-col items-center gap-2">
<img alt="Joyce" class="w-12 h-12 rounded-full object-cover border-2 border-surface-light dark:border-surface-dark" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCnxT4cUjGWvNlf49IJw2JGjILPvm-4xEqssxfmYyR-owUhFZkm6jGlIdK3dq5eQi9G7uoMGYGNfvpQ52TJ4UN8MbmP4GUsYNM4deTZjIAq2lM6VhTFiITFW1jqayq3mrrNtltDKK9pHaC40KGRyEEwhL893pRXCQhefI-5wOhdVSga3n6mNomjKqE1gojZncZRwH2DrP_HWI-xJeh9uk4Ptrr3gt_Ul8lPGELn537j26ZLl8uPmYMeO_Nhd1VGI-sZgZJlOJMfa3wH" style="">
<span class="text-xs text-text-light-secondary dark:text-text-dark-secondary" style="">Joyce</span>
</div>
<div class="flex flex-col items-center gap-2">
<img alt="Joyce" class="w-12 h-12 rounded-full object-cover border-2 border-surface-light dark:border-surface-dark" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC71pHD-x-ygsmT6L4SzgDfZkYpMA8XhioVmN7wlYyDWhxk_9p-hIOQst-bKu5M3MKM2xrwgz24JJbJDM6hO0z_H5FfpAm367-bq0Ds36cEPpl2PzeX9p8lWR0KaJOPp27ecwNaJWuQ2JBCKLk9QPFvOP4vKQghI1VC6MxrXxLIfkTrBe5vUbixC8nDaSRlceQvkXwLnGpk701N5-9aGvTJsKLtVc7b4P6HZdng2usVA1QYv1iFP9E6vVjaiW3dMUL-keY21aZYuWUy" style="">
<span class="text-xs text-text-light-secondary dark:text-text-dark-secondary" style="">Joyce</span>
</div>
<div class="flex flex-col items-center gap-2">
<img alt="Joyce" class="w-12 h-12 rounded-full object-cover border-2 border-surface-light dark:border-surface-dark" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC2U6xPen8q_F2LLskj3hBj1UOfKzpy2jFNV8K71gZ8BMXezfrd3zGmE2F1yGsZN_RXukW04cYthOTrcGq4UunUGJ9mZAxpEyByaC6DmL8UCoC_kzKf7Fe22Sm58XFTNEqo7ehEeQBk4ZfON3xwXMkipF2QZTPGUp191RkgXw26vIAzEu3g83y-tzb6LV4GxnPLO59F81XqtTV2rNX-632F4dDGycvV492Ove0jxI3haoRTj4lYtCgFMtbloIV_sJVw-mYPMkoWHA8q" style="">
<span class="text-xs text-text-light-secondary dark:text-text-dark-secondary" style="">Joyce</span>
</div>
<div class="flex flex-col items-center gap-2 ml-4">
<button class="w-12 h-12 rounded-full border border-border-light dark:border-border-dark flex items-center justify-center hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors" style="">
<span class="material-icons-outlined text-text-light-secondary dark:text-text-dark-secondary" style="">arrow_forward</span>
</button>
<span class="text-xs text-text-light-secondary dark:text-text-dark-secondary" style="">View all</span>
</div>
</div>
</div>
</div>
<div class="bg-surface-light dark:bg-surface-dark rounded-3xl p-6 shadow-sm dark:shadow-none border border-border-light dark:border-border-dark flex-1 flex flex-col relative min-h-[350px]">
<div class="flex items-center justify-between mb-8">
<h2 class="text-xl font-bold" style="">Financial view&nbsp;</h2>
<div class="relative z-10">
<select class="appearance-none bg-gray-100 dark:bg-[#202020] border-none rounded-xl pl-4 pr-10 py-2 text-sm font-medium text-text-light-secondary dark:text-text-dark-secondary focus:ring-0 cursor-pointer">
<option>Last 7 days</option>
<option>Last 30 days</option>
</select>
<div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-text-light-secondary dark:text-text-dark-secondary">
<span class="material-icons-outlined text-sm" style="">expand_more</span>
</div>
</div>
</div>
<div class="absolute bottom-6 left-6 flex flex-col z-10">
<div class="text-[3rem] font-bold leading-none mb-4 tracking-tight flex items-baseline" style="">
<span class="text-text-light-secondary dark:text-text-dark-secondary text-4xl mr-1" style="">$</span>10.2m
                            </div>
<div class="flex items-center gap-2">
<div class="flex items-center gap-1 text-success bg-success-bg px-2 py-0.5 rounded-lg text-xs font-semibold" style="">
<span class="material-icons-outlined text-[10px]" style="">arrow_upward</span>
                                    36.8%
                                </div>
<span class="text-xs text-text-light-secondary dark:text-text-dark-secondary" style="">vs last month</span>
</div>
</div>
<div class="flex-1 flex items-end justify-end gap-3 pb-6 pr-4 mt-16 z-0">
<div class="w-12 bg-gray-200 dark:bg-[#2A2A2A] rounded-t-lg h-[30%] relative group">
<div class="absolute -bottom-6 w-full text-center text-xs text-text-light-secondary dark:text-text-dark-secondary" style="">14</div>
</div>
<div class="w-12 bg-gray-200 dark:bg-[#333333] rounded-t-lg h-[45%] relative">
<div class="absolute -bottom-6 w-full text-center text-xs text-text-light-secondary dark:text-text-dark-secondary" style="">15</div>
</div>
<div class="w-12 bg-gray-200 dark:bg-[#222222] rounded-t-lg h-[25%] relative">
<div class="absolute -bottom-6 w-full text-center text-xs text-text-light-secondary dark:text-text-dark-secondary" style="">16</div>
</div>
<div class="w-14 bg-primary rounded-t-lg h-[65%] relative shadow-[0_0_20px_rgba(0,230,118,0.3)]">
<div class="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-surface-light dark:bg-gray-200 text-text-light-primary px-3 py-1 rounded-lg text-xs font-bold shadow-md" style="">
                                    2.2m
                                    <div class="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-surface-light dark:bg-gray-200 rotate-45"></div>
</div>
<div class="absolute -top-4 left-1/2 transform -translate-x-1/2 w-2 h-2 rounded-full border-2 border-primary bg-surface-dark"></div>
<div class="absolute top-4 left-1/2 transform -translate-x-1/2">
<span class="material-icons-outlined text-white dark:text-black text-sm drop-shadow-md" style="">ads_click</span>
</div>
<div class="absolute -bottom-6 w-full text-center text-xs text-text-light-secondary dark:text-text-dark-secondary" style="">17</div>
</div>
<div class="w-12 bg-gray-200 dark:bg-[#333333] rounded-t-lg h-[40%] relative">
<div class="absolute -bottom-6 w-full text-center text-xs text-text-light-secondary dark:text-text-dark-secondary" style="">19</div>
</div>
<div class="w-12 bg-gray-200 dark:bg-[#222222] rounded-t-lg h-[20%] relative">
<div class="absolute -bottom-6 w-full text-center text-xs text-text-light-secondary dark:text-text-dark-secondary" style="">18</div>
</div>
<div class="w-12 bg-gray-200 dark:bg-[#3A3A3A] rounded-t-lg h-[50%] relative">
<div class="absolute -bottom-6 w-full text-center text-xs text-text-light-secondary dark:text-text-dark-secondary" style="">20</div>
</div>
</div>
</div>
</div>
<div class="flex flex-col gap-6">
<div class="bg-surface-light dark:bg-surface-dark rounded-3xl p-6 shadow-sm dark:shadow-none border border-border-light dark:border-border-dark flex flex-col">
<h2 class="text-xl font-bold mb-6" style="">Spending Breakdown&nbsp;</h2>
<div class="relative w-48 h-48 mx-auto my-4">
<div class="w-full h-full rounded-full border-[16px] border-[#2A2A2A]"></div>
<div class="absolute top-0 right-0 w-24 h-24 overflow-hidden origin-bottom-left">
<div class="w-48 h-48 rounded-full border-[16px] border-primary absolute top-0 right-0" style="clip-path: polygon(50% 0, 100% 0, 100% 50%, 50% 50%);"></div>
</div>
<div class="absolute -top-2 right-0 bg-surface-light dark:bg-gray-100 text-text-light-primary px-3 py-1.5 rounded-xl text-xs font-semibold shadow-md flex flex-col items-center">
<span class="" style="">Travel</span>
<span class="text-text-light-secondary" style="">1,485</span>
<div class="absolute -bottom-1.5 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-surface-light dark:bg-gray-100 rotate-45"></div>
</div>
<div class="absolute inset-0 flex flex-col items-center justify-center">
<span class="text-3xl font-bold" style="">12.5%</span>
<span class="text-xs text-text-light-secondary dark:text-text-dark-secondary mt-1" style="">Mobile</span>
</div>
</div>
<div class="flex justify-between items-end mt-auto pt-6 border-t border-border-light dark:border-border-dark">
<div class="flex flex-col gap-1">
<div class="flex items-center gap-1.5 text-text-light-secondary dark:text-text-dark-secondary text-xs" style="">
<span class="material-icons-outlined text-[14px]" style="">smartphone</span>Grocery&nbsp;</div>
<span class="font-bold text-sm" style="">15.20%</span>
</div>
<div class="flex flex-col gap-1">
<div class="flex items-center gap-1.5 text-text-light-secondary dark:text-text-dark-secondary text-xs" style="">
<span class="material-icons-outlined text-[14px]" style="">tablet_mac</span>Travel&nbsp;</div>
<span class="font-bold text-sm" style="">17.1%</span>
</div>
<div class="flex flex-col gap-1">
<div class="flex items-center gap-1.5 text-text-light-secondary dark:text-text-dark-secondary text-xs" style="">
<span class="material-icons-outlined text-[14px]" style="">desktop_windows</span>Food&nbsp;</div>
<span class="font-bold text-sm" style="">66.62%</span>
</div>
</div>
</div>
<div class="bg-surface-light dark:bg-surface-dark rounded-3xl p-6 shadow-sm dark:shadow-none border border-border-light dark:border-border-dark flex-1 flex flex-col">
<h2 class="text-xl font-bold mb-6" style="">Popular groups&nbsp;</h2>
<div class="flex flex-col gap-5 flex-1">
<div class="flex items-center justify-between group cursor-pointer">
<div class="flex items-center gap-4">
<div class="w-12 h-12 rounded-xl bg-gray-100 overflow-hidden flex-shrink-0">
<img alt="Abstract 3D shape" class="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBgBi6tL-O3rs5Q3bXnTqBazDgqA08UkG1cAOvZ3ZmTTYCjt-VJ9KJnTKtjEjPiGVT4iRAuhdjzLCaT5ZQ-ugn4TtuNj-wADyuRGQpZA1XjFeD3M2ZXmGQAOix3bTv34xdjqS3QuFa9OWNRERjmLrXTQ0Tl9E81blnM8-HgHUBlQHJoGm1Op0scMuhneQxdvxiL3XKpLaAD2ee1Qu4hudpZnY3zV6aytIs8H48JctFVwV1eNi1gRYgcZD6mzy7Vw8XWfcP7SIGhqMrl" style="">
</div>
<div class="flex flex-col">
<span class="font-semibold text-sm group-hover:text-primary transition-colors" style="">shabab</span>
</div>
</div>
<div class="flex flex-col items-end gap-1">
<span class="font-bold text-sm" style="">$3,250.00</span>
<span class="text-[10px] font-semibold text-success border border-success/30 px-2 py-0.5 rounded-full" style="">Active</span>
</div>
</div>
<div class="flex items-center justify-between group cursor-pointer relative bg-gray-50 dark:bg-transparent -mx-3 px-3 py-2 rounded-xl">
<div class="flex items-center gap-4">
<div class="w-12 h-12 rounded-xl bg-gray-100 overflow-hidden flex-shrink-0">
<img alt="Abstract landscape" class="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAHqHhGlqmwQCNzfKmry88g2Q4RdtUt0p_9qyeE5jTtd5BohsG5sYhL0xNu1FJ1vJThefAjEu3JKlR_2Dr75c8dZMTN3khv4IKUeCfH0tXHMqpKDONyw2gKilc1Gmi_FUnAtC4rfvM99AJwGoYh4NjAH3zalD1FpfITEVLjjMTi_iP6-rJlwW1dprgbrkM2yz6DY2JsRuixRGG8GZHmOeLdTHcgV0FTUViwAcDwxLsaPt99Di6HO37ObGPPOlZ4c2N8hqxacdyrCup3" style="">
</div>
<div class="flex flex-col">
<span class="font-semibold text-sm group-hover:text-primary transition-colors" style=""><br></span>
</div>
</div>
<div class="flex flex-col items-end gap-1">
<span class="font-bold text-sm" style="">$7,890.00</span>
<span class="text-[10px] font-semibold text-success border border-success/30 px-2 py-0.5 rounded-full" style="">Active</span>
</div>
</div>
<div class="flex items-center justify-between group cursor-pointer">
<div class="flex items-center gap-4">
<div class="w-12 h-12 rounded-xl bg-gray-100 overflow-hidden flex-shrink-0">
<img alt="Leather bag" class="w-full h-full object-cover bg-white" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDPMHLisvfG4PdYjqiCUF3ox44xl9mf88aDWWXKNqY-rBKgDhAplMwBgybbhK8p6hXvW8apuGnYFz_A4zeNOSx6e7n0ACxsh6fuYMfA2rXkHbLBgD3fDSZ4HsCBawAkS9ad_4bzxKE2xzmFx6CvdKOrKpVj681T5UYAuORlqIPV0Pz5v3YnhGulgsST8u8LQeCvuffjmcXYtTyrnk3eE-nc3S64zuAnb2aVyZhZlZEb243LAjhrjelAeL7rYuclxUKYKhH0Xqhn3Lfx" style="">
</div>
<div class="flex flex-col">
<span class="font-semibold text-sm group-hover:text-primary transition-colors" style="">t - travel</span>
</div>
</div>
<div class="flex flex-col items-end gap-1">
<span class="font-bold text-sm" style="">$1,500.00</span>
<span class="text-[10px] font-semibold text-text-light-secondary dark:text-text-dark-secondary border border-border-light dark:border-border-dark px-2 py-0.5 rounded-full" style="">Offline</span>
</div>
</div>
<div class="flex items-center justify-between group cursor-pointer">
<div class="flex items-center gap-4">
<div class="w-12 h-12 rounded-xl bg-gray-100 overflow-hidden flex-shrink-0">
<img alt="Abstract gradient" class="w-full h-full object-cover filter hue-rotate-90" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA1tGtbyIPPgQbaN18RXKeqssg5nHeVSwUKZQ3-cAyjp0gjZt-ShRyYKRWWrw9ec_0WxDPERviIXdP8axsG0Reo8skf9kUQPJQUFPq50p83uEnOBB4Hz_VUj8Z--NKlE8VM106pWZ6bXwjSasWrJWuVRWCOMnXDsvgRU6YIN6IyxWUll8HmH5CfAKTPeT4_PjixbbM5ONS4N2-vW2KhuM6FsPvOw0r118mRJe08S5j-3aQX9emkxfgEIiaVV5aIL_aKSdufBdwdnXDA" style="">
</div>
<div class="flex flex-col">
<span class="font-semibold text-sm group-hover:text-primary transition-colors" style="">home</span>
</div>
</div>
<div class="flex flex-col items-end gap-1">
<span class="font-bold text-sm" style="">$4,750.00</span>
<span class="text-[10px] font-semibold text-success border border-success/30 px-2 py-0.5 rounded-full" style="">Active</span>
</div>
</div>
</div>
<button class="w-full mt-6 py-3 px-4 border border-border-light dark:border-border-dark rounded-xl text-sm font-semibold text-text-light-primary dark:text-text-dark-primary hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors" style="">All groups&nbsp;</button>
</div>
</div>
</div>
</div>
</main>
</body></html>