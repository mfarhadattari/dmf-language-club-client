import SetTitle from "../../../components/setTitle";
import Banner from "./Section/Banner";
import Contract from "./Section/Contract";
import PopularClasses from "./Section/PopularClasses";
import PopularInstructor from "./Section/PopularInstructor";
import Reviews from "./Section/Reviews";

const Home = () => {
  return (
    <main>
      <SetTitle title="DMF Language Club"></SetTitle>
      <Banner></Banner>
      <PopularClasses></PopularClasses>
      <PopularInstructor></PopularInstructor>
      <Reviews></Reviews>
      <Contract></Contract>
    </main>
  );
};

export default Home;
