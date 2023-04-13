import styled from 'styled-components';
import { RecipeDifficulty } from 'components/01-components-styles/constants';

export const Name = styled.h2`
  margin-top: 8px;
  margin-bottom: 12px;
`;

export const RecipeInfo = styled.ul`
  display: flex;
  gap: 4px;
  margin-bottom: 8px;
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
