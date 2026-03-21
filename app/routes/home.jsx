import { useEffect, useState } from "react";

import { Welcome } from "../welcome/welcome";
import { OverviewPage } from "../static/js/page/index/index.jsx";

import Header from "@jetbrains/kotlin-web-site-ui/out/components/header";
import Footer from "@jetbrains/kotlin-web-site-ui/out/components/footer";

export function meta() {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div>
      {isMounted ? <Header searchConfig={{}} currentUrl={window.location.pathname} /> : null}
      <OverviewPage />
      {isMounted ? <Footer /> : null}
    </div>
  );
}
