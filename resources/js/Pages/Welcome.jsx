import { Head, router } from '@inertiajs/react';
import Detail from './Pancong/Detail'
export default function Welcome(props) {
    console.log(props.pancong)

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
                <div className='grid grid-cols-4 container' >
                    {props.pancong ? props.pancong.map((data, i) => {
                        return (
                            <div className="col-span-2 m-4 bg-abu rounded hover:cursor-pointer" key={i} onClick={() => detaill()}>
                                <div className="flex flex-col m-5 gap-2">
                                    <img src={`assets/gambar/${data.gambar}`} alt="" className='border-4 rounded-lg border-white h-[15em]' />
                                    <h1 className='font-bold'>{data.nama}</h1>
                                    <p className='font-bold'>{data.harga}</p>
                                </div>
                            </div>
                        )
                    }) : ''}
                    <div className="col-span-4 m-4 ">
                        <a className='flex justify-end text-kuning hover:cursor-pointer' onClick={() => router.get('/allpancong')}>See All</a>
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
                <div className='bottom-4'>
                    <div className="bg-[#FF686B] gap-3 flex flex-row justify-between rounded-md">
                        <div className="absulote flex">
                            <img src="assets/icon/cart.png" alt="" className='border-2 p-3 bg-white rounded-lg' />
                            <div className="flex flex-col self-center m-2">
                                <h3 className='text-[18px] font-bold'>Total</h3>
                                <h2 className='text-[16px] font-bold'>Rp. 7.0000</h2>
                            </div>
                        </div>
                        <div className="flex flex-row">
                            <h1 className='text-2xl self-center text-end'>Check OUT</h1>
                        </div>
                    </div>
                </div>
            </div >
        </>
    );
}
