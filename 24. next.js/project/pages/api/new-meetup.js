import { MongoClient } from "mongodb";

// @ address -> /api/new-meetup
// POST req-> /api/new-meetup

const handler = async (req, res) => {
  if (req.method === "POST") {
    const data = req.body;

    // const { title, image, address, description } = data;
    const client = await MongoClient.connect(
      "mongodb+srv://miniDezx:reactNextJS@cluster0.9z91v.mongodb.net/meetups?retryWrites=true&w=majority"
    );
    const db = client.db();
    const meetupsCollection = db.collection("meetups");

    const result = await meetupsCollection.insertOne({ data });

    console.log(result);

    client.close();

    res.status(201).json({
      message: "Meetup inserted!",
    });
  }
};

export default handler;
