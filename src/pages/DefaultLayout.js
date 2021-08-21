import React from 'react';
import Header from '../library/components/Header/Header';
import { ModalProvider } from '../library/components/Modal/Modal';

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
        />
        {children}
      </div>
    </ModalProvider>
  );
}
