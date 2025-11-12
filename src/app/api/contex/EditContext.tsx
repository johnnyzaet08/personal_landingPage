"use client";

import { createContext, useContext, useState, ReactNode } from 'react';

interface EditContextType {
  isEditing: boolean;
  setIsEditing: (value: boolean) => void;
}

const EditContext = createContext<EditContextType | undefined>(undefined);

export function EditProvider({ children }: { children: ReactNode }) {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <EditContext.Provider value={{ isEditing, setIsEditing }}>
      {children}
    </EditContext.Provider>
  );
}

export function useEdit() {
  const context = useContext(EditContext);
  if (context === undefined) {
    throw new Error('useEdit must be used within an EditProvider');
  }
  return context;
} 