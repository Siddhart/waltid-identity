import PageMessage from '@/components/PageMessage'
import getCredentials from '@/helpers/credentials/getCredentials'
import React, { useEffect } from 'react'

const CardsOverview = () => {

    useEffect(() => {
      getCredentials()
    }, [])
    
  return (
    <PageMessage title="Mijn Organisatie Credentials" message="Op deze pagina vindt je alle credentials die zijn uitgegevens voor uw organisatie, klik op de kaartjes van de credentials voor meer informatie." />
  )
}

export default CardsOverview