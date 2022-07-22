import React from "react"
import { ErrorBoundary } from "./components/error-boundary"
import { Header } from "./components/header"
import { Products } from "./components/products"
import { ShoppingCart } from "./components/shopping-cart"
import "./example-app.css"
import {  Route, Routes } from "react-router-dom";
import { Category } from "./components/category"
import { ProductDetail } from "./components/product- detail/product-detail"
import { Shopping } from "./components/shopping-components/shopping"
import { Error } from "./components/error"

export default function () {

  return (
    <>
        <Header />
        <div className="container example-app">
          {/* Category navbar eklendi */}
        <Category/>
        {/* gelen pathlere  göre sayfalar çağrıldı */}
			<Routes>
				<Route path="/" element={<Products />}></Route>
        <Route path="products/:c_id/:id" element={<ProductDetail/>}></Route>
				<Route path="products/categoys/:id" element={<Products />}></Route>
        <Route path="/sepetim" element={<Shopping />}></Route>
        <Route path="*" element={<Error />}></Route>
			</Routes>
      
        </div>
        <ErrorBoundary>
          <ShoppingCart />
          </ErrorBoundary>
    </>
  )
}
