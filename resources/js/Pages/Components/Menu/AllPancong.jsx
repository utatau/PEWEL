import { Head, router } from '@inertiajs/react';
import Header from '../Header';
export default function AllPancong(props) {
    return (
        <>
            <Head title="Pancong Abidzar" />
            <div className='max-w-screen-sm mx-auto bg-gray-50 min-h-screen'>
                <Button className="absolute mt-5 ml-4" variant="outline" onClick={() => router.get('/')}>Kembali</Button>
                <Header />
                <section className='px-4 pt-6'>
                    <h2 className='text-xl font-bold text-center border-b-2 border-black pb-2 mb-4'>Pancong</h2>
                    <div className='grid grid-cols-2 gap-4'>
                        {props.pancong?.map((data, i) => (
                            <div
                                key={i}
                                onClick={() => router.get(`/detail/${data.id}`)}
                                className="bg-white shadow-md rounded-xl overflow-hidden cursor-pointer hover:scale-105 transition-transform duration-200"
                            >
                                <img
                                    src={`assets/gambar/${data.gambar}`}
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
                </section>
            </div>
        </>
    );
}
