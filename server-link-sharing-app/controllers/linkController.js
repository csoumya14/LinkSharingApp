const { readJsonFile, writeJsonFile } = require('../utils/fileOperations');
const linksFilePath = require('path').join(__dirname, '../data/links.json');

exports.getLinks = async (req, res) => {
  const links = await readJsonFile(linksFilePath);
  res.json(links);
};

exports.addLink = async (req, res) => {
  const links = await readJsonFile(linksFilePath);
  const newLink = { id: String(links.length + 1), ...req.body };
  links.push(newLink);
  await writeJsonFile(linksFilePath, links);
  res.status(201).json(newLink);
};
