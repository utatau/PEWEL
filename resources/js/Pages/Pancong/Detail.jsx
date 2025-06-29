import { Button } from '@/Components/ui/button';
import { Textarea } from '@/Components/ui/textarea';
import { Head, router } from '@inertiajs/react';
export default function Detail() {
    return (
        <div className="max-w-screen-sm min-h-screen mx-auto">
            <div className='flex flex-col shadow-inner'>
                <img src="assets/icon/Group.png" alt="kembali" className='absolute m-3 hover:cursor-pointer' onClick={() => router.get('/')} />
                <img src="assets/gambar/header.png" alt="header" className='w-[40em]' />
                <div className='container rounded-3xl bg-white flex flex-col -mt-10 shadow-xl w-11/12 mx-auto'>
                    <div className="m-2 ml-8 gap-2 ">
                        <h1 className='text-2xl font-bold'>PANCONG BIDZAR</h1>
                        <h1 className='text-2xl font-bold'>Rp. 6000</h1>
                    </div>
                </div>
                <div className="mt-14 mx-4">
                    <div className="flex flex-col gap-3">
                        <h1 className="text-2xl font-bold">Notes</h1>
                        <p>Optional</p>
                        <Textarea placeholder="lol" className="h-40" />
                    </div>
                </div>
                <div className="container absolute bottom-0 border-2  shadow-lg max-w-screen-sm rounded-2xl p-5">
                    <div className="flex justify-between">
                        <h1 className="text-2xl font-bold self-center">Total Order</h1>
                        <div className="flex flex-row gap-4 m-4">
                            <Button variant="outline">+</Button>
                            <p className="font-bold self-center">0</p>
                            <Button variant="outline">-</Button>
                        </div>
                    </div>
                    <div className="container bg-pink p-3 rounded-full mx-auto">
                        <h1 className="text-center font-bold text-2xl text-white">Add Orders - 0.0000</h1>
                    </div>
                </div>
            </div>
        </div >
    )
}
