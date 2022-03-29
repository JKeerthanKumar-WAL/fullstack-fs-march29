import { useEffect, useState } from 'react';
import axios from 'axios';

const FolderContents = () => {
    const [files, setFiles] = useState([]);
    const getContents = () => {
        axios
            .get(`/foldercontents/contents`)
            .then((res) => {
                setFiles(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    };
    useEffect(() => {
        getContents();
    });
    const deleteFile = (val) => {
        axios
            .get(`/foldercontents/deletefile/${val}`)
            .then((res) => {
                console.log(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    };
    return (
        <div className="container-fluid text-center">
            <h1 className="mt-3">Folder Contents</h1>
            <div className="table table-bordered table-striped text-center">
                <table className="text-center ">
                    <tr>
                        <th>S.No</th>
                        <th>File Name</th>
                        <th>Delete</th>
                    </tr>
                    {files.map((val, index) => {
                        return (
                            <tr>
                                <td>{index + 1}</td>
                                <td>{val}</td>
                                <td>
                                    <button
                                        className="btn btn-outline-danger"
                                        onClick={() => {
                                            deleteFile(val);
                                        }}
                                    >
                                        <b>Delete</b>
                                    </button>
                                </td>
                            </tr>
                        );
                    })}
                </table>
            </div>
        </div>
    );
};
export default FolderContents;
