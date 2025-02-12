import styles from './ProjectCard.module.css';
import {Link} from "react-router-dom";
import {sluggify} from './../../Utils'

function ProjectCard(props) {
  const link = "/project/" + sluggify(props.name);

  let yearString = "";
  if(!props.yearEnd){
    yearString = props.yearStart.toString() + " - Current" ;
  }else if(props.yearStart === props.yearEnd){
    yearString = props.yearStart;
  }else{
    yearString = props.yearStart.toString() + " - " + props.yearEnd.toString();
  }

  return (
    <div className={styles.ProjectCard}>
        <Link to={link}>
          <div className={styles.imageContainer}>
            <div>
                <img 
                  src={props.imageURL}
                  alt={props.imageAlt}
                />
            </div>
          </div>
          <h2 className={styles.title}>{props.name}</h2>
          <p className={styles.year}>{yearString}</p>
        </Link>
        <p  className={styles.body}>{props.body}</p>
    </div>
  );
}

export default ProjectCard;
