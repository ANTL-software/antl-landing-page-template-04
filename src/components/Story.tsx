import type { VehicleSite } from "../types";
type StoryProps = { story: VehicleSite["story"] };
export function Story({ story }: StoryProps) { return <section className="story" id="atelier"><div className="story__copy"><p className="eyebrow">{story.eyebrow}</p><h2>{story.title}</h2><p>{story.text}</p><strong>{story.fact}</strong></div><img src={story.image.src} alt={story.image.alt} loading="lazy" /></section>; }
