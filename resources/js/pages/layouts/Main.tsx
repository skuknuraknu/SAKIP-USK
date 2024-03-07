import React, { useState } from 'react';
import Menu from './Menu';

const Sidebar = () => {
    const [isKinerjaAnggaranOpened, setIsKinerjaAnggaranOpened] = useState(false);
    const [ isKinerjaOpened, setIsKinerjaOpened ] = useState(false);
    const toggleKinerjaAnggaran = () => {
        setIsKinerjaAnggaranOpened(!isKinerjaAnggaranOpened)
    }
    const toggleKinerja = () => {
        setIsKinerjaOpened(!isKinerjaOpened)
    }

    return (
        <div className="border-r-2 h-screen w-1/5">
            {/* Sidebar content */}
            <div className="p-4">
                <h1 className="text-2xl font-bold">Sidebar judul</h1>
                <p className="text-gray-500">Sidebar deskripsi</p>
                <div className='mt-10'>
                    <div className='flex text-xl' onClick={toggleKinerjaAnggaran}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 mt-1">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z" />
                        </svg>
                        <button className='border-none px-4 cursor-pointer'>Kinerja Anggaran</button>
                    </div>
                    {/* sub menu */}
                    {isKinerjaAnggaranOpened && (
                        <div className='ml-8'>
                            <div className='flex pt-2'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5 mt-1">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5" />
                                </svg>
                                <h3 className='px-2'>NKA</h3>
                            </div>
                            <div className='flex pt-2'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5 mt-1">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5" />
                                </svg>
                                <h3 className='px-2'>IKPA</h3>
                            </div>
                        </div>
                    )}
                    <div className='flex text-xl mt-5' onClick={toggleKinerja}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 mt-1">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
                        </svg>
                        <h3 className='px-4 cursor-pointer select-none'>Kinerja ...</h3>
                    </div>
                    {/* sub menu */}
                    {isKinerjaOpened && (
                        <div className='ml-8'>
                            <div className='flex pt-2'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5 mt-1">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5" />
                                </svg>
                                <h3 className='px-2'>Perjanjian Kinerja</h3>
                            </div>
                            <div className='flex pt-2'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5 mt-1">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5" />
                                </svg>
                                <h3 className='px-2'>Capaian Kinerja</h3>
                            </div>
                            <div className='flex pt-2'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5 mt-1">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5" />
                                </svg>
                                <h3 className='px-2'>Dokumen Kinerja</h3>
                            </div>
                            <div className='flex pt-2'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5 mt-1">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5" />
                                </svg>
                                <h3 className='px-2'>Evaluasi Kinerja</h3>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

const Main = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="flex">
            <Sidebar />
            <div className="flex-grow p-4">
                {/* Main content */}
                {children}
            </div>
        </div>
    );
};

export default Main;
