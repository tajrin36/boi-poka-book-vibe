import Banner from "./Banner";
import Books from "./Books";

const Home = () => {
    return (
        <div className="md:mx-auto md:container">
            <Banner></Banner>
            <Books></Books>
        </div>
    );
};

export default Home;