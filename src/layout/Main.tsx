import { FireIcon } from '@heroicons/react/solid';
import Post from './Post';

export default function Main() {


   const data = [
        { 
        name: 'Anastacia Matateu',
        nick: 'matateu',
        hashtag: '#weather',
        post: 'Mas que tempo é este',
        likes: 20,
    },
    {
        name: 'Belmira Farrusca',
        nick: 'bfarrusca',
        hashtag: '#beach',
        post: 'Quem vem à 🏖' ,
        likes: 400,
    }
];
    
  return (
    <div className="grid grid-cols-3 grid-rows-1 gap-5 mt-5 p-5">
        <div className="box bg-white rounded-lg p-5">
            <h1 className="text-lg"> <FireIcon className="h-7 w-7 inline"/> Tendencias</h1>
            <hr className="mt-2"/>
            <div className="flex items-center justify-between mt-5">
                    <div className="pl-4 flex items-center">
                        <p className="focus:outline-none text-md leading-normal text-blue-400">#weather</p>
                    </div>
                    <p className="w-20 text-xs leading-3 text-right text-gray-700">1 partilha</p>
            </div>
            <div className="flex items-center justify-between mt-5">
                    <div className="pl-4 flex items-center">
                        <p className="focus:outline-none text-md leading-normal text-blue-400">#beach</p>
                    </div>
                    <p className="w-20 text-xs leading-3 text-right text-gray-700">1 partilha</p>
            </div>
        </div>
        
        <div className="box col-start-2 col-end-4 ">
            <>
                
                    {
                        data.map((p,i) => (
                            <Post data={p} key={i} random={Math.floor(Math.random() * (20 - 0) + 0)}/>
                        ))
                    }
                
            </>
                
        </div>
        
    </div>
  )
}
