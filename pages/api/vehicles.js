import vehicles from "../../data/vehicles.json";

export default function Handler(request, response) {
  if (request.method === "GET") {
    try {
      return response.status(200).json(vehicles);
    } catch (error) {
      console.error("Error fetching data:", error);
      return response.status(500).json({
        message: "Error fetching data",
      });
    }
  }

  response.status(405).json({
    message: "Method not allowed",
  });
}
