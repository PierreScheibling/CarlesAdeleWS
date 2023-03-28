import {FormContainer} from "../styles/contactStyles";
import { useRouter } from "next/router";
import {motion as m} from "framer-motion";

export default function Success() {

    const router = useRouter();

    return (
        <m.FormContainer initial={{opacity:0}} animate={{opacity:1}} exit={{opacity: 0}}>
            <h1>Merci {router.query.name} pour votre message !</h1>
        </m.FormContainer>
    )
}