import { HiArrowUpRight } from "react-icons/hi2";
import type { Link } from "../types";

type LinkButtonProps = { link: Link; className?: string };

export function LinkButton({ link, className = "" }: LinkButtonProps) {
  return <a className={`link-button ${className}`.trim()} href={link.href}><span>{link.label}</span><HiArrowUpRight aria-hidden="true" /></a>;
}
