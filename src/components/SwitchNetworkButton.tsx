import { useNetwork } from "wagmi";
import config from "../config/index";
import { useWeb3Modal } from "@web3modal/react";

export default function SwitchNetworkButton() {
  const { open } = useWeb3Modal();
  const { chain } = useNetwork();
  const currentChain = chain || config.chains[0];

  return (
    <div className="relative group">
      <button
        className="flex items-center h-full gap-2 px-4 py-2 font-medium text-white border rounded-full bg-white/20"
        onClick={() => open({ route: "SelectNetwork" })}
      >
        {config.chainDetails[currentChain.id] && (
          <img
            src={config.chainDetails[currentChain.id].img}
            className="object-contain w-6 h-6"
          />
        )}
        <span className="hidden lg:block">
          {config.chainDetails[currentChain.id]?.name || "Not Supported Chain"}
        </span>
      </button>
    </div>
  );
}
