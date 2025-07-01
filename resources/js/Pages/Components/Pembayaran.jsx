"use client"
import { Button } from "@/Components/ui/button"
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
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
import { useSelector } from "react-redux"
import { useEffect, useState } from "react"
import axios from "axios"
import { toast } from "sonner"

export default function Pembayaran() {
    const [nama, setNama] = useState("")
    const [statq, setStatq] = useState('');
    const [no, setNo] = useState("")
    const [meja, setMeja] = useState(0)
    const [jumlah, setJumlah] = useState(0)
    const [pesanan, setPesanan] = useState("")
    const [pembayaran, setPembayaran] = useState("")
    const [status, setStatus] = useState("CREATED")
    const [order, setOrder] = useState('');
    const keranjang = useSelector(state => state.keranjang?.items ?? [])
    const subtotal = keranjang.reduce((total, item) => total + item.harga * item.jumlah, 0)
    const fee = 3000
    const total = subtotal + fee
    // keranjang ? keranjang.map((data, i) => {
    //     useEffect(() => {
    //         setJumlah(data.jumlah)
    //         setPesanan(data.nama)
    //         console.log(pesanan)
    //         setMeja(4)
    //     }, [])
    // }) : console.log('data keranjang kosong')
    useEffect(() => {
        if (keranjang.length > 0) {
            const totalJumlah = keranjang.reduce((acc, item) => acc + item.jumlah, 0)
            const pesananList = keranjang.map(item => item.nama).join(', ')
            setJumlah(totalJumlah)
            setPesanan(pesananList)
            setMeja(4)
        }
    }, [keranjang])

    async function qrCode() {
        const data = {
            jumlah_pesanan: jumlah, pesanan: pesanan, pembayaran: pembayaran, status: status, total: total
        };
        try {
            const response = await axios.post('api/proses-pembayaran', data);
            const qrUrl = response.data.qr;
            const qris = response.data.status;
            setStatq(response.data.status)
            setOrder(response.data.order_id);
            document.getElementById('qr-img').src = qrUrl;
            document.getElementById('qr-img').style.display = "block";
        } catch (err) {
            console.log(err)
        }
    }

    async function cekPembayaran() {
        const respon = await axios.get(statq)

        console.log(respon.data)
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
                            <Button variant="outline" className="w-64 shadow" onClick={() => setPembayaran('Online')}>Pembayaran online</Button>
                            <Button variant="outline" className="w-64 shadow" onClick={() => setPembayaran('Kasir')}>Pembayaran kasir</Button>
                        </div>
                    </div>
                    <DrawerFooter>
                        <div className=" container w-11/12 ml-4 flex flex-row justify-between border rounded-md">
                            <div className="m-2">
                                <h1 className="font-bold">Total Pembayaran</h1>
                                <h1 className="font-bold">Rp.
                                    {total ? total.toLocaleString('id') : <p>tidak ada pesanan brow</p>}
                                </h1>
                            </div>
                            <div className="self-center m-2">
                                {/* <Button size="lg" className="bg-[#FA52A8] w-full" onClick={() => qrCode()}>Bayar sekarang</Button> */}
                                <AlertDialog>
                                    <AlertDialogTrigger className="bg-[#FA52A8] p-2 rounded-xl font-bold text-white" onClick={() => qrCode()}>Lanjutkan Pembayaran</AlertDialogTrigger>
                                    <AlertDialogContent>
                                        <AlertDialogHeader>
                                            <AlertDialogTitle>Silahkan lakukan scan brow </AlertDialogTitle>
                                            <AlertDialogDescription>
                                                <div className="container flex justify-center">
                                                    <img id="qr-img" style={{ display: "flex", maxWidth: "300px" }} alt="QR Code" />
                                                </div>
                                                nomor transaksi {order}
                                            </AlertDialogDescription>
                                        </AlertDialogHeader>
                                        <AlertDialogFooter>
                                            <AlertDialogCancel>Check ulang</AlertDialogCancel>
                                            <AlertDialogAction className="bg-[#FA52A8]" variant="outline" onClick={() => cekPembayaran()}
                                            >Cek Status Pembayaran</AlertDialogAction>
                                        </AlertDialogFooter>
                                    </AlertDialogContent>
                                </AlertDialog>
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