import { AlignRight, LogIn } from "lucide-react"


const Navbar = () => {
  return (
    <div className="flex items-center justify-between pl-6 pr-3 py-3">
        <div className="flex items-center gap-16">
          <h1 className="text-2xl md:text-4xl font-[Montserrat] font-[600]">hyre</h1>
          <div className="hidden md:flex opacity-80 font-[Montserrat] gap-6">
            <a href="">Home</a>
            <a href="">Services</a>
            <a href="">Our Work</a>
            <a href="">Blog</a>
            <a href="">About Us</a>
          </div>
        </div>
        <div className="flex items-center gap-5">
            <button className="flex items-center gap-2 text-sm border-[1px] border-black
            rounded-full px-3 py-3 md:px-3 md:py-2">
                <LogIn size={20}/>
                Login
            </button>
            <button className="hidden md:flex items-center gap-2 text-sm border-[1px] border-black
            rounded-full bg-blue-950 text-white px-6 py-2">
                Contact Us
            </button>
            <AlignRight size={30} className="flex md:hidden text-blue-900"/>
        </div>
    </div>
  )
}

export default Navbar