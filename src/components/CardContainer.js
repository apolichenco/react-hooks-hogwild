import React, {useState} from "react";
import Card from "./Card"

function CardContainer({hogData}) {
    const [toggleGreased, setTogggleGreased] = useState("all")
    const [sort, setSort] = useState(true)
   
    function handleSort() {
        setSort(!sort);
      }

    function handleToggleGreased(e) {
        setTogggleGreased(e.target.value)
    }

    let hogList = hogData.filter((hog) => { 
        const greasedUp = hog.greased
        if (toggleGreased === "all") { 
            return true
        }
        if (toggleGreased === greasedUp.toString()) {
            return true
        }
        else {
            return false        
        }
    })
    
    function sortNames() {
        hogList.sort(function(a, b){
            let x = a.name.toLowerCase();
            let y = b.name.toLowerCase();
            if (x < y) {return -1;}
            if (x > y) {return 1;}
            return 0;
          });
    }

    sort ? sortNames() : hogList.sort((firstItem, secondItem) => firstItem.weight - secondItem.weight)

    return (
        <div>
            <select onChange={handleToggleGreased}>
                <option value="all">All</option>
                <option value={true}>Filter Greased</option>
                <option value={false}>Filter Not Greased</option>
            </select>
            <button onClick={handleSort}>{sort ? "Sort By Weight" : "Sort By Name"}</button>
            <br></br>
            <br></br>
            <div className="ui grid container">
                {hogList.map((hog) => <Card key={hogData.indexOf(hog)} hogData={hog}/>)}
            </div>
        </div>
    )
}

export default CardContainer;