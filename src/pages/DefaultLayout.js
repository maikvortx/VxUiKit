import React from 'react';
import Header from '../components/Header/Header';
import { ModalProvider } from '../components/Modal/Modal';

export default function DefaultLayout({ children }) {
  return (
    <ModalProvider>
      <div className="App">
        <Header
          fixed
          color="transparent"
          changeColorOnScroll={{
            height: 400,
            color: "white"
          }}
          // {...rest}
        />
        {children}
      </div>
    </ModalProvider>
  );
}
