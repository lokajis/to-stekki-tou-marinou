import eatOut from "../pictures/eatOut.png"
import restaurantGuru from "../pictures/restaurantGuru.svg"
import wizguide from "../pictures/wizguide.svg"
import ReviewsLogo from "../pictures/ReviewsLogo.png"


function Revews() {
    return (
        <div className="revewContainer">

            <div className=" ReviewsLogoContainer">
                <img className="ReviewsLogo" src={ReviewsLogo} alt="Reviews Logo" />
            </div>

            <a className="eatOut webRevews" href="https://eatout.com.cy/listings/tostekkitoumarinou/"><img src={eatOut} alt="eat out logo" />
            </a>

            <a className="restaurantGuru webRevews" href="https://restaurantguru.com/To-Stekki-Toy-Marinoy-Lythrodontas"><img src={restaurantGuru} alt="restaurant guru logo" />
            </a>

            <a className="wizguide webRevews" href="https://cyprus.wiz-guide.com/places/to-steki-toy-marinoy/2622"><img src={wizguide} alt="wizguide logo" />
            </a>

        </div>
    );
}

export default Revews;