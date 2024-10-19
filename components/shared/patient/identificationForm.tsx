import AutocompleteUI from '@/components/ui/form/autocomplete'
import DefaultInput from '@/components/ui/form/defaultInput'
import { doctors, IdentificationTypes } from '@/constants/conts'
import React, { useEffect } from 'react'
import { useFormContext } from 'react-hook-form'

const IdentificationForm = () => {
    const {watch} = useFormContext()
    const selected = watch("identificationType")
    useEffect(() =>{
console.log(selected)
    }, [selected])
  return (
    <div className="flex flex-col gap-4">
      <AutocompleteUI
        name="identificationType"
        title="Select indetification"
        options={IdentificationTypes}
      />
      <DefaultInput
        formName="identificationNumber"
        placeholder="ex 1234567"
        label="Identification Number"
      />
    </div>
  )
}

export default IdentificationForm