import connectToDatabase from "../../../utils/mongodb";
import { productData } from "../../../data";
import Card from "../../../components/Card/Card";

const index = ({ shirts }) => {
  return (
    <div className="flex flex-row gap-2">
      {shirts.map((shirt) => {
        console.log(shirt)
        return (
          <div key={shirt.name}>
            <Card name={shirt.name} url={`/shop/shirts/${shirt._id}`} image={null} />
          </div>
        );
      })}
    </div>
  );
};



export async function getStaticProps() {
  if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {

  const shirts = productData.shirts

  return {
    props: {
      shirts: shirts,
    },
  };
}else {
  const { db } = await connectToDatabase();
  const shirts = await db
    .collection("Products")
    .find({ type: 'shirt' })
    .toArray()

  return {
    props: {
      shirts: shirts,
    },
  };
}
}

export default index;
