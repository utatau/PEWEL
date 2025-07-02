// File: resources/js/Pages/Dashboard/Minuman.jsx

import {
    Dialog,
    DialogTrigger,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
    DialogClose,
} from "@/components/ui/dialog"
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import {
    AlertDialog,
    AlertDialogTrigger,
    AlertDialogContent,
    AlertDialogHeader,
    AlertDialogFooter,
    AlertDialogTitle,
    AlertDialogDescription,
    AlertDialogCancel,
    AlertDialogAction,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'
import { Head, useForm } from '@inertiajs/react'
import { MinumanForm } from "./Components/FormMinuman"
import { useState } from "react"

export default function Minuman({ auth, items = [] }) {
    const { delete: destroy } = useForm()
    const [editItem, setEditItem] = useState(null)

    return (
        <AuthenticatedLayout user={auth.user} header={<h2 className="text-2xl font-bold">Dashboard Minuman</h2>}>
            <Head title="Minuman" />
            <div className="py-8">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 bg-white shadow-md rounded-xl p-6">
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="text-lg font-semibold">Daftar Menu Minuman</h3>
                        <Dialog>
                            <DialogTrigger asChild>
                                <Button>+ Tambah</Button>
                            </DialogTrigger>
                            <DialogContent className="max-w-xl">
                                <DialogHeader>
                                    <DialogTitle>Tambah Menu Minuman</DialogTitle>
                                    <DialogDescription>Isi form di bawah untuk menambahkan minuman baru.</DialogDescription>
                                </DialogHeader>
                                <MinumanForm onClose={() => { }} />
                                <DialogClose asChild>
                                    <Button variant="ghost" className="mt-4">Tutup</Button>
                                </DialogClose>
                            </DialogContent>
                        </Dialog>
                    </div>

                    <Table>
                        <TableCaption className="text-sm text-muted-foreground mt-4">
                            Data minuman terbaru
                        </TableCaption>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="w-[120px]">Gambar</TableHead>
                                <TableHead>Nama Menu</TableHead>
                                <TableHead>Harga</TableHead>
                                <TableHead className="text-right">Aksi</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {items.map((item) => (
                                <TableRow key={item.id}>
                                    <TableCell>
                                        {item.gambar ? (
                                            <img src={`/storage/${item.gambar}`} alt={item.menu} className="h-16 w-16 object-cover rounded" />
                                        ) : (
                                            <span className="text-gray-400 italic">No Image</span>
                                        )}
                                    </TableCell>
                                    <TableCell className="font-semibold">{item.menu}</TableCell>
                                    <TableCell>Rp {item.harga.toLocaleString('id-ID')}</TableCell>
                                    <TableCell className="text-right space-x-2">
                                        <Dialog>
                                            <DialogTrigger asChild>
                                                <Button variant="outline" size="sm" onClick={() => setEditItem(item)}>
                                                    Edit
                                                </Button>
                                            </DialogTrigger>
                                            <DialogContent className="max-w-xl">
                                                <DialogHeader>
                                                    <DialogTitle>Edit Menu Minuman</DialogTitle>
                                                </DialogHeader>
                                                <MinumanForm existing={editItem} onClose={() => setEditItem(null)} />
                                                <DialogClose asChild>
                                                    <Button variant="ghost" className="mt-4">Tutup</Button>
                                                </DialogClose>
                                            </DialogContent>
                                        </Dialog>

                                        <AlertDialog>
                                            <AlertDialogTrigger asChild>
                                                <Button variant="destructive" size="sm">Hapus</Button>
                                            </AlertDialogTrigger>
                                            <AlertDialogContent>
                                                <AlertDialogHeader>
                                                    <AlertDialogTitle>Yakin ingin menghapus?</AlertDialogTitle>
                                                    <AlertDialogDescription>
                                                        Aksi ini tidak bisa dibatalkan. Data minuman <strong>{item.menu}</strong> akan dihapus secara permanen.
                                                    </AlertDialogDescription>
                                                </AlertDialogHeader>
                                                <AlertDialogFooter>
                                                    <AlertDialogCancel>Batal</AlertDialogCancel>
                                                    <AlertDialogAction onClick={() => destroy(route('minuman.destroy', item.id))}>
                                                        Ya, hapus
                                                    </AlertDialogAction>
                                                </AlertDialogFooter>
                                            </AlertDialogContent>
                                        </AlertDialog>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
            </div>
        </AuthenticatedLayout>
    )
}
