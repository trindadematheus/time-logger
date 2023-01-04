import React, { useState, createContext, useContext, useEffect } from "react";
import { parseCookies, setCookie } from "nookies";
import { v4 as uuidv4 } from "uuid";

import { Shortcut } from "../types/shortcut";

interface ShortcutsProviderProps {
  children: React.ReactNode;
}

interface ShortcutsContextProps {
  shortcuts: Shortcut[];
  setShortcuts(data: Shortcut[]): void;
  addShortcut(data: Pick<Shortcut, "key" | "message">): void;
  deleteShortcut(id: string): void;
}

const ShortcutsContext = createContext<ShortcutsContextProps | null>(null);

export function ShortcutsProvider({ children }: ShortcutsProviderProps) {
  const cookies = parseCookies();

  const [shortcuts, setShortcuts] = useState<Shortcut[]>([]);

  useEffect(() => {
    if (cookies.shortcuts) {
      setShortcuts([...JSON.parse(cookies.shortcuts)]);
    }
  }, []);

  function addShortcut(addShortcutData: Pick<Shortcut, "key" | "message">) {
    const ucookies = parseCookies();
    const uuid = uuidv4();

    if (ucookies.shortcuts) {
      const newShortcuts = [
        ...JSON.parse(ucookies.shortcuts),
        { ...addShortcutData, id: uuid },
      ];

      setCookie(null, "shortcuts", JSON.stringify(newShortcuts), {
        maxAge: 30 * 24 * 60 * 60,
        path: "/",
      });
    } else {
      setCookie(null, "shortcuts", JSON.stringify([addShortcutData]), {
        maxAge: 30 * 24 * 60 * 60,
        path: "/",
      });
    }

    setShortcuts((state) => [...state, { ...addShortcutData, id: uuid }]);
  }

  function editShortcut() {}

  function deleteShortcut(shortcutId: string) {
    const newShortcuts = shortcuts.filter(
      (shortcut) => shortcut.id !== shortcutId
    );

    setShortcuts(newShortcuts);
    setCookie(null, "shortcuts", JSON.stringify(newShortcuts), {
      maxAge: 30 * 24 * 60 * 60,
      path: "/",
    });
  }

  return (
    <ShortcutsContext.Provider
      value={{
        shortcuts,
        setShortcuts,
        addShortcut,
        deleteShortcut,
      }}
    >
      {children}
    </ShortcutsContext.Provider>
  );
}

export function useShortcuts(): ShortcutsContextProps {
  const context = useContext(ShortcutsContext);

  if (!context) {
    throw new Error("useShortcuts must be used within a ShortcutsProvider");
  }

  return context;
}
