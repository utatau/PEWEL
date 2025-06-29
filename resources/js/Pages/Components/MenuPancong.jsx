import { useDispatch } from 'react-redux';
import { tambahProduk } from '../Action/TambahProduk'; 
{props.pancong ? props.pancong.map((data, i) => {
  const dispatch = useDispatch();

  const handleTambah = () => {
    dispatch(tambahProduk({
      id: data.id, 
      nama: data.nama,
      harga: data.harga,
      gambar: data.gambar,
    }));
  };

  return (
    <div
      className="col-span-2 m-4 bg-abu rounded hover:cursor-pointer"
      key={i}
      onClick={handleTambah}
    >
      <div className="flex flex-col m-5 gap-2">
        <img src={`assets/gambar/${data.gambar}`} alt="" className='border-4 rounded-lg border-white h-[15em]' />
        <h1 className='font-bold'>{data.nama}</h1>
        <p className='font-bold'>Rp. {data.harga.toLocaleString('id-ID')}</p>
      </div>
    </div>
  );
}) : ''}
