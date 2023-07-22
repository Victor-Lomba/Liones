import { useState, useMemo } from "react";
import { createContext, useContextSelector } from "use-context-selector";

type RolePlayingContextProps = {
  currentLife: number;
  handleChangeCurrentLife: (currentLife: number) => void;
};

const RolePlayingContext = createContext({} as RolePlayingContextProps);

export function RolePlayingProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [currentLife, setCurrentLife] = useState(0);

  function handleChangeCurrentLife(maxLife: number) {
    setCurrentLife(maxLife);
  }

  return (
    <RolePlayingContext.Provider
      value={useMemo(
        () =>
          ({
            currentLife,
            handleChangeCurrentLife,
          } as RolePlayingContextProps),
        [currentLife]
      )}
    >
      {children}
    </RolePlayingContext.Provider>
  );
}

export default function useRolePlayingContext<T>(
  query: (context: RolePlayingContextProps) => T
): T {
  return useContextSelector(RolePlayingContext, query);
}
