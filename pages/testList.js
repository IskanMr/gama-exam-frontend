import CardTest from "../components/cardTest"
import AdminOpt from "../components/adminOpt"
import Filter from "../components/filter"
import { Flex, Spacer, Text, VStack } from "@chakra-ui/react";

const TestList = () => {
    return (
        <Flex width='80%'>
            <Flex direction='column' spacing='2rem'>
                <Flex direction='column'>
                    <Text fontSize='3xl' fontWeight='bold'>Test Aktif</Text>
                    <VStack spacing='1.5rem'>
                        <CardTest/>
                        <CardTest/>
                    </VStack>
                </Flex>
                <Flex direction='column' mt='2rem'>
                    <Text fontSize='3xl'fontWeight='bold'>Test Archieve</Text>
                    <VStack spacing='1.5rem'>
                        <CardTest/>
                        <CardTest/>
                    </VStack>
                </Flex>
            </Flex>
            <Flex direction='column' ml='5rem' mt='3rem'>
                <AdminOpt/>
                <Filter></Filter>
            </Flex>
        </Flex>
     );
}

export default TestList;