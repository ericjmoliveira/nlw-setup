import Fastify from 'fastify';
import cors from '@fastify/cors';

import { appRoutes } from './routes';

const app = Fastify();
const port = 5000;

app.register(cors);
app.register(appRoutes);

app.listen({ port, host: '0.0.0.0' }, () => console.log(`Server running on port ${port}!`));
