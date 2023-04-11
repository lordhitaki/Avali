import { Button, IButtonProps, Text } from "native-base";

type Props = IButtonProps & {
    title: string;
}
export function Buttons({ title, ...rest}:  Props){
    return(
        <Button
          w="full"
          h={16}
          bg="#4A3780"
          borderRadius="50"
          _pressed={{
            bgColor:"fuchsia.600"
        }}
        {...rest}
        >
            <Text 
              color="white" 
              fontSize="md" >
              {title}
            </Text>
            
        </Button>
    );
}