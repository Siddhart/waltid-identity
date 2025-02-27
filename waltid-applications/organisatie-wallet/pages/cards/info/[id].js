import CheckSvg from '@/assets/icons/CheckSvg'
import ChevronRight from '@/assets/icons/ChevronRight'
import CrossSvg from '@/assets/icons/CrossSvg'
import DeleteSvg from '@/assets/icons/DeleteSvg'
import getCredentialData from '@/helpers/credentials/getCredentialData'
import autoAnimate from '@formkit/auto-animate'
import { useRouter } from 'next/router'
import React, { useEffect, useRef, useState } from 'react'
import { toast, ToastContainer } from 'react-toastify'

const CardInfo = () => {
  const router = useRouter()
  const { id } = router.query

  const [credential, setCredential] = useState(null)
  const parent = useRef(null)

  useEffect(() => {
      parent.current && autoAnimate(parent.current, {
          duration: 500,
          easing: 'linear'
      })
  }, [parent])

  useEffect(() => {
    const fetchCredentialData = async () => {
      let credentialDataResponse = await getCredentialData(id)
      setCredential(old => credentialDataResponse)
      console.log(credentialDataResponse);


    }

    if (id) fetchCredentialData()
  }, [router])

  return (
    <div className='relative w-full flex flex-row gap-6 overflow-hidden'>
      <div className='flex flex-col h-screen flex-1 max-w-[350px] rounded-t-2xl bg-[#F5F4F9]'>
        <div className='sticky top-0'>
          <div className=' max-w-[350px] bg-[#383EDE] p-4 text-white text-3xl font-bold  flex items-center justify-between rounded-t-2xl'>
            <p>Kaartgegevens</p>
          </div>
          <div className='p-4 w-full'>
            <div className='relative w-full bg-[#F1F5FF] border-[1px] border-black aspect-video rounded-2xl p-6 flex flex-col justify-between'>
              <div className='flex flex-col'>
                <div className='flex flex-row justify-between items-start'>
                  <p className='font-bold text-lg text-[#152A62]'>{credential?.parsedDocument?.issuer?.name}</p>
                  <img src={credential?.parsedDocument?.issuer?.image?.id} className='w-8 h-8 rounded-md border-[1px] border-black' />
                </div>
                <p className='text-[#152A62]'>{credential?.parsedDocument?.type[credential?.parsedDocument?.type?.length - 1]}</p>
              </div>
              {/* <div className='flex flex-row gap-2 items-center'>
                <p className='font-bold text-[#152A62]'>Bekijk</p>
                <RightArrowSvg color='#152A62' />
              </div> */}
            </div>
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

      <div className='flex flex-1 flex-col justify-between w-full h-full gap-6'>
        <div className='flex flex-col flex-1 w-full h-full '>
          <div className='w-full h-fit bg-[#383EDE] p-4 text-white text-3xl font-bold  flex items-center justify-between rounded-t-2xl'>
            <p>Recente Activiteiten</p>
          </div>

          <div className='flex flex-col gap-6 p-4 w-full bg-[#F5F4F9] rounded-b-2xl overflow-scroll h-[60vh]'>
            <DayBlock />
            <DayBlock />
          </div>
        </div>

        <div className='w-full h-36 bg-[#F5F4F9] rounded-2xl'>
          <div className='w-full h-16 bg-[#383EDE] p-4 text-white text-3xl font-bold  flex items-center justify-between rounded-t-2xl'>
            <p>Toegang Wijzigen</p>
          </div>


          <div id='overflowDiv' className='flex flex-row gap-4 flex-1 h-20 items-center p-4 w-10'>
            <AccessButton value="Eigenaar" selected={true} />
            <AccessButton value="Developer" selected={true} />
            <AccessButton value="HR" selected={false} />
          </div>
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


const AccessButton = ({ value, selected }) => {
  const [select, setSelect] = useState(selected)

  function changeState() {
    setSelect(!select)
    toast.success(`${value} heeft nu ${select ? "geen" : ""} toegang tot deze credential`, {
      closeButton: false,
      autoClose: 2000
    })
  }

  return <button onClick={changeState} style={{
    backgroundColor: select ? "#383EDE" : "white",
    border: "2px solid",
    borderColor: select ? "#383EDE" : "#AB0065"
  }} className='flex flex-row gap-4 items-center px-4 py-2 rounded-full w-fit text-white font-bold h-10'>
    <p style={{
      color: select ? "white" : "#AB0065"
    }}>{value}</p>
    <span>{select ? <CheckSvg /> : <CrossSvg />}</span>
  </button>
}


const DayBlock = ({ events = [] }) => {
  events = [
    <Event name={"Belastingdienst"} event={"Inloggen"} time={"12:00"} user={"Siddhart Ghogli"} image={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKguQbW4_cBy9UyMp0dIOsPQ1kDhZAOTDZhA&s"} />,
    <Event name={"Sligro"} event={"Gegevens Gedeeld"} time={"12:00"} user={"Siddhart Ghogli"} image={"https://www.sligrofoodgroup.nl/sites/default/files/download/sligro-logo.jpeg"}/>,
  ]

  return <div className='w-full bg-white rounded-lg'>
    <div className='w-full px-4 py-2 font-bold'>
      <p className='text-[#152A62]'>Februari, 2025</p>
    </div>
    <div className='flex flex-col w-full'>
      {events.map((obj, i) => {
        return obj
      })}
    </div>
  </div>
}

const Event = ({ name, event, time, user, image }) => {
  return <div className='w-full p-4 h-28 flex flex-row justify-between items-center border-t-[1px]'>
    <div className='flex flex-row items-center gap-4'>
      <img src={image} className='bg-black rounded-md w-10 h-10 border-[1px] border-black' />
      <div className='flex flex-col justify-center'>
        <p className='text-base font-bold text-[#152A62]'>{name}</p>
        <p className='text-sm text-[#152A62]'>{event}</p>
        <p className='text-xs text-[#445581]'>{time} door {user}</p>
      </div>
    </div>
    <ChevronRight />
  </div>
}