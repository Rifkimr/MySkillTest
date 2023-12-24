import Link from 'next/link'
import React from 'react'

const Logo = () => {
  return (
    <Link href='/'>
        <img src='/potoki.png' width={65} height={65} alt='' />
    </Link>
  )
}

export default Logo