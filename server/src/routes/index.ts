import express = require("express");
import { dataValidation } from '../validation/validation'
import { Router, Request, Response } from "express";
import { imageConnector } from '../connectors/imageConnector';
import { gifConnector } from '../connectors/gifConnector'

const router: Router = Router()

router.post("/api", async (req: Request, res: Response) => {
    try {
      const validator = dataValidation(req.body)
      if (validator) {
        return res.status(404).send(validator)
      }
      const response = req.body.type === 'image' ? await imageConnector(req.body) : await gifConnector(req.body)
      res.send(response);
    }
    catch (err) {
      res.send(err)
    }
  })

export const RouterController: Router = router;
