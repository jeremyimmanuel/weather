module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        forest: "url('./assets/forest_wallpaper.jpg')",
      }),
    },
  },
  variants: {
    extend: {
      borderWidth: ["hover", "focus"],
    },
  },
  plugins: [],
}
