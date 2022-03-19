import Button from "../misc/button/Button"

import "./filter.scss"

const Filter = () => {
    return (
        <>
            <div className="filter">
                <p className="filter__title">Selecciona tu filtro</p>
                <div className="filter__container">
                    <Button label="ESTUDIANTES"/>
                    <Button label="STAFF"/>
                </div>
            </div>
        </>
    )
}

export default Filter