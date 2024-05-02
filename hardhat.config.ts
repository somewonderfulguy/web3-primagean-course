import { HardhatUserConfig } from 'hardhat/config'
import '@nomiclabs/hardhat-waffle'
import '@nomiclabs/hardhat-ethers'

const config: HardhatUserConfig = {
  solidity: '0.8.24',
  networks: {
    hardhat: {
      chainId: 1337,
      accounts: {
        // this is development account
        mnemonic:
          'moon follow race grace seek account collect magic oppose robot rather profit'
      }
    }
  }
}

export default config
