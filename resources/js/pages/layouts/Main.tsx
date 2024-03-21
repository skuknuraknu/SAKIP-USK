import React, { ReactNode } from "react"
import { Sidebar } from "./sidebar/Sidebar"

// Define props interface including children prop
interface MainProps {
    children: ReactNode
}

/*
* Main component that only accepts children prop and in this case it's a ReactNode
* 🎨 ReactNode is a type that represents anything that's renderable in React
*/
const Main: React.FC<MainProps> = ({ children }) => {
    return (
        <div className="flex gap-5 bg-[#f1f1f1]">
            <Sidebar />
            {/* flex-1: fill any available space  😊*/}
            <main className="max-w-5xl flex-1 mx-auto py-4">{children}</main>
        </div>
    )
}
export default Main
