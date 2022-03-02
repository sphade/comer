import Header from "../components/Header";
import "../styles/globals.css";
import "@splidejs/splide/dist/css/splide.min.css";

import "react-tabs/style/react-tabs.css";
// import "@splidejs/splide/dist/css/themes/splide-sea-green.min.css";
function MyApp({ Component, pageProps }) {

  return (
    <div className="font-display tracking-widest">
      <Header />
      <div className="   w-full bg-gray-200">
        <Component {...pageProps} />;
      </div>
    </div>
  );
}

export default MyApp;
