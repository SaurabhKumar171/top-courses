import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Filter from "./components/Filter";
import Cards from "./components/Cards";
import {filterData,apiUrl} from "./data";
import {toast} from "react-toastify";
import Spinner from "./components/Spinner";
import Error from "./components/Error";

const App = () => {

      const [courses , setCourses] = useState([]);
      const [loading ,setLoading] = useState(true);
      const [category ,setCategory] = useState(filterData[0].title);
      const [failures, setFailures] = useState(false);

     async function fetchData() {
        setLoading(true);
         try{
            let response = await fetch(apiUrl);
            let output = await response.json();

            setCourses(output.data);
            setFailures(false);
         }

         catch(error){
          toast.error('Network ka scene hai koi');
          setFailures(true);
         }
         setLoading(false);
    }

    useEffect ( () =>{
      fetchData();
    },[])

    if(failures){
       return (<Error />);
    }

  return (<div className="min-h-screen flex flex-col bg-bgDark2">
        <Navbar />
        <div className="bg-bgDark2">
         <Filter filterData={filterData} category={category} setCategory={setCategory}/>   
        </div>
        
        <div className="w-11/12 max-w-[1200px] 
        mx-auto flex flex-wrap justify-center items-center min-h-[50vh]">
           {
           
            loading ? (<Spinner />) : (<Cards courses={courses} category={category}/>)
           }
        </div>

  </div>);
};

export default App;
  