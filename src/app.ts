import bodyParser from 'body-parser';
import 'dotenv/config';
import express from 'express';
import db from './config/database';
import authRoutes from './routes/authRoutes';
import userRoutes from './routes/userRoutes';
import carRoutes from './routes/carRoutes';
import swagger from './swagger';

const app = express();

app.use(express.json());
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/cars', carRoutes);

app.get('/', (req, res) => {
  res.send('API is running...');
});

swagger(app);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
