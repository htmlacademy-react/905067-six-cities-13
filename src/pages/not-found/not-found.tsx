import {Link} from "react-router-dom"
function NotFound():JSX.Element{
return(
   <div style={{ textAlign: "center" }}>
    <h1>404 Not Found</h1>
    <p>К сожалению такой страницы не существует.</p>
    <Link to="/" style={{ textDecoration: "underline" }}>Вернуться на главную страницу</Link>
    </div>
)
}

export default NotFound;