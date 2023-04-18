import { UserInfoRepository } from '../../repositories/repositories';

const UserRepoInstance = new UserInfoRepository();

import { Request, Response } from "express";
export class UserInformation {

  getAllInformation = async (req: Request, res: Response) => {
    try {
      const user = await UserRepoInstance.getAllInformationRepo(req, res);
      return user;
    } catch (err) {
      console.log(err);
      return res.status(500).json({ error: 'Something went wrong!' });
    }
  }

  addNewUser = async (req: Request, res: Response) => {

    try {
      const user = await UserRepoInstance.addNewUserRepo(req, res);
      return user;
    } catch (err) {
      console.log(err);
      return res.status(500).json({ error: 'Something went wrong!' });
    }
  }


  findByID = async (req: Request, res: Response) => {
    try {
      const user = await UserRepoInstance.findByIDRepo(req, res);
      return user;
    } catch (err) {
      console.log(err);
      return res.status(500).json({ error: "Something went wrong!" });
    }
  };

  deleteByID = async (req: Request, res: Response) => {
    try {
      const user = await UserRepoInstance.deleteByIDRepo(req, res);
      return user;
    } catch (err) {
      console.log(err);
      return res.status(500).json({ error: "Something went wrong!" });
    }
  };


  updateByID = async (req: Request, res: Response) => {
    try {
      const user = await UserRepoInstance.updateByIDRepo(req, res);
      return user;
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: "Server error" });
    }
  };
}