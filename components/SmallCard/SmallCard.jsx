import styles from '@/styles/smallcards.module.css'
import Image from 'next/image'

export const SmallCard = (props) => {
  const baseImgUrl = 'http://localhost:8000'
  return (
    <div className={styles.card}>
      <Image src={`${baseImgUrl}${props.icon}`} width={40} height={40} alt={props.name} />
      <p className={styles.name}>{props.name}</p>
    </div>
  )
}
