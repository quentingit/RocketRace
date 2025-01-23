import Historique from "./Historique";

export async function generateMetadata() {
  return {
    title: "Historique des Scores",
    description:
      "Consultez l'historique des courses et découvrez les gagnants des précédentes aventures épiques dans Rocket Race.",
  };
}
const Page = () => {
  return <Historique />;
};

export default Page;
