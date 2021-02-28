import express = require("express");
import { Router, Request, Response } from "express";
import { imageConnector } from '../connectors/imageConnector';

const router: Router = Router()

router.post("/api", async (req: Request, res: Response) => {
    try {
      const response = await imageConnector(req.body)
      res.send(response);
    }
    catch (err) {
      res.send(err)
    }
  })

export const RouterController: Router = router;
