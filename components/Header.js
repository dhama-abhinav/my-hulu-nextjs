import Image from 'next/image'
import React from 'react'
import {  BadgeCheckIcon, CollectionIcon, HomeIcon, LightningBoltIcon, SearchIcon, UserIcon } from '@heroicons/react/outline'
import {HeaderOptions} from '../components/HeaderOptions'

export const Header = () => {

  return (
    <div className=' flex  flex-col sm:flex-row m-5 justify-between items-center h-auto'>
        <div className='flex flex-grow justify-evenly max-w-2xl '>
            <HeaderOptions Icon={HomeIcon} title='HOME' />
            <HeaderOptions Icon={LightningBoltIcon} title='TRENDING' />
            <HeaderOptions Icon={BadgeCheckIcon} title='VERIFIED' />
            <HeaderOptions Icon={CollectionIcon} title='COLLECTIONS' />
            <HeaderOptions Icon={SearchIcon} title='SEARCH' />
            <HeaderOptions Icon={UserIcon} title='ACCOUNT' />
        </div>
        <Image className=' object-contain' src='https://links.papareact.com/ua6' width={200} height={100} />
    </div>
  )
}
