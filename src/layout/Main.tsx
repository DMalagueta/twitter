import React from 'react'
import { FireIcon } from '@heroicons/react/solid';

export default function Main() {
  return (
    <div className="grid grid-cols-3 grid-rows-1 gap-5 mt-5 p-5">
        <div className="box bg-white rounded-lg p-5">
            <h1 className="text-lg"> <FireIcon className="h-7 w-7 inline"/> Tendencias</h1>
            <hr className="mt-2"/>
            <p className="mt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur voluptate unde quia doloremque rem cupiditate sed nostrum placeat dolorum! Laboriosam, eligendi tempore, praesentium quod consequuntur non ut quibusdam ipsum libero cumque nam asperiores maiores assumenda, facere temporibus accusamus? Quae ipsam soluta aspernatur iusto rerum inventore suscipit sed corrupti quasi laboriosam voluptatem perspiciatis quisquam cum quidem alias, necessitatibus debitis? Dolore fuga suscipit ab a dolores quaerat, magni eum, in itaque vel neque blanditiis ratione nihil omnis commodi corrupti repudiandae dolorum ullam repellendus? Delectus, sunt obcaecati! Minus, distinctio soluta officia illum assumenda, cumque vel ratione obcaecati ut, deserunt quas dignissimos aut esse.</p>
        </div>
        <div className="box col-start-2 col-end-4 ">
            <div className="flex flex-col bg-white px-5 py-2 rounded-lg">
                <div className="w-full p-4 border-b hover:bg-lighter flex">
                    <div className="flex-none mr-4">
                        <img src="https://randomuser.me/api/portraits/men/11.jpg" className="h-12 w-12 rounded-full flex-none"/>
                    </div>
                        <div className="w-full">
                            <div className="flex items-start w-full flex-col">
                                <p className="font-semibold"> Matateu Anastacio</p>
                                <p className="text-sm text-dark block"> @matateu </p>
                                <i className="fas fa-angle-down text-dark ml-auto"></i>
                            </div>
                        </div>
                </div>
                    <p>dada</p>
            </div>
            <div className="flex flex-col bg-white px-5 py-2 rounded-lg mt-5">
                <div className="w-full p-4 border-b hover:bg-lighter flex">
                    <div className="flex-none mr-4">
                        <img src="https://randomuser.me/api/portraits/men/11.jpg" className="h-12 w-12 rounded-full flex-none"/>
                    </div>
                        <div className="w-full">
                            <div className="flex items-start w-full flex-col">
                                <p className="font-semibold"> Matateu Anastacio</p>
                                <p className="text-sm text-dark block"> @matateu </p>
                                <i className="fas fa-angle-down text-dark ml-auto"></i>
                            </div>
                        </div>
                </div>
                <p>dada</p>
            </div>
        </div>
    </div>
  )
}
