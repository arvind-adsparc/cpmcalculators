import NextCors from "nextjs-cors";
import dbConnect from "../../lib/dbConnect";
import Subscribe from "../../models/Subscribe";

export default async function handler(req, res) {
  const { method } = req;

  await NextCors(req, res, {
    // Options
    methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
    origin: "*",
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  });

  await dbConnect();

  switch (method) {
    case "POST":
      try {
        console.log("getting this far");

        const subscribe = await Subscribe.create(req.body);
        res.status(201).json({ success: true, data: subscribe });
      } catch (err) {
        console.log("getting this far 2");

        res.status(400).json({ error: err });
      }
      break;
    default:
      console.log("getting this far 3");

      res.status(400).json({ success: false });
      break;
  }
}
