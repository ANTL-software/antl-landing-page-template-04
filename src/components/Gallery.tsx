import type { VehicleSite } from "../types";
import { LinkButton } from "./LinkButton";

type GalleryProps = { gallery: VehicleSite["gallery"] };

export function Gallery({ gallery }: GalleryProps) {
  return <section className="gallery section" id="parc"><div className="gallery__visual"><img src={gallery.image.src} alt={gallery.image.alt} loading="lazy" /><div className="gallery__label"><p className="eyebrow">{gallery.eyebrow}</p><span>Garage Élan · 2026</span></div></div><div className="gallery__copy"><h2>{gallery.title}</h2><p>{gallery.text}</p><LinkButton link={gallery.cta} /></div></section>;
}
