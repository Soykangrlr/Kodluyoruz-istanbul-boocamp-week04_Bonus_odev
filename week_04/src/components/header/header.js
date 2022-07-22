import { useActions } from "../../hooks"
import { Link } from "react-router-dom";
export function Header() {
  const { getCartCount, toogleCart } = useActions();
  
  return (
    <nav className="navbar navbar-expand-lg bg-light sticky-top">
      <div className="container-fluid">
        {/* Restorant isminine tıklatınca Ana Sayfa Yönlendirmesi Yapıldı */}
        <Link to="/" className="navbar-brand" >React Bootcamp Restaurant Menu</Link>
        <button className="navbar-toggler" type="button">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">

          </ul>
          <div className="d-flex">
            <button
              onClick={toogleCart}
              className="btn btn-outline-success">Sepetim {`(${getCartCount()})`}</button>
          </div>
        </div>
      </div>
    </nav>
  )
}