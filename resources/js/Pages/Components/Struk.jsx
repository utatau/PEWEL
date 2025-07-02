import { useSelector } from "react-redux"
export default function Struk(props) {
    const keranjang = useSelector(state => state.keranjang?.items ?? [])
    const subtotal = keranjang.reduce((total, item) => total + item.harga * item.jumlah, 0)
    const fee = 3000
    const total = subtotal
    return (
        <div className='max-w-screen-sm mx-auto overflow-y-hidden min-h-screen'>
            <div class="max-w-sm mx-auto p-4 border border-black text-[10px] font-mono" >
                <div class="text-center mb-2">
                    <h1 class="text-[12px] font-bold">PANGCONG LUMER</h1>
                    <p>Jl. Contoh Alamat No.123<br />Telp: 0812-3456-7890</p>
                </div>

                <div class="border-t border-b border-black py-1 my-2 text-[9px]">
                    <div class="flex justify-between">
                        <span>Token Type</span>
                        <span>{total}</span>
                    </div>
                </div>
                <div class="flex justify-between">
                    <span>Customer Name</span>
                    <span>{keranjang.nama}</span>
                </div>
                <div class="my-1">
                    <div class="flex justify-between">
                        <span>No Meja</span>
                        <span>12</span>
                    </div>
                </div>

                <div class="border-t border-b border-black py-1 my-2">
                    <div class="flex justify-between">
                        <span>Amount</span>
                        <span>{keranjang.jumlah}</span>
                    </div>
                    <div class="flex justify-between">
                        <span>Tax</span>
                        <span>Rp2.000</span>
                    </div>
                    <div class="flex justify-between font-bold">
                        <span>Total</span>
                        <span>{total}</span>
                    </div>
                </div>
                <div class="flex justify-between text-[9px]">
                    <span>Operator</span>
                    <span>Admin</span>
                </div>

                <div class="mt-4 text-center text-[12px] font-bold tracking-widest">
                    PANGCONG LUMER
                </div>
            </div >
        </div>

    )
}