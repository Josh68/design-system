import React from 'react';
import { createContext, useState, useContext, useRef } from 'react';
import uniqueId from 'lodash/uniqueId';

export const DrawerContext = createContext(null);

export const DrawerManager = (props: any) => {
  const [currentID, setCurrentID] = useState(null);

  return <DrawerContext.Provider value={{ currentID, setCurrentID }} {...props} />;
};

export const useDrawerManager = () => {
  const toggleRef = useRef<any>();
  const { currentID, setCurrentID } = useContext(DrawerContext);
  const id = useRef(uniqueId('drawerManagerID')).current;

  const isOpen = currentID === id;
  const toggleClick = () => {
    setCurrentID(isOpen ? null : id);
    if (isOpen) {
      toggleRef.current?.focus();
    }
  };
  const closeClick = () => {
    setCurrentID(null);
    toggleRef.current?.focus();
  };

  return { toggleRef, toggleClick, closeClick, isOpen };
};

export default DrawerManager;
