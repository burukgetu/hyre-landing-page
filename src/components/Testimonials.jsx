import { Quote } from "lucide-react"


const Testimonials = () => {
  return (
    <div className="m-4 md:w-[30%] mt-12 bg-gray-200 rounded-2xl px-5 py-4">
        <p><Quote size={30} color="blue" fill="blue"/></p>
        <p className="mt-4 text-sm opacity-70 dm">
            “I’ve had the pleasure of working with the team at Hyre, and I can say without hesitation that they are dedicated to our vision of making healthcare accessible for everyone. They truly know how to build and scale a startup from scratch. It’s clear that they are not just focused on hiring talent but on building a team that shares their clients’ values.”
        </p>
        <div className="py-2 flex gap-3 mt-3">
            <img className="bg-white rounded-full w-12 h-12" src="rocket.png" alt="" />
            <div className="flex flex-col">
                <p className="dm text-lg font-bold">Sean Low</p>
                <p>Founder of oridinary folk</p>
            </div>
        </div>
    </div>
  )
}

export default Testimonials