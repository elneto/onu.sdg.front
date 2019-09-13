const fs = require('fs');
const path = require('path');
const glob = require('glob');
const pretty = require('pretty');
const concat = require('concat');
const rimraf = require("rimraf");

const rootDir = path.join(__dirname, '..');

const cssConcat = () => {
  const cssFolder = path.join(rootDir, 'out/_next/static/css');
  return concat(cssFolder, path.join(rootDir, 'out/static/bundle.css'));
};

const htmlPretify = () => {
  const pattern = path.join(rootDir, 'out/**/*.html');
  glob(pattern, {}, (err, files) => {
    files.forEach(file => {
      let contents = fs.readFileSync(file, 'utf8');
      contents = pretty(contents);
      fs.writeFileSync(file, contents);
    });
  });
};

const clean = () => {
  const folder = path.join(rootDir, 'out/_next');
  rimraf.sync(folder);
};

const main = async () => {
  await cssConcat();
htmlPretify();
clean();
};

main();
