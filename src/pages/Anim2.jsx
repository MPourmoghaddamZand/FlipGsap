import React, { useState, useRef } from 'react'
import gsap from 'gsap'
import { Flip } from 'gsap/all'

gsap.registerPlugin(Flip)

const Anim2 = () => {
    const [active, setActive] = useState(true)
    const containerRef = useRef()

    const toggle = () => {
        const items = containerRef.current.querySelectorAll('li , button')
        const state = Flip.getState(items)

        setActive(prev => !prev)

        requestAnimationFrame(() => {
            Flip.from(state, {
                duration: 1,
                ease: 'power2.inOut',
                stagger: 0
            })
            if (active) {
                gsap.to(items, {
                    scale: 2,
                    duration: 1,
                    marginTop: 50
                })
            }
            else {
                gsap.to(items, {
                    scale: 1,
                    duration: 1,
                })
            }
        })
    }

    return (
        <div className="w-full h-screen flex flex-col items-center justify-center " ref={containerRef}>
            {active ? (
                <ul className="flex justify-center items-center gap-20">
                    <li className="bg-blue-300 px-4 py-2 rounded transition-colors duration-500">1</li>
                    <li className="bg-blue-300 px-4 py-2 rounded transition-colors duration-500">2</li>
                    <li className="bg-blue-300 px-4 py-2 rounded transition-colors duration-500">3</li>
                </ul>
            ) : (
                <ul className="flex flex-col justify-center items-center gap-4">
                    <li className="bg-red-300 px-4 py-2 rounded transition-colors duration-500 ">1</li>
                    <li className="bg-red-300 px-4 py-2 rounded transition-colors duration-500">2</li>
                    <li className="bg-red-300 px-4 py-2 rounded transition-colors duration-500">3</li>
                </ul>
            )}
            <button onClick={toggle} className="mt-6 px-4 py-2 bg-black text-white rounded">
                Toggle Layout
            </button>
        </div>
    )
}

export default Anim2
