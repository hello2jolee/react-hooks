import { useState } from "react";

const useTabs = (initialTab, allTabs) => {
  const [currentIndex, setCurrentIndex] = useState(initialTab);
  return (
    allTabs &&
    Array.isArray(allTabs) && {
      currentItem: allTabs[currentIndex],
      changeItem: setCurrentIndex,
    }
  );
};

export default useTabs;
