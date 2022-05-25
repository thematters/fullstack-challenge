import { ArticleEditor } from "~/src/components";
import { Box, Flex, Button } from "@chakra-ui/react";
import { useAccount } from 'wagmi';


export default function Draft() {

    const { data: accountData } = useAccount({})

    return (
        <>
            <Box
                mx={20}
                my={10}
            >
                <Flex justify={{ base: 'end', md: 'end' }} gap='3'>
                    <Button
                        colorScheme='purple'
                    >{accountData?.address?.substring(0, 4) + '...' + accountData?.address?.slice(-5)}</Button>        
                </Flex>            
            </Box>
            <ArticleEditor>
                    <div></div>
            </ArticleEditor>
        </>


    )
}