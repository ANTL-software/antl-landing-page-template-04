import { Approach, Collection, Contact, Hero, SiteHeader, Story } from "./components";
import { useVehicleSite } from "./hooks";
import "./styles/site.scss";

function App() {
  const { site } = useVehicleSite();
  const visible = new Set(site.sections.filter((section) => section.enabled).map((section) => section.id));
  return <main><SiteHeader site={site} /><Hero hero={site.hero} />{visible.has("collection") ? <Collection collection={site.collection} /> : null}{visible.has("story") ? <Story story={site.story} /> : null}{visible.has("approach") ? <Approach approach={site.approach} /> : null}{visible.has("contact") ? <Contact contact={site.contact} /> : null}<footer><span>{site.footer.copyright}</span><a href={`mailto:${site.footer.email}`}>{site.footer.email}</a><span>{site.footer.city}</span></footer></main>;
}
export default App;
