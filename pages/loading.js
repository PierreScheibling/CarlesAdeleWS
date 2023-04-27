import { motion } from 'framer-motion'
import { pageAnimation, titlelineAnim } from '../styles/animations'
import {LoadingWrapper} from '../styles/loadingStyles';

export default function Loading() {
  return (
    <LoadingWrapper>
      <h2>Chargement de la page ...</h2>
    </LoadingWrapper>
  )
}
