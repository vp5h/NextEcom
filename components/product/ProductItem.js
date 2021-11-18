/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import { useContext } from 'react';
import { DataContext } from '../../store/GlobalState';
import { addToCart } from '../../store/Actions';
import { useRouter } from 'next/router';

const ProductItem = ({ product, handleCheck }) => {
  const { state, dispatch } = useContext(DataContext);
  const { cart, auth, dark } = state;
  const router = useRouter();

  const userLink = () => {
    return (
      <>
        <Link href={`/product/${product._id}`}>
          <a className="btn btn-info" style={{ marginRight: '5px', flex: 1 }}>
            View
          </a>
        </Link>
        <button
          className="btn btn-success"
          style={{ marginLeft: '5px', flex: 1 }}
          disabled={product.inStock === 0 ? true : false}
          onClick={() => dispatch(addToCart(product, cart))}
        >
          Add to cart
        </button>
      </>
    );
  };

  const adminLink = () => {
    return (
      <>
        <Link href={`create/${product._id}`}>
          <a className="btn btn-info" style={{ marginRight: '5px', flex: 1 }}>
            Edit
          </a>
        </Link>
        <button
          className="btn btn-danger"
          style={{ marginLeft: '5px', flex: 1 }}
          data-toggle="modal"
          data-target="#exampleModal"
          onClick={() =>
            dispatch({
              type: 'ADD_MODAL',
              payload: [
                {
                  data: '',
                  id: product._id,
                  title: product.title,
                  type: 'DELETE_PRODUCT',
                },
              ],
            })
          }
        >
          Delete
        </button>
      </>
    );
  };

  return (
    <div className={!dark ? "card": "bg-dark text-light card"} style={{ width: '18rem' }}>
      {auth.user && auth.user.role === 'admin' && router.pathname === "/search" && (
        <input
          type="checkbox"
          checked={product.checked}
          className="position-absolute"
          style={{ height: '20px', width: '20px' }}
          onChange={() => handleCheck(product._id)}
        />
      )}
      <img
        className=" d-block mx-auto img-thumbnail rounded"
     
        style={{ height: '300px', objectFit: "contain" }}
        
        src={product.images[0].url}
        alt={product.images[0].url}
      />
      <div className="card-body">
        <h5 className="card-title text-capitalize" title={product.title}>
          {product.title}
        </h5>

        <div className="row justify-content-between mx-0">
          <h6 className="text-danger">${product.price}</h6>
          {product.inStock > 0 ? (
            <h6 className="text-danger">In Stock: {product.inStock}</h6>
          ) : (
            <h6 className="text-danger">Out Stock</h6>
          )}
        </div>

        <p className="card-text" title={product.description}>
          {product.description}
        </p>

        <div className="row justify-content-between mx-0">
          {!auth.user || auth.user.role !== 'admin' ? userLink() : adminLink()}
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
