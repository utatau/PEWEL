export default function Detail() {
    return (
        <div className="max-w-screen-sm min-h-screen mx-auto">
            <div className='flex flex-col shadow-inner'>
                <img src="assets/gambar/header.png" alt="header" className='w-[40em]' />
                <div className='container rounded-3xl bg-white flex flex-col -mt-10 shadow-2xl mx-2'>
                    <div className="m-2 ml-8 gap-2">
                        <h1 className='text-lg font-bold'>PANCONG BIDZAR</h1>
                        <h1 className='text-lg font-bold'>Rp. 6000</h1>
                    </div>
                </div>
                <div className="mt-14 mx-4">
                    <div className="flex flex-col gap-3">
                        <h1 className="text-2xl font-bold">Notes</h1>
                        <p>Optional</p>
                        <textarea name="" id="" placeholder="Example: Make my dish Delicios!" className="rounded-md p-5">
                        </textarea>
                    </div>
                </div>
                <div className="container absolute bottom-0 border-2 border-black shadow-xl max-w-screen-sm rounded-2xl p-5">
                    <div className="flex justify-between">
                        <h1 className="text-2xl font-bold self-center">Total Order</h1>
                        <div className="flex flex-row gap-4 m-4">
                            <button className="border-2 border-black rounded-xl">+</button>
                            <p className="font-bold self-center">Ini Angka</p>
                            <button className="border-2 border-black rounded-xl">-</button>
                        </div>
                    </div>
                    <div className="container bg-pink p-3 rounded-full mx-auto">
                        <h1 className="text-center font-bold text-2xl">Add Orders - 0.0000</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}
