// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.

const CONTRACT_ADDR='0x54913E21b2eA7C17226700f21EBfC4fB0d034E32';

async function main() {

  const contract = await hre.ethers.getContractAt("ContractComunication", CONTRACT_ADDR);
  const tx = await contract.toAttempt();

  // Espera a que la tx sea minada en un bloque
  await tx.wait();

  console.log(
    `Interaction complete`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
