import React, { useEffect, useRef, useState } from 'react'
import Link from 'next/link'

//assets
import PlusSvg from '@/assets/icons/PlusSvg'

//components
import PageMessage from '@/components/global/PageMessage'
import SearchBar from '@/components/global/SearchBar'

//helpers
import { getCredentials } from '@/helpers/credentials'
import CredentialCard from '@/components/global/CredentialCard'


const CardsOverview = () => {
    const [cards, setCards] = useState([])

    useEffect(() => {
        const fetchCards = async () => {
            const cardsData = await getCredentials()
            setCards(cardsData)
        }

        fetchCards()
    }, [])

    return (
        <div className='w-full'>
            <PageMessage title="Mijn Organisatie Credentials" message="Op deze pagina vindt je alle credentials die zijn uitgegevens voor uw organisatie, klik op de kaartjes van de credentials voor meer informatie." />

            <SearchBar title={`Mijn Credentials (${cards?.length})`} />
            <div className='grid grid-cols-4 gap-8 mt-6'>
                <Link href='/' className='hover:scale-[1.01] duration-100 relative w-full aspect-video rounded-2xl p-6 border-dashed border-4 border-[#383EDE] flex flex-col items-center justify-center'>
                    <PlusSvg />
                    <p className='font-bold text-lg text-[#383EDE]'>Credentials Toevoegen</p>
                </Link>
                {cards.map((card, index) => (
                    <CredentialCard key={index} data={card} />
                ))}
            </div>
        </div>
    )
}

export default CardsOverview