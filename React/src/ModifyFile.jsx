import { useState } from 'react';
import axios from 'axios';

const ModifyFile = () => {
    const [fileName, setFileName] = useState();
    const [content, setContent] = useState();
    const getContent = (event) => {
        event.preventDefault();
        const filename = event.target.fileName.value;
        setFileName(filename);
        axios
            .get(`modifyfile/readfile/${filename}`)
            .then((res) => {
                setContent(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    };
    const modifyContent = () => {
        axios
            .get(`modifyfile/modifyfilecontent/${fileName}/${content}`)
            .then((res) => {
                console.log(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    };
    return (
        <div className="container-fluid text-center">
            <h1 className="mt-3">Modify File contents</h1>
            <form className="form-group" onSubmit={getContent}>
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
                    value={content}
                    onChange={(event) => setContent(event.target.value)}
                />
                <br />
                <button className="btn btn-outline-primary">
                    <b>Show Content</b>
                </button>
            </form>
            <button
                className="btn btn-outline-secondary"
                onClick={modifyContent}
            >
                <b>Modify Content</b>
            </button>
        </div>
    );
};
export default ModifyFile;
