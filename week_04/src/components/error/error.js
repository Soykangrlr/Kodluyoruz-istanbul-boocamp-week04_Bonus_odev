import { useDocumentTitle } from "../../hooks";
export function Error(){
    useDocumentTitle("Error Page")
    return (
        // Route Hİç bir yere Düşmezse error sayfasına düşecek
    <p className="fs-1 text-center mt-5">The page you were looking for was not found</p>)
}