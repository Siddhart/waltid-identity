import React, { useEffect, useRef, useState } from 'react'
import Link from 'next/link'

//assets
import PlusSvg from '@/assets/icons/PlusSvg'

//components
import PageMessage from '@/components/global/PageMessage'
import SearchBar from '@/components/global/SearchBar'

//helpers
import { getCredentials } from '@/helpers/credentials'

//components
import CredentialCard from '@/components/global/CredentialCard'
import Popup from '@/components/global/Popup'
import AddCredentialPopupContent from '@/components/popups/addCredential'

const CardsOverview = () => {
    const [cards, setCards] = useState([])
    const [search, setSearch] = useState("")

    const [addCredentialPopup, setAddCredentialPopup] = useState(false)

    useEffect(() => {
        const fetchCards = async () => {
            const cardsData = await getCredentials()
            setCards(cardsData)
        }

        fetchCards()
    }, [])

    const filteredCards = cards.filter(card => card?.parsedDocument?.issuer?.name.toLowerCase().includes(search.toLowerCase()))

    return (
        <div className='w-full'>
            {addCredentialPopup && <Popup setPopup={setAddCredentialPopup} title="Credential Toevoegen" content={<AddCredentialPopupContent />} />}

            <PageMessage title="Mijn Organisatie Credentials" message="Op deze pagina vindt je alle credentials die zijn uitgegevens voor uw organisatie, klik op de kaartjes van de credentials voor meer informatie." />

            <SearchBar title={`Mijn Credentials (${cards?.length})`} state={search} setState={setSearch} />
            <div className='grid grid-cols-4 gap-8 mt-6'>
                <button onClick={(() => setAddCredentialPopup(true))} className='hover:scale-[1.01] duration-100 relative w-full aspect-video rounded-2xl p-6 border-dashed border-4 border-[#383EDE] flex flex-col items-center justify-center'>
                    <PlusSvg />
                    <p className='font-bold text-lg text-[#383EDE]'>Credentials Toevoegen</p>
                </button>
                {filteredCards.map((card, index) => (
                    <CredentialCard key={index} data={card} />
                ))}
            </div>
        </div>
    )
}

export default CardsOverview