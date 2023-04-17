import React from "react"
import { Input, IInputProps, FormControl } from "native-base"
import colors from "../../colors";

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
        bg={colors.Branco.W}
        fontSize="md"
        h={40}
        isInvalid={invalid}
        placeholderTextColor={colors.Preto.C2}
        color={colors.Preto.P}
        textAlignVertical='top'
        _focus={{
            bg:colors.Branco.W,
            borderWidth: 1,
            borderColor:colors.Preto.C2,
          }}
        _invalid={{
            borderWidth:2,
            borderColor:colors.Vermelho.R,
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