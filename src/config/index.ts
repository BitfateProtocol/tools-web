import TokenType from "@/types/TokenType";
import { Address, Chain } from "viem";
import { bsc, bscTestnet, mainnet, polygon, base } from "viem/chains";
import { bitindi } from "./custom-chain";

const config = {
  chainDetails: {
    [bitindi.id]: {
      name: "Bitindi Mainnet",
      img: "/images/chains/bitindi.svg",
    },
    [bsc.id]: {
      name: "BSC",
      img: "/images/chains/binance.svg",
    },
    [polygon.id]: {
      name: "Polygon",
      img: "/images/chains/polygon-matic-logo.svg",
    },
    [mainnet.id]: {
      name: "Ethereum",
      img: "/images/chains/ethereum.svg",
    },
    [base.id]: {
      name: "Base",
      img: "/images/chains/ethereum.svg",
    },
  } as {
    [key: number]: {
      name: string;
      img: string;
    };
  },

  chains: [bsc, bscTestnet, mainnet, polygon, bitindi] as Chain[],

  walletConnectProjectId: "fc21cf657bc11adf3721f517edc13208",

  serviceReceiver: "0x7E9dA0832BDB880a2663203c212d933f4c3668C6" as Address,

  generateTokensPrice: {
    [TokenType.BasicToken]: 0.001,

    [TokenType.MintableToken]: 0.002,

    [TokenType.BurnableToken]: 0.002,

    [TokenType.TaxToken]: 0.002,

    [TokenType.MemeToken]: 0.002,
  },

  lockContractAddress: {
    [bscTestnet.id]: "0x1B172c0D5A05F788693a109ecCCe1D6155eA5A53",
  } as Record<number, Address>,
};

export default config;
