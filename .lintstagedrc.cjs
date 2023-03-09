module.exports = {
  "src/**/*.{ts,tsx}": [
    "eslint",
    "prettier --write"
  ],
  "src/**/*.(sa|sc}c)ss": [
    "stylelint",
    "prettier --write"
  ]
}
