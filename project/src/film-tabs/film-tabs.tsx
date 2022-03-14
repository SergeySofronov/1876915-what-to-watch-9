import { MouseEventHandler } from 'react';
import { NavLink } from 'react-router-dom';


type PropsTypes = {
  textContent: string[];
  className: string;
  tabChangeHandler: MouseEventHandler;
  activeTab: string;
};

function FilmTabs({ textContent, className, tabChangeHandler, activeTab }: PropsTypes): JSX.Element {

  return (
    <ul className={`${className}list`} onClick={tabChangeHandler} >
      {textContent.map((item) => (
        <li key={item} className={`${className}item ${activeTab === item ? `${className}item--active` : ''}`}>
          <NavLink to="#" className={`${className}link`}>{item}</NavLink>
        </li>
      ))}
    </ul>
  );
}

export default FilmTabs;
