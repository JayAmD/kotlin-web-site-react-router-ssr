import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router";
import Header from "@jetbrains/kotlin-web-site-ui/out/components/header";
import Footer from "@jetbrains/kotlin-web-site-ui/out/components/footer";

export default function SiteLayout() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div>
      {isMounted ? <Header searchConfig={{}} currentUrl={window.location.pathname} /> : null}
      <Outlet />
      <Footer />
    </div>
  );
}
