import Header from "../components/Header";
import "../styles/globals.css";
import "@splidejs/splide/dist/css/splide.min.css";
import 'react-tabs/style/react-tabs.css';
// import "@splidejs/splide/dist/css/themes/splide-sea-green.min.css";
function MyApp({ Component, pageProps }) {
  return (
    <div className="font-display tracking-widest">
      <div className="h-5 bg-slate-900 text-white hidden md:flex justify-between px-10 items-center">
        <p className="text-xs">Say Bye To Buy & Rent 300+ Premium Products</p>
        <p className="text-xs">Download the app now</p>
      </div>
      <Header />
      <div className="mt-5    w-full">
        <Component {...pageProps} />;
      </div>
    </div>
  );
}

export default MyApp;
