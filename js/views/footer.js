/** @jsxImportSource theme-ui */
import {
  Box,
  Grid,
  Container,
  Image as themeImage,
  Heading,
  Text,
} from 'theme-ui'
import { Link } from 'components/link'
import data from './footer.data'
import Logo from 'js/logo/Piña_Mesadetrabajo1'

export default function Footer() {
  return (
    <footer sx={styles.footer}>
      <Container>
        <Grid sx={styles.widgets}>
          {data.widgets.map((item) => (
            <Box
              key={`footer-widget--key${item.id}`}
              sx={styles.widgets.widgetItem}
            >
              <Link path={item.url} target='_blank'>
                <Image src={item.iconSrc} alt={item.altText} />
              </Link>
              <Box sx={styles.widgets.infoWrapper}>
                <Heading as='h3'>{item.title}</Heading>
                <Text as='p'>{item.description}</Text>
              </Box>
            </Box>
          ))}
        </Grid>
        {/* End of footer widgets area */}
        <Box sx={styles.footer.footerBottomArea}>
          <Link path='/'>
            <Image src={FooterLogo} alt='Logo' width={100} />
          </Link>
          <Box sx={styles.footer.menus}>
            <nav>
              {data.menuItem.map(({ path, label }, i) => (
                <Link
                  path={path}
                  key={i}
                  label={label}
                  sx={styles.footer.link}
                />
              ))}
            </nav>
          </Box>
        </Box>
      </Container>
    </footer>
  )
}
