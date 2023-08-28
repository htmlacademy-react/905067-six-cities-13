import { SortTypeName } from '../../const';
import { useState, memo } from 'react';
import cn from 'classnames';

type SortComponentsProps = {
  currentSort: string;
  onSort: (currentSort: string) => void;
};

const SortComponents = ({ onSort, currentSort }: SortComponentsProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const handleToggle = () => setIsOpen(!isOpen);
  const handleSort = (sortType: string) => onSort(sortType);

  return (
    <form className="places__sorting">
      <span className="places__sorting-caption">Sort by</span>
      <span
        className="places__sorting-type"
        tabIndex={0}
        onClick={handleToggle}
      >
        {currentSort}
        <svg className="places__sorting-arrow" width={7} height={4}>
          <use xlinkHref="#icon-arrow-select" />
        </svg>
      </span>
      <ul
        className={cn('places__options places__options--custom', {
          'places__options--opened': isOpen,
        })}
      >
        <li
          className={cn('places__option', {
            'places__option--active': currentSort === SortTypeName.Popular,
          })}
          tabIndex={0}
          onClick={() => {
            handleSort(SortTypeName.Popular);
            handleToggle();
          }}
        >
          Popular
        </li>
        <li
          className={cn('places__option', {
            'places__option--active': currentSort === SortTypeName.LowToHigh,
          })}
          tabIndex={0}
          onClick={() => {
            handleSort(SortTypeName.LowToHigh);
            handleToggle();
          }}
        >
          Price: low to high
        </li>
        <li
          className={cn('places__option', {
            'places__option--active': currentSort === SortTypeName.HighToLow,
          })}
          tabIndex={0}
          onClick={() => {
            handleSort(SortTypeName.HighToLow);
            handleToggle();
          }}
        >
          Price: high to low
        </li>
        <li
          className={cn('places__option', {
            'places__option--active': currentSort === SortTypeName.TopRated,
          })}
          tabIndex={0}
          onClick={() => {
            handleSort(SortTypeName.TopRated);
            handleToggle();
          }}
        >
          Top rated first
        </li>
      </ul>
    </form>
  );
};

const SortComponentsMemo = memo(
  SortComponents,
  (prev, next) => prev.currentSort === next.currentSort
);
export default SortComponentsMemo;
