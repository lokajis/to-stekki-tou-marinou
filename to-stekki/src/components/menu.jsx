import { useState } from "react";
import { foodMenu, drinkMenu, wineMenu } from "./Menu";
import MenuLogo from "../pictures/MenuLogo.png"

function Menu() {
    const [list, setList] = useState({ display: "none" });
    const [drinkList, setDrinkList] = useState({ display: "none" });
    const [wineList, setWineList] = useState({ display: "none" });

    function handleClick() {
        console.log("got cklicked");

        setList(prevState => ({
            display: prevState.display === "none" ? "" : "none"
        }));
    }

    function handleClickDrinkd() {
        console.log("got cklicked");

        setDrinkList(prevState => ({
            display: prevState.display === "none" ? "" : "none"
        }));
    }


    function handleClickWine() {
        console.log("got cklicked");

        setWineList(prevState => ({
            display: prevState.display === "none" ? "" : "none"
        }));
    }


    return (
        <div className="menuContainer">
            <div className="menuLogoContainer">     
                   <img className="MenuLogo" src={MenuLogo} alt="Menu Logo" />
            </div>

            <div  onClick={handleClick} className="foodMenu">


                <h1  className="foodTitle">Food 🍽️</h1>
                <div style={list} >
                    {foodMenu.map((foodItem, index) => {
                        return (
                            <div key={index} className="menuMap">
                                <div className="foodName">{foodItem.foodName}</div>
                                <div className="FoodPrice" >{foodItem.price}</div>
                            </div>
                        );
                    }
                    )}
                </div>



            </div>


            <div onClick={handleClickDrinkd} className="foodMenu">
                <h1  className="foodTitle">Drinks 🍻</h1>
                <div style={drinkList} >
                    {drinkMenu.map((drinkItem, index) => {
                        return (
                            <div key={index} className="menuMap">
                                <div className="foodName">{drinkItem.drinkName}</div>
                                <div className="FoodPrice" >{drinkItem.price}</div>
                            </div>
                        );
                    }
                    )}
                </div>



            </div>

            <div onClick={handleClickWine} className="foodMenu">
                <h1  className="foodTitle">Wine 🍾</h1>
                <div style={wineList} >
                    {wineMenu.map((wineItem, index) => {
                        return (
                            <div key={index} className="menuMap">
                                <div className="foodName">{wineItem.wineName} </div>
                                <div className="FoodPrice" >{wineItem.price}</div>
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