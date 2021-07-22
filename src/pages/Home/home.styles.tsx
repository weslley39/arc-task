import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  width: 100%;
  background: #E3E6EC;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

interface CardProps {
  isChecked: boolean;
}

export const Card = styled.div<CardProps>`
  background: white;
  display: flex;
  width: calc(265px - 12px);
  height: calc(40px - 12px);
  margin-bottom: 5px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 6px;
  border: ${({ isChecked }) => `2px solid ${isChecked ? '#4D4DFF' : '#E3E6EC'}`};
`;

export const Avatar = styled.img`
  max-width: 28px;
  max-height: 28px;
  border-radius: 4px;
`;

export const Name = styled.p`
  flex: 1;
  text-align: left;
  padding-left: 20px;
  font-size: 12px;
`;
