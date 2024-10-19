import { form } from 'framer-motion/client'
import React from 'react'
import { Controller, useFormContext } from 'react-hook-form'
import PhoneInput from 'react-phone-input-2'
type TPhoneInputControlled ={
    phoneName: string
}
const PhoneInputControlled = ({phoneName}: TPhoneInputControlled) => {

    const {control, formState} = useFormContext()
  return (
    
    <Controller
    control={control}
    name={phoneName}
    render={({ field }) => (
      <>
        <PhoneInput
          country={"kz"}
          placeholder="+12133734253"
          onChange={(value) => field.onChange(value)}
          value={field.value}
        />

      </>
    )}
  />
  )
}

export default PhoneInputControlled