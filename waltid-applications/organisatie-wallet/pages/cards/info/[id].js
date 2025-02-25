import DeleteSvg from '@/assets/icons/DeleteSvg'
import getCredentialData from '@/helpers/credentials/getCredentialData'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

const CardInfo = () => {
  const router = useRouter()
  const { id } = router.query

  const [credential, setCredential] = useState(null)

  useEffect(() => {
    const fetchCredentialData = async () => {
      let credentialDataResponse = await getCredentialData(id)
      setCredential(old => credentialDataResponse)
      console.log(credentialDataResponse);


    }

    if (id) fetchCredentialData()
  }, [router])

  return (
    <div className='relative w-full flex flex-row gap-8 overflow-hidden'>
      <div className='flex flex-col h-screen flex-1 max-w-[350px] rounded-t-2xl bg-[#F5F4F9]'>
        <div className='sticky top-0'>
          <div className=' max-w-[350px] bg-[#383EDE] p-4 text-white text-3xl font-bold  flex items-center justify-between rounded-t-2xl'>
            <p>Kaartgegevens</p>
          </div>
          <div className='p-4 w-full'>
            <div className='bg-black aspect-video rounded-lg'></div>
          </div>
        </div>

        <div className='p-4 flex flex-col gap-6 pb-4 mb-40 h-full overflow-scroll'>
          {credential?.parsedDocument?.credentialSubject && Object.keys(credential?.parsedDocument?.credentialSubject)?.map((key, i) => {
            let keyObj = [key, credential?.parsedDocument?.credentialSubject[key]]

            return <KeyValue title={key} value={keyObj[1]} />
          })}
        </div>


        <div className='absolute bottom-0 w-full h-fit p-4 max-w-[350px] '>
          <button className='border-2 bg-[#AB0065] w-full h-full flex items-center justify-center gap-3 py-3 rounded-2xl'>
            <DeleteSvg />
            <p className='text-white text-base'>Kaart Verwijderen</p>
          </button>
        </div>
      </div>
    </div>
  )
}

export default CardInfo


const KeyValue = ({ title, value }) => {
  return <div className='flex flex-col break-all'>
    <p className='text-sm break-all capitalize'>{title}</p>
    <p className='text-base font-bold'>{value}</p>
  </div>
}