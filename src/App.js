import React from 'react';
import './App.css';
import Posts from './components/Posts';
import AddPost from './components/AddPost';
import Friends from './components/Friends';
import { useGlobalContext } from './Context';
import 'bootstrap/dist/css/bootstrap.min.css';




function App() {

  const {loading} = useGlobalContext();

  if(loading){
    return <div className="containr d-flex justify-content-center mt-5">
                <h1 className="pt-5">Loading...</h1>      
            </div>
  }
  return (
    <>
      <div className="py-5 m-0">    
          <div className="row m-0">
              <div className="col-3">
                  <Friends></Friends>
              </div>
              <div className="col-9">
                <div className="ps-5">
                    <AddPost></AddPost>
                    <Posts/>
                </div>
              </div>
          </div>
         
      </div>
    </>
  );
}

export default App;
