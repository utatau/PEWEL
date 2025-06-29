import { useSelector } from 'react-redux'

export default function Cart() {
    const keranjang = useSelector(state => state.keranjang.items)
    const totalHarga = keranjang.reduce((total, item) => total + item.harga * item.jumlah, 0)
    const totalItem = keranjang.reduce((total, item) => total + item.jumlah, 0)

    if (keranjang.length < 1) return null

    return (
        <div className='fixed bottom-4 w-full max-w-screen-sm hover:cursor-pointer' onClick={() => { }}>
            <div className='bg-[#FF686B] rounded-2xl shadow-gray-500 shadow-md max-w-screen-sm container mx-auto p-4'>
                <div className="gap-3 flex flex-row justify-between items-center">
                    <div className="flex">
                        <img src="assets/icon/cart.png" alt="" className='border-2 p-3 bg-white rounded-lg' />
                        <div className="flex flex-col self-center m-2">
                            <h3 className='text-[18px] font-bold'>Total ({totalItem} item)</h3>
                            <h2 className='text-[16px] font-bold'>Rp. {totalHarga.toLocaleString('id-ID')}</h2>
                        </div>
                    </div>

                    <div className="flex flex-col gap-2 items-end ">
                        <h1 className='self-center text-black font-bold text-sm hover:cursor-pointer'>Check OUT ({totalItem})</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}
