
import React,{useState,useEffect} from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const CreatePost=()=>{

   const [title,setTitle]=useState("");
   const [body,setBody]=useState("");
   const navigate=useNavigate();
   //Data Inserted code

   const handleSubmit=(e)=>{
      e.preventDefault();
      axios.post("http://localhost:3001/addpost",{title,body})
      .then((res)=>{
        console.log(res.data);
        navigate("/");
      })
      .catch((err)=>{
        console.log(err);
      });
   }

   return(
      <div className="container mt-5">
         <h2>Create New Post</h2>
         <form onSubmit={handleSubmit}>
            <div className="mb-3">
               <label className="form-label">Title</label>
               <input type="text" className="form-control" value={title} onChange={(e)=>setTitle(e.target.value)} required/>
            </div>
            <div className="mb-3">
               <label className="form-label">Body</label>
               <textarea className="form-control" value={body} onChange={(e)=>setBody(e.target.value)} required></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
         </form>
      </div>
   )
}
export default CreatePost;