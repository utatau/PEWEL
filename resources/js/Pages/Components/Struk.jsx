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
        <div className="max-w-screen-sm mx-auto overflow-y-hidden min-h-screen">
            <div className="max-w-sm mx-auto p-4 border border-black text-[10px] font-mono">
                <div className="text-center mb-2">
                    <h1 className="text-[12px] font-bold">PANGCONG LUMER</h1>
                    <p>Jl. Contoh Alamat No.123<br />Telp: 0812-3456-7890</p>
                </div>

                <div className="border-t border-b border-black py-1 my-2 text-[9px]">
                    <div className="flex justify-between">
                        <span>Tipe Pembayaran</span>
                        <span>{data.pembayaran}</span>
                    </div>
                </div>

                <div className="flex justify-between text-[9px]">
                    <span>Nama Kustomer</span>
                    <span>{data.nama}</span>
                </div>

                <div className="flex justify-between text-[9px]">
                    <span>No Meja</span>
                    <span>{data.meja}</span>
                </div>

                <div className="border-t border-b border-black py-1 my-2">
                    {keranjang.map((item, index) => (
                        <div className="flex justify-between text-[9px]" key={index}>
                            <span>{item.menu}</span>
                            <span>Rp. {item.harga.toLocaleString('id')}</span>
                        </div>
                    ))}
                    <div className="flex justify-between text-[9px]">
                        <span>Tax / Fee</span>
                        <span>Rp. {fee.toLocaleString('id')}</span>
                    </div>
                    <div className="flex justify-between font-bold text-[10px]">
                        <span>Total</span>
                        <span>Rp. {total.toLocaleString('id')}</span>
                    </div>
                </div>

                <div className="text-[9px]">
                    <span className="block mb-1 font-bold">Detail Pesanan:</span>
                    {keranjang.map((item, index) => (
                        <div className="flex justify-between" key={index}>
                            <span>{item.menu} x {item.jumlah}</span>
                            <span>Rp. {(item.harga * item.jumlah).toLocaleString('id')}</span>
                        </div>
                    ))}
                </div>

                <div className="flex justify-between text-[9px] mt-2">
                    <span>Operator</span>
                    <span>Admin</span>
                </div>

                <div className="mt-4 text-center text-[12px] font-bold tracking-widest">
                    PANGCONG LUMER
                </div>
            </div>
        </div>
    )
}
