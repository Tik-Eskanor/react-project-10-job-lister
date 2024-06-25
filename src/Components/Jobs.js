import React from "react"
import data from "../data"
import {FaAngleDoubleRight} from "react-icons/fa"


export default function Jobs()
{
  let [jobs,setJobs] = React.useState(data)

  let [value,setValues] = React.useState(0)

  let job = jobs[value]

  let duties = job.duties.map((duty,index)=>
  {
    return(
        <div key={index} className="duty">
          <span><FaAngleDoubleRight/></span> 
          <p>{duty}</p>
        </div>
  ) 
  })

  function handleCompany(index)
  {
     setValues(index)
  }

  let companies = jobs.map((job,index)=>
  {
    return(
        <button key={index} onClick={()=> handleCompany(index)} className={index == value ? "active" :""}>
          {job.company}
        </button>
  )
  })

  return (
    <main>
      <div className="container">
        <div className="content-wrapper">
          <div className="buttons">
            {companies}
          </div>
          <div className="content">
            <h1>Expe<span>rience</span></h1>     
            <h3>{job.title}</h3>
            <h4 className="company">{job.company}</h4>
            <p className="date">{job.date}</p>
            <div style={{marginTop:"1.5rem"}}>
              {duties}
            </div>
          </div>    
        </div>
      </div>
    </main>
  )
}