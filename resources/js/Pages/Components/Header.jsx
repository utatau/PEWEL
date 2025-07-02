import { useEffect, useState } from "react"
const Header = () => {
    const [meja, setMeja] = useState(null)
    useEffect(() => {
        const storedMeja = localStorage.getItem("no_meja")
        if (!storedMeja) {
            window.location.href = "/notfound"
        } else {
            setMeja(storedMeja)
        }
    }, [])
    return (
        <div className='flex flex-col'>
            <img src="assets/gambar/header.png" alt="header" className='w-[40em]' />
            <div className='rounded-3xl gap-4 bg-white flex justify-around -mt-7 shadow-2xl mx-2'>
                <h1 className='text-2xl font-bold flex mt-3'>PANCONG BIDZAR</h1>
                <h2 className='px-6 rounded-full mt-8 mb-2 text-white bg-ijo py-2 font-sans'>Open</h2>
            </div>
            <p className=' bg-pink rounded-full text-center mt-4 shadow-2xl py-1.5 mx-2'>Hallo Meja no {meja}</p>
        </div>
    )
}

export default Header;