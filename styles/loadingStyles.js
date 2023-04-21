import styled from "styled-components";
import {motion} from "framer-motion";

export const LoadingWrapper = styled(motion.div)`
    min-height: 85vh;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: "Poppins_light";
    color: var(--grey);
`;