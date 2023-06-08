import SetTitle from "../../../components/setTitle";
import Banner from "./Section/Banner";
import PopularClasses from "./Section/PopularClasses";
import PopularInstructor from "./Section/PopularInstructor";

const Home = () => {
  return (
    <main>
      <SetTitle title="DMF Language Club"></SetTitle>
      <Banner></Banner>
      <PopularClasses></PopularClasses>
      <PopularInstructor></PopularInstructor>
    </main>
  );
};

export default Home;
