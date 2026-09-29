import type { VehicleSite } from "../types";
import { LinkButton } from "./LinkButton";
type ContactProps = { contact: VehicleSite["contact"] };
export function Contact({ contact }: ContactProps) { return <section className="contact section" id="contact"><p className="eyebrow">{contact.eyebrow}</p><h2>{contact.title}</h2><p>{contact.text}</p><LinkButton link={contact.cta} /><small>{contact.note}</small></section>; }
