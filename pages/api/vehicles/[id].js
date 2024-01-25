import vehicles from "../../../data/vehicles.json";

export default function Handler(request, response) {
  const { query } = request;

  const vehicle = vehicles.find((vehicle) => vehicle.Hash == query.id);

  if (request.method === "GET") {
    try {
      return response.status(200).json(vehicle);
    } catch (error) {
      console.error("Error fetching data:", error);
      return response.status(500).json({
        message: "Error fetching data",
      });
    }
  }

  return response.status(405).json({
    message: "Method not allowed",
  });
}
