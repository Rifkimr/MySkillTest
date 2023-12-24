"use client"
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardDescription, CardTitle } from '@/components/ui/card';
import { ArrowRightIcon, Pencil1Icon, PlusIcon } from '@radix-ui/react-icons';
import Link from 'next/link';
import Container from '@/components/Container';
import CardPortofolio from '@/components/cards/CardPortofolio';
import UseHandler from '@/utils/handlers';

const Projects = () => {
  const { 
    handleCardClick,
    profile,
    fetchData,
    handleDeleteCard,
  } = UseHandler()

  useEffect(() => {
    fetchData()
  },[])


  return (
    <section>
       <div className='p-8'>
      <Container>
        <div className='flex justify-between items-center my-3'>
          <CardTitle>My Project</CardTitle>
          <Link href={"/profile"}>
            <Button> <PlusIcon/> Tambah Portofolio</Button>
          </Link>
        </div>
        <div className='w-[100%] '>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-3 xl:grid-cols-4 2xl:grid-cols-5 gap-3 my-8'>
        {profile.portfolio &&
          profile.portfolio.map((item, index) => (
            <CardPortofolio
              key={index}
              item={item}
              index={index}
              handleCardClick={handleCardClick}
              handleDeleteCard={handleDeleteCard}
            />
          ))}
        </div>
      </Container>
    </div>
    </section>
  )
}

export default Projects