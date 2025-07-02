import { Button } from "@/Components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/Components/ui/card";
import { router } from "@inertiajs/react";
import { useSelector } from "react-redux";
import Pembayaran from "./Pembayaran";

export default function Keranjang() {
    const keranjang = useSelector((state) => state.keranjang?.items ?? []);
    const subtotal = keranjang.reduce((total, item) => total + item.harga * item.jumlah, 0);
    const fee = 3000;
    const total = subtotal + fee;

    return (
        <div className="max-w-screen-sm mx-auto min-h-screen bg-gray-50 pb-32">
            <img
                src="assets/icon/Group.png"
                alt="kembali"
                className="m-3 hover:cursor-pointer"
                onClick={() => router.get("/")}
            />

            <div className="container px-4 mt-2">
                <h1 className="text-center font-bold text-2xl mb-4">Keranjang</h1>

                <div className="flex flex-row justify-around bg-pink rounded-xl shadow-md py-2 mb-6 text-white font-semibold">
                    <p>Order Type</p>
                    <p>Dine In</p>
                </div>

                <div className="flex flex-wrap gap-4 justify-start">
                    {keranjang.map((item, i) => (
                        <Card key={i} className="w-[47%] bg-white shadow-md rounded-xl">
                            <img
                                src={`assets/gambar/${item.gambar}`}
                                alt="menu"
                                className="w-full h-28 object-cover rounded-t-xl"
                            />
                            <CardContent className="p-2">
                                <CardTitle className="text-sm font-bold">{item.menu}</CardTitle>
                                <p className="text-xs text-gray-500">Jumlah: {item.jumlah}</p>
                                <p className="text-xs text-gray-700 font-semibold">
                                    Rp {item.harga.toLocaleString("id-ID")}
                                </p>
                            </CardContent>
                        </Card>
                    ))}
                </div>


                {total > 0 ? (
                    <div className="mt-10">
                        <Card className="shadow-lg">
                            <CardHeader>
                                <CardTitle className="text-lg border-b pb-1">Payment Detail</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-2 text-sm">
                                <div className="flex justify-between">
                                    <span>Subtotal</span>
                                    <span>Rp. {subtotal.toLocaleString("id")}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Fee</span>
                                    <span>Rp. {fee.toLocaleString("id")}</span>
                                </div>
                                <div className="flex justify-between font-bold text-[#FA52A8] text-base">
                                    <span>Total</span>
                                    <span>Rp. {total.toLocaleString("id")}</span>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                ) : (
                    <h1 className="text-center mt-10 text-gray-400 font-semibold">Tidak ada pesanan bro</h1>
                )}
            </div>

            {!!total && (
                <div className="fixed bottom-4 max-w-screen-sm w-full px-4">
                    <div className="flex justify-between items-center bg-white border shadow-xl rounded-xl px-4 py-3">
                        <div>
                            <h1 className="text-sm text-gray-500">Total Pembayaran</h1>
                            <h1 className="text-lg font-bold text-[#FA52A8]">Rp. {total.toLocaleString("id")}</h1>
                        </div>
                        <Pembayaran />
                    </div>
                </div>
            )}
        </div>
    );
}
