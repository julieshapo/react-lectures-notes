import { RecipeCard } from '../RecipreCard/RecipeCard';
import PropTypes from 'prop-types';
import { List } from './RecipeList.styled';

export const RecipeList = ({ items, onDelete }) => {
  return (
    <List>
      {items.map(item => (
        <li key={item.id}>
          <RecipeCard item={item} onDelete={onDelete} />
        </li>
      ))}
    </List>
  );
};

RecipeList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};
