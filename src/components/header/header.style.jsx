import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

const OptionContainerStyles = css`
  padding: 10px 15px;
  cursor: pointer;
`;

export const HeaderContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
`;

//karena Link adalah component jadinya di import dulu lalu di pass ke kurung
export const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
  padding: 25px;
`;

export const Options = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const Option = styled(Link)`
  ${OptionContainerStyles}
`;

// export const OptionDiv = styled.div`
//   ${OptionContainerStyles}
// `;

//                 OR
// export const Option = styled(Link)`
//   padding: 10px 15px;
//   cursor: pointer;
// `;
// export const OptionDiv = styled.div`
//   padding: 10px 15px;
//   cursor: pointer;
// `;
