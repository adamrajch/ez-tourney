import axios from "axios";
function About({ products }) {
  console.log(products);
  return <>Hello there</>;
}

About.getInitialProps = async (ctx) => {
  const url = "http://localhost:3000/api/products";
  const response = await axios.get(url);
  return { products: response.data };
};
export default About;
