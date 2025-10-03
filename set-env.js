const { writeFile, mkdirSync, existsSync } = require('fs');
const colors = require('colors');
require('dotenv').config();

const targetDir = './src/environments';
const targetPath = `${targetDir}/environment.ts`;

if (!existsSync(targetDir)) {
    mkdirSync(targetDir, { recursive: true });
}

const envConfigFile = `export const environment = {
   apiBaseUrl: '${process.env['API_BASE_URL']}',
   apiUrl: '${process.env['API_URL']}',
   appName: '${process.env['APP_NAME']}',
   awsPubKey: '${process.env['AWSKEY']}',
   nodeEnv: '${process.env['NODE_ENV']}',
   production: ${process.env['PRODUCTION']}
};
`;
console.log(colors.magenta('The file `environment.ts` will be written with the following content: \n'));
console.log(colors.grey(envConfigFile));
writeFile(targetPath, envConfigFile, function (err) {
   if (err) {
       throw console.error(err);
   } else {
       console.log(colors.magenta(`Angular environment.ts file generated correctly at ${targetPath} \n`));
   }
})