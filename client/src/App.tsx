import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Provider as ReduxProvider} from 'react-redux';
import { renderRoutes } from "react-router-config";
import AppRouter from "./AppRouter";
import store from "./store/store";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import styles from './App.module.scss';
import Breadcrumb from "./components/Breadcrumbs/Breadcrumb";

function App() {
	const a =0;
    return (
        <ReduxProvider store={store}>
            <BrowserRouter>
                <div className={styles.app}>
                    <Header/>
                    <div className={styles.content}>
                        <Breadcrumb/>
                        <AppRouter/>
                    </div>
                    <Footer/>
                </div>
            </BrowserRouter>
        </ReduxProvider>

    )
}

export default App
