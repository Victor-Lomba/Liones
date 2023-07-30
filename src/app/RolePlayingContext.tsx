import { useState, useMemo, createContext, useContext } from "react";

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
        () => ({
          currentLife: 10,
          handleChangeCurrentLife: () => console.log(currentLife),
        }),
        [currentLife]
      )}
    >
      {children}
    </RolePlayingContext.Provider>
  );
}

export default function useRolePlayingContext() {
  return useContext(RolePlayingContext);
}
