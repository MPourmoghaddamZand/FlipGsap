import { useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { captureFlipState, runFlipAnimation } from "./flipStore";
import gsap from "gsap";
import { Flip } from "gsap/all";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(Flip, useGSAP);

let flipState = null;

export default function ProductDetail() {
    const navigate = useNavigate();
    const { state } = useLocation();

    const buttonRef = useRef();

    const handleBack = () => {
        captureFlipState('.flip , .title');
        gsap.to(
            buttonRef.current, {
            y: -80,
            duration: .2,
            ease: 'back.out',
            onComplete: (() => {
                navigate(-1);
            })
        })
    }

    useGSAP(() => {
        const buttom = gsap.timeline();
        buttom.from(
            buttonRef.current,
            {
                y: -80,
                duration: 1,
                ease: 'back.out'
            }
        )
    })

    useEffect(() => {
        runFlipAnimation(".flip , .title");

    }, []);

    if (!state) return <div className="p-10">محصولی یافت نشد.</div>;

    return (
        <div className="p-10 max-w-xl mx-auto">
            <button
                ref={buttonRef}
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
            <h1 data-flip-id={state.title} className="title text-center text-3xl mt-6">{state.title}</h1>
        </div>
    );
}
