import React from 'react'

const Footer = () => {
  return (
    <div className='bg-[#502274] flex justify-center items-center flex-col text-[#e9c0e9] h-screen'>
  <div class="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6 ">
      <figure class="max-w-screen-md mx-auto">
          <svg class="h-12 mx-auto mb-3  text-[#e9c0e9]" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor"/>
          </svg> 
          <blockquote>
              <p class="text-[#e9c0e9] font-bold text-4xl  ">"RevenueGear is just awesome. It contains tons of features supporting for a customer care to work in a optimised manner. Perfect choice for your next SaaS application."</p>
          </blockquote>
          <figcaption class="flex items-center justify-center mt-6 space-x-3">
              <img class="w-6 h-6 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png" alt="profile picture"/>
              <div class="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                  <div class="pr-3 font-medium ">Micheal Gough</div>
                  <div class="pl-3 text-sm font-light ">CEO at Google</div>
              </div>
          </figcaption>
      </figure>
  </div>

  
    <footer className="bg-white rounded-2xl border border-gray-300 p-8 w-3/4 mx-auto shadow-sm text-gray-700 select-none mt-10">
      <div className="flex flex-wrap justify-between gap-6">
        <div className="flex-1 min-w-[180px]">
          <h4 className="mb-3 font-semibold text-gray-900">Company</h4>
          <nav className="flex flex-col space-y-2">
            <a href="#" className="text-gray-600 hover:text-[#e9c0e9] focus:text-[#e9c0e9] focus:outline-none transition">About Us</a>
            <a href="#" className="text-gray-600 hover:text-[#e9c0e9] focus:text-[#e9c0e9] focus:outline-none transition">Careers</a>
            <a href="#" className="text-gray-600 hover:text-[#e9c0e9] focus:text-[#e9c0e9] focus:outline-none transition">Press</a>
          </nav>
        </div>
        <div className="flex-1 min-w-[180px]">
          <h4 className="mb-3 font-semibold text-gray-900">Support</h4>
          <nav className="flex flex-col space-y-2">
            <a href="#" className="text-gray-600 hover:text-[#e9c0e9] focus:text-[#e9c0e9] focus:outline-none transition">Help Center</a>
            <a href="#" className="text-gray-600 hover:text-[#e9c0e9] focus:text-[#e9c0e9] focus:outline-none transition">Contact</a>
            <a href="#" className="text-gray-600 hover:text-[#e9c0e9] focus:text-[#e9c0e9] focus:outline-none transition">Privacy Policy</a>
          </nav>
        </div>
        <div className="flex-1 min-w-[180px]">
          <h4 className="mb-3 font-semibold text-gray-900">Social</h4>
          <nav className="flex flex-col space-y-2">
            <a href="#" aria-label="Twitter" className="text-gray-600 hover:text-[#e9c0e9] focus:text-[#e9c0e9] focus:outline-none transition">Twitter</a>
            <a href="#" aria-label="LinkedIn" className="text-gray-600 hover:text-[#e9c0e9] focus:text-[#e9c0e9] focus:outline-none transition">LinkedIn</a>
            <a href="#" aria-label="Facebook" className="text-gray-600 hover:text-[#e9c0e9] focus:text-[#e9c0e9] focus:outline-none transition">Facebook</a>
          </nav>
        </div>
      </div>
      <div className="mt-6 text-center text-sm text-gray-500">
        &copy; 2024 RevenueGear. All rights reserved.
      </div>
    </footer>
</div>
  )
}

export default Footer