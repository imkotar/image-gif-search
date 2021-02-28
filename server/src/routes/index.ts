import { Router, Request, Response } from "express";
import express = require("express");

const router: Router = Router()

router.get('/', (req: Request, res: Response) => {
    res.send('hello world');
});

export const RouterController: Router = router;
