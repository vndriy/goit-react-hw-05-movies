import styled from 'styled-components';

export const CastContainer = styled.div`
  margin-top: 20px;
`;

export const ActorList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
`;

export const ActorItem = styled.li`
  margin: 20px;
  text-align: center;

  .actor-container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  img {
    max-width: 200px;
    height: auto;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    margin-bottom: 10px;
  }

  div {
    p {
      margin: 5px 0;
      font-size: 16px;
      color: #333;
    }

    p.character {
      max-width: 150px;
      font-style: italic;
    }

    p.name {
      font-weight: bold;
    }
  }
`;
