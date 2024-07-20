import Search from './Search';
import CheckboxProduct from '../../Components/Product/CheckboxProduct'
import PriceProduct from '../../Components/Product/PriceProduct'



export default function Filter({checked, onCheck, search, onInputSearch, price, onInputPrice}) {

    return (
        <>
            <Search search={search} onInputSearch={onInputSearch} />
            <CheckboxProduct checked={checked} onCheck={onCheck}  />

            <PriceProduct className="mb-4" price={price} onInputPrice={onInputPrice} />
            
        </>
    )
}
