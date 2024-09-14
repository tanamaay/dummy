import ProjectTemplate from '@/template/ProjectTemplate'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Project = () => {
  return (
    <div id="project" className='bg-[url("/images/bg.jpg")] bg-no-repeat h-fit w-full bg-cover py-16'>
        <div className='text-white text-center px-5 '>
        <p className='text-lg'>Projects</p>
        <p className='text-5xl font-bold pb-16'>Collection Of My Projects</p>
        <div className='grid grid-cols-1 md:grid-cols-2 md:gap-5 space-y-10 lg:px-24'>
            
            <ProjectTemplate image="/images/Picture 2.png" title="Networking Monitoring" techImg1="/images/java.png" techImg2="/images/css.png" techImg3="/images/springboot.png"  class="hidden" link="/"/>

            <ProjectTemplate image="/images/ss.png" title="Moviflix" techImg1="/images/html.png" techImg2="/images/tailwind.png" techImg3="/images/js.png" class="w-8 h-8" link="https://tubular-alfajores-84b942.netlify.app/"/>
        </div>
        </div>
        <div className="w-2 h-32 mx-auto  border-l-2 border-white"></div>
        <p className='text-center text-xl text-gray-300 py-5'>Curious About The Process?</p>
        <Link href="" className='bg-[#1d1d1f] text-lg text-white w-fit rounded-xl gap-2 px-3 mx-auto py-2 flex items-center'>
          Visit My Github
            <Image
              src="/github.svg"
              width={500}
              height={500}
              className="w-10 transition cursor-pointer  animate-bounce  ease-in-out"
              alt="github-image"
            />
          </Link>
    </div>
  )
}

export default Project