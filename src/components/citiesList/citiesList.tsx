import { City } from '../../types/types';
import { CITY } from '../../const';
import cn from 'classnames';
type CitiesListProps = {
  onCity: (city: City) => void;
  currentCity: City;
};

function CitiesList({ onCity, currentCity }: CitiesListProps): JSX.Element {
  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {Object.values(CITY).map((city) => (
          <li key={city.name} className="locations__item">
            <a
              className={cn('locations__item-link tabs__item', {
                'tabs__item--active': currentCity === city,
              })}
              href="#"
              onClick={(evt: React.MouseEvent<HTMLElement>) => {
                evt.preventDefault();
                onCity(city);
              }}
            >
              <span>{city.name}</span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default CitiesList;
