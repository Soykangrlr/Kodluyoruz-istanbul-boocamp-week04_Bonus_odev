
import { Link, } from "react-router-dom";
import "./category.css";
export function Category() {
  return (
	// Kategoriler Buttonları oluşturulup yölendirme yapıldı
    <div className="categoryButton">
				{/* <Link to="/ " >Tüm Kategoriler</Link> */}
				<Link to="products/categoys/içecekler">Soğuk İçecekler</Link>
				<Link to="products/categoys/pizza">Pizzalar</Link>
				<Link to="products/categoys/kahveler">Kahveler</Link>
				<Link to="products/categoys/waffle">Waffle</Link>
			</div>
			
  );
  
}
