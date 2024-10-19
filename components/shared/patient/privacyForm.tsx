import CheckboxInputUI from '@/components/ui/form/checkboxInput'
import { consents } from '@/constants/conts'
import { Button } from '@nextui-org/button'
import React, { useEffect } from 'react'
import { useFormContext } from 'react-hook-form'

const PrivacyForm = () => {
    const {watch} = useFormContext()
    const consentss = watch('privacyConsent')
    useEffect(() =>{
        console.log(consentss)
    },[consentss])
  return (
    <div className='flex flex-col gap-4 '>
        <h1>Consent and Privacy</h1>
        <CheckboxInputUI name='treatmentConsent' text='I consent to receive treatment for my health condition.'/>
        
        <CheckboxInputUI name='disclosureConsent' text='I consent to the use and disclosure of my health information for treatment purposes.'/>

        <CheckboxInputUI name='privacyConsent' text='I acknowledge that I have reviewed and agree to the privacy policy'/>

        
         <Button color="primary" type="submit">
          Let's go
        </Button>
    </div>
  )
}

export default PrivacyForm