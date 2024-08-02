import NavBar  from '../../Components/Nav/NavBar';
import { useState, useEffect } from "react";
import Title from '../../Components/Title';
import InputLabel from "../../Components/Forms/InputLabel";
import Input from "../../Components/Forms/Input";
import Select from "../../Components/Forms/Select";
import { useNavigate  } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { categoryList } from '../../redux/category/categoryAction'
import axiosBaseURL from '../../api/axios';




export default function Index() {

 
  let navigate = useNavigate();
  const dispatch = useDispatch();

  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const [stocked, setStocked] = useState(null)
  const [category, setCategory] = useState([])
  const [categories, setCategories] = useState([])

 
  useEffect(() => {
  
        dispatch(categoryList()).then((result) => {
          console.log("result", result.payload)
          if (result.payload) {
              setCategories(result.payload)

          } else {
            navigate('/login')
          }
      })
    
  }, [])

  const handleSubmit = (event) => {
    event.preventDefault();

    const product = {
        name: name,
        price: price,
        category: category,
        stocked: stocked,  
    };

    // JSON.stringify(user) séréalisation en Symfony
    // Pas besoin en Laravel
    axiosBaseURL.post(`products`, product, {
      withCredentials: true,
    })
    
        .then(res => {
            if (res.data) {
                console.log(res.data)
                return navigate("/product")
            }
            
        }).catch(error => {
            console.log("eeeeeeeeeeeeeee", error);
        })

}



    return (
      <>
      <NavBar />
        <div className="container"  style={{ marginTop: '90px' }}>

        <Title title="Créer un produit" showTitle={true} />

        <form onSubmit={handleSubmit}>

          <div className="mb-4">
              <InputLabel
                  htmlFor="name"
                  className="form-label"
                  label="Nom du produit"
              />
              <Input
                  className="form-control form-control-md"
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Nom du produit" 
                  value={name}
                  // onChange={setTitle}
                  onChange={(e) => setName(e.target.value)}
                  required

              />
          </div>
          <div className="mb-4">
              <InputLabel
                  htmlFor="price"
                  className="form-label"
                  label="Prix"
              />
              <Input
                  className="form-control form-control-md"
                  type="text"
                  name="price"
                  id="price"
                  placeholder="Prix" 
                  value={price}
                  // onChange={setTitle}
                  onChange={(e) => setPrice(e.target.value)}
                  required
              />
          </div>
          <div className="mb-4">
              <InputLabel
                htmlFor="category"
                className="form-label"
                label="Categorie"
              />
              <Select 
                className="form-select" 
                name='category' 
                defaultValue="null" 
                label="Choisir une categorie"
                onChange={(e) => setCategory(e.target.value)}
                  items={categories.map((category) => (
                    <option value={category.slug} key={category.slug}>{category.label}</option>
                    
                ))}
                
                required='required'
              />
          </div>
          <div 
            className="mb-4"  
            onChange={(e) => setStocked(e.target.value)}
            
            >
            <input className="form-check-input" type="radio" value={false} name="stocked" required/> Non
            <input className="form-check-input" type="radio" value={true} name="stocked" /> Oui
          </div>

              <div className="d-flex justify-content-center">
                  <button
                      type="submit"
                      className="btn btn-success btn-block btn-lg gradient-custom-4 text-body"
                  >
                      Valider
                  </button>
              </div>
          </form>

       

        </div>
        </>
    );
}
