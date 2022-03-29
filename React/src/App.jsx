import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CreateFile from './CreateFile';
import CreateFolder from './CreateFolder';
import FolderContents from './FolderContents';
import ModifyFile from './ModifyFile';

function App() {
    return (
        <div className="App">
            <CreateFile />
            <CreateFolder />
            <FolderContents />
            <ModifyFile />
        </div>
    );
}
export default App;
