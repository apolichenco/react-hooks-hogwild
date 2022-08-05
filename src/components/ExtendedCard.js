import React from "react";

function ExtendedCard({hogData}) {

    return (
        <div>
            <img src={hogData.image} width="auto" height="300in"></img>
            <p>
                Name: {hogData.name}
                Specialty: {hogData.specialty}
                Weight: {hogData.weight}
                Greased? {hogData.greased}
                {hogData[4]}
            </p>
        </div>
    )
}

export default ExtendedCard