import '@nomiclabs/hardhat-ethers'
import { ethers } from 'hardhat'

const foo = async () => {
  const HelloWorld = await ethers.getContractFactory('HelloWorld')
  const hello = await HelloWorld.deploy()
  await hello.deployed()

  return hello
}

const deploy = async () => {
  const hello = await foo()
  return hello
}

const sayHello = async (hello: ReturnType<typeof deploy>) => {
  // @ts-expect-error
  console.log('Say hello:', await hello.hello())
}

// @ts-expect-error
deploy().then(sayHello)
