import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Exchange',
        href:
          'https://swap.koaladefi.finance/#/swap?inputCurrency=0xe9e7cea3dedca5984780bafc599bd69add087d56&outputCurrency=0xba26397cdff25f0d26e815d218ef3c77609ae7f1',
      },
      {
        label: 'Liquidity',
        href:
          'https://swap.koaladefi.finance/#/add/0xe9e7cea3dedca5984780bafc599bd69add087d56/0xba26397cdff25f0d26e815d218ef3c77609ae7f1',
      },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
    label: 'Pools',
    icon: 'PoolIcon',
    href: '/pools',
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
  {
    label: 'Info',
    icon: 'InfoIcon',
    items: [
      {
        label: 'PancakeSwap',
        href: 'https://pancakeswap.info/token/0xba26397cdff25f0d26e815d218ef3c77609ae7f1',
        target: '_blank',
      },
      {
        label: 'Token',
        href: 'https://doc.koaladefi.finance/tokennomics/lyptus-token',
        target: '_blank',
      },
      {
        label: 'Contracts',
        href: 'https://doc.koaladefi.finance/security/contracts',
        target: '_blank',
      },
      {
        label: 'Transparency',
        href: 'https://doc.koaladefi.finance/transparency/transparency',
        target: '_blank',
      },
      // {
      //   label: 'CoinGecko',
      //   href: 'https://www.coingecko.com/en/coins/koalatoken',
      // },
      // {
      //   label: 'CoinMarketCap',
      //   href: 'https://coinmarketcap.com/currencies/koalatoken/',
      // },
    ],
  },
  // {
  //   label: 'IFO',
  //   icon: 'IfoIcon',
  //   href: '/ifo',
  // },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      // {
      //   label: 'Voting',
      //   href: 'https://voting.pancakeswap.finance',
      // },
      {
        label: 'Github',
        href: 'https://github.com/koaladefi',
        target: '_blank',
      },
      {
        label: 'Docs',
        href: 'https://doc.koaladefi.finance/',
        target: '_blank',
      },
      {
        label: 'Blog',
        href: 'https://koaladefi.medium.com/',
        target: '_blank',
      },
      {
        label: 'Announcements',
        href: 'https://t.me/koaladefi',
        target: '_blank',
      },
      {
        label: 'Telegram',
        href: 'https://t.me/koaladefichat',
        target: '_blank',
      },
    ],
  },
]

export default config
