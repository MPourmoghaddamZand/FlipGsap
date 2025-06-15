import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { captureFlipState, runFlipAnimation } from "./flipStore";

const items = [
    { id: 1, title: "محصول ۱", image: "/img1.jpg" },
    { id: 2, title: "محصول ۲", image: "/img2.jpg" },
    { id: 3, title: "محصول ۳", image: "/img3.jpg" },
];

export default function Gallery() {
    const navigate = useNavigate();

    const handleClick = (item) => {
        captureFlipState(`[data-flip-id="${item.id}"]`);
        navigate(`/product/${item.id}`, { state: item });
    };

    useEffect(() => {
        runFlipAnimation(".flip");
    }, []);

    return (
        <div className="p-8 grid grid-cols-3 gap-6">
            {items.map((item) => (
                <div
                    key={item.id}
                    className="cursor-pointer"
                    onClick={() => handleClick(item)}
                >
                    <img
                        src={item.image}
                        data-flip-id={item.id}
                        className="flip w-full h-40 object-cover rounded-lg shadow"
                        alt={item.title}
                    />
                    <h2 className="mt-2 text-center text-lg flip">{item.title}</h2>
                </div>
            ))}
        </div>
    );
}
