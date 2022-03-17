import { Router } from "express";

import { unitsRoutes } from "./unitsRoutes";

import { authentication } from "../middleware/authentication";

const router = Router();

router.use(authentication)

router.use('/api/v1', unitsRoutes);


export { router };