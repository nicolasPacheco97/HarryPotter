import "./layout.scss"
import title from "../../assets/title.svg"

const Layout = (props) => {
    return (
        <>
            <div className="layout">
                <img className="layout__title" src={title}></img>
                {props.children}
            </div>
        </>
    )
}

export default Layout