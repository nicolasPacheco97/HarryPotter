import Card from "../misc/card/Card"
import "./cardContainer.scss"

const CardContainer = ({characters}) => {
    return (
        <>
            <div className="card-container">
                {characters.length > 0 && characters.map((e, i) => (
                    <li key={i}>
                        <Card character={e}/>
                    </li>
                ))}
            </div>
        </>
    )
}

export default CardContainer