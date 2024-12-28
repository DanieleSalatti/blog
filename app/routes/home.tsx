import { Welcome } from "../welcome/welcome";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Daniele Salatti" },
    { name: "description", content: "Daniele's blog" },
  ];
}

export default function Home() {
  return <Welcome />;
}
