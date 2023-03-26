import { createClient } from "wagmi";
import { getDefaultClient } from 'connectkit';
import { optimism } from "@wagmi/core/chains";

const mantle = {
  id: 5001,
  name: "Mantle",
  network: "Mantle Testnet",
  nativeCurrency: {
    decimals: 18,
    name: "BIT",
    symbol: "BIT",
  },
  rpcUrls: {
    default: { http: ["https://rpc.testnet.mantle.xyz"] }
  },
  testnet: true,
};

const zkevm = {
  id: 1442,
  name: "zkEVM",
  network: "zkEVM-testnet",
  nativeCurrency: {
    decimals: 18,
    name: "ETH",
    symbol: "ETH",
  },
  rpcUrls: {
    default: { http: ["https://rpc.public.zkevm-test.net"] }
  },
  testnet: true,
};

const scroll = {
  id: 534353,
  name: "scroll",
  network: "scrollAlpha",
  nativeCurrency: {
    decimals: 18,
    name: "scrollAlpha",
    symbol: "ETH",
  },
  rpcUrls: {
    default: { http: ["https://alpha-rpc.scroll.io/l2"] },
  },
  testnet: true,
};

export const client = createClient(
  getDefaultClient({
    autoConnect: true,
    appName: 'TokenVerse',
    chains: [mantle, optimism, zkevm, scroll],
  }));