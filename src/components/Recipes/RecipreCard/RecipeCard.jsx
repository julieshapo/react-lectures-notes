import { Component } from 'react';
import PropTypes from 'prop-types';
import {
  AiOutlineClockCircle,
  AiOutlinePieChart,
  AiOutlineBarChart,
} from 'react-icons/ai';
import { HiTrash, HiZoomIn } from 'react-icons/hi';
import {
  Badge,
  BadgeList,
  Container,
  InfoBlock,
  Image,
  Name,
  RecipeInfo,
  Actions,
} from './RecipeCard.styled';
import { RecipeDifficulty } from 'components/constants';

export class RecipeCard extends Component {
  state = {
    selectedImg: null,
  };

  setSelectedImg = () => {
    this.setState({
      selectedImg: this.props.item.image,
    });
  };

  render() {
    const { selectedImg } = this.state;
    const {
      item: { id, image, name, time, servings, calories, difficulty },
      onDelete,
    } = this.props;
    return (
      <Container>
        <Image src={image} alt={name} width="240" />
        <Name>{name}</Name>

        <RecipeInfo>
          <InfoBlock>
            <AiOutlineClockCircle size="24" />
            <span>{time}min</span>
          </InfoBlock>
          <InfoBlock>
            <AiOutlinePieChart size="24" />
            <span>{servings}servings</span>
          </InfoBlock>
          <InfoBlock>
            <AiOutlineBarChart size="24" />
            <span>{calories}calories</span>
          </InfoBlock>
        </RecipeInfo>

        <div>
          <BadgeList style={{ display: 'flex', gap: 8 }}>
            <Badge
              active={difficulty === RecipeDifficulty.easy}
              type={RecipeDifficulty.easy}
            >
              Easy
            </Badge>
            <Badge
              active={difficulty === RecipeDifficulty.medium}
              type={RecipeDifficulty.medium}
            >
              Medium
            </Badge>
            <Badge
              active={difficulty === RecipeDifficulty.hard}
              type={RecipeDifficulty.hard}
            >
              Hard
            </Badge>
          </BadgeList>
        </div>

        <Actions>
          <button aria-label="Delete" onClick={() => onDelete(id)}>
            <HiTrash />
          </button>
          <button aria-label="Zoom" onClick={this.setSelectedImg}>
            <HiZoomIn />
          </button>
        </Actions>
        {selectedImg && (
          <div>
            Image modal <p>{selectedImg}</p>
          </div>
        )}
      </Container>
    );
  }
}

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
