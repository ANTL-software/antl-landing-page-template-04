import type { VehicleSite } from "../types";
import { LinkButton } from "./LinkButton";

type HeroProps = { hero: VehicleSite["hero"] };

export function Hero({ hero }: HeroProps) {
  return <section className="hero" id="top"><img className="hero__image" src={hero.image.src} alt={hero.image.alt} style={{ objectPosition: hero.image.position }} fetchPriority="high" /><div className="hero__veil" /><div className="hero__content"><p className="eyebrow">{hero.eyebrow}</p><h1>{hero.title}</h1><div className="hero__bottom"><p>{hero.text}</p><LinkButton link={hero.cta} /></div></div></section>;
}
