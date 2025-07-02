import { useEffect, useState } from "react"
import { useSelector } from "react-redux"

export default function Struk() {
    const [data, setData] = useState(null)

    useEffect(() => {
        const saved = localStorage.getItem('dataStruk')
        if (saved) setData(JSON.parse(saved))
    }, [])

    const keranjang = useSelector(state => state.keranjang?.items ?? [])
    const subtotal = keranjang.reduce((total, item) => total + item.harga * item.jumlah, 0)
    const fee = 3000
    const total = subtotal + fee

    if (!data) return <p className="text-center mt-10">Memuat struk...</p>

    return (
        <div className="max-w-screen-sm mx-auto overflow-y-hidden min-h-screen bg-gray-50">
            <div className="max-w-md mx-auto p-6 border border-black text-[14px] font-mono bg-white shadow-md rounded-md">
                <div className="text-center mb-4">
                    <h1 className="text-[18px] font-bold uppercase tracking-wide">PANCONG ABIDZAR LUMER</h1>
                </div>

                <div className="border-t border-b border-black py-2 my-3">
                    <div className="flex justify-between">
                        <span>Tipe Pembayaran</span>
                        <span>{data.pembayaran}</span>
                    </div>
                </div>

                <div className="flex justify-between mb-1">
                    <span>Nama Kustomer</span>
                    <span>{data.nama}</span>
                </div>

                <div className="flex justify-between mb-2">
                    <span>No Meja</span>
                    <span>{data.meja}</span>
                </div>

                <div className="border-t border-b border-black py-2 my-4 space-y-1">
                    {keranjang.map((item, index) => (
                        <div className="flex justify-between" key={index}>
                            <span>{item.menu}</span>
                            <span>Rp. {item.harga.toLocaleString('id')}</span>
                        </div>
                    ))}
                    <div className="flex justify-between font-medium">
                        <span>Tax / Fee</span>
                        <span>Rp. {fee.toLocaleString('id')}</span>
                    </div>
                    <div className="flex justify-between font-bold text-lg mt-2">
                        <span>Total</span>
                        <span>Rp. {total.toLocaleString('id')}</span>
                    </div>
                </div>

                <div className="text-sm mb-2">
                    <span className="block font-semibold mb-1">Detail Pesanan:</span>
                    {keranjang.map((item, index) => (
                        <div className="flex justify-between" key={index}>
                            <span>{item.menu} x {item.jumlah}</span>
                            <span>Rp. {(item.harga * item.jumlah).toLocaleString('id')}</span>
                        </div>
                    ))}
                </div>

                <div className="flex justify-between text-sm mt-3">
                    <span>Operator</span>
                    <span>Admin</span>
                </div>

                <div className="mt-6 text-center text-lg font-bold tracking-widest">
                    PANCONG ABIDZAR LUMER
                </div>
            </div>
        </div>

    )
}
