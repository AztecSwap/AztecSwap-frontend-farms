import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: 'https://www.aztecswap.com/',
  },
  {
    label: 'Bourbon DeFi',
    icon: 'HomeIcon',
    href: 'https://www.bourbondefi.com/'
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    initialOpenState: false,
    items: [
      {
        label: 'Exchange',
        href: 'https://exchangev2.aztecswap.com/',
      },
      {
        label: 'Liquidity',
        href: 'https://exchangev2.aztecswap.com/#/pool',
      },
      {
        label: 'Exchange V1',
        href: 'https://exchange.aztecswap.com/',
      },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: 'https://www.aztecswap.com/farms',
  },
  {
    label: 'Pools',
    icon: 'PoolIcon',
    href: 'https://www.aztecswap.com/pools',
  },
   {
     label: 'Moctezuma Sacrifice',
     icon: 'TicketIcon',
     href: '/lottery',
   },
  {
    label: 'Aztec Gold Token',
    icon: 'InfoIcon',
    items: [
      {
        label: 'Dex Guru',
        href: 'https://dex.guru/token/0x8298fea38aa8627316ffd943fe001b69cac8174d-bsc',
      },
      {
        label: 'Contract',
        href: 'https://bscscan.com/token/0x8298fea38aa8627316ffd943fe001b69cac8174d#readContract',
      },
      {
        label: 'AstroTools',
        href: 'https://app.astrotools.io/pancake-pair-explorer/0xa040492a50f0034894eb6df0a4d6c8ac33b92cfd',
      },
    ],
  },
  // {
  //   label: 'Pools',
  //   icon: 'PoolIcon',
  //   href: '/pools',
  // },
  // {
  //   label: 'Lottery',
  //   icon: 'TicketIcon',
  //   href: '/lottery',
  // },
  // {
  //   label: 'NFT',
  //   icon: 'NftIcon',
  //   href: '/nft',
  // },
]

export default config
