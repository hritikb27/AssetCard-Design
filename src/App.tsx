import React from 'react';
import './App.css';
import EthImg from './assets/Ethereum (ETH).png';
import SolanaImg from './assets/Solana (SOL).png';
import SHIBAImg from './assets/SHIBA INU (SHIB).png';
import BitcoinImg from './assets/Bitcoin SV (BSV).png';
import BinanceImg from './assets/Binance Coin (BNB).png';
import bgVector from './assets/Vector.png';

type Item = {
  pair : String,
  price: String,
  tvl: String,
  change: String,
  image: string | HTMLImageElement
}

const items: Item[] = [
  {
    'pair' : 'Bitcoin(BTC)',
    'price' : '31812.80',
    'tvl': '60000',
    'change': '+10%',
    'image' : BitcoinImg
  },
  {
    'pair' : 'Solana(SOL)',
    'price' : '32.83',
    'tvl': '60000',
    'change': '-12.32%',
    'image' : SolanaImg
  },
  {
    'pair' : 'Ethereum(ETH)',
    'price' : '1466.45',
    'tvl': '60000',
    'change': '-11.93%',
    'image' : EthImg
  },
  {
    'pair' : 'Binance USD(BUSD)',
    'price' : '1.00',
    'tvl': '60000',
    'change': '+0.26%',
    'image' : BinanceImg
  },
  {
    'pair' : 'Shiba Inu(SHIB)',
    'price' : '0.000000001948',
    'tvl': '60000',
    'change': '-8.1%',
    'image' : SHIBAImg
  },
]

function App() {
  return (
    <div className="w-full h-screen p-6 my-4 xl:my-0">
      <div className='flex flex-wrap w-full h-full items-center justify-center'>
        {items.map(item=>{
          return <div id='cardWrapper' className='z-10 flex justify-center items-start relative w-[70%] sm:w-[40%] md:w-[30%] lg:w-[25%] xl:w-[20%] 2xl:w-[18%] h-[48%] 2xl:h-[43%] m-4 bg-[#626A881A] rounded-2xl '>
          <div id='card' className='z-0 relative flex flex-col w-[140px] h-[80px] bg-[#14172B] rounded-b-full border border-[#ECF0FF1A]'>
            <div id='cardLogo' className='flex justify-center items-center bg-no-repeat w-[100px] h-[100px] rounded-full bg-gradient-to-b from-[#626A881A] to-[#EDF0F41A] absolute bottom-[12px] left-[20px] z-50'>
              <img src={item.image} className='w-[52%] h-[52%] rounded-full ' />
            </div>

          </div>
          <div className='absolute flex flex-col items-center font-bold gap-4 text-[#737BAE] top-[100px]'>
            <div className='flex flex-col items-center'>
              <p>{item.pair}</p>
              <span className='flex gap-5 justify-center items-center text-white bg-[#14172B] h-[42px] w-[242px] rounded-3xl border-t-2 border-[#ECF0FF1A]'>
                {`$${item.price}`}
                {item.change.includes('+') ? <span className='absolute right-2 px-1 text-green-400'>{item.change}</span> : <span className='absolute right-2 px-1 text-red-400'>{item.change}</span>}
              </span>
            </div>

            <div className='flex flex-col items-center'>
              <p>Price</p>
              <span className='flex justify-center items-center text-white bg-[#14172B] h-[42px] w-[242px] rounded-3xl border-t-2 border-[#ECF0FF1A]'>{`$${item.tvl}`}</span>
            </div>

            <div className='flex flex-col items-center'>
              <p>TVL</p>
              <span className='flex justify-center items-center text-white bg-[#14172B] h-[42px] w-[121px] rounded-3xl'>{`$${item.tvl}`}</span>
            </div>
            <span>Popular pairs</span>
          </div>
        </div>
        })}
      </div>

    </div>
  );
}

export default App;
