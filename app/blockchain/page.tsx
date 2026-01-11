import { Header } from "@/components/header2"
import { Session } from "@/components/session"
import { ServiceFeatures } from "@/components/service_features"
import { Projects } from "@/components/projects2"
import { WHyCodeFort } from "@/components/why_codefort"
import { Footer } from "@/components/footer2"

export const metadata = {
  title: 'Blockchain Development | CodeFort Tech', // Specific title
  description: 'Expert blockchain development services: building secure, scalable decentralized applications (dApps), smart contracts, and custom Web3 solutions for enterprises',
  keywords: ['blockchain', 'distributed ledger technology', 'dlt', 'cryptocurrency', 'bitcoin', 'ethereum', 'smart contracts', 'solidity', 'web3', 'decentralized applications', 'dapps', 'decentralized finance', 'defi', 'non-fungible tokens', 'nfts', 'tokenization', 'consensus mechanisms', 'proof of work', 'pow', 'proof of stake', 'pos', 'delegated proof of stake', 'dpos', 'mining', 'staking', 'nodes', 'validators', 'gas fees', 'transactions', 'blocks', 'immutability', 'cryptography', 'public key cryptography', 'hash functions', 'merkle trees', 'digital signatures', 'wallets', 'hot wallet', 'cold wallet', 'private key', 'seed phrase', 'layer 1', 'layer 2', 'sidechains', 'rollups', 'optimistic rollups', 'zk-rollups', 'zero-knowledge proofs', 'zk-snarks', 'zk-starks', 'interoperability', 'cross-chain', 'bridges', 'oracles', 'chainlink', 'ipfs', 'interplanetary file system', 'metamask', 'web3.js', 'ethers.js', 'hardhat', 'truffle', 'ganache', 'remix ide', 'dapp development', 'token standards', 'erc-20', 'erc-721', 'erc-1155', 'bep-20', 'dai', 'stablecoins', 'decentralized autonomous organizations', 'daos', 'governance tokens', 'yield farming', 'liquidity pools', 'automated market makers', 'amms', 'initial coin offerings', 'icos', 'security token offerings', 'stos', 'cryptography', 'hash', 'blockchain scalability', 'transaction finality', 'fork', 'hard fork', 'soft fork', 'block explorer', 'testnet', 'mainnet', 'blockchain as a service', 'baas', 'hyperledger', 'hyperledger fabric', 'consensus algorithm', 'permissioned blockchain', 'permissionless blockchain', 'multisig', 'multisignature', 'atomic swaps', 'flash loans', 'metaverse', 'gamefi', 'play-to-earn', 'cryptoeconomics', 'tokenomics', 'blockchain security', 'auditing', 'formal verification', 'rug pull', 'sybil attack', '51% attack', 'decentralized storage', 'arweave', 'filecoin', 'cosmos', 'polkadot', 'solana', 'cardano', 'binance smart chain', 'avalanche', 'polygon', 'blockchain interoperability'],
}

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header page="blockchain" image="/_next/service-3-hero.png"/>
      <Session page="blockchain" />
      <ServiceFeatures page="blockchain"/>
     <Projects />
     <WHyCodeFort />
      <Footer />
    </main>
  )
}