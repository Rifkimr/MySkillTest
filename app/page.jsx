// import Container from './../components/Container'
import HomeBanner from './../components/HomeBanner'
import CardItem from './../components/cards/CardItem'
import { Button } from './../components/ui/button'
import { CardTitle } from './../components/ui/card'
import { PlusIcon } from '@radix-ui/react-icons'
import Image from 'next/image'
import Link from 'next/link'
import Container from './../components/Container';

export default function Home() {
  return (
   <div className='p-8'>
    <Container>
      <div>
        <HomeBanner/>
      </div>
      <div className='flex justify-between items-center my-3'>
      <CardTitle>My Portofolio</CardTitle>
      <Link href={"/create"}>
      <Button> <PlusIcon/> Tambah Portofolio</Button>
      </Link>
      </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-3 xl:grid-cols-4 2xl:grid-cols-5 gap-5'>
        <Link href={'/detail/2'} >
          <CardItem/>
        </Link>
        </div>
    </Container>
   </div>
  )
}
