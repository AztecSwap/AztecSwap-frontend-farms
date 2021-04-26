import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [
  {
    pid: 0,
    isTokenOnly: true,
    lpSymbol: 'GOLD',
    lpAddresses: {
      97: '',
      56: '0xb50539EAC8971052a96A2E466C6865b942835C56', // GOLD-BUSD LP
    },
    tokenSymbol: 'GOLD',
    tokenAddresses: {
      97: '',
      56: '0x8298fea38aa8627316ffd943fe001b69cac8174d',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 1,
    lpSymbol: 'GOLD-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0xb50539EAC8971052a96A2E466C6865b942835C56', // GOLD-BUSD LP
    },
    tokenSymbol: 'GOLD',
    tokenAddresses: {
      97: '',
      56: '0x8298fea38aa8627316ffd943fe001b69cac8174d',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 2,
    lpSymbol: 'GOLD-BNB LP',
    lpAddresses: {
      97: '',
      56: '0xa040492a50f0034894eb6df0a4d6c8ac33b92cfd', // GOLD-BNB LP
    },
    tokenSymbol: 'GOLD',
    tokenAddresses: {
      97: '',
      56: '0x8298fea38aa8627316ffd943fe001b69cac8174d',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 3,
    lpSymbol: 'USDT-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0xc15fa3e22c912a276550f3e5fe3b0deb87b55acd',
    },
    tokenSymbol: 'USDT',
    tokenAddresses: {
      97: '',
      56: '0x55d398326f99059ff775485246999027b3197955',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 4,
    isTokenOnly: true,
    lpSymbol: 'BTCB',
    lpAddresses: {
      97: '',
      56: '0xb8875e207ee8096a929d543c9981c9586992eacb', // BTCB-BUSD LP
    },
    tokenSymbol: 'BTCB',
    tokenAddresses: {
      97: '',
      56: '0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 5,
    isTokenOnly: true,
    lpSymbol: 'ETH',
    lpAddresses: {
      97: '',
      56: '0xd9a0d1f5e02de2403f68bb71a15f8847a854b494', // ETH-BUSD LP
    },
    tokenSymbol: 'ETH',
    tokenAddresses: {
      97: '',
      56: '0x2170ed0880ac9a755fd29b2688956bd959f933f8',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 6,
    isTokenOnly: true,
    lpSymbol: 'WBNB',
    lpAddresses: {
      97: '',
      56: '0x1b96b92314c44b159149f7e0303511fb2fc4774f', // BNB-BUSD
    },
    tokenSymbol: 'WBNB',
    tokenAddresses: {
      97: '',
      56: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 7,
    lpSymbol: 'CAKE-BNB LP',
    lpAddresses: {
      97: '',
      56: '0xa527a61703d82139f8a06bc30097cc9caa2df5a6',
    },
    tokenSymbol: 'CAKE',
    tokenAddresses: {
      97: '',
      56: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 8,
    isTokenOnly: true,
    lpSymbol: 'ADA',
    lpAddresses: {
      97: '',
      56: '0xba51d1ab95756ca4eab8737ecd450cd8f05384cf', // ADA-BNB
    },
    tokenSymbol: 'ADA',
    tokenAddresses: {
      97: '',
      56: '0x3ee2200efb3400fabb9aacf31297cbdd1d435d47', // ADA
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 9,
    lpSymbol: 'TSB-BNB',
    lpAddresses: {
      97: '',
      56: '0x14f18e33c9e4551578cc4ce5243184288f13fe67', // TSB-BNB LP
    },
    tokenSymbol: 'TSB',
    tokenAddresses: {
      97: '',
      56: '0xA37F71f092F891757d23Dd350f57C78E8469c026',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 10,
    lpSymbol: 'RBT-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x3F8F14Dd4Ef2a2DBD3C1B87f96EdD028663c76b1',
    },
    tokenSymbol: 'RBT',
    tokenAddresses: {
      97: '',
      56: '0x7595bb34bf391c3de0a6878a36d06223b2bfd404',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 11,
    lpSymbol: 'BRRL-BNB LP',
    lpAddresses: {
      97: '',
      56: '0xb9120b8881F577dB430966C6A8DdD0f993518295',
    },
    tokenSymbol: 'BRRL',
    tokenAddresses: {
      97: '',
      56: '0xcbe73dd7E8FC74011136b837a59205801c45e6A1',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
]

export default farms
