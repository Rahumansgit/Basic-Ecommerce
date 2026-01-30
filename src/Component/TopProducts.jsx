import  { useEffect, useState } from 'react'
import {PRODUCTS_URL} from "../Utils/app.constants";


const TopProducts = () => {

    const [Products, setProducts] = useState();

    const fetchProducts = async () => {
        const data = await fetch(PRODUCTS_URL);
        const json = await data.json();
        setProducts(json.products);
    }   

    useEffect(() => {
        fetchProducts();
    }, []);

    useEffect(() => {
        const scrollContainer = document.querySelector('.scroll-wheel-x');
        if (scrollContainer) {
            scrollContainer.addEventListener('wheel', (e) => {
                if (e.deltaY !== 0) {
                    e.preventDefault();
                    scrollContainer.scrollBy({
                        left: e.deltaY,
                        behavior: 'smooth'
                    });
                }
            });
        }
    }, []);

   return (
    <section className='flex flex-col w-[80%] mx-auto mt-10 gap-7'>
        <h1 className='text-4xl font-medium'>Top Products</h1>
        <div className='flex gap-7 overflow-x-scroll noScrollbar scroll-wheel-x'>
            {
                Products && Products.map((product) => (
                    <div key={product.id} className='max-w-70 min-w-70 flex flex-col justify-center items-center whitespace-nowrap gap-1 bg-wild-sand p-4 rounded-lg'>
                        <img src={product.thumbnail} alt={product.title} className='w-full h-full object-fit'/>  
                        <h2>{product.title}</h2>
                        <p className='font-medium'>${product.price}</p>
                    </div>
                ))
            }
            
        </div>
    </section>
   )
}

export default TopProducts;