import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { split } from 'postcss/lib/list'
import React, { useState } from 'react'

gsap.registerPlugin(useGSAP);

const gsapAnimate = (target, delay = 0) => {
    const timeLine = gsap.timeline(
        {
            defaults: {
                delay: delay,
                duration: 1,
                ease: 'back.out'
            }
        }
    )

    timeLine
        .fromTo(target,
            {
                scale: 0
            },
            {
                scale: 1
            }
        )

}

const Tes2 = () => {
    useGSAP(() => {
        // const a = document.querySelectorAll('td');
        // const b = document.querySelectorAll('input')
        // const c = document.querySelectorAll('#total')
        // const list = [...a, ...b, ...c]
        gsapAnimate('#a', Math.random())
        // list.forEach(element => {
        //     gsapAnimate(element, Math.random())
        // });
    })
    const [value, setValue] = useState("")
    const [totalvalue, setTotalValue] = useState(0)
    const numClick = (num) => {
        setValue((prev) => prev + num)
    }
    const equal = () => {
        setValue('')
        if (value.includes('+')) {
            const sec = value.split('+');
            setTotalValue(() =>
                parseInt(sec[0]) + parseInt(sec[1])
            )
        }
        else if (value.includes('*')) {
            const sec = value.split('*');
            setTotalValue(() =>
                parseInt(sec[0]) * parseInt(sec[1])
            )
        }
        else if (value.includes('/')) {
            const sec = value.split('/');
            setTotalValue(() =>
                parseInt(sec[0]) / parseInt(sec[1])
            )
        }
        else if (value.includes('-')) {
            const sec = value.split('-');
            setTotalValue(() =>
                parseInt(sec[0]) - parseInt(sec[1])
            )
        }

    }

    const Clear = () => {
        setValue('')
        setTotalValue(0)
    }

    const backSlash = () => {
        if (value.length > 0) {
            setValue(
                (prev) => prev.substring(0, prev.length - 1)
            )
        }
    }

    const log = () => {
        setTotalValue(Math.log10(value))
    }

    return (
        <div className='flex justify-center items-center'>
            <div>
                <table className='flex flex-col gap-2 bg-red-200 p-5'>
                    <input className='px-2' type="text" value={value} />
                    <span className='' id='total'>{totalvalue}</span>
                    <tr>
                        <td id='a' onClick={() => numClick("1")}> <span id='b'>1</span> </td>
                        <td onClick={() => numClick("2")}>2</td>
                        <td onClick={() => numClick("3")}>3</td>
                        <td onClick={() => numClick("+")}>+</td>
                    </tr>
                    <tr>
                        <td onClick={() => numClick("4")}>4</td>
                        <td onClick={() => numClick("5")}>5</td>
                        <td onClick={() => numClick("6")}>6</td>
                        <td onClick={() => numClick("-")}>-</td>
                    </tr>
                    <tr>
                        <td onClick={() => numClick("7")}>7</td>
                        <td onClick={() => numClick("8")}>8</td>
                        <td onClick={() => numClick("9")}>9</td>
                        <td onClick={() => numClick("9")}>/</td>
                    </tr>
                    <tr>
                        <td onClick={() => numClick(".")}>.</td>
                        <td onClick={() => numClick("0")}>0</td>
                        <td onClick={() => numClick("*")}>*</td>
                        <td onClick={() => equal()}>=</td>
                    </tr>
                    <tr>
                        <td onClick={Clear}>C</td>
                        <td onClick={backSlash}>{'<-'}</td>
                        <td onClick={log}>{'Log'}</td>
                    </tr>
                </table>
            </div>
        </div>
    )
}

export default Tes2