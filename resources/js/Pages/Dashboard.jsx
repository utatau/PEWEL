import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
export default function Dashboard({ auth, totalPesanan, totalPenjualan, totalMenu, transaksiBerhasil, penjualans }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-bold text-2xl text-gray-800 leading-tight">
                    Selamat Datang, {auth.user.name}
                </h2>
            }
        >
            <Head title="Dashboard" />
            <div className="py-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                        <div className="bg-white shadow rounded-2xl p-6 hover:shadow-md transition">
                            <h3 className="text-gray-500 text-sm">Pendapatan hari ini</h3>
                            <p className="text-2xl font-bold text-gray-800 mt-2">Rp. {totalPenjualan.toLocaleString('id')}</p>
                        </div>
                        <div className="bg-white shadow rounded-2xl p-6 hover:shadow-md transition">
                            <h3 className="text-gray-500 text-sm">Transaksi Hari Ini</h3>
                            <p className="text-2xl font-bold text-gray-800 mt-2">{totalPesanan}</p>
                        </div>
                        <div className="bg-white shadow rounded-2xl p-6 hover:shadow-md transition">
                            <h3 className="text-gray-500 text-sm">Total Menu</h3>
                            <p className="text-2xl font-bold text-gray-800 mt-2">{totalMenu}</p>
                        </div>
                        <div className="bg-white shadow rounded-2xl p-6 hover:shadow-md transition">
                            <h3 className="text-gray-500 text-sm">Transaksi berhasil hari ini</h3>
                            <p className="text-2xl font-bold text-gray-800 mt-2">{transaksiBerhasil}</p>
                        </div>
                    </div>
                    <div className="bg-white shadow rounded-xl p-6 mt-6">
                        <h4 className="text-lg font-semibold mb-2 text-gray-800">Informasi</h4>
                        <p className="text-gray-600">
                            Kamu berhasil login sebagai <strong>{auth.user.email}</strong>. Silakan pilih menu di sidebar untuk mengelola sistem pemesanan.
                        </p>
                    </div>
                    <div className="py-8">
                        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 bg-white shadow-md rounded-xl p-6">
                            <h3 className="text-lg font-semibold mb-4">Riwayat Penjualan</h3>

                            <Table>
                                <TableCaption className="text-sm text-muted-foreground mt-4">
                                    Data penjualan terbaru
                                </TableCaption>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>No</TableHead>
                                        <TableHead>Pesanan</TableHead>
                                        <TableHead>Jumlah</TableHead>
                                        <TableHead>Pembayaran</TableHead>
                                        <TableHead>Status</TableHead>
                                        <TableHead className="text-right">Total</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {penjualans.map((item, index) => (
                                        <TableRow key={item.id}>
                                            <TableCell>{index + 1}</TableCell>
                                            <TableCell>{item.pesanan}</TableCell>
                                            <TableCell>{item.jumlah_pesanan}</TableCell>
                                            <TableCell>{item.pembayaran}</TableCell>
                                            <TableCell className="capitalize">{item.status}</TableCell>
                                            <TableCell className="text-right">Rp {item.total.toLocaleString('id')}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
