import InputRange from "../Forms/InputRange";
import InputLabel from "../../Components/Forms/InputLabel";


export default function PriceProduct({className= '', price, onInputPrice}) {
  return (
    <div className="col-12">
            <InputLabel
                htmlFor="price"
                className="form-label"
                label="Prix entre 0 et 100"
            />
            <InputRange
                className={`custom-range ` + className}
                type="range"
                name="price"
                id="price"
                min="0" 
                max='100'
                value={price}
                onChange={(e) => onInputPrice(e.target.value)}
            />
            
        </div>
  )
}
