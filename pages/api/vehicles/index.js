import vehicles from "../../../data/vehicles.json";

export default function Handler(request, response) {
  if (request.method === "GET") {
    try {
      const reducedData = vehicles.map(
        ({ Name, DisplayName, Hash, ManufacturerDisplayName, Class }) => ({
          Name,
          DisplayName,
          Hash,
          ManufacturerDisplayName,
          Class,
        })
      );

      return response.status(200).json(reducedData);
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
