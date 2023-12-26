import styled from 'styled-components';

export const MovieDetailsContainer = styled.div`
  display: flex;
  margin-top: 20px;
`;

export const MoviePoster = styled.img`
  max-width: 400px;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-right: 20px;
`;

export const MovieDetailsContent = styled.div`
  flex-grow: 1;

  h1 {
    font-size: 24px;
    margin-bottom: 10px;
  }

  h2 {
    font-size: 20px;
    margin-top: 20px;
  }

  p {
    margin: 10px 0;
  }

  span {
    margin-right: 10px;
  }
`;

export const AdditionalInformation = styled.div`
  margin-top: 20px;

  h3 {
    font-size: 18px;
    margin-bottom: 10px;
  }

  ul {
    list-style: none;
    padding: 0;

    li {
      margin-bottom: 10px;

      a {
        text-decoration: none;
        color: #333;
        font-weight: bold;

        &:hover {
          color: #ffcc00;
        }
      }
    }
  }
`;
