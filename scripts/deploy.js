// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.


async function main() {

  const Contract = await hre.ethers.getContractFactory("ContractComunication");

  // le paso la dirección del contrato de Alchemy con el que
  // voy a interactuar
  const contract = await Contract.deploy('0xcF469d3BEB3Fc24cEe979eFf83BE33ed50988502');

  await contract.deployed();

  console.log(
    `Contract  deployed to ${contract.address}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
