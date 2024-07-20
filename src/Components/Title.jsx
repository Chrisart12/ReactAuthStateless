
function Title({title, showTitle}) {

    return (
        <>
            { showTitle ? <h1 id='title' className='title' style={{ color: 'red' }}>{ title }</h1> : <h1>Titre par défaut</h1>}
        </>
    )
    
}


export default Title