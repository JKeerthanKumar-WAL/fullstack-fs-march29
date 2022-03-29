import axios from 'axios';

const CreateFile = () => {
    const file = (event) => {
        event.preventDefault();
        const fileName = event.target.fileName.value;
        const fileContents = event.target.fileContents.value;
        axios
            .get(`/createfile/${fileName}/${fileContents}`)
            .then((res) => {
                console.log(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    };
    return (
        <div className="container-fluid text-center">
            <h1 className="mt-3">File Management</h1>
            <form className="form-group" onSubmit={file}>
                <b className="subHeading">File Name : </b>
                <input
                    className="form-control d-inline-flex w-50"
                    type="text"
                    name="fileName"
                    placeholder="Enter File Name"
                />
                <br />
                <b className="subHeading">File Contents : </b>
                <textarea
                    className="form-control d-inline-flex w-50"
                    name="fileContents"
                />
                <br />
                <button className="btn btn-outline-primary">
                    <b>Create File</b>
                </button>
                <br />
            </form>
        </div>
    );
};
export default CreateFile;
