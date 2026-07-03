import { site, nav } from "@/lib/data";
import { LinkedInIcon, GitHubIcon, MailIcon } from "./ui/Icons";

export default function Footer() {
  const year = new Date().getFullYear();
  const socials = [
    { label: "LinkedIn", href: site.socials.linkedin, Icon: LinkedInIcon },
    { label: "GitHub", href: site.socials.github, Icon: GitHubIcon },
    { label: "Email", href: `mailto:${site.email}`, Icon: MailIcon },
  ];

  return (
    <footer className="border-t border-edge bg-base">
      <div className="container-px py-12">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <a href="#top" className="font-mono text-base text-ink">
              <span className="text-mint">&lt;</span>
              {site.name.split(" ")[0].toLowerCase()}
              <span className="text-mint"> /&gt;</span>
            </a>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              Full-stack developer building fast, scalable products with React,
              Next.js, and Node. Open to new projects and roles.
            </p>
          </div>

          <nav aria-label="Footer" className="flex flex-col gap-2.5">
            <span className="font-mono text-xs uppercase tracking-wider2 text-muted/70">
              Explore
            </span>
            {nav.map((item) => (
              <a key={item.href} href={item.href} className="link-underline w-fit text-sm text-ink">
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex flex-col gap-3">
            <span className="font-mono text-xs uppercase tracking-wider2 text-muted/70">
              Elsewhere
            </span>
            <div className="flex gap-3">
              {socials.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-edge text-ink transition-all duration-300 hover:-translate-y-0.5 hover:border-mint/50 hover:text-mint"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-edge pt-6 font-mono text-xs text-muted sm:flex-row">
          <p>© {year} {site.name}. All rights reserved.</p>
          <p>
            <span className="text-mint">$</span> built with next.js + tailwind
          </p>
        </div>
      </div>
    </footer>
  );
}
