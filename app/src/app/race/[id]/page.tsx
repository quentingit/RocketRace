import Race from "./Race";

export async function generateMetadata() {
  return {
    title: "Course en direct",
    description:
      "Suivez la progression de votre course en direct et découvrez le vainqueur dans Rocket Race.",
    robots: {
      index: false,
      follow: false,
    },
  };
}

const Page = () => {
  return <Race />;
};

export default Page;
