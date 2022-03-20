import Button from "../misc/button/Button"

import "./filter.scss"

const Filter = ({handleClick, actualOpt}) => {
    return (
        <>
            <div className="filter">
                <p className="filter__title">Selecciona tu filtro</p>
                <div className="filter__container">
                    <Button label="ESTUDIANTES" handleClick={handleClick} actualOpt={actualOpt}/>
                    <Button label="STAFF" handleClick={handleClick} actualOpt={actualOpt}/>
                </div>
            </div>
        </>
    )
}

export default Filter