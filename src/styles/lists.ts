import styled from 'styled-components';

export const List = styled.div`
  border-radius: 0.2rem;
  border: 1px solid #707070;
  background-color: #efefef;
  padding: 1rem 2rem;
  & ul {
    padding-left: 0;
  }

  & li {
    margin: 0 0 1rem 0;
    padding: 1.5rem;
    border-radius: 0.5rem;
    background-color: white;
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    & button {
      padding: 0.5rem;
      border-radius: 50%;
      align-self: end;
      height: 2rem;
    }
  }
`;
