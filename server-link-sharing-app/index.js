/* const express = require('express');
const app = express();

let links = [
  {
    id: '1',
    platform: {
      value: 'github',
      label: 'GitHub',
      icon: 'github',
    },
    link: 'https://github.com/csoumya14',
    icon: 'githubIcon',
  },
  {
    id: '2',
    platform: {
      value: 'linkedin',
      label: 'LinkedIn',
      icon: 'linkedin',
    },
    link: 'https://www.linkedin.com/in/soumya-chalakkal-60885246',
    icon: 'githubIcon',
  },
];

let profile = {
  firstname: 'Soumya',
  lastname: 'Chalakkal',
  email: 'soumyachalakkal@gmail.com',
  image: '',
};

const requestLogger = (request, response, next) => {
  console.log('Method: ', request.method);
  console.log('Path: ', request.path);
  console.log('Body: ', request.body);
  console.log('---');
  next();
};

app.use(express.json());
app.use(requestLogger);

const unknownEndpoint = (request, response) => {
  response.status(400).send({ error: 'unknown endpoint' });
};

app.get('/', (request, response) => {
  response.send('<h1>Hello World!</h1>');
});

app.get('/api/links', (request, response) => {
  response.json(links);
});

app.get('/api/links/:id', (request, response) => {
  const id = request.params.id;
  const link = links.find(link => link.id === id);
  if (link) {
    response.json(link);
  } else {
    response.statusMessage = 'NOT FOUND';
    response.status(404).end();
  }
});

const generateId = () => {
  const maxId = links.length > 0 ? Math.max(...links.map(link => Number(link.id))) : 0;
  return String(maxId + 1);
};

app.post('/api/links', (request, response) => {
  const link = request.body;
  if (!link.platform || !link.link || !link.icon) {
    return response.status(400).json({ error: 'Missing required fields' });
  }

  const newLink = {
    id: generateId(), // Generate an ID
    platform: link.platform,
    link: link.link,
    icon: link.icon,
  };
  links = links.concat(newLink);
  console.log(link);
  response.json(link);
});

app.get('/api/profile', (request, response) => {
  response.json(profile);
});

app.put('/api/profile', (request, response) => {
  const updateData = request.body;
  if (!updateData.firstname && !updateData.lastname && !updateData.email && !updateData.image) {
    return response.status(400).json({ error: 'No fields provided to update' });
  }

  profile = {
    ...profile,
    ...updateData,
  };
  console.log(profile);
  response.json(profile);
});

app.use(unknownEndpoint);
const PORT = 3001;
app.listen(PORT);
console.log(`Server running on port ${PORT}`);
 */

const app = require('./app');
const PORT = 3001;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
