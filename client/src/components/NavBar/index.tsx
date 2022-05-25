import {
    Flex,
    Box,
    Button,
    useToast
  } from '@chakra-ui/react'
import { useAccount } from 'wagmi';
import { useRouter } from 'next/router'

interface Props {
  
    showWalletOptions: (show: boolean) => void;
}
  
export default function NavBar(props: Props) {

    const {  showWalletOptions } = props;
    
    const { data: accountData, isLoading } = useAccount({
    });

    const router = useRouter()

    const handleShowWalletOptionsModal = () => {
        showWalletOptions(true);
    }
    
    const ConnectionButton = () => {
      return (
        <>
        {accountData == null ? 
        <Button
            colorScheme='yellow'
            onClick={handleShowWalletOptionsModal }
        >
          Connect
        </Button> :  
        <Button 
            colorScheme='purple'
          >{accountData?.address?.substring(0, 4) + '...' + accountData?.address?.slice(-5)}</Button>}
       
        </>
      );
    }

    const toast = useToast()

    const handleWriteArticle = () => {

        if(accountData == null){
            return toast({
                title: 'Connect your wallet first',
                status: 'error',
                duration: 2000,
                isClosable: true,
                position: 'top',
            })
        }
        router.push('/draft')
    }
    return (
  
      <Box   
        mx={20}
        my={10}
        >
        <Flex justify={{ base: 'end', md: 'end' }} gap='3'>
            <Button
                colorScheme='black'
                variant='outline'
                onClick={handleWriteArticle}
            >Write Article</Button>
           <ConnectionButton />
        </Flex>
       
      </Box>
  
    );
  }