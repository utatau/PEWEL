import { Button } from '@/Components/ui/button';
import { Textarea } from '@/Components/ui/textarea';
import { Head, router } from '@inertiajs/react';
import { useState } from 'react';
import { usePage } from '@inertiajs/react'
import { useDispatch } from 'react-redux'
import { tambahKeKeranjang } from '@/Pages/Action/keranjangSlice'

export default function Detail() {
    const dispatch = useDispatch()
    const { produk } = usePage().props
    const [jumlah, setJumlah] = useState(1);
    const onAddOrder = () => {
        console.log("Klik Add Orders!")

        if (jumlah < 1) return

        dispatch(tambahKeKeranjang({
            nama: "PANCONG BIDZAR",
            harga: 6000,
            jumlah: jumlah,
            // notes: notes,
            gambar: "pancong.jpg",
        }))

        router.get('/')
    }

    const handleMinus = () => {
        jumlah < 2 ? router.get('/') : setJumlah(jumlah - 1)
    }
    return (
        <div className="max-w-screen-sm min-h-screen mx-auto">
            <div className='flex flex-col shadow-inner'>
                <img src="../assets/icon/Group.png" alt="kembali" className='absolute m-3 hover:cursor-pointer' onClick={() => router.get('/')} />
                <img src="../assets/gambar/header.png" alt="header" className='w-[40em]' />
                <div className='container rounded-3xl bg-white flex flex-col -mt-10 shadow-xl w-11/12 mx-auto'>
                    <div className="m-2 ml-8 gap-2 ">
                        <h1 className='text-2xl font-bold'>PANCONG BIDZAR</h1>
                        <h1 className='text-2xl font-bold'>Rp. {produk.harga.toLocaleString('id')}</h1>
                    </div>
                </div>
                <div className="mt-14 mx-4">
                    <div className="flex flex-col gap-3">
                        <h1 className="text-2xl font-bold">Notes</h1>
                        <p>Optional</p>
                        <Textarea placeholder="lol" className="h-40" />
                    </div>
                </div>
                <div className="container absolute bottom-0 border-2  shadow-lg max-w-screen-sm rounded-2xl p-5">
                    <div className="flex justify-between">
                        <h1 className="text-2xl font-bold self-center">Total Order</h1>
                        <div className="flex flex-row gap-4 m-4">
                            <Button variant="outline" onClick={() => setJumlah(jumlah + 1)}>+</Button>
                            <p className="font-bold self-center">{jumlah}</p>
                            <Button variant="outline" onClick={() => handleMinus()}>-</Button>
                        </div>
                    </div>
                    <div
                        className={`container ${jumlah < 1 ? 'bg-pink' : 'bg-green-400'} p-3 rounded-full mx-auto hover:cursor-pointer`}
                        onClick={onAddOrder}
                    >
                        <h1 className="text-center font-bold text-2xl text-white">
                            Add Orders - Rp. {(jumlah * produk.harga).toLocaleString('id-ID')}
                        </h1>
                    </div>
                </div>
            </div>
        </div >
    )
}
