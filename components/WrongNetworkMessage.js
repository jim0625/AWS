const WrongNetworkMessage = () => (
  <div className="mb-20 flex flex-col items-center justify-center gap-y-3 text-2xl font-bold">
    {/* Prompt to change network to Rinkeby */}
    <div>----------------------------------------</div>
    <div>Please connect to the Rinkeby Testnet</div>
     <div>and reload the page</div>
    <div>----------------------------------------</div>
  </div>
);

export default WrongNetworkMessage;
