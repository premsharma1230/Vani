import React from "react";
import HomePage from "./pages/homePage/homePage.component";
import WebRoutes from "./pages/RouteSeperator/webRoutes.component";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BooksDetail from "./pages/BooksDetail/BooksDetail.component";
import Login from "./pages/Login";
import Registeration from "./pages/Registeration";
import InstitutionalLogin from "./pages/InstitutionalLogin";
import { Booklist } from "./pages/BookListing/Booklist";
import { BookDescription } from "./pages/BookDescription/BookDescription";
import { Author } from "./pages/author/Author";
import { AuhorDescription } from "./pages/author/authorDescription/AuhorDescription";
import { Wishlist } from "./pages/Wishlist/Wishlist";

export default function RouteSeperater() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/InstitutionalLogin" element={<InstitutionalLogin />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Registeration" element={<Registeration />} />
          <Route element={<WebRoutes />}>
            <Route path="/" exact element={<HomePage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/BookDetail" element={<BooksDetail />} />
            <Route path="/BookList" element={<Booklist />} />
            <Route path="/BookDescription" element={<BookDescription />} />
            <Route path="/Author" element={<Author />} />
            <Route path="/AuhorDescription" element={<AuhorDescription />} />
            <Route path="/Wishlist" element={<Wishlist />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}
//
