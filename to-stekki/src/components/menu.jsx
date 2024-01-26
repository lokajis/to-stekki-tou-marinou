import { useState } from "react";
import { foodMenu, drinkMenu, wineMenu } from "./Menu";


function Menu() {
    const [list, setList] = useState({display:"none" });

    function handleClick (){
        console.log("got cklicked");

        setList(prevState => ({
            display: prevState.display === "none" ? "" : "none"
        }));
    }




    return (
        <div className="menuContainer">

            
            <div className="foodMenu">


<h1 onClick={handleClick}   className="foodTitle">Food Menu</h1>
<div style={list} >
                {foodMenu.map((foodItem, index) => {
                    return (
                        <div key={index}  className="menuMap">
                            <div className="foodName">{foodItem.foodName}</div>
                            <div className="FoodPrice" >{foodItem.price}</div>
                        </div>
                    );
                }
                )}
                </div>



            </div>

        </div>
    );
}

export default Menu;