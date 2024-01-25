module.exports = {
  "**/*.{js,jsx,ts,tsx}": (filenames) => [
    `npm run lint -- ${filenames.join(" ")}`,
    `npm run format -- ${filenames.join(" ")}`,
    "git add",
  ],
};
