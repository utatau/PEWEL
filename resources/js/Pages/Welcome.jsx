import { Head } from '@inertiajs/react';
import Detail from './Pancong/Detail'
export default function Welcome({ auth, laravelVersion, phpVersion }) {
    const detaill = () => {
        console.log(1)
    }
    return (
        <>
            <Head title="Pancong Abidzar" />
            <div className='max-w-screen-sm mx-auto overflow-y-hidden min-h-screen'>
                <div className='flex flex-col'>
                    <img src="assets/gambar/header.png" alt="header" className='w-[40em]' />
                    <div className='rounded-3xl gap-4 bg-white flex justify-around -mt-7 shadow-2xl mx-2'>
                        <h1 className='text-2xl font-bold flex mt-3'>PANCONG BIDZAR</h1>
                        <h2 className='px-6 rounded-full mt-8 mb-2 text-white bg-ijo py-2 font-sans'>Open</h2>
                    </div>
                    <p className=' bg-pink rounded-full text-center mt-4 shadow-2xl py-1.5 mx-2'>Hallo Table No sekian</p>
                </div>
                <div className='container mt-10 mx-auto'>
                    <h1 className='border-t-2 text-center mt-4 p-2 border-black font-bold'>Pancong</h1>
                </div>
                {/* menu pancong*/}
                <div className='grid grid-cols-4 container'>
                    <div className="col-span-2 m-4 bg-abu rounded hover:cursor-pointer" onClick={() => detaill()}>
                        <div className="flex flex-col m-5 gap-2">
                            <img src="assets/gambar/header.png" alt="" className='border-4 rounded-md border-white h-[15em]' />
                            <h1 className='font-bold'>Nama menu</h1>
                            <p className='font-bold'>Rp. 10000</p>
                        </div>
                    </div>
                    <div className="col-span-4 m-4 ">
                        <a className='flex justify-end text-kuning' href='#'>See All</a>
                    </div>
                </div>
                <div className='container mt-10 mx-auto'>
                    <h1 className='border-t-2 text-center mt-4 p-2 border-black font-bold'>Minuman</h1>
                </div>
                <div className='grid grid-cols-4 container'>
                    <div className="col-span-2 m-4 bg-abu rounded hover:cursor-pointer" onClick={() => { }}>
                        <div className="flex flex-col m-5 gap-2">
                            <img src="assets/gambar/header.png" alt="" className='border-4 rounded-md border-white h-[15em]' />
                            <h1 className='font-bold'>Nama menu</h1>
                            <p className='font-bold'>Rp. 10000</p>
                        </div>
                    </div>
                    <div className="col-span-4 m-4 ">
                        <a className='flex justify-end text-kuning' href='#'>See All</a>
                    </div>
                </div>
                <div className='relative bottom-4'>
                    <div className="bg-pink gap-3">
                        <div className="absulote flex flex-row">
                            <img src="assets/icon/cart.png" alt="" className='border-2 p-3 bg-white rounded-md' />
                            <h1 className='text-2xl self-center text-end'>Check OUT</h1>
                            <h2>Rp. 7.0000</h2>
                            <h3>Total</h3>
                        </div>
                        <div className="">

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
