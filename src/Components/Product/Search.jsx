import Input from "../Forms/Input";

export default function Search({ search, onInputSearch }) {
    return (
        <div className="col-4">
            <Input
                className="form-control"
                type="search"
                name="search"
                id="search"
                placeholder="Search"
                value={search}
                onChange={(e) => onInputSearch(e.target.value)}
            />
        </div>
    );
}
