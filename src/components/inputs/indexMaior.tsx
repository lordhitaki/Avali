import React from "react"
import { Input, IInputProps, FormControl } from "native-base"

type Props = IInputProps & {
    errorMessage?: string | null;
}

export function InputMaior({ errorMessage = null, isInvalid, ...rest }: Props){
    const invalid = !!errorMessage || isInvalid;
    return(
    <FormControl
    mb={5} 
    isInvalid={invalid} >
        <Input
        bg="#fff"
        fontSize="md"
        h={40}
        isInvalid={invalid}
        placeholderTextColor="#AFAFB0"
        color="#000000"
        textAlignVertical='top'
        _focus={{
            bg:"#fff",
            borderWidth: 1,
            borderColor:"#AFAFB0",
          }}
        _invalid={{
            borderWidth:2,
            borderColor:"red.500",
            marginTop: 0
        }}

        {...rest}

        />
        <FormControl.ErrorMessage>
            {errorMessage}
        </FormControl.ErrorMessage>
    </FormControl>
    );
}