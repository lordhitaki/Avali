import { Button, IButtonProps, Text } from "native-base";

import colors from "../../colors";

type Props = IButtonProps & {
    title: string;
}
export function Buttons({ title, ...rest}:  Props){
    return(
        <Button
          w="full"
          h={16}
          bg={colors.Roxo.Escuro}
          borderRadius="50"
          _pressed={{
            bgColor:colors.Roxo.Claro
        }}
        {...rest}
        >
            <Text 
              color={colors.Branco.W}
              fontSize="md" >
              {title}
            </Text>
            
        </Button>
    );
}