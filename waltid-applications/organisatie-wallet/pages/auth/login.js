import CardsSvg from '@/assets/cardsSvg'
import AndroidSvg from '@/assets/download/androidSvg'
import IosSvg from '@/assets/download/iosSvg'
import RightArrowSvg from '@/assets/icons/rightArrowSvg'
import LogoSvg from '@/assets/logo'
import OverheidSvg from '@/assets/overheidSvg'
import LoginStep from '@/components/auth/LoginStep'
import WelcomeStep from '@/components/auth/welcomeStep'
import React, { useState } from 'react'

const Login = () => {
    const [step, setStep] = useState(0)

    switch (step) {
        case (0): return <WelcomeStep setStep={setStep} />
        case (1): return <LoginStep setStep={setStep} />
    }
}

export default Login