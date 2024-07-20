import NavBar  from '../../Components/Nav/NavBar';
import products from '../../data';
import Category from '../../Components/Product/Category';
import { useState } from "react";
import Products from '../../Components/Product/Products'
import Filter from '../../Components/Product/Filter'




export default function Index() {

  const [isChecked, setIsChecked] = useState(false);

  const [search, setSearch] = useState('');

  const [price, setPrice] = useState(0);


  const visibleProducts = products.filter(product => {
    if (isChecked && !product.stocked) {
        return false
    }

    if (search && !product.name.toLowerCase().includes(search.toLowerCase())) {
        return false
    }

    if (price != 0 && !(parseInt(product.price.substring(1)) <= price)) {
      return false
    }

    return true

  })

  // const [newProducts, setNewProducts] = useState(products);

  // const onlyStockedProduct = (checked) => {

  //     if (checked) {
  //         const newItem = newProducts.filter((newProduct) => {
  //           return newProduct.stocked === true; 
          
  //         });
      
  //         return setNewProducts(newItem);
        
  //     } else {
  //       return setNewProducts(products);
  //     }
  // };

  // const filterBySearch = (elt) => {

  //     const filteredProducts = products.filter((product) =>
  //       product.name.toLowerCase().includes(elt.toLowerCase())
  //     );

  //     setNewProducts(filteredProducts);
        
  // }

  // useEffect(() => {

  //   onlyStockedProduct(isChecked)

  //   // filterBySearch(search)

  // }, [isChecked])

  
  // useEffect(() => {

  //   // onlyStockedProduct(isChecked)

  //   filterBySearch(search)

  // }, [search])


    return (
      <>
      <NavBar />
        <div className="container"  style={{ marginTop: '90px' }}>

            <Filter checked={isChecked} onCheck={setIsChecked} search={search} onInputSearch={setSearch} price={price} onInputPrice={setPrice}/>

            <table className="table table-bordered table-striped">
                <thead>
                    <tr className='table-primary'>
                        <th scope="col">Nom</th>
                        <th scope="col">Prix</th>
                    </tr>
                </thead>
                
                <tbody>
                    <Category category="Fruits" />
                    <Products products={visibleProducts} category="Fruits"/>
                </tbody>
                <tbody>
                      <Category category="Végétables" />
                      <Products products={visibleProducts} category="Vegetables"/>
                </tbody>
               
            </table>
        </div>
        </>
    );
}
