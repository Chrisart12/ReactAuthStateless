
export default function Products({ products, category }) {
    return (
        <>
            {
                products.map((product, index) => (
                    <tr key={index}>
                    {
                        product.category === category ?
                        <>
                            <td className={product.stocked ? '' : 'warning'} >{product.name}</td>
                            <td>{ product.price}</td>
                        </>
                        :
                        null
                    }
                    </tr>
                ))
            }
        </>
    )
}
