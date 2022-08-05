import React, {useState} from "react";

function Card({hogData}) {
    const [toggleCard, setToggleCard] = useState(true);

    function handleTogglingCard() {
        setToggleCard(!toggleCard)
    }

    const str = hogData["highest medal achieved"]

    const theExtendedCard =
    <div> 
        <p>Specialty: {hogData.specialty}</p>
        <p>Weight: {hogData.weight}</p>
        <p>Greased? {hogData.greased ? "Yep" : "Nope"}</p>
        <p>Highest Medal Achieved: {str.charAt(0).toUpperCase() + str.slice(1)}</p>
    </div>

    return (
        <div className="ui eight wide column" onClick={handleTogglingCard}>
            <img src={hogData.image} width="100%" height="auto"></img>
            <p>
                Name: {hogData.name}
                {toggleCard ? "" : theExtendedCard}
                </p>
        </div>
    )

}

export default Card