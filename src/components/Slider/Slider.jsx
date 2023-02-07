import { useState } from "react";
import Slide from "./Slide/Slide";
import banner from '../../assets/slide.png'

const initialItemsState = [
    {
        id: 1,
        background: "#F4EFE9",
        title: "New Balance - new collection",
        banner: banner,
        button: {
            url: "/",
            text: "Предзаказать"
        }
    },
    {
        id: 2,
        background: "#FFF",
        title: "Nike air force",
        banner: banner,
        button: {
            url: "/",
            text: "Купить сейчас"
        }
    },
    {
        id: 3,
        background: "#FFF",
        title: "Кеды VANS Old Skool SpongeBob SquarePants Off The Wall",
        banner: "https://myreact.ru/wp-content/uploads/2021/09/786172_08.jpg-1200x1200.jpeg.webp",
        button: {
            url: "/",
            text: "Купить сейчас"
        }
    },
    {
        id: 4,
        background: "#FFF",
        title: "Женское Air Jordan 4 Retro PSG Paris Saint-Germain",
        banner: "https://myreact.ru/wp-content/uploads/2021/07/fdf8cb87f4416adbacc880f989553d26.jpg.webp",
        button: {
            url: "/",
            text: "Купить сейчас"
        }
    },
    {
        id: 5,
        background: "#FFF",
        title: "Кроссовки Air Jordan 1 Low Black Toe",
        banner: "https://myreact.ru/wp-content/uploads/2020/08/553558-116_2-1200x720.jpg.webp",
        button: {
            url: "/",
            text: "Купить сейчас"
        }
    },
]

const Slider = () => {
    const [items, setItems] = useState(initialItemsState);
    const [currentIndex,setCurrentIndex] = useState(0);

    const next = setCurrentIndex.bind(this, currentIndex >= items.length - 1 ? 0 : currentIndex + 1);

    const prev = setCurrentIndex.bind(this, currentIndex <= 0 ? items.length-1 : currentIndex - 1);

    return (
        <section className="slider">
            <div className="wrapper">
                <div className="slides">
                    <Slide slide={items[currentIndex]}/>
                </div>
                
                <div className="controls">
                    <button onClick={prev} className="prev">
                        <i className="fa-solid fa-chevron-left"></i>
                    </button>
                    <button onClick={next} className="next">
                        <i className="fa-solid fa-chevron-right"></i>
                    </button>
                </div>
            </div>
        </section>
    );
}

export default Slider;