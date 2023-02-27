import styled from "@emotion/styled";
import phoneBook from '../../images/phoneBook.png';

export const HeroSection = styled.section`
  text-align: center;
  margin: 0 auto;
  padding: 118px 0;

  max-width: 1600px;
  height: calc(100vh - 350px);

  background-color: #2f303a;
  background-image: linear-gradient(
      to right,
      rgba(47, 48, 58, 0.4),
      rgba(47, 48, 58, 0.4)
    ),
    url(${phoneBook});

  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;

export const Container = styled.div`
  position: relative;

  padding: 0 15px;
  margin-left: auto;
  margin-right: auto;
`;

export const HeroTitle = styled.h1`
  max-width: 360px;

  margin-left: 150px;
  margin-top: 128px;

  font-size: 32px;
  line-height: 1.62;
  letter-spacing: 0.08em;
  text-transform: uppercase;

  color: #ffffff;
`;