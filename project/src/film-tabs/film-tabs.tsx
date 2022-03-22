import { MouseEventHandler } from 'react';
import { NavLink } from 'react-router-dom';

type PropsTypes = {
  textContent: string[];
  className: string;
  activeTab: string;
  tabChangeHandler:(tabName:string)=>void;
};

function FilmTabs({ textContent, className, tabChangeHandler, activeTab }: PropsTypes): JSX.Element {


  const tabClickHandler: MouseEventHandler = (evt) => {
    const target = evt.target as HTMLAnchorElement;
    const tagName = target.tagName;
    const tagText = target.textContent;

    if ((tagName === 'A') && (activeTab !== tagText) && tagText) {
      tabChangeHandler(tagText);
    }
  };


  return (
    <ul className={`${className}list`} onClick={tabClickHandler} >
      {textContent.map((item) => (
        <li key={item} className={`${className}item ${activeTab === item ? `${className}item--active` : ''}`}>
          <NavLink to="#" className={`${className}link`}>{item}</NavLink>
        </li>
      ))}
    </ul>
  );
}

export default FilmTabs;
