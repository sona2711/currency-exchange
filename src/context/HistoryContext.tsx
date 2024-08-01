import React, { createContext, useContext, useState, ReactNode } from 'react';



interface ConversionEntry {
  currency: string;
  amount: number;
  date: string;
}

interface HistoryContextProps {
  history:  ConversionEntry[];
  addHistory: (entry: ConversionEntry) => void;
}

const HistoryContext = createContext<HistoryContextProps | undefined>(undefined);

export const HistoryProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [history, setHistory] = useState<ConversionEntry[]>([]);

  const addHistory = (entry: ConversionEntry) => {
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
