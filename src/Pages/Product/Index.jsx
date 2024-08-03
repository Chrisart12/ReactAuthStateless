import NavBar  from '../../Components/Nav/NavBar';
// import products from '../../data';
import Category from '../../Components/Product/Category';
import { useState, useEffect } from "react";
import Products from '../../Components/Product/Products'
import Filter from '../../Components/Product/Filter'
import {Link } from "react-router-dom";
import { useNavigate  } from "react-router-dom";
import BtnLink  from '../../Components/Buttons/BtnLink';
import { productList } from '../../redux/product/productAction'
import { useDispatch, useSelector } from "react-redux";




export default function Index() {

  let navigate = useNavigate();
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.auth);

  const [isChecked, setIsChecked] = useState(false);

  const [search, setSearch] = useState('');

  const [price, setPrice] = useState(0);

  // const [products, setProducts] = useState([]);

  const visibleProducts = useSelector((state) => state.product.product);
  console.log("visibleProducts", visibleProducts)

  // const visibleProducts = products.filter(product => {
  //   if (isChecked && !product.stocked) {
  //       return false
  //   }

  //   if (search && !product.name.toLowerCase().includes(search.toLowerCase())) {
  //       return false
  //   }

  //   if (price != 0 && !(parseInt(product.price.substring(1)) <= price)) {
  //     return false
  //   }

  //   return true

  // })
  

  // console.log('products', products)

    // Check auth
    useEffect(() => {
  
        dispatch(productList(token.access_token)).then((result) => {
            console.log("result", result.payload)
            // if (result.payload) {
            //     navigate('/')
            // } else {
            //   navigate('/login')
            // }
        })
      
    }, [])



    return (
      <>
      <NavBar />
        <div className="container"  style={{ marginTop: '90px' }}>
          <div className=''>
            <Filter checked={isChecked} onCheck={setIsChecked} search={search} onInputSearch={setSearch} price={price} onInputPrice={setPrice}/>
            <div className='mb-3'>
              <BtnLink className="btn-primary" link="/product/create" label="Ajouter un produit"/>
            </div> 
          </div>
            <table className="table table-bordered table-striped">
                <thead>
                    <tr className='table-primary'>
                        <th scope="col">Nom</th>
                        <th scope="col">Prix</th>
                    </tr>
                </thead>
                
                <tbody>
                    <Category category="fruits" />
                    { 
                      visibleProducts && 
                      <Products products={visibleProducts} category="fruits"/>
                    
                    }
                </tbody>
                <tbody>
                      <Category category="vegetables" />
                      {
                        visibleProducts && 
                        <Products products={visibleProducts} category="vegetables"/>
                      }
                </tbody>
            </table>

        </div>
        </>
    );
}
