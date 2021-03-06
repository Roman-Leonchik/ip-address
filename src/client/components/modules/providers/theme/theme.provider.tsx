import React from "react"
import { ThemeVariant, ThemesProps, ThemePropsType } from "./theme.constants"

export interface ITheme {
    themeVariant: ThemeVariant
    themeProps: ThemePropsType
}

interface IProps {
    children: JSX.Element
}

export const ThemeContext = React.createContext<ITheme>(undefined as any)

const ThemeProvider: React.FC<IProps> = ({ children }) => {
    const themeVariant = ThemeVariant.Default
    const themeProps = ThemesProps[themeVariant]

    return (
        <ThemeContext.Provider value={{ themeVariant, themeProps }}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider
