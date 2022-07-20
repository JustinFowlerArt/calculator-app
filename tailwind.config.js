const generateColorClass = (variable) => {
    return ({ opacityValue }) =>
      opacityValue
        ? `rgba(var(--${variable}), ${opacityValue})`
        : `rgb(var(--${variable}))`
  }
  
  const textColor = {
    primary: generateColorClass('text-primary'),
    secondary: generateColorClass('text-secondary'),
    tertiary: generateColorClass('text-tertiary'),
  }
  
  const backgroundColor = {
    primary: generateColorClass('bg-primary'),
    secondary: generateColorClass('bg-secondary'),
    tertiary: generateColorClass('bg-tertiary'),

    'primary-key': generateColorClass('bg-primary-key'),
    'primary-shadow': generateColorClass('bg-primary-shadow'),

    'secondary-key': generateColorClass('bg-secondary-key'),
    'secondary-shadow': generateColorClass('bg-secondary-shadow'),

    'tertiary-key': generateColorClass('bg-tertiary-key'),
    'tertiary-shadow': generateColorClass('bg-tertiary-shadow'),
  }

  const borderColor = {
    primary: generateColorClass('bg-primary'),
    secondary: generateColorClass('bg-secondary'),
    tertiary: generateColorClass('bg-tertiary'),

    'primary-key': generateColorClass('bg-secondary-key'),
    'primary-shadow': generateColorClass('bg-primary-shadow'),

    'secondary-key': generateColorClass('bg-secondary-key'),
    'secondary-shadow': generateColorClass('bg-secondary-shadow'),

    'tertiary-key': generateColorClass('bg-tertiary-key'),
    'tertiary-shadow': generateColorClass('bg-tertiary-shadow'),
  }

  const accentColor = {
    primary: generateColorClass('bg-primary'),
    secondary: generateColorClass('bg-secondary'),
    tertiary: generateColorClass('bg-tertiary'),

    'primary-key': generateColorClass('bg-secondary-key'),
    'primary-shadow': generateColorClass('bg-primary-shadow'),

    'secondary-key': generateColorClass('bg-secondary-key'),
    'secondary-shadow': generateColorClass('bg-secondary-shadow'),

    'tertiary-key': generateColorClass('bg-tertiary-key'),
    'tertiary-shadow': generateColorClass('bg-tertiary-shadow'),
  }
  

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
        textColor,
        backgroundColor,
        borderColor,
        accentColor,
    },
  },
  plugins: [],
}