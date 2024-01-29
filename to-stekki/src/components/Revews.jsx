import eatOut from "../pictures/eatOut.png"
import restaurantGuru from "../pictures/restaurantGuru.svg"
import wizguide from "../pictures/wizguide.svg"


function Revews() {
    return (
        <div className="revewContainer">

            <a className="eatOut webRevews" href="https://eatout.com.cy/listings/tostekkitoumarinou/"><img src={eatOut} alt="" />
            </a>

            <a className="restaurantGuru webRevews" href="https://restaurantguru.com/To-Stekki-Toy-Marinoy-Lythrodontas"><img src={restaurantGuru} alt="" />
            </a>

            <a className="wizguide webRevews" href="https://cyprus.wiz-guide.com/places/to-steki-toy-marinoy/2622"><img src={wizguide} alt="" />
            </a>

        </div>
    );
}

export default Revews;