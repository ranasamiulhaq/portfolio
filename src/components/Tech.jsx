import { RiReactjsLine } from "react-icons/ri"
import { RiJavascriptLine } from "react-icons/ri"
import { FaNodeJs } from "react-icons/fa"
import { RiTailwindCssLine } from "react-icons/ri"
import { SiMongodb } from "react-icons/si"
import { SiFirebase } from "react-icons/si"





const Tech = () => {
    return(
        <div className="border-b border-neutral-800 pb-24">
            <h1 className="my-20 text-center text-4xl">Technologies</h1>
            <div className="flex flex-wrap items-center justify-center gap-4 p-4">
                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <RiReactjsLine className="text-7xl text-cyan-500"/>
                </div>
                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <FaNodeJs className="text-7xl text-green-500"/>
                </div>
                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <RiTailwindCssLine className="text-7xl text-white-500"/>
                </div>
                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <RiJavascriptLine className="text-7xl text-yellow-500"/>
                </div>
                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiFirebase className="text-7xl text-orange-500"/>
                </div>
                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiMongodb className="text-7xl text-green-500"/>
                </div>
            </div>
           
        </div>
    )
}

export default Tech