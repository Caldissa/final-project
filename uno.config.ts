import {
    defineConfig,
    presetIcons,
    presetTypography,
    presetUno,
    presetWebFonts,
    transformerDirectives
} from 'unocss'
import { presetForms } from '@julr/unocss-preset-forms'

export default defineConfig({
    theme: {
        darkMode: 'class',
        colors: {
            primary: {
                DEFAULT: 'rgb(var(--primary) / <alpha-value>)',
                light: 'rgb(var(--primary-light) / <alpha-value>)',
                dark: 'rgb(var(--primary-dark) / <alpha-value>)'
            },
            secondary: {
                DEFAULT: 'rgb(var(--secondary) / <alpha-value>)',
                light: 'rgb(var(--secondary-light) / <alpha-value>)',
                lightest: 'rgb(var(--secondary-lightest) / <alpha-value>)',
                dark: 'rgb(var(--secondary-dark) / <alpha-value>)'
            },
            accent: {
                DEFAULT: 'rgb(var(--accent) / <alpha-value>)',
                light: 'rgb(var(--accent-light) / <alpha-value>)'
            }
        }
    },
    presets: [
        presetIcons({
            extraProperties: {
                display: 'inline-block',
                'vertical-align': 'middle'
            }
        }),
        presetForms(),
        presetUno(),
        presetTypography(),
        presetWebFonts({
            provider: 'google',
            fonts: {
                sans: 'Open Sans:100,200,300,400,500,600,700',
                lobster: 'Lobster:400'
            }
        })
    ],
    transformers: [transformerDirectives()]
})
