"use client";

// ==========================================
// 📦 IMPORTS
// ==========================================
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Avatar } from "@/components/ui/avatar";
import {
  LayoutDashboard,
  Users,
  UserCircle,
  PlusCircle,
  LogOut,
  ChevronRight,
  Sparkles,
  Settings,
} from "lucide-react";
import { motion } from "framer-motion";

// ==========================================
// 🧩 TYPES
// ==========================================
interface SidebarProps {
  displayName: string;
  avatarUrl: string;
  onSignOut: () => void;
  isMobile?: boolean;
}

interface NavItem {
  label: string;
  href: string;
  icon: React.ElementType;
}

// ==========================================
// ⚙️ LOGIC
// ==========================================
const NAV_ITEMS: NavItem[] = [
  { label: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { label: "Friends", href: "/dashboard/friends", icon: Users },
  { label: "Profile", href: "/dashboard/profile", icon: UserCircle },
  { label: "Settings", href: "/dashboard/settings", icon: Settings },
];

function isActive(pathname: string, href: string): boolean {
  if (href === "/dashboard") return pathname === "/dashboard";
  return pathname.startsWith(href);
}

// ==========================================
// 🎨 UI RENDER
// ==========================================
export function Sidebar({
  displayName,
  avatarUrl,
  onSignOut,
  isMobile = false,
}: SidebarProps) {
  const pathname = usePathname();

  return (
    <aside
      className={
        isMobile
          ? "flex h-full w-full flex-col bg-background"
          : "fixed inset-y-0 start-0 z-40 hidden w-[260px] flex-col border-e border-border bg-background md:flex"
      }
    >
      {/* ── Logo (desktop only) ── */}
      {!isMobile && (
        <div className="flex h-16 shrink-0 items-center gap-2.5 border-b border-border ps-6">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary">
            <span className="text-sm font-black text-primary-foreground">F</span>
          </div>
          <span className="text-lg font-semibold tracking-tight text-foreground">
            FairShare
          </span>
        </div>
      )}

      {/* ── Navigation ─────────────────────────────── */}
      <motion.nav
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.2 }}
        className="flex-1 space-y-1 overflow-y-auto px-3 py-5"
      >
        <p className="mb-3 ps-3 text-[10px] font-medium uppercase tracking-widest text-foreground-subtle">
          Menu
        </p>

        {NAV_ITEMS.map((item) => {
          const active = isActive(pathname, item.href);
          const Icon = item.icon;

          return (
            <motion.div
              key={item.href}
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
            >
              <Link
                href={item.href}
                className={`group relative flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-all duration-200 ${
                  active
                    ? "bg-background-secondary text-foreground"
                    : "text-foreground-muted hover:text-foreground hover:bg-background-secondary"
                }`}
              >
                <Icon
                  className={`h-[18px] w-[18px] shrink-0 transition-transform duration-200 ${
                    active
                      ? "text-foreground"
                      : "text-foreground-muted group-hover:text-foreground"
                  }`}
                />
                <span>{item.label}</span>

                {active && (
                  <ChevronRight className="ms-auto h-4 w-4 text-foreground-subtle" />
                )}
              </Link>
            </motion.div>
          );
        })}

        {/* ── Create Group CTA ─────────────────────── */}
        <div className="pt-4">
          <p className="mb-3 ps-3 text-[10px] font-medium uppercase tracking-widest text-foreground-subtle">
            Quick Actions
          </p>
          <Link
            href="/dashboard/groups/new"
            className="group flex items-center gap-3 rounded-xl border border-dashed border-border px-3 py-2.5 text-sm font-medium text-foreground-muted transition-all duration-200 hover:border-border-strong hover:bg-background-secondary hover:text-foreground"
          >
            <PlusCircle className="h-[18px] w-[18px] shrink-0 text-foreground-subtle transition-colors group-hover:text-foreground" />
            <span>Create Group</span>
            <Sparkles className="ms-auto h-3.5 w-3.5 text-foreground-subtle group-hover:text-foreground" />
          </Link>
        </div>
      </motion.nav>

      {/* ── Bottom Section: User + Sign Out ─────── */}
      <div className="shrink-0 border-t border-border p-3">
        {/* User Card */}
        <Link
          href="/dashboard/profile"
          className="group mb-2 flex items-center gap-3 rounded-xl px-3 py-2.5 transition-all duration-200 hover:bg-background-secondary"
        >
          <div className="relative shrink-0">
            <Avatar src={avatarUrl} name={displayName} size="sm" />
            <div className="absolute -bottom-0.5 -end-0.5 h-3 w-3 rounded-full border-2 border-background bg-success" />
          </div>
          <div className="min-w-0 flex-1">
            <p className="truncate text-sm font-semibold text-foreground">
              {displayName}
            </p>
            <p className="truncate text-[11px] text-foreground-muted">View profile</p>
          </div>
          <ChevronRight className="h-4 w-4 shrink-0 text-foreground-subtle transition-transform group-hover:translate-x-0.5" />
        </Link>

        {/* Sign Out */}
        <button
          onClick={onSignOut}
          className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-foreground-muted transition-all duration-200 hover:bg-danger-bg hover:text-danger"
        >
          <LogOut className="h-[18px] w-[18px] shrink-0" />
          <span>Sign out</span>
        </button>
      </div>
    </aside>
  );
}
