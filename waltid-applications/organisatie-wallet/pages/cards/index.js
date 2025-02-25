import PlusSvg from '@/assets/icons/PlusSvg'
import RightArrowSvg from '@/assets/icons/rightArrowSvg'
import PageMessage from '@/components/PageMessage'
import getCredentials from '@/helpers/credentials/getCredentials'
import React, { useEffect, useState } from 'react'

const CardsOverview = () => {
    const [cards, setCards] = useState([])

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

            <div className='grid grid-cols-4 gap-8 mt-16'>
                {cards.map((card, i) => {
                    return <Card data={card} />
                })}

                <a href='/' className='relative w-full h-full rounded-2xl p-6 border-dashed border-4 border-[#383EDE] flex flex-col items-center justify-center'>
                    <PlusSvg />
                    <p className='font-bold text-lg text-[#383EDE]'>Credentials Toevoegen</p>
                </a>
            </div>
        </div>
    )
}

export default CardsOverview


const Card = ({ data }) => {

    return <a href={`/cards/info/${data?.id}`} className='relative w-full bg-[#F1F5FF] aspect-video rounded-2xl p-6 flex flex-col justify-between'>
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
    </a>
}