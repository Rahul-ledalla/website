import styled from "styled-components";

export const Container = styled.div`
  padding: 80px 60px;
  background-color: #eee;
`;
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
`;
export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: 60px;
`;
export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(22vw, 1fr));
  grip-gap: 20px;

  @media (max-width: 900px) {
    grid-template-columns: repeat(auto-fill, minmax(47vw, 1fr));
  }
`;
export const Link = styled.a`
  colour: #333;
  margin-bottom: 20px;
  font-size: 18px;
  text-decoration: none;

  &:hover {
    color: #000;
    transition: 200ms ease-in;
  }
`;
export const Title = styled.p`
  font-size: 24px;
  margin-bottom: 40px;
  font-weight: bold;
`;

export const Text = styled.p`
  font-size: 18px;
`;
export const Image = styled.img`
  width: 180px;
  background: #333;
  border-radius: 15px;
`;
