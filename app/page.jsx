'use client'
import { useEffect, useState } from 'react';
import HomeBanner from './../components/HomeBanner';
import { Button } from './../components/ui/button';
import {  CardTitle } from './../components/ui/card';
import { PlusIcon } from '@radix-ui/react-icons';
import Link from 'next/link';
import Container from './../components/Container';
import UseHandler from '@/utils/handlers';
import CardPortofolio from '@/components/cards/CardPortofolio';

export default function Home() {
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
    <div className='p-8'>
      <Container>
        <div>
          <HomeBanner />
        </div>
        <div className='flex justify-between items-center my-3'>
          <CardTitle>My Portofolio</CardTitle>
          <Link href={"/profile"}>
            <Button> <PlusIcon/> Tambah Portofolio</Button>
          </Link>
        </div>
        <div className="w-[100%] gap-3 flex flex-cols" >
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
        <div className='w-full flex justify-center'>
        <Link href='/project' className='text-center'>
         Lebih Banyak...
        </Link>
        </div>
      </Container>
    </div>
  );
}
