import { MouseEventHandler } from 'react';

type PropsTypes = {
  textContent: string[];
  className: string;
  activeTab: string;
  tabChangeHandler: (tabName: string) => void;
};

function FilmTabs({ textContent, className, tabChangeHandler, activeTab }: PropsTypes): JSX.Element {


  const tabClickHandler: MouseEventHandler = (evt) => {
    const target = evt.target as HTMLButtonElement;
    const tagName = target.tagName;
    const tagText = target.textContent;

    if ((tagName === 'BUTTON') && (activeTab !== tagText) && tagText) {
      tabChangeHandler(tagText);
    }
  };

  return (
    <ul className={`${className}list`} onClick={tabClickHandler} >
      {textContent.map((item) => (
        <li key={item} className={`${className}item ${activeTab === item ? `${className}item--active` : ''}`}>
          <button className={`${className}link`}>{item}</button>
        </li>
      ))}
    </ul>
  );
}

export default FilmTabs;
