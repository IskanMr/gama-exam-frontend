import '../styles/globals.css'
import Navbar from '../components/navbar'
import { ChakraProvider, Flex, resetCSS } from "@chakra-ui/react"

function MyApp({ Component, pageProps }) {
  return <>
  <ChakraProvider>
    <Flex direction='column' align='center' justify='center'>
      <Navbar/>
      <resetCSS/>
      <Flex align='center' justify='center' w='100%' h='93vh' bg='grey'>
        <Component {...pageProps} />
      </Flex>
    </Flex>
  </ChakraProvider>
  </>
}

export default MyApp
