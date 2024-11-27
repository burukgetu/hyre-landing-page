import Testimonials from "./Testimonials"


const HeroSection = () => {
  return (
    <div className="pb-12 overflow-hidden">
        <div className="mt-12 md:flex">
            <div className="md:w-[65%] px-4 md:px-8 md:h-[90vh] flex flex-col justify-center">
                <h1 className="text-[35px] md:text-7xl text-blue-950 mb-1 leading-[1.2] font-[800] font-[Montserrat] tracking-tighter">
                    Searching for a star?
                </h1>
                <h1 className="text-[35px] md:text-7xl leading-[1.1] font-[800] font-[Montserrat] tracking-tight
                bg-gradient-to-br from-purple-800 via-blue-400 to-purple-800 text-transparent bg-clip-text">
                    We Got You.
                </h1>
                <p className="text-[14px] md:text-xl mt-5 dm opacity-75">
                    Hyre is a digitally-driven recruitment agency that blends in-house and 
                    agency recruiting know-how to find the perfect fit for your team</p>
                <button className="bg-blue-950 text-white rounded-full px-6 py-4 text-sm dm
                mt-6 w-48 md:w-56 md:text-lg">
                    Let&lsquo;s Build Together!
                </button>
            </div>
            <div className="basis-1/3">
                <img src="rocket.png" alt="" />
            </div>
        </div>

        <div className="w-full flex flex-col items-center">
            <p className="text-purple-500 text-lg font-bold tracking-wider w-[80%] text-center">
                AWESOME COMPANIES WE WORK WITH
            </p>
            <div className="bg-gray-200 h-32 w-full md:w-[90%] rounded-2xl"></div>
        </div>

        <div className="bg-gray-100 pb-12">
            <div className="w-full flex flex-col items-center pt-12">
                <p className="text-purple-600 md:mb-6 font-bold font-[Montserrat] text-sm md:text-xl">WHY HYRE</p>
                <h1 className="text-2xl md:text-6xl font-[900] md:font-[800] font-[Montserrat] w-[70%] md:w-[45%] text-center">This is How We 
                    <span className="bg-gradient-to-br from-purple-700 via-blue-400 to-purple-600 text-transparent bg-clip-text"> Get Things Done
                        </span>
                </h1>
                <p className="text-[14px] md:text-lg w-[90%] md:w-[47%] text-center mt-3 md:mt-0 opacity-50 font-[Montserrat]">
                    We work with the most innovative companies, adding a fresh approach to the hiring strategy. Building and scaling teams? That&lsquo;s what we do best!
                </p>
            </div>

            <div className="flex flex-col md:flex-row md:px-6 gap-4 md:gap-6 items-center mt-16">

                <div className="flex md:flex-col md:items-center gap-4 md:gap-0 bg-white w-[90%] rounded-3xl px-4 py-5">
                    <img className="rounded-full w-12 h-12 md:w-20 md:h-20 bg-gray-300" src="rocket.png" alt="" />
                    <div className="flex flex-col md:items-center md:p-4 gap-4">
                        <h1 className="text-[20px] md:text-3xl dm font-[900]">
                            Dual Expertise
                        </h1>
                        <p className="dm md:text-lg md:opacity-60 text-sm md:text-center">
                            Agency & In-house - We&lsquo;ve been on both sides of the hiring table, so we know how to find the perfect fit for your company.
                        </p>
                    </div>
                </div>

                <div className="flex md:flex-col md:items-center gap-4 md:gap-0 bg-white w-[90%] rounded-3xl px-4 py-5">
                    <img className="rounded-full w-12 h-12 md:w-20 md:h-20 bg-gray-300" src="rocket.png" alt="" />
                    <div className="flex flex-col md:items-center md:p-4 gap-4">
                        <h1 className="text-[20px] md:text-3xl dm font-[900]">
                            Fully Transparent
                        </h1>
                        <p className="dm md:text-lg md:opacity-60 text-sm md:text-center">
                        Clean and clear. This is what you can expect from us and how it should always be.
                        </p>
                    </div>
                </div>

                <div className="flex md:flex-col md:items-center gap-4 md:gap-0 bg-white w-[90%] rounded-3xl px-4 py-8">
                    <img className="rounded-full w-12 h-12 md:w-20 md:h-20 bg-gray-300" src="rocket.png" alt="" />
                    <div className="flex flex-col md:items-center md:p-4 gap-4">
                        <h1 className="text-[20px] md:text-3xl dm font-[900]">
                            Lightening Speed
                        </h1>
                        <p className="dm md:text-lg md:opacity-60 text-sm md:text-center">
                            Speed wins in the talent market. Don&lsquo;t worry; we get things done fast.
                        </p>
                    </div>
                </div>
            </div>

            <div className="mb-24">
                <div className="w-full flex flex-col items-center pt-32">
                    <p className="text-purple-600 md:mb-4 font-bold font-[Montserrat] text-sm md:text-xl">OUR SERVICES</p>
                    <h1 className="text-2xl md:text-6xl font-[900] md:font-[800] font-[Montserrat] w-[70%] md:w-[45%] text-center">For Every Problem There&lsquo;s a 
                        <span className="bg-gradient-to-br from-purple-700 via-blue-400 to-purple-600 text-transparent bg-clip-text"> Solution
                            </span>
                    </h1>
                    <p className="text-[14px] md:text-lg w-[90%] md:w-[60%] text-center mt-3 opacity-50 font-[Montserrat]">
                        Our services are tailor-made to your needs, aligning our strategy with your requirements.
                    </p>
                </div>
            </div>

            <div className="w-full flex flex-col gap-5 md:gap-16 px-3 md:px-16">

                <div className="flex bg-white items-center md:justify-start gap-16 rounded-3xl">
                    <div className="md:w-[70%] bg-white rounded-3xl px-6 py-8 md:py-24 md:px-12">
                        <p className="font-[Montserrat] text-xs md:text-xl font-semibold text-purple-700">
                            Exclusive project
                        </p>
                        <h1 className="font-[Montserrat] font-bold text-lg md:text-3xl mb-4">
                            Build An Entire Team Across Various Functions
                        </h1>
                        <p className="dm text-sm md:text-xl md:opacity-50">
                            Our Exclusive Project has helped top companies scale their teams from the ground up, growing from 0 to 50+ quickly and with strategic precision. Beyond recruitment, we are your ally in success, dedicated to delivering results that propel your business forward.
                        </p>
                        <button className="border-2 border-purple-700 rounded-full px-6 py-3 mt-3 md:mt-6 font-bold text-sm md:text-lg dm">
                            Become Our Client
                        </button>
                    </div>
                    <img className="hidden md:flex w-44 h-44" src="rocket.png" alt="" />
                </div>
                
                <div className="flex bg-white items-center md:justify-start gap-16 rounded-3xl">
                    <div className="md:w-[70%] bg-white rounded-3xl px-6 py-8 md:py-24 md:px-12">
                        <p className="font-[Montserrat] text-xs md:text-xl font-semibold text-purple-700">
                            Retainer project
                        </p>
                        <h1 className="font-[Montserrat] font-bold text-lg md:text-3xl mb-4">
                            Leadership and Key Roles
                        </h1>
                        <p className="dm text-sm md:text-xl md:opacity-50">
                        Our signature Retainer Project is meticulously designed for those seeking a dedicated and outcome-focused approach to leadership and pivotal contributor recruitment. We deeply understand the significant impact these roles have on steering your company&lsquo;s course, especially during critical expansion phases.
                        </p>
                        <button className="border-2 border-purple-700 rounded-full px-6 py-3 mt-3 md:mt-6 font-bold text-sm md:text-lg dm">
                            Become Our Client
                        </button>
                    </div>
                    <img className="hidden md:flex w-44 h-44" src="rocket.png" alt="" />
                </div>
                
                <div className="flex bg-white items-center md:justify-start gap-16 rounded-3xl">
                    <div className="md:w-[70%] bg-white rounded-3xl px-6 py-8 md:py-24 md:px-12">
                        <p className="font-[Montserrat] text-xs md:text-xl font-semibold text-purple-700">
                            Contingency
                        </p>
                        <h1 className="font-[Montserrat] font-bold text-lg md:text-3xl mb-4">
                            Flexible Talent Solutions
                        </h1>
                        <p className="dm text-sm md:text-xl md:opacity-50">
                            Contingency Search is best when you need a nimble, success-oriented talent solution. Tap into our dynamic network, offering access to select candidates. Benefit from strategic talent introductions, designed for flexibility and aligned with your evolving recruitment objectives.
                        </p>
                        <button className="border-2 border-purple-700 rounded-full px-6 py-3 mt-3 md:mt-6 font-bold text-sm md:text-lg dm">
                            Become Our Client
                        </button>
                    </div>
                    <img className="hidden md:flex w-44 h-44" src="rocket.png" alt="" />
                </div>

            </div>
        </div>

        <div>
        <div className="w-full flex flex-col items-center pt-12">
                <p className="text-purple-600 md:mb-4 font-bold font-[Montserrat] text-sm md:text-xl">WHAT OUR CLIENTS SAY</p>
                <h1 className="text-2xl md:text-6xl font-[900] md:font-[800] font-[Montserrat] w-[70%] md:w-[45%] text-center"> 
                    <span className="bg-gradient-to-br from-purple-700 via-blue-400 to-purple-600 text-transparent bg-clip-text">
                        Here it from Those
                        </span> Who Know Us Best
                </h1>
                <p className="text-[14px] md:text-lg w-[90%] md:w-[60%] text-center mt-3 opacity-50 font-[Montserrat]">
                Great people make great companies, and we specialize in building the best. Our success stories show why clients trust us with their recruitment needs.
                </p>
                <button className="bg-black md:hidden text-white text-sm dm px-8 py-3 mt-4 rounded-full">
                    Contact Us
                </button>
            </div>

            <div className="flex justify-center w-[300vw] md:w-full">
                <Testimonials/>
                <Testimonials/>
                <Testimonials/>
            </div>
        </div>

        <div className="bg-gray-200">
            <div className="w-full flex flex-col items-center pt-12">
                    <p className="text-purple-600 md:mb-4 font-bold font-[Montserrat] text-sm md:text-xl">HOW WE WORK</p>
                    <h1 className="text-2xl md:text-6xl font-[900] md:font-[800] font-[Montserrat] w-[70%] md:w-[45%] text-center"> 
                        <span className="bg-gradient-to-br from-purple-700 via-blue-400 to-purple-600 text-transparent bg-clip-text"> 
                            Effortlessly
                        </span> Hire The Right Talent For Your Team
                    </h1>
            </div>

            <div className="p-3 flex flex-col md:flex-row gap-5 md:gap-8 md:justify-center md:my-6">
                <img className="bg-white rounded-xl md:w-[20%]" src="pic-one.jpeg" alt="" />
                <img className="bg-white rounded-xl md:w-[20%]" src="pic-two.png" alt="" />
                <img className="bg-white rounded-xl md:w-[20%]" src="pic-three.png" alt="" />
                <img className="bg-white rounded-xl md:w-[20%]" src="pic-four.png" alt="" />
            </div>
        </div>
    </div>
  )
}

export default HeroSection