"use client"
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
import { toast } from "sonner"

export default function Alert() {
    const date = new Date().getDate()
    return (
        <AlertDialog>
            <AlertDialogTrigger className="bg-[#FA52A8] p-2 rounded-xl font-bold text-white">Lanjutkan Pembayaran</AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>Apakah anda yakin melakukan pembayaran sekarang?</AlertDialogTitle>
                    <AlertDialogDescription>
                        Pesanan kamu tidak bisa di batalkan setelah melakukan pembayaran brow
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel>Check ulang</AlertDialogCancel>
                    <AlertDialogAction className="bg-[#FA52A8]" variant="outline"
                        onClick={() =>
                            toast("Pembayaran anda sedang di proses centang biru")
                        }>Bayar sekarang</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}