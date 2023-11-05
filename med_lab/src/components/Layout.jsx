import React from "react";
import {Outlet} from "react-router-dom";

function Layout() {

  return (
    <div className="App-page">
        <header>
            Laboratorium medyczne 
        </header>
        <div id='app-body'>
            <Outlet />
        </div>
        <footer>
            © 2023 Aleksandra Ciura, Jakub Kulejewski. Wszelkie prawa zastrzeżone.
        </footer>
    </div>
  );
};

export default Layout;