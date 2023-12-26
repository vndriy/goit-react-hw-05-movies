import styled from 'styled-components';

export const MoviesListContainer = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 14px;
`;

export const MovieItem = styled.li`
  margin: 10px;
  text-align: center;

  a {
    text-decoration: none;
    color: #333;

    img {
      max-width: 300px;
      height: auto;
      border-radius: 8px;
      margin-bottom: 8px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      transition: transform 0.3s ease;

      &:hover {
        transform: scale(1.05);
      }
    }

    p {
      margin: 15px;
      font-weight: bold;
      font-size: 18px;
      text-align: center;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      max-width: 250px;
    }
  }
`;
