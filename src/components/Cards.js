import React, { useState } from "react";
import Card from "./Card";

const Cards = (props) => {
    let courses = props.courses;
    let category =props.category;
    // console.log('print data');    
    //  console.log(courses);

    const[likedCourses, setLikedCourses] = useState([]);



    function getCourses() { 

        if(category === "All"){ 
        let allCourses =[];

        Object.values(courses).forEach( array => {
            array.forEach(courseData => {
                allCourses.push(courseData);
            })
           })
          return allCourses;
        }

        else{
            //Pass data of specific category
            return courses[category];
        }
     }
     

   return (<div className="flex flex-wrap justify-center gap-4 mb-4">
       {
         getCourses().map( (course) => (
            <Card key={course.id}
                   course={course} 
                   likedCourses={likedCourses} 
                   setLikedCourses={setLikedCourses}/>
         ))
        }
   </div>);
}

export default Cards;