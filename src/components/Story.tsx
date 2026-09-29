import type { VehicleSite } from "../types";
type StoryProps = { story: VehicleSite["story"] };
export function Story({ story }: StoryProps) { return <section className="story" id="atelier"><div className="story__visual"><img src={story.image.src} alt={story.image.alt} loading="lazy" /><div className="story__caption"><span>Diagnostic & préparation</span><span>2026</span></div></div><div className="story__copy"><p className="eyebrow">{story.eyebrow}</p><h2>{story.title}</h2><p>{story.text}</p><strong>{story.fact}</strong></div></section>; }
