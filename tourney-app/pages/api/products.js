import products from "../../public/products.json";
import connectDb from "../../utils/connectDB";
connectDb();
export default (req, res) => {
  res.status(200).json(products);
};
