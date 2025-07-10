import React, { createContext, useContext, useState } from "react";

const TabsContext = createContext();

export function Tabs({ children, defaultValue }) {
  const [active, setActive] = useState(defaultValue);
  return (
    <TabsContext.Provider value={{ active, setActive }}>
      <div>{children}</div>
    </TabsContext.Provider>
  );
}

export function TabsList({ children, className = "" }) {
  return <div className={`flex gap-1 bg-[#f1f5f9] rounded-md p-1 ${className}`}>{children}</div>;
}

export function TabsTrigger({ value, children, className = "" }) {
  const { active, setActive } = useContext(TabsContext);
  const isActive = active === value;
  return (
    <button
      className={`px-4 py-2 rounded-md ${
        isActive ? "bg-white font-semibold text-[#002366]" : "text-gray-500"
      } ${className}`}
      onClick={() => setActive(value)}
    >
      {children}
    </button>
  );
}
