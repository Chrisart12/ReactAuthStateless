
function CGUCheckbox({checked, onCheck}) {

    // const handleCheck = () => {

    //     setChecked(!checked)
        
    //   }

    return(
        <div>
            <label htmlFor="cgu">conditions générales d'utilisation</label>
            {/* <input type="checkbox" id="cgu" name="cgu" value="Bike"></input> */}
            <input type="checkbox" name="frites" checked={checked} onChange={(e) => onCheck(e.target.checked)}/>
        </div>
    );
}

export default CGUCheckbox;
