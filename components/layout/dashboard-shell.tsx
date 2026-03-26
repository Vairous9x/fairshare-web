"use client";

// ==========================================
// 📦 IMPORTS
// ==========================================
import { useEffect, useState, useCallback, type ReactNode } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import { Sidebar } from "./sidebar";
import { Header } from "./header";
import { MobileNav } from "./mobile-nav";
import { Spinner } from "@/components/ui/spinner";

// ==========================================
// 🧩 TYPES
// ==========================================
interface DashboardShellProps {
  children: ReactNode;
}

interface UserProfile {
  id: string;
  display_name: string;
  avatar_url: string;
}

// ==========================================
// ⚙️ SKELETON
// ==========================================
function ShellSkeleton() {
  return (
    <div className="flex min-h-screen w-full items-center justify-center overflow-hidden bg-background">
      <div className="flex flex-col items-center gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary">
          <span className="text-lg font-black text-primary-foreground">F</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-foreground-muted">
          <Spinner className="h-4 w-4" />
          Loading…
        </div>
      </div>
    </div>
  );
}

// ==========================================
// 🎨 UI RENDER
// ==========================================
export function DashboardShell({ children }: DashboardShellProps) {
  const router = useRouter();
  const supabase = createClient();

  const [loading, setLoading] = useState(true);
  const [profile, setProfile] = useState<UserProfile>({
    id: "",
    display_name: "User",
    avatar_url: "",
  });
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  /* ── Auth + Profile Fetch ────────────────────────── */

  const initialize = useCallback(async () => {
    try {
      const {
  data: { user },
  error: authError,
} = await supabase.auth.getUser();
if (!user || authError) {
  router.replace("/login");
  return;
}

      const { data: profileData } = await supabase
        .from("profiles")
        .select("display_name, avatar_url")
        .eq("id", user.id)
        .single();

      if (profileData) {
        setProfile({
          id: user.id,
          display_name: profileData.display_name || "User",
          avatar_url: profileData.avatar_url || "",
        });
      }
    } catch (err) {
      console.error("Shell init error:", err);
    } finally {
      setLoading(false);
    }
  }, [supabase, router]);

  useEffect(() => {
    initialize();
  }, [initialize]);

  /* ── Auth State Listener ─────────────────────────── */

  useEffect(() => {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event: string, session: any) => {
      if (!session) {
        router.replace("/login");
      }
    });

    return () => subscription.unsubscribe();
  }, [supabase, router]);

  /* ── Sign Out ────────────────────────────────────── */

  async function handleSignOut() {
    try {
      await supabase.auth.signOut();
    } catch (error) {
      console.error("Error signing out:", error);
    } finally {
      // Force redirect to login after sign out
      window.location.href = "/login";
    }
  }

  /* ── Loading State ───────────────────────────────── */

  if (loading) return <ShellSkeleton />;

  return (
    <div className="relative min-h-screen w-full max-w-full overflow-x-hidden bg-background">
      {/* ── Desktop Sidebar (hidden on mobile) ───── */}
      <Sidebar
        displayName={profile.display_name}
        avatarUrl={profile.avatar_url}
        onSignOut={handleSignOut}
      />

      {/* ── Mobile Sidebar Overlay ───────────────── */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="absolute inset-y-0 start-0 w-[280px] animate-in slide-in-from-left duration-300">
            <div className="flex h-full flex-col border-e border-border bg-background">
              <div className="flex h-16 items-center justify-between border-b border-border px-6">
                <div className="flex items-center gap-2.5">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary">
                    <span className="text-sm font-black text-primary-foreground">F</span>
                  </div>
                  <span className="text-lg font-bold text-foreground">
                    FairShare
                  </span>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex h-8 w-8 items-center justify-center rounded-lg text-foreground-muted transition-colors hover:bg-background-secondary hover:text-foreground"
                >
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              <div className="flex-1 overflow-y-auto">
                <Sidebar
                  displayName={profile.display_name}
                  avatarUrl={profile.avatar_url}
                  onSignOut={handleSignOut}
                  isMobile={true}
                />
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="flex w-full min-w-0 flex-col overflow-x-hidden ps-0 md:ps-[260px]">
        {/* Header */}
        <Header
          displayName={profile.display_name}
          avatarUrl={profile.avatar_url}
          userId={profile.id}
          onMobileMenuToggle={() => setMobileMenuOpen(true)}
        />

        <main className="w-full min-w-0 flex-1 px-4 pb-32 sm:px-6 md:pb-8 lg:px-8">
          {children}
        </main>
      </div>

      {/* ── Mobile Bottom Nav ────────────────────── */}
      {!mobileMenuOpen && (
        <MobileNav
          displayName={profile.display_name}
          avatarUrl={profile.avatar_url}
        />
      )}
    </div>
  );
}
