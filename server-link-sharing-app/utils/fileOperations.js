const fs = require('fs').promises;

exports.readJsonFile = async filePath => {
  const data = await fs.readFile(filePath, 'utf8');
  return JSON.parse(data);
};

exports.writeJsonFile = async (filePath, data) => {
  await fs.writeFile(filePath, JSON.stringify(data, null, 2), 'utf8');
};
