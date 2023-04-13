import { Checkbox } from "native-base";

export default function Check(){
    return(
        <Checkbox value="" colorScheme="purple"  size="lg" aria-label="CheckTarefa" onChange={() =>console.log("lol")}/>
    )
}