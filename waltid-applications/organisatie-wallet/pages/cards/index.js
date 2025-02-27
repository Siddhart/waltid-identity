import PlusSvg from '@/assets/icons/PlusSvg'
import RightArrowSvg from '@/assets/icons/rightArrowSvg'
import PageMessage from '@/components/PageMessage'
import getCredentials from '@/helpers/credentials/getCredentials'
import React, { useEffect, useRef, useState } from 'react'
import autoAnimate from '@formkit/auto-animate'
import Link from 'next/link'
import SearchSvg from '@/assets/icons/SearchSvg'

const CardsOverview = () => {
    const [cards, setCards] = useState([])
    const parent = useRef(null)

    useEffect(() => {
        parent.current && autoAnimate(parent.current, {
            duration: 500,
            easing: 'linear'
        })
    }, [parent])


    useEffect(() => {
        const getWalletCards = async () => {
            let cardsResponse = await getCredentials()
            setCards(old => cardsResponse)
        }

        getWalletCards()
    }, [])

    return (
        <div className='w-full '>
            <PageMessage title="Mijn Organisatie Credentials" message="Op deze pagina vindt je alle credentials die zijn uitgegevens voor uw organisatie, klik op de kaartjes van de credentials voor meer informatie." />


            <div className='mt-12 flex flex-row justify-between items-center'>
                <div>
                    <p className='text-3xl font-bold '>Mijn Credentials ({cards?.length})</p>
                </div>

                <div className='flex items-center justify-end gap-4'>
                    <input className='border-b-[1px] border-black px-3 focus:outline-none' placeholder='Zoeken...' />
                    <button className='w-10 h-10 rounded-md bg-[#383EDE] flex items-center justify-center'>
                        <SearchSvg />
                    </button>
                </div>
            </div>
            <div className='grid grid-cols-4 gap-8 mt-6'>
                <Link href='/' className='hover:scale-[1.01] duration-100 relative w-full aspect-video rounded-2xl p-6 border-dashed border-4 border-[#383EDE] flex flex-col items-center justify-center'>
                    <PlusSvg />
                    <p className='font-bold text-lg text-[#383EDE]'>Credentials Toevoegen</p>
                </Link>
                {cards.map((card, i) => {
                    return <Card data={card} />
                })}
            </div>
        </div>
    )
}

export default CardsOverview


const Card = ({ data }) => {

    return <Link href={`/cards/info/${data?.id}`} className='relative w-full bg-[#F1F5FF] aspect-video rounded-2xl p-6 flex flex-col justify-between hover:scale-[1.01] duration-100'>
        <div className='flex flex-col'>
            <div className='flex flex-row justify-between items-start'>
                <p className='font-bold text-lg text-[#152A62]'>{data.parsedDocument.issuer.name}</p>
                <img src={data?.parsedDocument?.issuer?.image?.id} className='w-8 h-8 rounded-md border-[1px] border-black' />
            </div>
            <p className='text-[#152A62]'>{data.parsedDocument.type[data.parsedDocument.type.length - 1]}</p>
        </div>
        <div className='flex flex-row gap-2 items-center'>
            <p className='font-bold text-[#152A62]'>Bekijk</p>
            <RightArrowSvg color='#152A62' />
        </div>
    </Link>
}