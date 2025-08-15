import React, { createContext, useContext, useState } from 'react';

export const FeedContext = createContext();

export const FeedProvider = ({ children }) => {
  // false = mostra Feed.jsx (boas-vindas)
  // true = mostra HomeFeed
  const [showHomeFeed, setShowHomeFeed] = useState(false);

  return (
    <FeedContext.Provider value={{ showHomeFeed, setShowHomeFeed }}>
      {children}
    </FeedContext.Provider>
  );
};

export const useFeed = () => useContext(FeedContext);