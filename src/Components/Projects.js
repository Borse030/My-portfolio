import React from 'react'
import { NavLink } from 'react-router-dom'
import Project1 from "./Images/Project1.png";
import Project2 from "./Images/Project2.png";
import Project3 from "./Images/Project3.png";
import Project4 from "./Images/Project4.png";
import Project5 from "./Images/Project5.png";
import Project6 from "./Images/Project6.png";


const Projects = () => {
  return (
    <div className='project-page'>
<div className='project-images'>
<h1>Projects</h1>

<div className='one'>
<NavLink to="https://borse030.github.io/Budget-Application/">
<img className="imgs" src={Project1} alt="project"/><h3>Budget-Application</h3>
</NavLink>

<NavLink to="https://movie-search-appl.netlify.app/">
<img className="imgs" src={Project2} alt="project"/><h3>Movie-Search-App</h3>
</NavLink>


<NavLink to="https://samplewebsit.netlify.app/">
<img className="imgs" src={Project3} alt="project"/><h3>Sample-Website</h3>
</NavLink></div>

<div className='two'>
<NavLink to="https://borse030.github.io/Currency-convertor/">
<img className="imgs" src={Project4} alt="project"/><h3>Currency-converter</h3>
</NavLink>


<NavLink to="https://borse030.github.io/Tip-calculator/">
<img className="imgs" src={Project5} alt="project"/><h3>Tip-Calculater</h3>
</NavLink>


<NavLink to="https://borse030.github.io/Photography-site/">
<img className="imgs" src={Project6} alt="project"/><h3>Photography-site</h3>
</NavLink>
</div>

</div>
<div className='git'>
<NavLink to="https://github.com/Borse030">
<button>Github</button>
</NavLink>

</div>
    </div>
  )
}

export default Projects
