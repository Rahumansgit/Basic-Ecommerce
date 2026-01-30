import heroImage from '../assets/hero-image.png';

const HeroSection = () => {
  return (
    <section className="flex mx-auto my-20 max-md:flex-col justify-center items-center w-[82%] gap-10">
        <div className="flex flex-col items-start justify-center gap-6 flex-wrap">
            <span className="text-5xl font-bold">Shop Smarter. Shop Better.</span>
            <span>Discover thousands of products, each carefully selected for quality, style, and value bringing everything you need and love into convenient place.</span>
            <div className='flex gap-4'>
              <button className='button'>Shop Now</button>
              <button className='button'>Explore Deals</button>
            </div>
        </div>
        <div>
            <img src={heroImage} alt="Hero Image" className='lg:w-120 lg:h-100 w-20rem'/>
        </div>
    </section>
  )
}

export default HeroSection