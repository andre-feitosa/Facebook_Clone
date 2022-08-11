import '../styles/globals.css'
import 'react-toastify/dist/ReactToastify.css';
import type { AppProps } from 'next/app'
import React from 'react'
import { Provider } from 'react-redux'
import { persistor, store } from '../redux/store'
import { PersistGate } from 'redux-persist/integration/react'
import { ToastContainer } from 'react-toastify';

function MyApp({ Component, pageProps }: AppProps) {
  return (
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <Component {...pageProps} />
          <ToastContainer/>
        </PersistGate>
      </Provider>
    )
}

export default MyApp
