
export default function Category({category}) {
    return (
        <tr>
            <td colSpan="2" className='category' style={{ backgroundColor: 'aliceblue', color: 'black' }}>{category}</td>
        </tr>
    )
}
