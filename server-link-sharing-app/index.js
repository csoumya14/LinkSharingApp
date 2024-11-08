const express = require('express');
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

app.get('/', (request, response) => {
  response.send('<h1>Hello World!</h1>');
});

app.get('/api/links', (request, response) => {
  response.json(links);
});

app.get('/api/links/:id', (request, response) => {
  const id = request.params.id;
  const link = links.find(note => note.id === id);
  if (link) {
    response.json(link);
  } else {
    response.statusMessage = 'NOT FOUND';
    response.status(404).end();
  }
});

app.get('/api/profile', (request, response) => {
  response.json(profile);
});
const PORT = 3001;
app.listen(PORT);
console.log(`Server running on port ${PORT}`);
