import { Loading } from "../loading";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AddToCart } from "../add-to-cart";
import {  useDocumentTitle } from "../../hooks";
import "./style.css";
const URL = "http://localhost:4000/api/products/";
export function ProductDetail() {
  useDocumentTitle("Ürün Detay")
  // Gelene paramslara göre URL tönledirme yapıldı
  let { c_id, id } = useParams();

  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadData(true);
  }, []);

  const setAppData = (res) => {
    const items = res.map((item) => {
      item.products = item.products.map((p) => {
        p.quantity = 0;
        return p;
      });
      return item;
    });
    setItems(items);
  };

  const loadData = (initial = true) => {
    if (initial) setLoading(true);
// Pramslar Url ile birleştirildi
    const FULL_URL = decodeURIComponent(
      `${URL}${c_id ? c_id : ""}/${id ? id : ""}?id=${id}`
    );
    fetch(FULL_URL)
      .then((res) => res.json())
      .then((res) => {
        if (initial) {
          setTimeout(() => {
            setLoading(false);
            setAppData(res);
          }, 1000);
        } else {
          setAppData(res);
        }
      })
      .catch((e) => {
        console.log(e);
        setLoading(false);
      });
  };
  return (
    <>
      <Loading show={loading} />
      {items.map((category) => (
        <>
          {category.products.map((item, i) => (
            <div className="detail-product mt-5">
              <div className="row">
                <div className="col-sm-4">
                  <img
                    src={item.image_url}
                    className="card-img-top product-image"
                    alt="..."
                  />
                </div>
                <div className="col-sm-8 mt-3">
                  <h3>{item.name}</h3>
                 
                  <p className="text-category">{item.category}</p>

                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </p>
                  <div className="detail-footer">
                    <AddToCart item={item} />
                    <span className="price">
                      {item.price.toFixed(2)} {"TL"}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </>
      ))}
    </>
  );
}
