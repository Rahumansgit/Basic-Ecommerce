import { PLAY_STORE_IMG_URL, APP_STORE_IMG_URL } from "../Utils/app.constants"

function Footer() {
  return (
    <footer className="bg-black text-white p-20 md:px-36 mt-16 flex flex-col ">
        <span className="taxt-lg font-medium">ShopEase</span>
        <span className="text-sm mt-8 hover:underline cursor-pointer">Visit Help Center</span>
        <div className="flex justify-between gap-2 flex-wrap">
            <div className="mt-8">
                <span className="text-lg font-medium">Company</span>
                <div className="flex flex-col mt-2 gap-3">
                    <span className="text-sm hover:underline">About Us</span>
                    <span className="text-sm hover:underline">Our Offerings</span>
                    <span className="text-sm hover:underline">newsroom</span>
                    <span className="text-sm hover:underline">Investors</span>
                </div>
            </div>
            <div className="mt-8">
                <span className="text-lg font-medium">Quick Links</span>
                <div className="flex flex-col mt-2 gap-3">
                    <span className="text-sm hover:underline">Home</span>
                    <span className="text-sm hover:underline">Shop</span>
                    <span className="text-sm hover:underline">Best Sellers</span>
                    <span className="text-sm hover:underline">Deals</span>
                </div>
            </div>
            <div  className="mt-8">
                <span className="text-lg font-medium">Customer Support</span>
                <div className="flex flex-col mt-2 gap-3">
                    <span className="text-sm hover:underline">FAQs</span>
                    <span className="text-sm hover:underline">Shipping & Delivery</span>
                    <span className="text-sm hover:underline">Returns & Refunds</span>
                    <span className="text-sm hover:underline">Privacy Policy</span>
                </div>
            </div>
            <div className="mt-8">
                <span className="text-lg font-medium">Follow Us</span>
                <div className="flex flex-col mt-2 gap-3">
                    <span className="text-sm hover:underline">Instagram</span>
                    <span className="text-sm hover:underline">Facebook</span>
                    <span className="text-sm hover:underline">Twitter / X</span>
                    <span className="text-sm hover:underline">LinkedIn</span>
                </div>
            </div>
        </div>
        <div className="flex justify-start items-center gap-3">
            <img src={ PLAY_STORE_IMG_URL } alt="Play-Store-logo" className="w-[7.8rem] h-[7.8rem] cursor-pointer" />
            <img src={ APP_STORE_IMG_URL } alt="App-Store-logo" className="w-[7.8rem] h-[7.8rem] cursor-pointer" />
        </div>
        <span className="text-xs mt-3 text-gray-400">© 2025 ShopEase Technologies Inc.</span>
    </footer>
  )
}

export default Footer