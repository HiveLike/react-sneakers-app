import { NavLink } from "react-router-dom";
import image from '../../../assets/slide.png'

const Slide = () => {
    return (
        <div className="slide">

            <div style={{backgroundColor: "#F4EFE9"}} className="part">
                <h2>
                    Stan Smith,<br/>Forever
                </h2>

                <NavLink to="/">
                    Купить
                </NavLink>
            </div>

            <img src={image} alt="React Sneakers" />

        </div>
    );
}

export default Slide;