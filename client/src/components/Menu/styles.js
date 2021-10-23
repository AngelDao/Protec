import styled from "styled-components";

export const MenuItem = styled.div`
  font-size: 20px;
  background: ${({ selected }) => selected && "black"};
  color: ${({ selected }) => selected && "white"};
  :hover {
    background: black;
    cursor: pointer;
    color: white;
  }
`;
