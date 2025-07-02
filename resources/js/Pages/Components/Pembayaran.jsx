"use client"

import { Button } from "@/Components/ui/button"
import {
    AlertDialog,
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
import { router } from "@inertiajs/react"
import Menit from "./Menit"

export default function Pembayaran() {
    const [dataStruk, setDataStruk] = useState(null);
    const [nama, setNama] = useState("")
    const [notif, isNotif] = useState(false);
    const [no, setNo] = useState("")
    const [meja, setMeja] = useState(null)
    const [jumlah, setJumlah] = useState(0)
    const [pesanan, setPesanan] = useState("")
    const [pembayaran, setPembayaran] = useState("")
    const [status, setStatus] = useState("CREATED")
    const [order, setOrder] = useState('');
    const [qrUrl, setQrUrl] = useState(null);
    const keranjang = useSelector(state => state.keranjang?.items ?? [])
    const subtotal = keranjang.reduce((total, item) => total + item.harga * item.jumlah, 0)
    const fee = 3000
    const total = subtotal + fee
    useEffect(() => {
        const storedMeja = localStorage.getItem("no_meja")
        setMeja(storedMeja)
    }, [])
    useEffect(() => {
        if (keranjang.length > 0) {
            const totalJumlah = keranjang.reduce((acc, item) => acc + item.jumlah, 0)
            const pesananList = keranjang.map(item => item.menu).join(', ')
            setJumlah(totalJumlah)
            setPesanan(pesananList)
            setMeja(4)
        }
    }, [keranjang])

    async function qrCode() {
        const data = {
            jumlah_pesanan: jumlah, pesanan: pesanan, pembayaran: pembayaran, status: status, total: total, nama: nama, no: no, meja: meja, menu: pesanan
        };
        try {
            const response = await axios.post('api/proses-pembayaran', data);
            const parsed = JSON.parse(response.config.data);
            setDataStruk(parsed);
            localStorage.setItem('dataStruk', response.config.data);
            setQrUrl(response.data.qr);
            setOrder(response.data.order_id);
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        if (order) {
            const interval = setInterval(async () => {
                try {
                    const response = await axios.get(`http://localhost:8000/cek_status/${order}`);
                    const statusBaru = response.data.transaction_status;
                    if (statusBaru === 'settlement') {
                        setStatus('Berhasil');
                        isNotif(true);
                        clearInterval(interval);
                    } else if (statusBaru === 'PENDING') {
                        setStatus('Verify pembayaran');
                    } else {
                        setStatus('Gagal / Belum bayar');
                    }
                } catch (error) {
                    console.error('Gagal cek status:', error);
                }
            }, 3000);
            return () => clearInterval(interval);
        }
    }, [order]);

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
                        {notif && (
                            <div className="p-4 mb-4 text-2xl text-blue-800 rounded-lg bg-blue-50" role="alert">
                                <span className="font-medium text-2xl">{status} melakukan pembayaran</span>
                            </div>
                        )}
                        <DrawerDescription className="font-bold text-2xl">Informasi Pelanggan</DrawerDescription>
                    </DrawerHeader>
                    <div className="gap-6 mx-auto w-11/12">
                        <h1>Full Name</h1>
                        <Input type="text" onChange={(e) => setNama(e.target.value)} />
                        <h1>Nomor telepon</h1>
                        <Input type="number" onChange={(e) => setNo(e.target.value)} />
                        <h1>Nomor meja</h1>
                        <Input type="number" value={meja} readOnly />
                        <h1 className="mt-5 font-bold">Metode Pembayaran</h1>
                        <div className="flex flex-row justify-center m-4 gap-4">
                            <button type="button" onClick={() => setPembayaran('Online')} className="text-white bg-[#FA52A8] hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2">Pembayaran online</button>
                            <button type="button" onClick={() => setPembayaran('Kasir')} className="text-white bg-[#FA52A8] hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2">Pembayaran kasir</button>
                        </div>
                    </div>
                    <DrawerFooter>
                        <div className="container w-11/12 ml-4 flex flex-row justify-between border rounded-md">
                            <div className="m-2">
                                <h1 className="font-bold">Total Pembayaran</h1>
                                <h1 className="font-bold">Rp. {total.toLocaleString('id')}</h1>
                            </div>
                            <div className="self-center m-2">
                                <AlertDialog>
                                    <AlertDialogTrigger className="bg-[#FA52A8] p-2 rounded-xl font-bold text-white" onClick={() => qrCode()}>Lanjutkan Pembayaran</AlertDialogTrigger>
                                    {status === "Berhasil" ? (
                                        <AlertDialogContent>
                                            <AlertDialogHeader>
                                                <AlertDialogTitle>{status}</AlertDialogTitle>
                                                <AlertDialogDescription>
                                                    <div className="container flex justify-center">
                                                        <img src="assets/icon/sukses.png" alt="QR Code" />
                                                    </div>
                                                </AlertDialogDescription>
                                            </AlertDialogHeader>
                                            <AlertDialogFooter>
                                                <AlertDialogCancel onClick={() => router.visit('/struk', { data: dataStruk })}>Cetak Struk</AlertDialogCancel>
                                                <Button className="bg-[#FA52A8]" onClick={() => window.location.href = '/'}>Kembali</Button>
                                            </AlertDialogFooter>
                                        </AlertDialogContent>
                                    ) : (
                                        <AlertDialogContent>
                                            <AlertDialogHeader>
                                                <AlertDialogTitle>Silahkan lakukan scan</AlertDialogTitle>
                                                <AlertDialogDescription>
                                                    <div className="container flex justify-center items-center h-60">
                                                        {qrUrl ? (
                                                            <>
                                                                <img src={qrUrl} style={{ maxWidth: "250px" }} alt="QR Code" />
                                                            </>
                                                        ) : (
                                                            <div className="text-center text-lg font-bold animate-pulse text-[#FA52A8]">Loading QR Code...</div>
                                                        )}
                                                    </div>
                                                </AlertDialogDescription>
                                                {qrUrl ? (
                                                    <>
                                                        <Menit />
                                                        <h1 className="text-center mt-2 text-md text-black">Total Rp. {total.toLocaleString('id')}</h1>
                                                        <p className="text-center mt-2 text-sm text-gray-500">Nomor transaksi: {order}</p>
                                                    </>
                                                ) : ""}
                                            </AlertDialogHeader>
                                            <AlertDialogFooter>
                                                <AlertDialogCancel>Selesai</AlertDialogCancel>
                                                <Button className="bg-[#FA52A8]" onClick={() => cekPembayaran()}>Cek Status Pembayaran</Button>
                                            </AlertDialogFooter>
                                        </AlertDialogContent>
                                    )}
                                </AlertDialog>
                            </div>
                        </div>
                        <DrawerClose>
                            <img src="assets/icon/Group.png" alt="kembali" className='hover:cursor-pointer absolute top-0 m-5' />
                        </DrawerClose>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </div>
    )
}
