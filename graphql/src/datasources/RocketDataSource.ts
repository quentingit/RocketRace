export default class RocketDataSource {
  getRockets() {
    //LIGHTSAIL OPTION
    //const baseUrl = "https://container-service-1.5w9nttkswwxhj.eu-west-3.cs.amazonlightsail.com";

    const baseUrl = "http://localhost:4000";

    return [
      {
        id: "1",
        name: "Artemis",
        description: "Artemis la fusée qui va sur la lune",
        image: `${baseUrl}/static/fusee-0.png`,
      },
      {
        id: "2",
        name: "Apollo",
        description: "Misez sur Apollo, la fusée 2.0",
        image: `${baseUrl}/static/fusee-1.png`,
      },
      {
        id: "3",
        name: "Soyuz",
        description: "La fusée qui va sur la station spatiale",
        image: `${baseUrl}/static/fusee-2.png`,
      },
      {
        id: "4",
        name: "Falcon",
        description: "La fusée qui va sur Mars",
        image: `${baseUrl}/static/fusee-3.png`,
      },
      {
        id: "5",
        name: "Ariane",
        description: "Cocorico, une fusée Française",
        image: `${baseUrl}/static/fusee-4.png`,
      },
    ];
  }
}
