import styled from 'styled-components';

export const Nav = styled.nav`
  background: ${({ theme }) => theme.headerBackgroundColor};
  margin-top: ${({ theme }) => theme.spacing.medium};
  padding: ${({ theme }) => theme.spacing.medium};
  border-radius: 4px;

  a {
    color: ${({ theme }) => theme.textColor};
    text-decoration :none;
    display: inline-block;

    & + a {
      margin-left: ${({ theme }) => theme.spacing.medium};
    }
  }
`;