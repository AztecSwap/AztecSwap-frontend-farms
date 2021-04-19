import { PoolConfig, QuoteToken, PoolCategory } from './types'

const pools: PoolConfig[] = [
  {
    sousId: 66, // V0
    tokenName: 'BUSD',
    tokenLabel: 'BUSD v0',
    tokenAddress: '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56',
    stakingTokenName: QuoteToken.LYPTUS,
    stakingTokenAddress: '0xba26397cdff25f0d26e815d218ef3c77609ae7f1',
    contractAddress: {
      97: '',
      56: '0x96960e759a02FB2ca3F5ddb972AB8f08ce00b85c',
    },
    poolCategory: PoolCategory.CORE,
    projectLink: 'https://koaladefi.finance',
    harvest: true,
    tokenPerBlock: '0.025',
    sortOrder: 999,
    isFinished: true,
    tokenDecimals: 18,
    isBush: true,
    bushVersion: 0,
  },
  {
    sousId: 67, // V1
    tokenName: 'BUSD',
    tokenLabel: 'BUSD v1',
    tokenAddress: '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56',
    stakingTokenName: QuoteToken.LYPTUS,
    stakingTokenAddress: '0xba26397cdff25f0d26e815d218ef3c77609ae7f1',
    contractAddress: {
      97: '',
      56: '0x5D5731f0c44d3c8E08407e6029649BD0a78145e1',
    },
    poolCategory: PoolCategory.CORE,
    projectLink: 'https://koaladefi.finance',
    harvest: true,
    tokenPerBlock: '0.009920634921',
    sortOrder: 999,
    isFinished: false,
    tokenDecimals: 18,
    isBush: true,
    bushVersion: 1,
  },
  {
    sousId: 68, // V1
    tokenName: 'WBNB',
    tokenLabel: 'WBNB v1',
    tokenAddress: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
    stakingTokenName: QuoteToken.LYPTUS,
    stakingTokenAddress: '0xba26397cdff25f0d26e815d218ef3c77609ae7f1',
    contractAddress: {
      97: '',
      56: '0x7eC0A8139085dc0b20c2Ea25A0CD3c1094c55e36',
    },
    poolCategory: PoolCategory.CORE,
    projectLink: 'https://www.binance.com',
    harvest: true,
    tokenPerBlock: '0.00003794642857',
    sortOrder: 999,
    isFinished: false,
    tokenDecimals: 18,
    isBush: true,
    bushVersion: 1,
  },
]

export default pools
