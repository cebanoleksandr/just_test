import React, { useState } from "react"
import ContextMenu from "./ContextMenu"

const MenuOption = ({ items, children }) => {
  const [isOptionOpen, setIsOptionOpen] = useState(false);
  const [subItems, setSubItems] = useState(items);

  const onOpenSubMenu = (event) => {
    event.stopPropagation();
    setSubItems(items);
    setIsOptionOpen(true);
  }

  const onLeave = () => {
    subItems = [];
  }

  return (
    <ContextMenu state={isOptionOpen} setState={setIsOptionOpen} items={subItems}>
      <div onMouseOver={onOpenSubMenu} onMouseLeave={() => setSubItems([])}>
        {children}
      </div>
    </ContextMenu>
  )
}

export default MenuOption;
