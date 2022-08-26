import axios from 'axios';
import express from 'express';
import cors from 'cors';
import { parse } from 'node-html-parser';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const app = express();
const port = 3333;

app.use(express.json());
app.use(cors());

app.get('/', (_, res) => {
  res.send('Hello World!');
});

app.post('/search', async (req, res) => {
  try {
    const params = new URLSearchParams({
      filter: 'company',
      search: req.body.search,
    });
    const response = await axios.post('https://www.zaubacorp.com/custom-search', params, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });
    const dom = parse(response.data);
    const elements = dom.querySelectorAll('.show');
    const data = elements.map((ele) => ({
      id: ele.id,
      name: ele.innerHTML,
    }));
    res.set('Content-Type', 'text/html');
    return res.json({ result: data });
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log(err);
    return res.json({ msg: 'Error Occurred' });
  }
});

app.post('/save', async (req, res) => {
  try {
    const param = req.body.search;
    const response = await axios.post(`https://www.zaubacorp.com/${param}`);
    const companyName = response.data.split('<title>')[1].split('</title>')[0].split('-')[0];
    const cin = param.split('/')[2];
    await prisma.$connect;
    await prisma.companies.create({
      data: {
        companyName,
        cin,
      },
    });
    await prisma.$disconnect;
    return res.json({ result: { companyName, cin } });
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log(err);
    return res.json({ msg: 'Error Occurred' });
  }
});

app.get('/companies', async (_, res) => {
  try {
    await prisma.$connect;
    const companies = await prisma.companies.findMany();
    await prisma.$disconnect;
    return res.json({ result: companies });
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log(err);
    return res.json({ msg: 'Error Occurred' });
  }
});

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`🚀 App listening on port ${port}`);
});
