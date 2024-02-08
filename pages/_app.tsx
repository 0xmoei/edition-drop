import type { AppProps } from "next/app";
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";
import "../styles/globals.css";
import Head from "next/head";

// This is the chain your dApp will work on.
const customChain = {
  // Required information for connecting to the network
  chainId: 9105632, // Chain ID of the network
  rpc: ["https://froopyland.dymension.xyz/25/nftymension_9105632-1/evmrpc"], // Array of RPC URLs to use

  // Information for adding the network to your wallet (how it will appear for first time users) === \\
  // Information about the chain's native currency (i.e. the currency that is used to pay for gas)
  nativeCurrency: {
    decimals: 18,
    name: "NFT",
    symbol: "NFT",
  },
  shortName: "nftymension", // Display value shown in the wallet UI
  slug: "nftymension", // Display value shown in the wallet UI
  testnet: true, // Boolean indicating whether the chain is a testnet or mainnet
  chain: "NFTymension", // Name of the network
  name: "NFTymension Froopyland", // Name of the network
};


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider activeChain={customChain}>
      <Head>
        <title>NFTymension</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="NFTymension Drop Page"
        />
        <meta
          name="keywords"
          content="NFTymension, Avail"
        />
      </Head>
      <Component {...pageProps} />
    </ThirdwebProvider>
  );
}

export default MyApp;
