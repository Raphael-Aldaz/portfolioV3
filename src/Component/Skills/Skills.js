import ProgressBar from './ProgressBar/ProgressBar';
import './Skills.scss';
const progressData = [
  { language: 'HTML5-CSS3', bgcolor: 'hsl(15, 100%, 60%)', completed: 68 },
  { language: 'Javascript', bgcolor: 'hsl(200, 100%, 60%)', completed: 60 },
  { language: 'SQL', bgcolor: 'hsl(300, 100%, 60%)', completed: 50 },
  { language: 'PHP', bgcolor: 'hsl(60, 100%, 60%)', completed: 55 },
  { language: 'GIT', bgcolor: 'hsl(220, 100%, 60%)', completed: 45 },
  { language: 'REACTJS', bgcolor: 'hsl(110, 100%, 60%)', completed: 70 },
];
const Skills = () => {
  
  let progressBarStyle = 'progressbar_wrapper' 

  return (
    <div className='skillsWrapper' id='skills'>
    <h1 className='skillsTitle'>Skills</h1>
    <div className={progressBarStyle} >
    {
          progressData.map((item) => (
            <ProgressBar color={item.bgcolor} name={item.language} percent={item.completed} />
          ))
        }
    </div>
    </div>
  )
}
export default Skills