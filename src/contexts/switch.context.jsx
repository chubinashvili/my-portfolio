import { createContext, useState } from 'react';

export const SwitchContext = createContext({
    isThemeDark: true,
    setIsThemeDark: () => {},
});

export const SwitchProvider = ({ children }) => {
    const [isThemeDark, setIsThemeDark] = useState(true);
    const value = {
        isThemeDark,
        setIsThemeDark
    };
    return <SwitchContext.Provider value={value}>{children}</SwitchContext.Provider>
}