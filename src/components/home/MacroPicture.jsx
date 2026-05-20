import React from 'react'

const MacroPicture = () => {
    return (
        <>
            <div className='container space-y-5'>
                <h6 className='text-blue'>The macro picture</h6>
                <div className="grid grid-cols-2 items-end ">
                    <h2>All signals point to a once-in-a-generation moment.</h2>
                    <div className="flex justify-end">
                        <p className='w-[60%] leading-tight '>Five tailwinds are converging to create an unprecedented environment for building consumer brands in India. The next decade will be defined by the model that captures India 1.</p>
                    </div>
                </div>
            </div>
            <div className="container space-y-14  my-24">
                <div className="w-full flex justify-center gap-x-20 ">
                    <div className="space-y-2  rounded-xl p-7  bg-[#F8F8F8] text-center">
                        <h3>$4.3 <span className='text-2xl -ml-3'>T</span></h3>
                        <h6 className='text-xs uppercase opacity-80'>Consumer market by 2030</h6>
                        <p className='text-sm opacity-60 max-w-72 mx-auto leading-none'>India's spending becomes the world's second largest, expanding 46% from 2024.</p>
                    </div>
                    <div className="space-y-2  rounded-xl p-7  bg-[#F8F8F8] text-center">
                        <h3>$600 <span className='text-2xl -ml-3'>B</span></h3>
                        <h6 className='text-xs uppercase opacity-80'>Brand unlock</h6>
                        <p className='text-sm opacity-60 max-w-72 mx-auto leading-none'>Structural shift from unbranded retail creates white space for new players.</p>
                    </div>
                    <div className="space-y-2  rounded-xl p-7  bg-[#F8F8F8] text-center">
                        <h3>28</h3>
                        <h6 className='text-xs uppercase opacity-80'>Median age</h6>
                        <p className='text-sm opacity-60 max-w-72 mx-auto leading-none'>Versus 39 in China. A young, aspirational population drives global consumption.</p>
                    </div>
                </div>
                <div className="w-full flex justify-center gap-x-24 ">
                    <div className="space-y-2  rounded-xl p-7  bg-[#F8F8F8] text-center">
                        <h3>3 <span className='text-2xl -ml-3'>X</span></h3>
                        <h6 className='text-xs uppercase opacity-80'>E-commerce users by 2030</h6>
                        <p className='text-sm opacity-60 max-w-72 mx-auto leading-none'>Online shoppers more than triple, building a vast accessible marketplace.</p>
                    </div>
                    <div className="space-y-2  rounded-xl p-7  bg-[#F8F8F8] text-center">
                        <h3>$350 <span className='text-2xl -ml-3'>B</span></h3>
                        <h6 className='text-xs uppercase opacity-80'>Digital GMV by 2030</h6>
                        <p className='text-sm opacity-60 max-w-72 mx-auto leading-none'>Reaches the same scale as Brazil's full retail sector today.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MacroPicture