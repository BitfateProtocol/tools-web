import { useWeb3Modal } from "@web3modal/react";
import { Button } from "./ui/button";
import { useAccount } from "wagmi";

export default function WalletConnectButton() {
  const { open } = useWeb3Modal();
  const { isConnected, address } = useAccount();
  return (
    <Button variant={"secondary"} onClick={() => open()}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
        className="w-4 h-4 mr-2"
      >
        <g clipPath="url(#clip0_1_29)">
          <path
            d="M15.75 4.5H3.75C3.10575 4.5 2.496 4.221 2.07375 3.75075C2.48625 3.29025 3.0855 3 3.75 3H17.25C18.231 2.9955 18.2302 1.50375 17.25 1.5H3.75C1.67925 1.5 0 3.17925 0 5.25V12.75C0 14.8208 1.67925 16.5 3.75 16.5H15.75C16.9928 16.5 18 15.4928 18 14.25V6.75C18 5.50725 16.9928 4.5 15.75 4.5ZM15 11.25C14.019 11.2455 14.019 9.7545 15 9.75C15.981 9.7545 15.981 11.2455 15 11.25Z"
            fill="currentColor"
          />
        </g>
        <defs>
          <clipPath id="clip0_1_29">
            <rect width="18" height="18" fill="currentColor" />
          </clipPath>
        </defs>
      </svg>
      {isConnected && address
        ? address.slice(0, 6) + "..." + address.slice(-4)
        : "Connect Wallet"}
    </Button>
  );
}
