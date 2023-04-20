import {SuccessContainer} from "../styles/successStyles";
import { useRouter } from "next/router";
import Link from 'next/link';

export default function Success() {

    const router = useRouter();

    return (
        <SuccessContainer initial={{opacity:0}} animate={{opacity:1}} exit={{opacity: 0}}>
            <h1>Merci {router.query.name} pour votre message !</h1>
            <Link href={'/'}>
                <button>Retour</button>
            </Link>
        </SuccessContainer>
    )
}