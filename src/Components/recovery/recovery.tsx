import React, { useState } from 'react'
import { EmailInput } from './emailInput'
import { CodeInput } from './codeInput'
import { ChangePassword } from './changePassword'

export const Recovery: React.FC = () => {
  const [step, setStep] = useState<'email' | 'code' | 'change'>('email')
  const [email, setEmail] = useState<string>('')

  const nextStep = (
    newStep: 'email' | 'code' | 'change',
    userEmail?: string,
  ) => {
    if (userEmail) {
      setEmail(userEmail)
    }
    setStep(newStep)
  }

  return (
    <>
      {step === 'email' && <EmailInput nextStep={nextStep} />}
      {step === 'code' && <CodeInput nextStep={nextStep} email={email} />}
      {step === 'change' && <ChangePassword email={email} />}
    </>
  )
}
