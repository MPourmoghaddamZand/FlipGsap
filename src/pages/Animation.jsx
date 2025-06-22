import gsap from 'gsap'
import { Flip } from 'gsap/all'
import React, { useEffect, useRef, useState } from 'react'

gsap.registerPlugin(Flip)

const Animation = () => {
    const [colmn, setColmn] = useState('grid-cols-3')
    const ref = useRef()
    const flipState = useRef(null)

    const handleClick = () => {
        // گرفتن تمام عناصر داخل container شامل دکمه
        const items = ref.current.querySelectorAll('p, button')
        flipState.current = Flip.getState(items)
        setColmn(prev => (prev === 'grid-cols-3 scale-105' ? 'grid-cols-6 scale-100' : 'grid-cols-3 scale-105'))
    }

    useEffect(() => {
        if (flipState.current) {
            Flip.from(flipState.current, {
                delay: .2,
                duration: 1,
                ease: 'power2.inOut',
                stagger: 0.02,
            })
            flipState.current = null
        }
    }, [colmn])
    useEffect(() => {
        const items = ref.current.querySelectorAll('p , button')
        flipState.current = Flip.getState(items)
        // تغییر اولیه colmn بعد از mount تا انیمیشن اجرا شه
        setColmn('grid-cols-6 scale-100')
    }, [])

    return (
        <div className="p-10 h-screen" ref={ref}>
            <div className={`grid ${colmn} gap-4`}>
                {Array.from({ length: 12 }).map((_, i) => (
                    <p key={i} className="bg-blue-200 p-4 border-2 text-center">
                        {i + 1}
                    </p>
                ))}
            </div>
            <button
                onClick={handleClick}
                className="mt-4 bg-black text-white px-4 py-2 rounded"
            >
                Click on me
            </button>
        </div>
    )
}

export default Animation
