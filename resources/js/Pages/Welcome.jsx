import { Head, router } from '@inertiajs/react';
import Detail from './Pancong/Detail'
import Header from './Components/Header';
export default function Welcome(props) {
    return (
        <>
            <Head title="Pancong Abidzar" />
            <div className='max-w-screen-sm mx-auto overflow-y-hidden min-h-screen'>
                <Header />
                <div className='container mt-10 mx-auto'>
                    <h1 className='border-t-2 text-center mt-4 p-2 border-black font-bold'>Pancong</h1>
                </div>
                <div className='grid grid-cols-4 container' >
                    {props.pancong ? props.pancong.map((data, i) => {
                        return (
                            <div className="col-span-2 m-4 bg-abu rounded hover:cursor-pointer" key={i} onClick={() => router.get('detail')}>
                                <div className="flex flex-col m-5 gap-2">
                                    <img src={`assets/gambar/${data.gambar}`} alt="" className='border-4 rounded-lg border-white h-[15em]' />
                                    <h1 className='font-bold'>{data.nama}</h1>
                                    <p className='font-bold'>{data.harga.toLocaleString('id-ID')}</p>
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
                <div className='grid grid-cols-4 container mb-10'>
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
                <div className='hidden bottom-4 bg-[#FF686B] rounded-2xl mt-10 shadow-gray-500 shadow-md max-w-screen-sm container'>
                    <div className="gap-3 flex flex-row justify-between ">
                        <div className="absulote flex">
                            <img src="assets/icon/cart.png" alt="" className='border-2 p-3 bg-white rounded-lg' />
                            <div className="flex flex-col self-center m-2">
                                <h3 className='text-[18px] font-bold'>Total</h3>
                                <h2 className='text-[16px] font-bold'>Rp. 7.0000</h2>
                            </div>
                        </div>
                        <div className="flex flex-row">
                            <h1 className='self-center text-end font-bold m-4'>Check OUT</h1>
                        </div>
                    </div>
                </div>
            </div >
        </>
    );
}
