import React, { createContext, useContext, useState, ReactNode } from 'react';

interface HistoryContextProps {
  history: string[];
  addHistory: (entry: string) => void;
}

const HistoryContext = createContext<HistoryContextProps | undefined>(undefined);

export const HistoryProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [history, setHistory] = useState<string[]>([]);

  const addHistory = (entry: string) => {
    setHistory([...history, entry]);
  };

  return (
    <HistoryContext.Provider value={{ history, addHistory }}>
      {children}
    </HistoryContext.Provider>
  );
};

export const useHistoryContext = () => {
  const context = useContext(HistoryContext);
  if (!context) {
    throw new Error('useHistoryContext must be used within a HistoryProvider');
  }
  return context;
};
