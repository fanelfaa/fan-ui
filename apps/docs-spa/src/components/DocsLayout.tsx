import { type JSX, type Component } from "solid-js";
import { useRouter } from "@tanstack/solid-router";
import { ScrollArea } from "@ui/solid";
import { sidebarNav } from "../sidebar-nav";

interface DocsLayoutProps {
  children?: JSX.Element;
}

export const DocsLayout: Component<DocsLayoutProps> = (props) => {
  const router = useRouter();

  function getLinkClass(href: string): string {
    const currentPath = router.state.location.pathname;
    const isActive = currentPath === href;
    const base = "block rounded-md px-3 py-1.5 text-sm transition-colors";
    return isActive
      ? `${base} text-foreground font-medium bg-muted/80`
      : `${base} text-muted-foreground hover:text-foreground hover:bg-muted`;
  }

  return (
    <div class="mx-auto max-w-7xl flex">
      {/* Sidebar */}
      <aside class="hidden lg:block w-64 shrink-0 border-r border-border sticky top-14 self-start">
        <ScrollArea class="h-[calc(100vh-3.5rem)]">
          <nav class="p-4">
            {sidebarNav.map((category) => (
              <div class="mb-6">
                <h4 class="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-2 px-3">
                  {category.category}
                </h4>
                <ul class="space-y-0.5">
                  {category.links.map((link) => (
                    <li>
                      <a href={link.href} class={getLinkClass(link.href)}>
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </ScrollArea>
      </aside>

      {/* Main content */}
      <main class="flex-1 min-w-0">
        <div class="max-w-4xl mx-auto px-6 py-10 prose dark:prose-invert">{props.children}</div>
      </main>
    </div>
  );
};
