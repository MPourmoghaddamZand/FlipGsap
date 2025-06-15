import { useNavigate } from "react-router-dom";
import gsap from "gsap";
import { Flip } from "gsap/Flip";

gsap.registerPlugin(Flip);

export default function HomePage() {
    const navigate = useNavigate();

    const handleClick = (id) => {
        const state = Flip.getState(`[data-flip-id="${id}"]`);
        navigate(`/details/${id}`);
        requestAnimationFrame(() => {
            Flip.from(state, {
                duration: 0.6,
                ease: "power2.inOut",
            });
        });
    };

    return (
        <div className="p-10 grid grid-cols-2 gap-4">
            {[1, 2, 3].map((id) => (
                <div
                    key={id}
                    data-flip-id={`card-${id}`}
                    onClick={() => handleClick(`card-${id}`)}
                    className="bg-blue-500 text-white p-6 rounded cursor-pointer"
                >
                    Item {id}
                </div>
            ))}
        </div>
    );
}
