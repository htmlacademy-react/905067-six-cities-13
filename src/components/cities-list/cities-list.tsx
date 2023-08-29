import { City } from '../../types/types';
import { CITY } from '../../const';
import { memo } from 'react';
import cn from 'classnames';

type CitiesListProps = {
  onClickCity: (city: City) => void;
  currentCity: City;
};

const CitiesList = ({ onClickCity, currentCity }: CitiesListProps) => (
  <section className="locations container">
    <ul className="locations__list tabs__list">
      {Object.values(CITY).map((city) => (
        <li
          key={city.name}
          className="locations__item"
          onClick={(evt: React.MouseEvent<HTMLElement>) => {
            evt.preventDefault();
            onClickCity(city);
          }}
        >
          <a
            className={cn('locations__item-link tabs__item', {
              'tabs__item--active': currentCity === city,
            })}
            href="#"
          >
            <span>{city.name}</span>
          </a>
        </li>
      ))}
    </ul>
  </section>
);

const CitiesListMemo = memo(CitiesList);
export default CitiesListMemo;
