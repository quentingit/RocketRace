import Selection from "./Selection";

export async function generateMetadata() {
  return {
    title: "Sélection des Fusées",
    description:
      "Choisissez vos fusées préférées pour lancer une course épique dans Rocket Race.",
  };
}

const Page = () => {
  return <Selection />;
};

export default Page;
