import { useEffect, useState } from "react";
import { Outlet } from "react-router";
import GlobalHeader from "@jetbrains/kotlin-web-site-ui/out/components/header";
import "@jetbrains/kotlin-web-site-ui/out/components/header/index.css";
import GlobalFooter from "@jetbrains/kotlin-web-site-ui/out/components/footer";
import "@jetbrains/kotlin-web-site-ui/out/components/footer/index.css";
import { ThemeProvider } from "@rescui/ui-contexts";

export default function SiteLayout() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div>
      <ThemeProvider theme="dark">
        {isMounted ? <GlobalHeader searchConfig={{}} currentUrl={window.location.pathname} /> : null}
        <Outlet />
        <GlobalFooter />
      </ThemeProvider>
    </div>
  );
}
