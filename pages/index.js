/* eslint-disable @next/next/no-img-element */
import Head from 'next/head';
import { useState, useContext, useEffect } from 'react';
import { DataContext } from '../store/GlobalState';

import { getData } from '../utils/fetchdata';
import ProductItem from '../components/product/ProductItem';
import filterSearch from '../utils/filterSearch';
import { useRouter } from 'next/router';
import Filter from '../components/Filter';
import Link from 'next/link';

const Home = (props) => {
  const [products1, setProducts1] = useState(props.products1);
  const [products2, setProducts2] = useState(props.products2);
  const [products3, setProducts3] = useState(props.products3);
  const [products4, setProducts4] = useState(props.products4);
  const [isCheck, setIsCheck] = useState(false);
  const [page, setPage] = useState(1);
  const router = useRouter();

  const { state, dispatch } = useContext(DataContext);
  const { auth, category, dark } = state;

  const [allcat, setAllcat] = useState(category);
  useEffect(() => {
    setProducts1(props.products1);
    setProducts2(props.products2);
    setProducts3(props.products3);
    setProducts4(props.products4);
  }, [props]);

  useEffect(() => {
    if (Object.keys(router.query).length === 0) setPage(1);
  }, [router.query]);

  const handleCheck = (id) => {
    products.forEach((product) => {
      if (product._id === id) product.checked = !product.checked;
    });
    setProducts([...products]);
  };
  return (
    <>
      <Head>
        <title>Home | NextEcom</title>
      </Head>

      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-ride="carousel"
      >
        <ol className="carousel-indicators">
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="0"
            className="active"
          ></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          <Link href="search/?category=615867ebb3e535df36d4c0aa" passHref>
            <div className="carousel-item active">
              <img
                className="d-block w-100"
                src="https://res.cloudinary.com/nextecom/image/upload/v1637252254/f7e20932added589_jg1kok.jpg"
                alt="First slide"
              />
            </div>
          </Link>
          <Link href="search/?category=615867ebb3e535df36d4c0aa" passHref>
            <div className="carousel-item">
              <img
                className="d-block w-100"
                src="https://res.cloudinary.com/nextecom/image/upload/v1637252254/5cdd41aab95a9e92_ixxeyy.jpg"
                alt="Second slide"
              />
            </div>
          </Link>
          <Link href="search/?category=619636d822a15ac3a9f023d9" passHref>
            <div className="carousel-item">
              <img
                className="d-block w-100"
                src="https://res.cloudinary.com/nextecom/image/upload/v1637252680/145b2651ad775bb7_o1pixa.jpg"
                alt="Third slide"
              />
            </div>
          </Link>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div>

      <div className="home_page mt-5">
        {auth.user && auth.user.role === 'admin' && (
          <div className=" products">
            <Link href="/search" passHref>
            <div className="btn btn-danger mt-2" style={{ margin: '10px' }}>
              <button className="btn btn-danger">Edit all products</button>
            </div>
            </Link>
            <Link href="/create" passHref>
              <div className=" btn btn-success mt-2" style={{ margin: '10px' }}>
                <button className="btn btn-success">Add Products</button>
              </div>
            </Link>
            <Link href="/profile" passHref>
              <div className="btn btn-info mt-2" style={{ margin: '10px' }}>
                <button className="btn btn-info">Sales</button>
              </div>
            </Link>
          </div>
        )}
        {auth.user && auth.user.role === 'admin' ? null : (
          <Link href="/search" passHref>
            <button className="btn btn-outline-success d-block mx-auto mb-4">
              View all products
            </button>
          </Link>
        )}

        {/* <Filter state={state} /> */}

        <h4
          className={
            !dark
              ? 'responsive w-100 text-center mt-2'
              : 'responsive w-100 text-center text-light mt-2'
          }
        >
          Tablets
        </h4>

        <div className="products">
          {products1.length === 0 ? (
            <h2>No Products</h2>
          ) : (
            products1.map((product) => (
              <ProductItem key={product._id} product={product} />
            ))
          )}
        </div>
        <Link href="search/?category=619640b7af1fa2cf41587ecd" passHref>
          <button className="btn btn-outline-info d-block mx-auto mb-4">
            More Tablets
          </button>
        </Link>
      </div>

      <div className="home_page  mt-5">
        {/* <Filter state={state} /> */}
        <h4
          className={
            !dark
              ? 'responsive w-100 text-center mt-2'
              : 'responsive w-100 text-center text-light'
          }
        >
          Phones
        </h4>

        <div className="products">
          {products2.length === 0 ? (
            <h2>No Products</h2>
          ) : (
            products2.map((product) => (
              <ProductItem key={product._id} product={product} />
            ))
          )}
        </div>
        <Link href="search/?category=619636d822a15ac3a9f023d9" passHref>
          <button className="btn btn-outline-info d-block mx-auto mb-4">
            More Phones
          </button>
        </Link>
      </div>

      <div className="home_page  mt-5">
        {/* <Filter state={state} /> */}
        <h4
          className={
            !dark
              ? 'responsive w-100 text-center mt-2'
              : 'responsive w-100 text-center text-light'
          }
        >
          Laptops
        </h4>

        <div className="products">
          {products3.length === 0 ? (
            <h2>No Products</h2>
          ) : (
            products3.map((product) => (
              <ProductItem key={product._id} product={product} />
            ))
          )}
        </div>
        <Link href="search/?category=615867ebb3e535df36d4c0aa" passHref>
          <button className="btn btn-outline-info d-block mx-auto mb-4">
            More Laptops
          </button>
        </Link>
      </div>

      <div className="home_page  mt-5 mb-5">
        {/* <Filter state={state} /> */}
        <h4
          className={
            !dark
              ? 'responsive w-100 text-center mt-2'
              : 'responsive w-100 text-center text-light'
          }
        >
          Npm Packages
        </h4>

        <div className="products">
          {products4.length === 0 ? (
            <h2>No Products</h2>
          ) : (
            products4.map((product) => (
              <ProductItem key={product._id} product={product} />
            ))
          )}
        </div>
        <Link href="search/?category=615869cbb3e535df36d4c0e9" passHref>
          <button className="btn btn-outline-info d-block mx-auto mb-4">
            More Packages
          </button>
        </Link>
        <Link href="/search" passHref>
          <button className="btn btn-outline-success d-block mx-auto mb-4">
            {auth.user && auth.user.role === 'admin'
              ? 'Edit All Products'
              : 'View all products'}
          </button>
        </Link>
      </div>
    </>
  );
};

export async function getServerSideProps() {
  const res = await getData(
    `product?limit=${3}&category=619640b7af1fa2cf41587ecd&sort=&title=all`
  );
  const res2 = await getData(
    `product?limit=${3}&category=619636d822a15ac3a9f023d9&sort=&title=all`
  );
  const res3 = await getData(
    `product?limit=${3}&category=615867ebb3e535df36d4c0aa&sort=&title=all`
  );
  const res4 = await getData(
    `product?limit=${3}&category=615869cbb3e535df36d4c0e9&sort=&title=all`
  );
  // server side rendering
  return {
    props: {
      products1: res.products,
      result1: res.result,
      products2: res2.products,
      result2: res2.result,
      products3: res3.products,
      result3: res3.result,
      products4: res4.products,
      result4: res4.result,
    }, // will be passed to the page component as props
  };
}

export default Home;
