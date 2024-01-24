import React from 'react'

const Delivery = () => {
  return (
    <div className='w-full bg-white py-16 p-4'>
        <h3 className='text-orange-500 font-bold text-2xl text-center'>Quick Delivery App</h3>
        <div className='w-[1240px] mx-auto grid md:grid-cols-2'>
            <img 
            className='w-[550px] mx-auto my-4'
            src='https://res.cloudinary.com/ehizeex-shop/image/upload/v1672672076/NetflixApp/FC_two_phones.6ec9a842f905769677f9_m91off.webp' 
            alt='mobile pictures' />
            <div className='flex flex-col justify-center'>
                <p className='text-[#00df9a] font-bold'>Get The App</p>
                <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Limitless Convenience on-demand</h1> 
                <p>This app offers a diverse culinary scene with 
                    numerous options for food delivery. Among the 
                    best food delivery apps among apps like Zomato, 
                    Swiggy, and Homefoodi. This app is the best 
                    choice for its extensive food listings, 
                    offering a wide range of cuisines and great deals. 
                    It's also renowned for its fast delivery services and 
                    convenient ordering options, including late-night delivery. 
                    This app stands out for its focus on home-cooked food, 
                    providing users with the opportunity to enjoy authentic 
                    and wholesome meals prepared by passionate home chefs. 
                    This apps ensure that residents to have access to 
                    delicious food delivered right to their doorsteps.
                    </p>
                    <button className='bg-black text-[#00df9a] w-[180px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3'>Get Started</button>
            </div>
        </div>

    </div>
  )
}

export default Delivery;