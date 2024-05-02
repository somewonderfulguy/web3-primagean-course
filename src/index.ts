import { ethers } from 'hardhat'

declare global {
  interface Window {
    ethereum: any
  }
}

function getEth() {
  const eth = window.ethereum
  if (!eth) throw new Error('Please install MetaMask!')
  return eth
}

async function hasAccounts() {
  const eth = getEth()
  const accounts: string[] = await eth.request({ method: 'eth_accounts' })
  return accounts.length > 0
}

async function requestAccounts() {
  const eth = getEth()
  const accounts: string[] = await eth.request({
    method: 'eth_requestAccounts'
  })
  return accounts.length > 0
}

async function run() {
  if (!hasAccounts() && !requestAccounts()) {
    throw new Error('Please connect your wallet!')
  }

  const hello = new ethers.Contract(
    '0x0682bc5d62a0a459ddd361414db0f4ec8cff9961',
    ['function hello() public pure returns (string)'],
    new ethers.providers.Web3Provider(getEth())
  )

  document.body.innerHTML = await hello.hello()
}

run()
