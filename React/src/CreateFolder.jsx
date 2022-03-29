import axios from 'axios';

const CreateFolder = () => {
    const folder = (event) => {
        event.preventDefault();
        const folderName = event.target.folderName.value;
        axios
            .get(`/createfolder/${folderName}`)
            .then((res) => {
                console.log(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    };
    return (
        <div className="container-fluid text-center">
            <h1 className="mt-3">Folder Management</h1>
            <form className="form-group" onSubmit={folder}>
                <b className="subHeading">Folder Name : </b>
                <input
                    className="form-control d-inline-flex w-50"
                    type="text"
                    name="folderName"
                    placeholder="Enter Folder Name"
                />
                <br />
                <button className="btn btn-outline-primary">
                    <b>Create Folder</b>
                </button>
                <br />
            </form>
        </div>
    );
};
export default CreateFolder;
