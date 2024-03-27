
import images1 from './images/pic.png';
import project2 from './images/project2.png';
import project3 from './images/project3.png';
import project4 from './images/project4.png';
import project5 from './images/project5.png';
import project6 from './images/project6.png';

export default function About() {
  
  return (
    <div>
      <h1>Portfolio</h1>
       <h3><a href="https://eguerreroxx.github.io/PokeGIF">Project 1</a></h3>
      <div className="imageHolder">
       <img src={images1} alt="pic1" />
        
      
       <h3><a href="https://ancient-savannah-15473-038527b99940.herokuapp.com/">Project 2</a></h3>
       <img src={project2} alt="project2" />
       <h3><a href=" https://sirysiu.github.io/code-quiz/">Project 3</a> </h3>
       <img src={project3} alt="project3" />
       <h3><a href="https://sirysiu.github.io/java-password-regenerator/">Project 4</a> </h3>
       <img src={project4} alt="project4" />
       <h3><a href="https://sirysiu.github.io/daily-planner/">Project 5 </a></h3>
       <img src={project5} alt="project5" />
       <h3><a href="https://sirysiu.github.io/professional-portfolio/">Project 6 </a></h3>
       <img src={project6} alt="project6" />
      </div>
      
    </div>
  );
}
