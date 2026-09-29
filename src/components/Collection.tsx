import { HiArrowUpRight } from "react-icons/hi2";
import type { VehicleSite } from "../types";

type CollectionProps = { collection: VehicleSite["collection"] };

export function Collection({ collection }: CollectionProps) {
  return <section className="collection section" id="collection"><div className="collection__intro"><p className="eyebrow">{collection.eyebrow}</p><h2>{collection.title}</h2><p>{collection.text}</p></div><div className="vehicle-grid">{collection.items.map((vehicle, index) => <a className={`vehicle-card vehicle-card--${index + 1}`} href={vehicle.href} key={vehicle.name}><div className="vehicle-card__image"><img src={vehicle.image.src} alt={vehicle.image.alt} loading={index === 0 ? "eager" : "lazy"} /></div><div className="vehicle-card__meta"><div><p>{vehicle.year}</p><h3>{vehicle.name}</h3><span>{vehicle.description}</span></div><HiArrowUpRight aria-hidden="true" /></div></a>)}</div></section>;
}
