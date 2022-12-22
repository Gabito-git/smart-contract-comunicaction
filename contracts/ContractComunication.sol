//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.4;

/*
Nos dan la dirección de un contrato desplegado en Goerli. Este
contrato tiene una función que emite un evento con la dirección
del msg.sender una vez ejecutada ( este evento se ve en la pestaña
events del goerli scan).

La idea es comunicar con ese contrrato a traves del mio empleando una
interface.

Finalmente, con el script execInteraction.js ejecuto la funcion toAttempt
de mi contracto la cual ejecutará a su vez la funcion attempt del contrato
del Alchemy. Asi, estará completa la interección entre contratos

RECORDAR: No hay script de compilación, se hace mediante npx hardhat compile
el deploy: npx hardhat run scripts/deploy.js --network goerli. Para esto, 
hay que configurar la red goerli en el archivo hardhat.config.js. Si no se especifica
la bandera --network, el contrato se desplegará en una red local que 
expone hardhat
*/

interface Contract{
  function attempt() external;
}

contract ContractComunication {

  address addr;

  constructor(address _addr){
    addr = _addr;
  }

  function toAttempt() external {
    Contract( addr ).attempt();
  }

}