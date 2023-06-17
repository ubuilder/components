import colors from 'tailwindcss/colors'

const sizes = {
    "xxs": (0.25 * 1.5) + 'rem',
    "xs": (0.5 * 1.5) + 'rem',
    "sm": (0.75 * 1.5) + 'rem',
    "md": (1 * 1.5) + 'rem',
    "lg": (1.5 * 1.5) + 'rem',
    "xl": (2 * 1.5) + 'rem',
    "2xl": (3 * 1.5) + 'rem',
    "3xl": (4 * 1.5) + 'rem',
    "4xl": (6 * 1.5) + 'rem',
    "5xl": (8 * 1.5) + 'rem',
    "6xl": (2 * 1.5) + 'rem',
}

export default {

    // content: ['./src/scss/**/*.css'],
    content: [],
    theme: {
        extend: {

        colors: {
            primary: colors.indigo,
            secondary: colors.gray,
            success: colors.green,
            error: colors.red,
            warning: colors.yellow,
            info: colors.cyan,
        },
        spacing: sizes  
    }


    }
}