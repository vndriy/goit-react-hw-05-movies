import styled from 'styled-components';

export const ReviewsContainer = styled.div`
  margin-top: 20px;
`;

export const ReviewsList = styled.ul`
  list-style: none;
  padding: 0;
`;

export const ReviewItem = styled.li`
  margin-bottom: 20px;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  p.author {
    margin-bottom: 10px;
    font-size: 18px;
    font-weight: bold;
    color: #333;
  }

  p.content {
    font-size: 16px;
    color: #555;
  }
`;
