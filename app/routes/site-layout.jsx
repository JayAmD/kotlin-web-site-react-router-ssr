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
        {/* Server renders skeleton, client renders the actual header.
        GlobalHeader reads window, a browser environment property 
        because of this it cannot be used with SSR and is rendered on the client side.
        This is a limitation of the GlobalHeader */}
        {isMounted ? <GlobalHeader searchConfig={{}} currentUrl={window.location.pathname} /> 
        : <div style={{ height: 64, backgroundColor: "#27282C" }} />}
        <Outlet />
        <GlobalFooter />
      </ThemeProvider>
    </div>
  );
}
