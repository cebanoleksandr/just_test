import React, { useEffect, useRef } from "react";
import ReactDOM from 'react-dom';
import "./ContextMenu.css";
import MenuOption from "./MenuOption";

const ContextMenu = ({ state, setState, items, children }) => {
  const optionsRef = useRef(null);
  const activatorRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (optionsRef.current && !optionsRef.current.contains(event.target)) {
        setState(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [optionsRef, setState]);

  const getPositions = (activator) => {
    const positions = activator.getBoundingClientRect();

    return {
      top: `${positions.bottom}px`,
      left: `${positions.right}px`,
    };
  }

  return (
    <>
      {React.cloneElement(children, { ref: activatorRef })}

      {state && (
        ReactDOM.createPortal(
          <div
            ref={optionsRef}
            className='dropdown'
            style={getPositions(activatorRef.current)}
          >
            {items.map(item => (
              <div
                key={item.text}
                className="option"
                onClick={() => item.onSelect(item)}
              >
                {!!item.subItems.length ? (
                  <MenuOption items={item.subItems}>
                    <>
                      {item.text} <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                        <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm4.28 10.28a.75.75 0 0 0 0-1.06l-3-3a.75.75 0 1 0-1.06 1.06l1.72 1.72H8.25a.75.75 0 0 0 0 1.5h5.69l-1.72 1.72a.75.75 0 1 0 1.06 1.06l3-3Z" clip-rule="evenodd" />
                      </svg>
                    </>
                  </MenuOption>
                ) : (
                  <>{item.text}</>
                )}
              </div>
            ))}
          </div>,
          document.body
        )
      )}
    </>
  )
}

export default ContextMenu;
