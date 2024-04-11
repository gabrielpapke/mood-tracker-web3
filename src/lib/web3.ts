import { createThirdwebClient, defineChain } from 'thirdweb'
import { sepolia } from 'thirdweb/chains'

export const CLIENT_ID = process.env.API_CLIENT_ID

export const client = createThirdwebClient({
    clientId: CLIENT_ID as string,
})

export const chain = defineChain(sepolia)
