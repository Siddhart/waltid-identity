import React from 'react'

//components
import PageMessage from '@/components/global/PageMessage'

const Dashboard = () => {
    return (
        <div className='w-full'>
            <PageMessage title="Welcome terug, Siddhart!" message="Op deze pagina beheerd u alle gebruikers van uw organisatie wallet. Klik op een gebruiker om meer informatie te tonen." />
        </div>
    )
}

export default Dashboard