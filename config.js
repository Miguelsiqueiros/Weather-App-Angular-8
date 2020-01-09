const fs = require("fs");

const filePath = "./src/environments/environment.prod.ts";

const envVars = `export const environment = {
    production: true,
    API_URL: '${process.env.API_URL}',
    API_KEY: '${process.env.API_KEY}',
    ICON_URL: '${process.env.ICON_URL}'
}`;

fs.writeFile(filePath, envVars, error =>
  error ? console.log(error) : console.log(`Added env vars to ${filePath}`)
);
