import {
    Text,
    Box,
    Tabs,
    TabList,
    Tab,
    TabPanel,
    TabPanels,
  } from "@chakra-ui/react"
  import LoginForm from "../components/loginForm"
  import RegisterForm from "../components/registerForm"

  const form = () => {
      return ( <Box bg="white" w="495px" p={3} rounded="md" boxShadow="sm">
      <Tabs isFitted variant="enclosed-colored" m={4} p={0}>
        <TabList>
          <Tab>
            <Text fontSize="2xl">Daftar</Text>
          </Tab>
          <Tab>
            <Text fontSize="2xl">Masuk</Text>
          </Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <RegisterForm />
          </TabPanel>
          <TabPanel>
            <LoginForm />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
}

  export default form;