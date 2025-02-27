import React, { useEffect, useRef, useState } from 'react'

//assets
import ChevronDown from '@/assets/icons/ChevronDown'
import ChevronUp from '@/assets/icons/ChevronUp'

//packages
import autoAnimate from '@formkit/auto-animate'

const PageMessage = ({ title, message }) => {
    const [open, setOpen] = useState(true)
    const parent = useRef(null)

    useEffect(() => {
        parent.current && autoAnimate(parent.current, {
            duration: 250,
            easing: 'ease-in-out'
        })
    }, [parent])

    return (
        <div className='w-full h-fit flex-1'>
            <div style={{
                borderTopLeftRadius: 6,
                borderTopRightRadius: 6,
                borderBottomLeftRadius: open ? 0 : 6,
                borderBottomRightRadius: open ? 0 : 6
            }} className='bg-[#383EDE] p-4 text-white text-3xl font-bold  flex items-center justify-between'>
                <p>{title}</p>
                <button onClick={() => setOpen(!open)}>
                    {open ? <ChevronUp /> : <ChevronDown />}
                </button>
            </div>
            <div ref={parent} className=' bg-[#F5F4F9] rounded-b-md h-fit overflow-hidden'>
                {open && <p className='p-4 text-black'>{message}</p>}
            </div>
        </div>
    )
}

export default PageMessage