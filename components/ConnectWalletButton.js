const ConnectWalletButton = ({ connectWallet }) => (
  <button
    className="mb-10 h-[5rem] rounded-lg bg-[#f1c232] px-12 py-3 text-2xl font-bold transition duration-500 ease-in-out hover:scale-105"
    // Add an onClick functionality
    onClick={connectWallet}
  >
    連結錢包
  </button>
);

export default ConnectWalletButton;
