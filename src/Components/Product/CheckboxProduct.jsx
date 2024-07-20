import InputLabel from "../../Components/Forms/InputLabel";
import Checkbox from "../../Components/Forms/Checkbox";

export default function CheckboxProduct({ checked, onCheck }) {
    return (
        <div className="form-check mt-3 mb-3">
            <Checkbox
                className=""
                name="checked"
                id="checked"
                checked={checked}
                onChange={(e) => onCheck(e.target.checked)}
            />
            <InputLabel
                htmlFor="checked"
                className="form-check-label"
                label="N'afficher que les produits en stock"
            />
        </div>
    );
}
