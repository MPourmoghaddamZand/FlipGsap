import gsap from "gsap";
import { Flip } from "gsap/Flip";

gsap.registerPlugin(Flip);

let flipState = null;

export function captureFlipState(targets = ".flip") {
    flipState = Flip.getState(targets);
}

export function runFlipAnimation(targets = ".flip") {
    if (flipState) {
        Flip.from(flipState, {
            targets,
            duration: 0.5,
            ease: "power1.out",
        });
        flipState = null;
    }
}
