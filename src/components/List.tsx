import { FunctionComponent } from 'react';
import * as S from '../styles/lists';

interface ListProps {
  headline: string;
  people: any[];
  movePerson: (id: number) => void;
}

const List: FunctionComponent<ListProps> = (props) => {
  return (
    <S.List>
      <h2>{props.headline}</h2>
      <ul>
        {props.people.map((person) => (
          <li key={person.id}>
            <span className="img" />
            <p>
              {person.firstname} {person.lastname}
            </p>
            <button
              onClick={() => props.movePerson(person.id)}
              disabled={person.status === 2}
            >
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="arrow-right"
                className="svg-inline--fa fa-arrow-right fa-w-14"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path
                  fill="currentColor"
                  d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"
                />
              </svg>
            </button>
          </li>
        ))}
      </ul>
    </S.List>
  );
};

export default List;
