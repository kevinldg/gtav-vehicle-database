import data from "../../data/vehicles.json";

export default function handler(req, res) {
  res.status(200).json(data);
}
