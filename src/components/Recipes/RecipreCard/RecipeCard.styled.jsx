import styled from 'styled-components';
import { RecipeDifficulty } from 'components/constants';

// export const Card = styled.div`
//   background-color: tomato;
//   border-radius: 20px;
//   border: 1 solid ${p => p.theme.colors.accent};
// `;

export const Container = styled.div`
  position: relative;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  height: 100%;
  border-radius: 4px;
  overflow: hidden;
`;

export const Name = styled.h2`
  margin-top: 0;
  margin-bottom: 15px;
  font-size: 20px;
  text-align: center;

  :hover {
    color: ${p => p.theme.colors.accent};
  }
`;

export const Image = styled.img`
  display: block;
  width: 100%;
  height: 120px;
  object-fit: cover;
`;

export const RecipeInfo = styled.ul`
  display: flex;
  justify-content: space-around;
  gap: 4px;
  margin-bottom: 8px;
  padding: 4px;
`;

export const InfoBlock = styled.li`
  display: flex;
  align-items: center;
  gap: 4px;

  svg {
    color: tomato;
  }
`;

export const BadgeList = styled.ul`
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-top: 8px;
  margin-bottom: 8px;
`;

export const Badge = styled.li`
  border: 1px solid ${p => p.theme.colors.black};
  border-radius: ${p => p.theme.radii.sm};
  padding: 8px 12px;

  background-color: ${p => {
    if (!p.active) {
      return p.theme.colors.white;
    }
    switch (p.type) {
      case RecipeDifficulty.easy:
        return 'green';
      case RecipeDifficulty.medium:
        return 'orange';
      case RecipeDifficulty.hard:
        return 'red';
      default:
        throw new Error(`Unknown badge type ${p.type}`);
    }
  }};

  color: ${p => {
    return p.active ? p.theme.colors.white : p.theme.colors.black;
  }};
`;

export const Actions = styled.div`
  position: absolute;
  top: 8px;
  right: 8px;
  display: flex;
  gap: 4px;
`;

// export const Badge = styled.li`
//   border: 1px solid ${p => p.theme.colors.black};
//   border-radius: ${p => p.theme.radii.sm};
//   padding: 8px 12px;

//   background-color: ${p => {
//     return p.active ? p.theme.colors.accent : p.theme.colors.white;
//   }};

//   color: ${p => {
//     return p.active ? p.theme.colors.white : p.theme.colors.black;
//   }};
// `;
