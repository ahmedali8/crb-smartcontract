const { BigNumber } = require('@ethersproject/bignumber');

function toWei(n) {
  // console.log(`toWei ${n} > `, ethers.utils.parseEther(n).toString());
  return ethers.utils.parseEther(n);
}

function fromWei(n) {
  return n.div(toBN('1000000000000000000'));
}

function toSix(n) {
  // console.log(`toSix ${n} > `, ethers.utils.parseUnits(n, 'mwei').toString());
  return ethers.utils.parseUnits(n, 'mwei');
}

function BnToString(n) {
  return ethers.utils.formatUnits(n, 'ether');
}

function toBN(n) {
  // console.log(`toBN ${n} > `, BigNumber.from(n).toString());
  return BigNumber.from(n);
}

async function etherBalance(addr) {
  return await ethers.provider.getBalance(addr);
}

module.exports = {
  toWei,
  fromWei,
  toSix,
  BnToString,
  toBN,
  etherBalance,
};
