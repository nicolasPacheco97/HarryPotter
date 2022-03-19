import { useWidth } from "../../../helpers/useWidth"
import "./card.scss"

const Card = ( ) => {
    const width = useWidth()

    return (
        <>
            <div className="card">
                <div className="card__image"></div>
                <div className="card__info">
                    {width > 640 && <span> VIVO / ESTUDIANTE </span>}
                    <p>Harry Potter</p>
                    {width < 640 && <div>
                        <p>VIVO</p>
                        <p>ESTUDIANTE</p>
                    </div>}

                    {width > 640 && <div>
                        <p><span>Cumpleaños:</span> 31-07-1980</p>
                        <p><span>Género:</span> 31-07-1980</p>
                        <p><span>Color de ojos:</span> 31-07-1980</p>
                        <p><span>Color de pelo:</span> 31-07-1980</p>
                    </div>}
                </div>
            </div>
        </>
    )
}

export default Card