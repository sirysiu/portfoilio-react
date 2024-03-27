
import images2 from './images/picofme.png';

export default function Home() {
  return (
    <div>
      <h1> About Me</h1>
      <img src={images2} alt="pic2" />
      <p>
      I am Siry and this is my About Me page. First thing is I am an upcoming developer.
        I am in the UNCC Coding Bootcamp. Part time I am a nail technician. I also like to 
        go the gym where it helps me relax in someways and destress.
      </p>
      <footer>
  <p>
    <ul>
    <li><a href="https://github.com/sirysiu">Github</a></li>
    <li><a href="www.linkedin.com/in/siry-siu-98b17a298">Linkden</a></li>
    <li><a href="https://twitter.com/">Twitter</a></li>
    </ul>
  </p>
</footer>
    </div>
    
  );
}
