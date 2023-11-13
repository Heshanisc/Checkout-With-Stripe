import express from "express";

import orderRoutes from "./orderRoutes.js";

const router = express.Router();

export default () => {
  orderRoutes(router);
  return router;
};
