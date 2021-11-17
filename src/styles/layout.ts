import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 10% repeat(3, 1fr) 10%;
  grid-template-rows: 1fr auto auto auto 1fr;
  grid-template-areas: '. . . . .' '. h1 h1 h1 .' '. lists lists lists .' '. add . . .' '. . . . .';
  grid-gap: 2rem;
  min-height: 100vh;
`;

export const Lists = styled.section`
  grid-area: lists;
  min-height: 30rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2rem;
`;

export const Headline = styled.h1`
  grid-area: h1;
`;

export const AddNew = styled.button`
  grid-area: add;
`;
