import { Link, Stack, Text } from "@chakra-ui/react";


const AdminOpt = () => {
    return (
        <Stack>
            <Text fontWeight='bold'>ADMINISTRATION</Text>
            <Link href='#'>Buat Test</Link>
            <Link href='#'>Atur Test</Link>
        </Stack>
     );
}

export default AdminOpt;