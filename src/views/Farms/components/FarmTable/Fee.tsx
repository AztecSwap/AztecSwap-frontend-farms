import React from 'react'
import styled from 'styled-components'
import { HelpIcon, Skeleton, Text } from '@pancakeswap-libs/uikit'
import ApyButton from '../FarmCard/ApyButton'

export interface FeeProps {
  fee: number
}

const FeeWrapper = styled.div`
  min-width: 110px;
  font-weight: 600;
  text-align: right;

  ${({ theme }) => theme.mediaQueries.sm} {
    text-align: left;
  }
`

const Container = styled.div`
  display: flex;
  align-items: center;

  svg {
    margin-left: 14px;
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    svg {
      margin-left: 0;
    }
  }
`

const TextFeeHightlight = styled(Text)`
  color: ${({ theme }) => (theme.isDark ? 'white' : '#4bca4b')};
  font-weight: bold;
`

const Fee: React.FunctionComponent<FeeProps> = ({ fee }) => {
  return (
    <Container>
      <FeeWrapper>
        {fee === 0 ? (
          <>
            <TextFeeHightlight>{fee / 100}%</TextFeeHightlight>
          </>
        ) : (
          <Text>{fee / 100}%</Text>
        )}
      </FeeWrapper>
    </Container>
  )
}

export default Fee
