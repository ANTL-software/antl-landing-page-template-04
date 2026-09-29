import type { VehicleSite } from "../types";
type ApproachProps = { approach: VehicleSite["approach"] };
export function Approach({ approach }: ApproachProps) { return <section className="approach section" id="methode"><div className="section-heading"><p className="eyebrow">{approach.eyebrow}</p><h2>{approach.title}</h2></div><ol>{approach.steps.map((step) => <li key={step.number}><span>{step.number}</span><h3>{step.title}</h3><p>{step.text}</p></li>)}</ol></section>; }
