import { useState } from 'react';
import ContextMenu from '../UI/ContextMenu';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const items1 = [
    { text: 'Suboption 1', onSelect: () => {}, subItems: [] },
    { text: 'Suboption 2', onSelect: () => {}, subItems: [] },
    { text: 'Suboption 3', onSelect: () => {}, subItems: [] },
    { text: 'Suboption 4', onSelect: () => {}, subItems: [] },
    { text: 'Suboption 5', onSelect: () => {}, subItems: [] },
  ];

  const items2 = [
    { text: 'Suboption 11', onSelect: () => {}, subItems: [] },
    { text: 'Suboption 12', onSelect: () => {}, subItems: [] },
    { text: 'Suboption 13', onSelect: () => {}, subItems: [] },
    { text: 'Suboption 14', onSelect: () => {}, subItems: [] },
    { text: 'Suboption 15', onSelect: () => {}, subItems: [] },
  ];

  const items = [
    { text: 'Option 1', onSelect: () => {}, subItems: [] },
    { text: 'Option 2', onSelect: () => {}, subItems: items1 },
    { text: 'Option 3', onSelect: () => {}, subItems: [] },
    { text: 'Option 4', onSelect: () => {}, subItems: items2 },
    { text: 'Option 5', onSelect: () => {}, subItems: [] },
  ];

  return (
    <header className="header">
      <ContextMenu state={isMenuOpen} setState={setIsMenuOpen} items={items}>
        <button onClick={() => setIsMenuOpen(true)}>Menu</button>
      </ContextMenu>

      <nav className="nav">
        <ul className="nav__list">
          <li className="nav__item">
            <a href="#" className="nav__link">Home</a>
          </li>
          <li className="nav__item">
            <a href="#" className="nav__link">About us</a>
          </li>
          <li className="nav__item">
            <a href="#" className="nav__link">Contacts</a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header;
