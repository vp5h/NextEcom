/* eslint-disable @next/next/no-img-element */
import Head from 'next/head';
import { useState, useContext } from 'react';
import { getData } from '../../utils/fetchdata';
import { DataContext } from '../../store/GlobalState';
import { addToCart } from '../../store/Actions';

const DetailProduct = (props) => {
  const [product] = useState(props.product);
  const [tab, setTab] = useState(0);

  const { state, dispatch } = useContext(DataContext);
  const { cart, dark } = state;

  const isActive = (index) => {
    if (tab === index) return ' active';
    return '';
  };

  return (
    <div className={!dark ? "row detail_page" : " row detail_page text-light"}>
      <Head>
        <title>Detail Product</title>
      </Head>

      <div className="col-md-6">
        <img
          src={product.images[tab].url}
          alt={product.images[tab].url}
          className="d-block mx-auto img-thumbnail rounded"
          style={{ height: '350px', objectFit: "contain" }}
        />

        <div className="row mx-0" style={{ cursor: 'pointer' }}>
          {product.images.map((img, index) => (
            <img
              key={index}
              src={img.url}
              alt={img.url}
              className={`img-thumbnail rounded ${isActive(index)}` }
              style={{ height: '80px', width: '20%' , objectFit: "contain"}}
              onClick={() => setTab(index)}
            />
          ))}
        </div>
      </div>

      <div className="col-md-6 mt-3">
        <h2 className="text-uppercase">{product.title}</h2>
        <h5 className="text-danger">${product.price}</h5>

        <div className="row mx-0 d-flex justify-content-between">
          {product.inStock > 0 ? (
            <h6 className="text-danger">In Stock: {product.inStock}</h6>
          ) : (
            <h6 className="text-danger">Out Stock</h6>
          )}

        </div>
          <h6 className="text-danger">Sold: {product.sold}</h6>

        <div className="my-2">{product.description}</div>
        <div className="my-2">{product.content}</div>

        <button
          type="button"
          className={!dark? "btn btn-dark d-block my-3 px-5" : "btn btn-light d-block my-3 px-5"}
          onClick={() => dispatch(addToCart(product, cart))}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export async function getServerSideProps({ params: { id } }) {
  const res = await getData(`product/${id}`);
  //   console.log(res)
  // server side rendering
  return {
    props: { product: res.product }, // will be passed to the page component as props
  };
}

export default DetailProduct;
