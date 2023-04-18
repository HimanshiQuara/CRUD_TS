import { Request, Response } from 'express';
import db from "../../models"
export class UserInfoRepository {
    getAllInformationRepo = async (req: Request, res: Response) => {
        try {
            const users = await db.User.findAll();
            return res.json(users);
        } catch (err) {
            console.log(err);
            return res.status(500).json({ error: 'Something went wrong!' });
        }
    }

    addNewUserRepo = async (req: Request, res: Response) => {
        const { name, email, password } = req.body;
        try {
            const user = await db.User.create({ name, email, password });
            return res.json(user);
            
        } catch (err) {
            console.log(err);
            return res.status(500).json({ error: 'Something went wrong!' });
        }
    }

    findByIDRepo = async (req: Request, res: Response) => {
        const id = req.params.id;
        try {
            const user = await db.User.findOne({
                where: { id: id }
                
            });
            if (user === null) {
                return res.status(400).json({ error: "Invalid ID" });
            }
            return res.json(user);
        } catch (err) {
            console.log(err);
            return res.status(500).json({ error: "Something went wrong!" });
        }
    };

    deleteByIDRepo = async (req: Request, res: Response) => {
        const id = req.params.id;
        try {
            const user = await db.User.findOne({
                where: { id: id },
            });
            if (!user) {
                return res.status(404).json({ error: "User not found" });
            }
            await user.destroy();
            return res.json({ message: "User deleted" });
        } catch (err) {
            console.log(err);
            return res.status(500).json({ error: "Something went wrong!" });
        }
    };


    updateByIDRepo = async (req: Request, res: Response) => {
        const id = req.params.id;
        const { name, email, password } = req.body;
        try {
            const user = await db.User.findOne({ where: { id } });
            if (!user) {
                return res.status(404).json({ error: "User not found" });
            }

            user.name = name || user.name;
            user.email = email || user.email;
            user.password = password || user.password;

            await user.save();

            res.status(200).json({ message: "User updated", user });
        } catch (err) {
            console.log(err);
            res.status(500).json({ error: "Server error" });
        }
    };
}
