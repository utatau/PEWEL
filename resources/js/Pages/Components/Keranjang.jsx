import { Button } from "@/Components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/Components/ui/card"
import { router } from "@inertiajs/react"
import { useSelector } from "react-redux"
import Pembayaran from "./Pembayaran"
export default function Keranjang() {
    const keranjang = useSelector(state => state.keranjang?.items ?? [])
    const subtotal = keranjang.reduce((total, item) => total + item.harga * item.jumlah, 0)
    const fee = 3000
    const total = subtotal + fee
    return (
        <div className='max-w-screen-sm mx-auto overflow-y-hidden min-h-screen'>
            <img src="assets/icon/Group.png" alt="kembali" className='m-3 hover:cursor-pointer' onClick={() => router.get('/')} />
            <div className="container flex flex-col gap-3 mt-5">
                <h1 className="text-center font-bold text-2xl">Keranjang</h1>
                <div className="flex flex-row justify-around bg-pink rounded-2xl shadow-lg py-1 mt-6">
                    <p className="font-bold">Order Type</p>
                    <p className="font-bold">Dine in</p>
                </div>
                <div className="mt-15">
                    {keranjang.map((item, i) => (
                        <Card key={i} className="mb-5">
                            <CardHeader className="flex flex-row shadow-lg">
                                <img src="assets/gambar/pancong-1.jpg" alt="menu" className="w-40 h-40 rounded-3xl" />
                                <div className="flex flex-col justify-center gap-2 ml-4">
                                    <CardTitle className="text-2xl font-bold">{item.nama}</CardTitle>
                                    <CardDescription className="font-bold">Harga Rp. {item.harga.toLocaleString('id')}</CardDescription>
                                    <CardDescription className="font-bold">Jumlah beli {item.jumlah}</CardDescription>
                                    <CardDescription className="font-bold">Deskripsi: {item.notes}</CardDescription>
                                </div>
                            </CardHeader>
                        </Card>
                    ))}
                </div>
                <div className="mt-20">
                    <Card className="shadow-md">
                        <CardHeader className="flex flex-col">
                            <div className="flex flex-col justify-center gap-2 mb-2 ">
                                <CardTitle className="text-2xl font-bold border-b-4">Payment Detail</CardTitle>
                            </div>
                            <div className="flex flex-col justify-between gap-1 ">
                                <h1 className="text-[1.1em]">Subtotal</h1>
                                <h1 className="text-[1.1em]">Outher fees</h1>
                                <h1 className="text-[1.1em]">Total</h1>
                                <div className="fixed self-end text">
                                    <h1 className="font-bold shadow-2xl">Rp. 3000</h1>
                                    <h1 className="font-bold shadow-2xl">Rp. 3000</h1>
                                    <h1 className="font-bold shadow-md text-pink">Rp. {total.toLocaleString('id')}</h1>
                                </div>
                            </div>
                        </CardHeader>
                    </Card>
                </div>
            </div>
            <div className="fixed bottom-4 max-w-screen-sm container w-11/12 ml-4 flex flex-row justify-between border rounded-md bg-white">
                <div className="m-2">
                    <h1 className="font-bold">Total Payments</h1>
                    <h1 className="font-bold">Rp. {total.toLocaleString('id')}</h1>
                </div>
                <div className="self-center m-2">
                    <Pembayaran />
                </div>
            </div>
        </div>
    )
}

