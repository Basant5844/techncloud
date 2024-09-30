import React from 'react'
import RegistrationForm from '../RegistrationForm/RegistrationForm'
import Image from 'next/image'

const PageForm = () => {
  return (
    <section className='py-10 bg-lime-200'>
        <div className="container mx-auto px-40">
            <div className='flex flex-col lg:flex-row gap-5'>
                <div className='lg:w-1/2 p-20'>
                    <Image src='/eseller/app_mobile.png' alt='' width={1000} height={1000} className='w-full h-auto' />
                </div>
                <div className='lg:w-1/2'>
                    <h2 className='text-3xl font-bold'>Start Your Journey on the India’s
                    Largest Software Marketplace</h2>
                    <p className='text-base text-neutral-600 pt-5'>List your products on Techjockey to improve your visibility and find more customers.</p>
                    <div className='py-5'>
                    <RegistrationForm />
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default PageForm