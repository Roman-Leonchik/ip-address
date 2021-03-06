import { css, DefaultTheme, ThemedCssFunction } from "styled-components"

/* Media */
export const mediaSizes = {
    tablet: 1024,
    mobile: 768,
}

type TSizes = typeof mediaSizes

type TMedias = {
    [Property in keyof TSizes as Property]: ThemedCssFunction<DefaultTheme>
}

const keys = Object.keys(mediaSizes) as Array<keyof TSizes>

export const media = keys.reduce((acc, label) => {
    return {
        ...acc,
        [label]: (...args: Parameters<ThemedCssFunction<DefaultTheme>>) => css`
            @media (max-width: ${mediaSizes[label]}px) {
                ${css(...args)}
            }
        `,
    }
}, {} as TMedias)
