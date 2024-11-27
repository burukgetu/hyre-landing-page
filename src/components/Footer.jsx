import { Linkedin, Mail } from "lucide-react"

const Footer = () => {
  return (
    <div className="pb-8 md:p-8 md:pr-28 bg-blue-950">
        <div className="md:flex justify-between items-center">
            <div className="px-4 py-12 flex flex-col items-center">
                <div className="w-64 md:w-72 absolute rounded-3xl h-48 bg-blue-400"></div>
                <div className="w-72 md:w-80 absolute translate-y-4 rounded-3xl h-48 bg-blue-200"></div>
                <div className="w-80 md:w-[360px] translate-y-8 rounded-3xl h-64 bg-white px-8 py-6
                md:flex md:flex-col md:justify-center md:gap-2">
                    <div>
                        <h1 className="text-[30px] leading-[1.1] font-[800] font-[Montserrat] tracking-tight
                            bg-gradient-to-r from-purple-700 via-blue-500 to-blue-400 text-transparent bg-clip-text">
                                Building a Team?
                        </h1>
                        <p className="dm text-lg font-semibold mt-2">
                            That&lsquo;s What We do Best!
                        </p>
                    </div>
                    <div className="md:flex justify-between">
                        <button className="bg-blue-950 text-white rounded-full px-6 py-3 text-sm dm
                        mt-3">
                            Let&lsquo;s Get Started!
                        </button>
                        <div className="mt-3 flex gap-2 items-center"> 
                            <Linkedin color="white" size={25} fill="white" className="bg-black p-[2px]"/>
                            <Mail stroke="white" fill="black" size={38}/>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex gap-2 font-[Montserrat] md:gap-16 mt-8">
                <div className="text-white px-4 md:flex-col md:flex md:gap-2">
                    <h1 className="text-xl font-extrabold tracking-wider mb-2">Navigation</h1>
                    <div className="dm opacity-90 md:flex-col md:flex md:gap-3">
                        <p>Home</p>
                        <p>Services</p>
                        <p>Our Work</p>
                        <p>Blog</p>
                        <p>About Us</p>
                        <p>Company Overview</p>
                    </div>
                </div>

                <div className="text-white px-4 md:flex-col md:flex md:gap-2">
                    <h1 className="text-xl font-extrabold tracking-wider mb-2">Others</h1>
                    <div className="dm opacity-90 md:flex-col md:flex md:gap-3">
                        <p>Contact Us</p>
                        <p>Privacy Policy</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="w-full justify-center flex text-white mt-6 md:mt-12 dm md:text-lg">
        &copy; 2024 Hyre website Clone.<span className="hidden md:flex"> All rights reserved.</span>
        </div>
    </div>
  )
}

export default Footer