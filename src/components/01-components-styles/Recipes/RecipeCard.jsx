import PropTypes from 'prop-types';

export const RecipeCard = ({
  item: { image, name, time, servings, calories, difficulty },
}) => {
  return (
    <div>
      <img src={image} alt={name} width="240" />
      <h2>{name}</h2>
      <ul style={{ display: 'flex', gap: 8 }}>
        <li>
          <span>Icon</span>
          <p>{time}min</p>
        </li>
        <li>
          <span>Icon</span>
          <p>{servings}</p>
        </li>
        <li>
          <span>Icon</span>
          <p>{calories}</p>
        </li>
      </ul>

      <div>
        <h3>Difficulty</h3>
        <ul style={{ display: 'flex', gap: 8 }}>
          <li>Easy</li>
          <li>Medium</li>
          <li>Hard</li>
        </ul>
      </div>
    </div>
  );
};

RecipeCard.propTypes = {
  item: PropTypes.shape({
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    time: PropTypes.number.isRequired,
    servings: PropTypes.number.isRequired,
    calories: PropTypes.number.isRequired,
    difficulty: PropTypes.oneOf(['easy', 'medium', 'hard']).isRequired,
  }).isRequired,
};
