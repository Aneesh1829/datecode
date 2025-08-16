import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { connectDB } from './config/db';
import authRoutes from './routes/auth.routes';

dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);

app.get('/', (req, res) => res.send('API running 🚀'));
app.get('/api', (req, res) => res.send('API endpoint working ✅'));

app.use((req, res) => {
  res.status(404).json({ message: '404! Route not found ❌' });
});

app.listen(process.env.PORT || 5000, () => console.log('✅ Server running') );
