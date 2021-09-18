import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_PRODUCTS = [
  {
    id: "p1",
    title: "My first book",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, labore tempora architecto temporibus aliquam, quasi ducimus amet quisquam dignissimos maiores facilis, aliquid quos ratione voluptate ut enim rerum laboriosam earum?",
    price: 14,
  },
  {
    id: "p2",
    title: "My second book",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, labore tempora architecto temporibus aliquam, quasi ducimus amet quisquam dignissimos maiores facilis, aliquid quos ratione voluptate ut enim rerum laboriosam earum?",
    price: 19,
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
