import { Autocomplete, AutocompleteItem } from '@nextui-org/autocomplete'
import React from 'react'
import { Controller, useFormContext } from 'react-hook-form'


type TAutocompleteUI = {
    name:string,
    title: string,
    options:  string[]
}
const AutocompleteUI = ({name, title, options}: TAutocompleteUI) => {
    const {control} = useFormContext()
  return (
    <Controller 
    name={name}
    control={control}
    render={({field}) => (
        <Autocomplete onSelectionChange={field.onChange} selectedKey={field.value} label={title}  listboxProps={{
            emptyContent: 'NO results'
        }}>
            {options.map((option: string) =>{
                return(
                    <AutocompleteItem key={option} value={option}>
                       {option}
                    </AutocompleteItem>
                )
            })}
        </Autocomplete>
    )}    
    />
  )
}

export default AutocompleteUI