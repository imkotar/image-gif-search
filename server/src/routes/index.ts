import { Router, Request, Response } from "express";
import express = require("express");
import { imageConnector } from '../connectors/imageConnector';

const router: Router = Router()

router.get('/', (req: Request, res: Response) => {
    res.send('hello world');
});

router.get("/api", async (req: Request, res: Response) => {
    try {
    const testObject = {
        searchInput: 'flowers',
        perPage: 5,
        page: 1}
        const response = await imageConnector(testObject)
      res.send(response);
    }
    catch (err) {
      res.send(err)
    }
  })


export const RouterController: Router = router;
