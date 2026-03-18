import { Welcome } from "../welcome/welcome";
import { OverviewPage } from "../static/js/page/index/index.jsx";


export function meta() {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return <OverviewPage />;
}
