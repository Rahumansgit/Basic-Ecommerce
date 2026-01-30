import cartIcon from "../assets/cart-icon.svg";
const Navbar = () => {
  return (
    <nav className="bg-black text-white w-full flex justify-between max-md:justify-center items-center py-5 px-16 max-[430px]:px-10 max-[330px]:px-7">
        <div className="flex gap-5 items-center justify-center max-[330px]:gap-3">
            <span className="text-xl font-bold cursor-pointer mr-5 max-[430px]:mr-0 ">ShopEase</span>
            <span className="text-sm cursor-pointer hover:underline ">Shop</span>
            <span className="text-sm cursor-pointer hover:underline ">Best Sellers</span>
            <span className="text-sm cursor-pointer hover:underline ">Deals</span>
        </div>
        <div className="flex gap-5 justify-center items-center max-md:hidden">
            <div className="flex gap-1 justify-center items-center cursor-pointer">
                <img src={cartIcon} alt="cart-logo" />
                <span className="text-sm font-medium cursor-pointer hover:underline ">Cart</span>
            </div>
            <span className="text-sm font-medium cursor-pointer hover:underline ">Help</span>
            <span className="text-sm font-medium cursor-pointer hover:underline ">Login</span>
            <span className="bg-white border-2 rounded-full px-4 py-2 text-black text-sm font-medium cursor-pointer hover:bg-transparent hover:text-white ease-in-out duration-300">Signin</span>
        </div>
    </nav>
  )
} 

export default Navbar