import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { captureFlipState, runFlipAnimation } from "./flipStore";

export default function ProductDetail() {
    const navigate = useNavigate();
    const { state } = useLocation();

    const handleBack = () => {
        captureFlipState(`[data-flip-id="${state.id}"]`);
        navigate(-1);
    };

    useEffect(() => {
        runFlipAnimation(".flip");
    }, []);

    if (!state) return <div className="p-10">محصولی یافت نشد.</div>;

    return (
        <div className="p-10 max-w-xl mx-auto">
            <button
                onClick={handleBack}
                className="mb-6 px-4 py-2 bg-blue-600 text-white rounded"
            >
                بازگشت
            </button>

            <img
                src={state.image}
                data-flip-id={state.id}
                className="flip w-full h-80 object-cover rounded-xl shadow-xl mx-auto"
                alt={state.title}
            />
            <h1 className="flip text-center text-3xl mt-6">{state.title}</h1>
        </div>
    );
}
