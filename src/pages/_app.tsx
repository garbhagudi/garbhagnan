// import FloatPhone from "components/floatPhone";
import Header from "components/header/header";
import Footer from "components/footer/footer";
import "../styles/globals.css";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Loading from "components/Loading";
import * as ga from "../lib/google-analytics";
import Script from "next/script";

const MyApp = ({ Component, pageProps }) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleRouteChange = (url: any) => {
      ga.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  useEffect(() => {
    const start = () => {
      setLoading(true);
    };
    const end = () => {
      setLoading(false);
    };
    router.events.on("routeChangeStart", start);
    router.events.on("routeChangeComplete", end);
    router.events.on("routeChangeError", end);
    return () => {
      router.events.off("routeChangeStart", start);
      router.events.off("routeChangeComplete", end);
      router.events.off("routeChangeError", end);
    };
  });

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=G-852ET6BST6`}
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-852ET6BST6');
        `}
          </Script>
          <Header />
          <main className="min-h-screen">
            <Component {...pageProps} />
          </main>
          {/* <FloatPhone /> */}
          <Footer />
        </div>
      )}
    </>
  );
};

export default MyApp;
