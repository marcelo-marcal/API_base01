import { NextFunction, Request, Response } from "express";

function authentication(req: Request, res: Response, next: NextFunction) {
  const authheader = req.headers.authorization;
  // console.log(req.headers);

  if (!authheader) {
    return res.status(401).json({ "message": "unauthorized" })
  }

  const auth = Buffer.from(authheader.split(' ')[1],
    'base64').toString().split(':');
  const user = auth[0];
  const pass = auth[1];

  if (user == 'admin' && pass == '123') {

    next();
  } else {
    return res.status(401).json({ "message": "unauthorized" })
  }
}

export { authentication }