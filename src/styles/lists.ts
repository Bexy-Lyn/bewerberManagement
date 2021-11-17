import styled from 'styled-components';

export const List = styled.div`
  border-radius: 0.2rem;
  background-color: #efefef;
  padding: 1rem 2rem;
  & ul {
    padding-left: 0;
  }

  & li {
    margin: 0 0 1rem 0;
    padding: 1rem;
    border-radius: 0.5rem;
    background-color: white;
    list-style: none;
    display: grid;
    grid-template-columns: 1fr auto;
    grid-template-areas: 'name name' 'note btn';
    grid-gap: 1rem;
    border: 1px solid #707070;
    & h3 {
      grid-area: name;
      margin: 0;
    }
    & p {
      grid-area: note;
    }
    & button {
      grid-area: btn;
      padding: 0.5rem;
      border-radius: 50%;
      height: 2rem;
      align-self: end;
    }
  }
`;
