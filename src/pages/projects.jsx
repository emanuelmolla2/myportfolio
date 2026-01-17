import projectImage2 from '../assets/IMG_4080.jpeg';
import projectImagesvg2 from '../assets/IMG_0541.JPG';
import projectImagesvg3 from '../assets/IMG_0543-modified.JPG';
import projectImagesvg from '../assets/IMG_0542.JPG';
import projectImagesvg4 from '../assets/IMG_0556.jpeg';

function Page({ title, children }) {
  return (
    <div className="page">
      <h1 className="page-title">{title}</h1>
      <div className="content">
        {children}
      </div>
    </div>
  );
}

function ProjectCard({ title, description, tech, link, images }) {  // Note: 'images' is now an array
  return (
    <div className="card">
      <h3>{title}</h3>
      
      
      
      <p>{description}</p>
      <p className="tech-stack">{tech}</p>
      {link && <a href={link} target="_blank" rel="noopener noreferrer">View Project →</a>}
      {/* Image row */}
      <div style={{ display: 'flex', gap: '12px', marginTop: '16px' }}>
        {images && images.map((img, index) => (
          <img 
            key={index}
            className='project-images' 
            src={img} 
            alt={`${title} ${index + 1}`} 
            style={{ width: '20%', borderRadius: '4px', objectFit: 'cover' }} 
          />
        ))}
      </div>
    </div>
  );
}

function ProjectCard_new({ title, description, tech}) {
  return (
    <div className="card">
      <h3>{title}</h3>
      <p>{description}</p>
      <p className="tech-stack">{tech}</p>
      <p>keep exploring!</p>
    </div>
  );
}

export default function Projects(){
    return (
        
        <Page title="projects">
          <ProjectCard 
            title="svg metal 3d printer design generator"
            description= "developed a web application that converted 2d design sketches into toolpath data for metal additive printing, streamlining the prototyping process."
            tech="python, svg image processing"
            link="#"
            images={[projectImagesvg, projectImagesvg2, projectImagesvg3, projectImagesvg4]}
          />
         
          <ProjectCard_new 
            title="this website"
            description=" while participating in JADE, i designed and developed this website to serve as my personal portfolio. hope you're enjoying it thus far!"
            tech="html, css, react.js"
        
          />
          <ProjectCard 
            title="childhood tremor reduction glove"
            description="we're creating a wearable glove for a patient at *insert hospital* that uses vibrating frequencies to reduce the tremor frequency in pediatric patients."
            tech="arduino, python, wave physics stuff"
            link="#"
            images={[projectImage2]}
          />

        </Page>

        
      );
    }