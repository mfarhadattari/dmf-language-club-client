import SetTitle from "../../../components/setTitle";
import Banner from "./Section/Banner";
import PopularClasses from "./Section/PopularClasses";

const Home = () => {
  return (
    <main>
      <SetTitle title="DMF Language Club"></SetTitle>
      <Banner></Banner>
      <PopularClasses></PopularClasses>
    </main>
  );
};

export default Home;
