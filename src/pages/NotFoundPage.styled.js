import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
  background-color: #f8f8f8;
  color: #333;
`;

export const NotFoundMessage = styled.p`
  font-size: 24px;
  margin-bottom: 20px;
`;

export const HomeLink = styled(Link)`
  text-decoration: none;
  color: #007bff;
  font-weight: bold;
  transition: color 0.3s ease;

  &:hover {
    color: #0056b3;
  }
`;
