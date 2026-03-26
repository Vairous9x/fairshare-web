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
  Plus,
  UserCircle,
} from "lucide-react";

// ==========================================
// 🧩 TYPES
// ==========================================
interface MobileNavProps {
  displayName: string;
  avatarUrl: string;
}

interface MobileNavItem {
  label: string;
  href: string;
  icon: React.ElementType;
  isSpecial?: boolean;
}

// ==========================================
// ⚙️ LOGIC
// ==========================================

const MOBILE_NAV_ITEMS: MobileNavItem[] = [
  { label: "Home", href: "/dashboard", icon: LayoutDashboard },
  { label: "Friends", href: "/dashboard/friends", icon: Users },
  { label: "New", href: "/dashboard/groups/new", icon: Plus, isSpecial: true },
  { label: "Profile", href: "/dashboard/profile", icon: UserCircle },
];

function isActive(pathname: string, href: string): boolean {
  if (href === "/dashboard") return pathname === "/dashboard";
  return pathname.startsWith(href);
}

// ==========================================
// 🎨 UI RENDER
// ==========================================
export function MobileNav({ displayName, avatarUrl }: MobileNavProps) {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-5 start-4 end-4 z-50 md:hidden">
      <div className="mx-auto max-w-sm glass rounded-2xl px-2 py-2">
        <div className="flex items-center justify-around">
          {MOBILE_NAV_ITEMS.map((item) => {
            const active = isActive(pathname, item.href);
            const Icon = item.icon;

            if (item.isSpecial) {
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group relative flex flex-col items-center"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-sm transition-all duration-300 active:scale-95">
                    <Icon className="h-5 w-5" />
                  </div>
                </Link>
              );
            }

            return (
              <Link
                key={item.href}
                href={item.href}
                className="group relative flex flex-col items-center gap-0.5 px-3 py-1"
              >
                <div
                  className={`flex h-8 w-8 items-center justify-center rounded-xl transition-all duration-300 ${
                    active
                      ? "text-foreground"
                      : "text-foreground-subtle group-hover:text-foreground"
                  }`}
                >
                  <Icon className="h-[18px] w-[18px]" />
                </div>

                <span
                  className={`text-[10px] font-semibold transition-colors ${
                    active ? "text-foreground" : "text-foreground-subtle"
                  }`}
                >
                  {item.label}
                </span>

                {/* Active Dot Indicator */}
                {active && (
                  <div className="absolute -bottom-0.5 h-1.5 w-1.5 rounded-full bg-foreground" />
                )}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
