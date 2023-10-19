// import { Image } from "theme-ui";
import Image from 'js/logo/Piña_Mesadetrabajo1.png'
import { Link } from 'components/link'

export default function Logo({ src, ...rest }) {
  return (
    <Link
      path='/'
      css={{
        variant: 'links.logo',
        display: 'flex',
        cursor: 'pointer',
        mr: 15,
      }}
      {...rest}
    >
      <Image src={src} alt='Piña_Mesadetrabajo 1' width={200} />
    </Link>
  )
}
