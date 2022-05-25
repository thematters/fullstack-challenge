
import { useEffect } from 'react';
import { useConnect, useAccount } from 'wagmi';
import Image from "next/image";
import { 
  Button,
 } from '@chakra-ui/react';

interface Props{
  open: boolean;
  setOpen: (open: boolean) => void;
}

export default function WalletOptionsModal(props: Props){
    const { open, setOpen } = props;

    const { connectors, error , connect}= useConnect();
    const { data: accountData } = useAccount();
   

    useEffect(() => {
        accountData && setOpen(false);
    }, [accountData, setOpen]);
    
    return open ? ( 
      <>
        <div className="fixed inset-0 z-50 flex items-center justify-center">
        <div className="relative w-auto max-w-3xl mx-auto my-6">
          <div className="relative flex flex-col bg-white border-0 rounded-lg shadow-lg">
            <div className="flex items-center justify-around p-5 mb-4">
              <h3 className="text-3xl font-semibold text-left">
                Choose a Wallet
              </h3>
            </div>

            {connectors.map((c) => (
              <div key={c.id} className="mb-2 ml-4 mr-4 w-80">
                <Button
                  width={80}
                  variant='outline'
                  colorScheme='black'
                  disabled={!c.ready}
                  onClick={() => connect(c)}
                >
                  <>
                    <div className="mr-3">
                      <Image
                        src={`/images/${c.id}.svg`}
                        alt={c.name}
                        height={32}
                        width={32}
                      />
                    </div>
                    {`${c.name}${!c.ready ? " (unsupported)" : ""}`}
                  </>
                </Button>
              </div>
            ))}
            {error && (
              <div className="ml-2 text-red-500">
                {error?.message ?? "Failed to connect"}
              </div>
            )}

            <div className="flex items-center justify-end p-3 mt-1">
              <Button
                variant='outline'
                colorScheme='red'
                onClick={() => setOpen(false)}
              >
                Cancel
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="fixed inset-0 z-40 bg-black opacity-25"></div>
      </>
    ) : null
}