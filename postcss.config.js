const path = require("path");

module.exports = {
  plugins: {
    // Explicit config path — the dev server may run with cwd at the repo root,
    // which would otherwise resolve the parent project's tailwind config.
    tailwindcss: { config: path.join(__dirname, "tailwind.config.ts") },
    autoprefixer: {},
  },
};
