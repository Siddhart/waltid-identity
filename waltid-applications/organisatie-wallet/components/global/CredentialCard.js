import RightArrowSvg from '@/assets/icons/rightArrowSvg'
import React from 'react'
import Link from 'next/link'
import moment from 'moment';
import OrganisatieSvg from '@/assets/icons/OrganisatieSvg';
import CardSvg from '@/assets/icons/CardSvg';

const CredentialCard = ({ data, showBorder = false, shouldLink = true }) => {
    const cardContent = (
        <div className='relative w-full bg-[#F1F5FF] h-full rounded-2xl flex flex-col justify-between'>
            <div className='flex flex-col'>
                <div className='flex flex-row justify-between items-start'>
                    <p className='font-bold text-lg text-[#152A62]'>{data?.parsedDocument?.issuer?.name}</p>
                    <div className='w-8 h-8 rounded-md border-[1px] border-black overflow-hidden'>
                        {data?.parsedDocument?.issuer?.image?.id && <img src={data?.parsedDocument?.issuer?.image?.id} className='w-full h-full' />}
                        {!data?.parsedDocument?.issuer?.image?.id && <span className='w-full h-full flex items-center justify-center'>
                            <CardSvg width={20} height={20} />
                        </span>}
                    </div>
                </div>
                <p className='text-[#152A62]'>{data?.parsedDocument?.type[data?.parsedDocument?.type?.length - 1]}</p>
            </div>
            {shouldLink && <div className='flex flex-row gap-2 items-center'>
                <p className='font-bold text-[#152A62]'>Bekijk</p>
                <RightArrowSvg color='#152A62' />
            </div>}

            {!shouldLink && <div>
                <p className='text-sm break-all capitalize'>Issuance Date</p>
                <p className='text-base font-bold'>{moment(new Date(data?.parsedDocument?.issuanceDate)).format("DD MMMM YYYY")}</p>
            </div>}
        </div>
    );

    return shouldLink ? (
        <Link style={{
            border: showBorder ? "1px solid black" : ""
        }} href={`/cards/info/${data?.id}`} className={'relative w-full bg-[#F1F5FF] aspect-video rounded-2xl p-6 flex flex-col justify-between hover:scale-[1.01] duration-100'}>
            {cardContent}
        </Link>
    ) : (
        <div style={{
            border: showBorder ? "1px solid black" : ""
        }} className={'relative w-full bg-[#F1F5FF] aspect-video rounded-2xl p-6 flex flex-col justify-between'}>
            {cardContent}
        </div>
    )
}

export default CredentialCard