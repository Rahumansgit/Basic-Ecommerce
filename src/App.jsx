import Navbar from "./Component/Navbar";
import HeroSection from "./Component/HeroSection";
import TopProducts from "./Component/TopProducts";
import FeatureSection from "./Component/FeatureSection";
import first_festure_img from "./assets/first-feature.png";
import second_festure_img from "./assets/second.png";
import third_festure_img from "./assets/third.png";
import fourth_festure_img from "./assets/four.png";
import fifth_festure_img from "./assets/five.png";
import Footer from "./Component/Footer";


const App = () => {
  return (
    <>
    <Navbar />
    <HeroSection /> 
    <TopProducts />
    <div className="flex flex-col w-full lg:w-[80%] mx-auto">
      <FeatureSection 
        IMGsrc={first_festure_img} 
        title="Why Choose Us?" 
        discription="We make onling shopping easy, fun, and affordable. Our platform offers a wide range of products, secure payment options, and fast delivery to ensure a seamless shopping experience." 
        btnCTA="Learn More" />
        <FeatureSection 
        className="flex-row-reverse"
        IMGsrc={second_festure_img}
        title="Shop by Category" 
        discription="Find everything you need in one place. Browse through our extensive categories to discover products that suit your style and needs."
        btnCTA="Browse Categories" />
        <FeatureSection 
        IMGsrc={third_festure_img} 
        title="Trending Right Now" 
        discription="Discover what's hot and happening in the world of online shopping. Stay ahead of the trends with our curated selection of popular products."
        btnCTA="View Best Sellers" />
        <FeatureSection 
        className="flex-row-reverse"
        IMGsrc={fourth_festure_img} 
        title="Limited-Time Deals" 
        discription="Grap exclusive discounts and offers on your favorite products. Don't miss out on our limited-time deals to save big on your purchases."
        btnCTA="Shop Deals" />
        <FeatureSection 
        IMGsrc={fifth_festure_img} 
        title="Lover By Thousands" 
        discription="Amazing experiences shared by our satisfied customers. Read reviews and testimonials to see why thousands of shoppers love our platform."
        btnCTA="Shop Now" />
    </div>
        <Footer />
    </>
  )
}

export default App