import React, { useState } from "react"
import { motion } from "framer-motion"
import { IoIosArrowBack } from "react-icons/io"
import { SlSettings } from "react-icons/sl"
import { AiOutlineAppstore } from "react-icons/ai"
import { BsPerson } from "react-icons/bs";
import { HiOutlineDatabase } from "react-icons/hi";
import { TbReportAnalytics } from "react-icons/tb";
import { RiBuilding3Line } from "react-icons/ri";
import { useMediaQuery } from "react-responsive";
import { MdMenu } from "react-icons/md";
import { Link } from '@inertiajs/react';


export const Sidebar: React.FC = () => {
    // 🎬 Object that containing animation variants for sidebar open/close states.
    const sidebarAnimation = {
        open: {
            width: "16rem",
            transition: {
                damping: 40
            },
        },
        closed: {
            width: "4rem",
            transition: {
                damping: 40
            }
        }
    }
    // 🎬 Object that containing animation variants for sidebar arrow
    const arrowSidebarAnimation = {
        open: {
            rotate: 0,
        },
        closed: {
            rotate: 180,
        }
    };
    // 🚪 State to track whether the sidebar is open or closed
    const [ open, setOpen ] = useState<Boolean>(true)

    return (
        <motion.div variants={sidebarAnimation}
                    animate={open ? "open" : "closed"}
                    className="bg-white text-gray shadow-sm
                        z-[999] w-[16rem] max-w-[16rem]
                        h-screen overflow-hidden md:relative fixed">
            {/* Header sidebar */}
            <div className="mt-2 flex items-center gap-2.5 font-medium border-b
                            border-slate-300 py-3 mx-3">
                <img src="/assets/img/usk.png" alt="USK" width={55}/>
                {/* 🎨 If the sidebar is not opened, dont show the text */}
                <span className={`text-xl whitespace-pre ${open ? '': 'hidden'}`}>SAKIP</span>
            </div>
            {/* 🎨 Menus */}
            <div className="flex flex-col h-full">
                <ul className="whitespace-pre px-2.5 text-[0.9rem] py-5 flex gap-1
                                font-medium overflow-x-hidden">
                    <li className="link active">
                        <Link href={ '' } className="flex items-center gap-5">
                            <BsPerson size={20}/>
                            <span className="whitespace-nowrap font-medium text-lg">User</span>
                        </Link>
                    </li>
                </ul>
            </div>
            <motion.div
                variants={arrowSidebarAnimation}
                animate={ open ? "open" : "closed" }
                onClick={ () => { setOpen(!open) } }
                className="absolute w-fit h-fit z-50 right-2 bottom-5 cursor-pointer">
                <IoIosArrowBack size={25}/>
            </motion.div>
        </motion.div>
    )
}
