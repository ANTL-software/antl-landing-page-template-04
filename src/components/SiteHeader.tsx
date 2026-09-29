import type { VehicleSite } from "../types";
import { LinkButton } from "./LinkButton";

type SiteHeaderProps = { site: VehicleSite };

export function SiteHeader({ site }: SiteHeaderProps) {
  return <header className="site-header"><a className="site-header__brand" href="#top">{site.brand}</a><nav aria-label="Navigation principale">{site.navigation.map((link) => <a href={link.href} key={link.label}>{link.label}</a>)}</nav><LinkButton link={site.headerCta} /></header>;
}
