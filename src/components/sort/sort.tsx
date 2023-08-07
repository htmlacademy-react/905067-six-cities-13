import { SortTypeName } from '../../const';
import { useState } from 'react';
import cn from 'classnames';

type SortComponentsProps = {
  currentSort: string;
  onSort: (currentSort: string) => void;
};

export default function SortComponents({
  onSort,
  currentSort,
}: SortComponentsProps): JSX.Element {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span
        className="places__sorting-type"
        tabIndex={0}
        onClick={() => setIsOpen(!isOpen)}
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
          onClick={(evt: React.MouseEvent<HTMLElement>) => {
            evt.preventDefault();
            onSort(SortTypeName.Popular);
          }}
        >
          Popular
        </li>
        <li
          className={cn('places__option', {
            'places__option--active': currentSort === SortTypeName.LtH,
          })}
          tabIndex={0}
          onClick={(evt: React.MouseEvent<HTMLElement>) => {
            evt.preventDefault();
            onSort(SortTypeName.LtH);
          }}
        >
          Price: low to high
        </li>
        <li
          className={cn('places__option', {
            'places__option--active': currentSort === SortTypeName.HtL,
          })}
          tabIndex={0}
          onClick={(evt: React.MouseEvent<HTMLElement>) => {
            evt.preventDefault();
            onSort(SortTypeName.HtL);
          }}
        >
          Price: high to low
        </li>
        <li
          className={cn('places__option', {
            'places__option--active': currentSort === SortTypeName.TopRated,
          })}
          tabIndex={0}
          onClick={(evt: React.MouseEvent<HTMLElement>) => {
            evt.preventDefault();
            onSort(SortTypeName.TopRated);
          }}
        >
          Top rated first
        </li>
      </ul>
    </form>
  );
}

{
  /* <form className="places__sorting" action="#" method="get">
<span className="places__sorting-caption">Sort by</span>
<span className="places__sorting-type" tabIndex={0}>
  Popular
  <svg className="places__sorting-arrow" width={7} height={4}>
    <use xlinkHref="#icon-arrow-select" />
  </svg>
</span>
<ul className="places__options places__options--custom places__options--opened">
  <li
    className="places__option places__option--active"
    tabIndex={0}
  >
    Popular
  </li>
  <li className="places__option" tabIndex={0}>
    Price: low to high
  </li>
  <li className="places__option" tabIndex={0}>
    Price: high to low
  </li>
  <li className="places__option" tabIndex={0}>
    Top rated first
  </li>
</ul>
</form> */
}
