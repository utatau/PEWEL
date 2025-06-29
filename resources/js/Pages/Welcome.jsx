import { Head, router } from '@inertiajs/react';
import Header from './Components/Header';
import CartBar from './Components/Cart';
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
                            <div className="col-span-2 m-4 bg-abu rounded hover:cursor-pointer" key={i} onClick={() => router.get(`/detail/${data.id}`)}>
                                <div className="flex flex-col m-5 gap-2">
                                    <img src={`assets/gambar/${data.gambar}`} alt="" className='border-4 rounded-lg border-white h-[15em]' />
                                    <h1 className='font-bold'>{data.nama}</h1>
                                    <p className='font-bold'>Rp. {data.harga.toLocaleString('id-ID')}</p>
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
                    {props.pancong ? props.pancong.map((data, i) => {
                        return (
                            <div className="col-span-2 m-4 bg-abu rounded hover:cursor-pointer" key={i} onClick={() => router.get(`/detail/${data.id}`)}>
                                <div className="flex flex-col m-5 gap-2">
                                    <img src={`assets/gambar/${data.gambar}`} alt="" className='border-4 rounded-lg border-white h-[15em]' />
                                    <h1 className='font-bold'>{data.nama}</h1>
                                    <p className='font-bold'>Rp. {data.harga.toLocaleString('id-ID')}</p>
                                </div>
                            </div>
                        )
                    }) : ''}
                    <div className="col-span-4 m-4 ">
                        <a className='flex justify-end text-kuning' href='#'>See All</a>
                    </div>
                </div>
                <CartBar />
            </div >
        </>
    );
}
