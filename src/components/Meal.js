import React, { useState } from 'react';
import { mealData } from '../data/data';
import { BsArrowRight } from 'react-icons/bs';

const Meal = () => {
    const [food , setFood] = useState(mealData)
    const filterCategories = (category) => {
        setFood (
            mealData.filter((item)=>{
                return item.category === category;
            })
        );
    };

  return (
    <div className='px-4 py-12 m-auto max-w-[1520px] '>
        <h1 className='text-orange-500 font-bold text-2xl text-center py-2'>Our Products</h1>

<div className='flex flex-col lg:flex-row justify-center'>
    <div className='flex justify-center md:justify-center'>
        <button onClick={()=>setFood(mealData)} className='m-1 border-orange-700 text-white hover:bg-white hover:text-orange-700 bg-orange-700 hover:border-orange-700'>All</button>
        <button onClick={()=>filterCategories('pizza')} className='m-1 border-orange-700 text-white hover:bg-white hover:text-orange-700 bg-orange-700 hover:border-orange-700'>Pizza</button>
        <button onClick={()=>filterCategories('chicken')} className='m-1 border-orange-700 text-white hover:bg-white hover:text-orange-700 bg-orange-700 hover:border-orange-700'>Chicken</button>
        <button onClick={()=>filterCategories('salad')} className='m-1 border-orange-700 text-white hover:bg-white hover:text-orange-700 bg-orange-700 hover:border-orange-700'>Salad</button>
    </div>
</div>

    <div className='grid lg:grid-cols-4  md:grid-cols-2 sm:grid-cols-1 gap-6 py-4'>
        {
            food.map((item)=>(
                <div key={item.id} className='border-none hover:scale-105 duration-300'>
                    <img className='w-full h-[200px] object-cover rounded-lg'
                    src={item.image}
                    alt={item.name} />
                    <div className='flex px-2 py-2 justify-between'>
                        <p className='font-bold'>{item.name}</p>
                        <p className='bg-orange-700 h-18 w-18 rounded-full -mt-10 text-white py-4 px-2 border-8 font-bold'>{item.price}</p>
                    </div>
                    <div className='pl-2 py-4 -mt-7 '>
                        <p className='flex items-center text-indigo-700' >View More <BsArrowRight className='w-5 ml-2' />  </p>
                    </div>
                </div>
            ))

        }
    </div>
    </div>
  )
}

export default Meal;