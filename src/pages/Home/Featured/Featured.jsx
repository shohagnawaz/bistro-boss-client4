import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredImg from "../../../assets/home/featured.jpg";
import "./Featured.css";

const Featured = () => {
    return (
        <div className="featured-item bg-fixed text-white pt-10 my-10">
            <SectionTitle
                subHeading={"check it out"}
                heading={"Featured Item"}
            ></SectionTitle>
            <div className="md:flex justify-center items-center bg-slate-500 bg-opacity-40 py-20 px-36">
                <div>
                    <img src={featuredImg} alt="" />
                </div>
                <div className="md:ml-10">
                    <p>August 20, 2025</p>
                    <p className="uppercase">Where can I get some</p>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                        Expedita, quis consectetur. Necessitatibus molestiae, 
                        aliquid laudantium voluptatibus quibusdam cupiditate sequi quod. 
                        Dolores labore quos sapiente, impedit sequi repudiandae praesentium 
                        neque necessitatibus asperiores deserunt non dolor ipsa provident 
                        quibusdam minima voluptas fugit! Atque earum eligendi doloremque 
                        cum sapiente ipsam aperiam, quaerat provident?
                    </p>
                    <button className="btn btn-outline border-0 border-b-4 mt-4">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;