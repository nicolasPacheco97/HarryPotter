import "./layout.scss"
import title from "../../assets/title.svg"
import Bar from "../bar/Bar"

const Layout = (props) => {
    return (
        <>
            <div className="layout">
                <Bar/>
                <img className="layout__title" src={title}></img>
                {props.children}
            </div>
        </>
    )
}

export default Layout