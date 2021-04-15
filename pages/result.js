import { Flex, Text } from '@chakra-ui/react';
import UserCard from '../components/userCard'
import CorrectAns from '../components/correctAns'

const Result = () => {
    return (
        <Flex direction='column'>
            <UserCard/>
            <Flex direction='column' width='90rem' background='white' pd={3} alignItems='Left' borderRadius={10}>
                <Text fontSize='xl' ml='1.5rem' my='1.5rem' >Jawaban yang Benar</Text>
                <CorrectAns/>
                <CorrectAns/>
                <CorrectAns/>
                <CorrectAns/>
            </Flex>
        </Flex>
     );
}

export default Result;