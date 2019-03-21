import React from 'react';
import Header from './header';
import Footer from './footer';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import AppRouter from './appRouter';

const Layout = (props) => {
  return(
    <BrowserRouter>
      <AppRouter />
      <Header />
      <div className="contentContainer">
        <main className='layout-main'>
          {props.children}
        </main>
      </div>
      <Footer />
    </BrowserRouter>
  )
};

export default Layout;