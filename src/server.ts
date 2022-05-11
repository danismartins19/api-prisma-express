import express from "express";
import cors from 'cors';
import dotenv from 'dotenv';
import alunoRoutes from './routes/aluno';


dotenv.config();
const server = express();
server.use(express.urlencoded({extended: true}));
server.use(express.json());
server.use(cors({
    origin: "*"
}))

server.use('/aluno', alunoRoutes);
server.use('/sala')


