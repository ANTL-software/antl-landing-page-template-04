import type { CSSProperties, ReactNode } from "react";
import { Approach, Collection, Contact, Gallery, Hero, SiteHeader, Story } from "./components";
import { useVehicleSite } from "./hooks";
import type { SiteSectionId, VehicleSite } from "./types";
import "./styles/site.scss";

type ThemeVariable = "--site-canvas" | "--site-ink" | "--site-dark" | "--site-accent" | "--site-muted" | "--site-light-ink";
type ThemeStyle = CSSProperties & Record<ThemeVariable, string>;

function getThemeStyle(theme: VehicleSite["theme"]): ThemeStyle {
  return { "--site-canvas": theme.canvas, "--site-ink": theme.ink, "--site-dark": theme.dark, "--site-accent": theme.accent, "--site-muted": theme.muted, "--site-light-ink": theme.lightInk };
}

function App() {
  const { site } = useVehicleSite();
  const sections: Record<SiteSectionId, ReactNode> = { collection: <Collection collection={site.collection} />, gallery: <Gallery gallery={site.gallery} />, story: <Story story={site.story} />, approach: <Approach approach={site.approach} />, contact: <Contact contact={site.contact} /> };
  const visibleSections = site.sections.filter((section) => section.enabled);
  return <main style={getThemeStyle(site.theme)}><SiteHeader site={site} /><Hero hero={site.hero} />{visibleSections.map((section) => <div key={section.id}>{sections[section.id]}</div>)}<footer><span>{site.footer.copyright}</span><a href={`mailto:${site.footer.email}`}>{site.footer.email}</a><span>{site.footer.city}</span></footer></main>;
}
export default App;
