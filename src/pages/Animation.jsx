import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { Flip } from 'gsap/all'
import React, { useEffect, useRef, useState } from 'react'

gsap.registerPlugin(Flip)

const Animation = () => {
    const [colmn, setColmn] = useState('grid-cols-2')
    const ref = useRef()
    const flipState = useRef(null)

    // این تابع برای کلیک
    const handleClick = () => {
        const items = ref.current.querySelectorAll('p')
        flipState.current = Flip.getState(items)
        setColmn(prev => prev === 'grid-cols-3' ? 'grid-cols-2' : 'grid-cols-3')
    }

    // انیمیشن روی تغییر colmn
    useEffect(() => {
        if (flipState.current) {
            Flip.from(flipState.current, {
                duration: 1.2,
                ease: 'power2.inOut',
                stagger: 0.03,
            })
            flipState.current = null
        }
    }, [colmn])

    // انیمیشن اولیه (وقتی صفحه لود شد)
    useEffect(() => {
        const items = ref.current.querySelectorAll('p')
        flipState.current = Flip.getState(items)
        // تغییر اولیه colmn بعد از mount تا انیمیشن اجرا شه
        setColmn('grid-cols-3')
    }, [])

    return (
        <div className="p-10">
            <div
                ref={ref}
                className={`grid ${colmn} gap-4 transition-all`}
            >
                {Array.from({ length: 12 }).map((_, i) => (
                    <p key={i} className="bg-blue-200 p-4 text-center">
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
