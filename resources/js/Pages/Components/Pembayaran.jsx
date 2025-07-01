import { Button } from "@/Components/ui/button"
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/Components/ui/drawer"
import { Input } from "@/Components/ui/input"
import Alert from "./Alert"
import { useSelector } from "react-redux"
import { useState } from "react"
export default function Pembayaran() {

    const [nama, setNama] = useState("")
    const [no, setNo] = useState("")
    const [meja, setMeja] = useState("")

    const [jumlah, setJumlah] = useState(0)
    const [pesanan, setPesanan] = useState("")
    const [pembayaran, setPembayaran] = useState("")
    const [status, setStatus] = useState("")

    const keranjang = useSelector(state => state.keranjang?.items ?? [])
    const subtotal = keranjang.reduce((total, item) => total + item.harga * item.jumlah, 0)
    const fee = 3000
    const total = subtotal + fee

    const handleSubmit = () => {
        const data = {
            nama, no, meja, jumlah, pesanan, pembayaran, status
        }
        return createInertiaApp
    }

    return (
        <div>
            <Drawer>
                <DrawerTrigger className="bg-[#FA52A8] p-3 rounded-xl font-bold text-white">Lanjutkan Pembayaran</DrawerTrigger>
                <DrawerContent className="max-w-screen-sm mx-auto overflow-y-hidden min-h-screen">
                    <DrawerHeader className="gap-4">
                        <DrawerTitle className="text-2xl text-center">Pembayaran</DrawerTitle>
                        <div className="flex flex-row justify-around bg-pink rounded-2xl shadow-lg py-1 mt-6">
                            <p className="font-bold">Order Type</p>
                            <p className="font-bold">Dine in</p>
                        </div>
                        <DrawerDescription className="font-bold">Informasi Pelanggan</DrawerDescription>
                    </DrawerHeader>
                    <div className="gap-6 mx-auto w-11/12">
                        <h1>Full Name</h1>
                        <Input type="text" onChange={(e) => setNama(e.target.value)} />
                        <h1>Nomor telepon</h1>
                        <Input type="number" onChange={(e) => setNo(e.target.value)} />
                        <h1>Nomor meja</h1>
                        <Input type="number" value="4" readOnly />
                        <h1 className="mt-5 font-bold">Metode Pembayaran</h1>
                        <div className="flex flex-row justify-center m-4 gap-4">
                            <Button variant="outline" className="w-64 shadow">Pembayaran online</Button>
                            <Button variant="outline" className="w-64 shadow">Pembayaran kasir</Button>
                        </div>
                    </div>
                    <DrawerFooter>
                        <div className=" container w-11/12 ml-4 flex flex-row justify-between border rounded-md">
                            <div className="m-2">
                                <h1 className="font-bold">Total Pembayaran</h1>
                                <h1 className="font-bold">Rp. {total.toLocaleString('id')}</h1>
                            </div>
                            <div className="self-center m-2">
                                <Alert />
                            </div>
                        </div>
                        <DrawerClose>
                            <img src="assets/icon/Group.png" alt="kembali" className=' hover:cursor-pointer absolute top-0 m-5' />
                        </DrawerClose>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </div >
    )
}