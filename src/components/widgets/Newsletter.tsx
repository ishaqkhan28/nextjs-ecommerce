import { Button } from "../ui/button"

const Newslatter = () => {
  return (
    <div className="relative text-center mx-auto space-y-4 mb-[100px] mt-[100px] lg:min-h-[50rem] flex flex-col justify-center items-center text-gray-800 z-40">
      <h6 className="absolute text-6xl md:text-[9rem] font-bold text-gray-300 text-center mx-auto -z-40 ">Newsletter</h6>
      <h6 className="text-3xl md:text-4xl font-bold mb-20">Subscribe Our <span className="text-myOrange">Newsletter</span> </h6>
      <p className="max-w-[16rem] text-lg font-medium">Get the latest information and promo offers directly</p>
      <div className="flex gap-4 flex-wrap items-center justify-center mt-20">
        <input type="text" className="border rounded-full border-myOrange py-1 px-2 md:px-4 flex flex-grow w-80" placeholder="Input email address" />
        <Button className="text-white bg-myBlackhead hover:bg-myOrange duration-300 hover:rounded-full border border-myOrange px-4 py-2">Get Started</Button>
      </div>
    </div>
  )
}

export default Newslatter