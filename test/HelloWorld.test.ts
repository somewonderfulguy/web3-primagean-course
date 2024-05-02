import '@nomiclabs/hardhat-ethers'
import { ethers } from 'hardhat'
import { expect } from 'chai'

describe('HelloWorld', () => {
  it('should return the right message', async () => {
    const HelloWorld = await ethers.getContractFactory('HelloWorld')
    const hello = await HelloWorld.deploy()
    await hello.deployed()

    expect(await hello.hello()).to.equal('Hello, World!')
  })
})
