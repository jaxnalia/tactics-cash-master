<script>
import { createWeb3Modal, defaultWagmiConfig } from '@web3modal/wagmi'
import { pulsechain } from 'viem/chains'

    // 1. Define constants

    const projectId = '9a687a450c1fb28fa870b3feaa8f935d'

// 2. Create wagmiConfig
const metadata = {
  name: 'LEAN Token',
  description: '$LEAN',
  url: 'https://leantoken.org',
  icons: ['https://avatars.githubusercontent.com/u/37784886']
}

const chains = [pulsechain]
const wagmiConfig = defaultWagmiConfig({ chains, projectId, metadata })

// 3. Create modal
const modal = createWeb3Modal({ 
    wagmiConfig, 
    projectId, 
    chains,
    defaultChain: pulsechain,
    chainImages: {
    369: 'https://bigjax.s3.eu-west-2.amazonaws.com/plsfavicon128.png',
    // 943: 'https://bigjax.s3.eu-west-2.amazonaws.com/plsfavicon128.png',
    1: 'https://seeklogo.com/images/E/ethereum-logo-EC6CDBA45B-seeklogo.com.png'
    },
    termsConditionsUrl: '/disclaimer',
    connectorImages: {
      coinbaseWallet: 'https://is4-ssl.mzstatic.com/image/thumb/Purple116/v4/6f/e8/21/6fe821de-2ba2-1ea2-004b-37cccd0f5507/source/512x512bb.jpg',
      walletConnect: 'https://bigjax.s3.eu-west-2.amazonaws.com/wc.webp',
      injected: 'https://bigjax.s3.eu-west-2.amazonaws.com/bw.webp',
    },
    themeVariables: {
    '--w3m-color-mix': '#facc14',
    '--w3m-color-mix-strength': 0,
      '--w3m-accent': '#facc14'
    },
    
})

</script>

<w3m-network-button />
<w3m-button class="text-black" size="md" label="Connect Wallet" balance="show"/>

<!-- <button on:click={} class="rounded-md bg-gradient-to-br from-fuchsia-500 to-pink-500 px-3 py-1.5 font-dm text-sm font-medium text-white shadow-md shadow-pink-400/50 transition-transform duration-200 ease-in-out hover:scale-[1.03]">
                    Connect Wallet
</button> -->

