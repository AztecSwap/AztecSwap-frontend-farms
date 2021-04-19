import React from 'react'
import styled from 'styled-components'
import { Heading, Card, CardBody, Flex, ArrowForwardIcon, Link } from '@pancakeswap-libs/uikit'

const StyledFarmStakingCard = styled(Card)`
  align-items: center;
  display: flex;
  flex: 1;
`
const CardMidContent = styled(Heading).attrs({ size: 'xl' })`
  line-height: 44px;
  color: ${({ theme }) => (theme.isDark ? 'white' : '#4bca4b')};
`
const AuditCard = () => {
  return (
    <StyledFarmStakingCard>
      <CardBody>
        <Heading size="lg">Audit with</Heading>
        <CardMidContent>
          <img src="/images/koala/shield.svg" height="24px" width="24px" alt="Certik audit in progress" /> Certik
        </CardMidContent>
        <Flex justifyContent="space-between">
          <Heading size="lg">in progress</Heading>
          <Link
            className="active"
            href="https://certik.org/projects/koaladefi"
            target="__blank"
            rel="noreferrer noopener"
          >
            <ArrowForwardIcon mt={30} color="primary" />
          </Link>
        </Flex>
      </CardBody>
    </StyledFarmStakingCard>
  )
}

export default AuditCard
