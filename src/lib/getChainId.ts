// @ts-nocheck
import { getNetwork } from '@wagmi/core'

export function getChainId() {
    const { chain, chains } = getNetwork();
    $: chainid = chain.id
    console.log(chainid)
}




