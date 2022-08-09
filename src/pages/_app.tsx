import FloatPhone from "components/floatPhone";
import Header from "components/header/header";
import Footer from "components/footer/footer";
import "../styles/globals.css";

const MyApp = ({ Component, pageProps }) => {
  return (
    <div>
      <Header />
      <main className="min-h-screen">
        <Component {...pageProps} />
      </main>
      <FloatPhone />
      <Footer />
    </div>
  );
};

export default MyApp;
