import Layout from "@/components/Layout";
import "@/styles/index.scss";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

import { config } from "@fortawesome/fontawesome-svg-core";
import { AnimatePresence } from "framer-motion";
// Tell Font Awesome to skip adding the CSS automatically
// since it's already imported above
config.autoAddCss = false;

export default function App({ Component, pageProps }) {
    return (
        <Layout>
            <AnimatePresence>
                <Component {...pageProps} />
            </AnimatePresence>
            <ToastContainer />
        </Layout>
    );
}
