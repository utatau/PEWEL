import { Head, router } from '@inertiajs/react';
import Header from './Components/Header';
import CartBar from './Components/Cart';
import { useEffect, useState } from 'react';
export default function Welcome(props) {
    const [meja, setMeja] = useState(null)

    useEffect(() => {
        const params = new URLSearchParams(window.location.search)
        const noMeja = params.get("meja")

        if (noMeja) {
            localStorage.setItem("no_meja", noMeja)
            setMeja(noMeja)
        } else {
            const stored = localStorage.getItem("no_meja")
            if (stored) {
                setMeja(stored)
            } else {
                window.location.href = "/order"
            }
        }
    }, [])
    return (
        <>
            <Head title="Pancong Abidzar" />
            <div className='max-w-screen-sm mx-auto bg-gray-50 min-h-screen'>
                <Header meja={meja} />
                <section className='px-4 pt-6'>
                    <h2 className='text-xl font-bold text-center border-b-2 border-black pb-2 mb-4'>Pancong</h2>
                    <div className='grid grid-cols-2 gap-4'>
                        {props.cong.data?.map((data, i) => (
                            <div
                                key={i}
                                onClick={() => router.get(`/detail/${data.id}`)}
                                className="bg-white shadow-md rounded-xl overflow-hidden cursor-pointer hover:scale-105 transition-transform duration-200"
                            >
                                <img
                                    src={`storage/${data.gambar}`}
                                    alt={data.menu}
                                    className="w-full h-40 object-cover"
                                />
                                <div className="p-3">
                                    <h3 className="font-semibold text-lg">{data.menu}</h3>
                                    <p className="text-[#FA52A8] font-bold">Rp {data.harga.toLocaleString('id-ID')}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-end mt-4">
                        <a
                            onClick={() => router.get('/allpancong')}
                            className="text-[#FA52A8] text-sm font-semibold hover:underline cursor-pointer"
                        >
                            Lihat Semua Pancong →
                        </a>
                    </div>
                </section>

                <section className='px-4 pt-8 pb-16'>
                    <h2 className='text-xl font-bold text-center border-b-2 border-black pb-2 mb-4'>Minuman</h2>
                    <div className='grid grid-cols-2 gap-4'>
                        {props.minum.data?.map((data, i) => (
                            <div
                                key={i}
                                onClick={() => router.get(`/detail/${data.id}`)}
                                className="bg-white shadow-md rounded-xl overflow-hidden cursor-pointer hover:scale-105 transition-transform duration-200"
                            >
                                <img
                                    src={`storage/${data.gambar}`}
                                    alt={data.menu}
                                    className="w-full h-40 object-cover"
                                />
                                <div className="p-3">
                                    <h3 className="font-semibold text-lg">{data.menu}</h3>
                                    <p className="text-[#FA52A8] font-bold">Rp {data.harga.toLocaleString('id-ID')}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-end mt-4">
                        <a
                            onClick={() => router.get('/allminuman')}
                            className="text-[#FA52A8] text-sm font-semibold hover:underline cursor-pointer"
                        >
                            Lihat Semua Minuman →
                        </a>
                    </div>
                </section>

                <CartBar />
            </div>
        </>
    );
}
