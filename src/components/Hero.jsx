import {HERO_CONTENT} from '../constants'
import profilePic from '../assets/kevinRushProfile.png'
const Hero = ( {show}) => {

    return (
        <div className="border-b border-neutral-900 pb-4 lg:mb-35">
            <div className="flex flex-wrap">
                <div className="w-full lg:w-1/2">
                    <div className="flex flex-col items-center justify-center lg:items-start">
                        <h1 className="pb-10 text-6xl font-thin tracking-tight lg:mt-16">Rana Sami Ul Haq</h1>
                        <span className="bg-gradient-to-r from-indigo-500 via-purple-300 to-pink-500 bg-clip-text text-4xl tracking-tight text-transparent">
                            {show}
                        </span>
                        <p className="my-2 max-w-xl py-6 font-light tracking-tighter">
                            {HERO_CONTENT}
                        </p>
                    </div>
                </div>
                <div className="w-full lg:w-1/2 lg:p-8">
                    <div className="flex justify-center">
                        <img src={profilePic} alt="profile" className="w-full" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero