import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Provider as ReduxProvider} from 'react-redux';
import { renderRoutes } from "react-router-config";
import AppRouter from "./AppRouter";
import store from "./store/store";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import styles from './App.module.scss';
import Breadcrumb from "./components/Breadcrumbs/Breadcrumb";
import {ToastContainer} from "react-toastify";
import React from "react";
import "react-toastify/dist/ReactToastify.css";
import { ConfigProvider } from "antd";

function App() {
    return (
        <ReduxProvider store={store}>
            <BrowserRouter>
                <ConfigProvider
                    theme={{
                        token: {
                            colorPrimary: '#994C4C',
                            // fontFamily: 'var(--Ubuntu--FontFamily)'
                        },
                    }}
                >
                <div className={styles.app}>
                    <Header/>

                    <div className={styles.content}>
                        <div className={styles.breadcrumb}>
                        <Breadcrumb/>
                        </div>
                        <AppRouter/>
                        <ToastContainer
                            position="top-right"
                            autoClose={1000}
                            hideProgressBar
                            newestOnTop={false}
                            closeOnClick
                            rtl={false}
                            pauseOnFocusLoss
                            draggable
                            pauseOnHover
                            theme="light"/>
                    </div>
                    <Footer/>

                </div>
                </ConfigProvider>
            </BrowserRouter>
        </ReduxProvider>

    )
}

export default App
