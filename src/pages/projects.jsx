

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

function ProjectCard({ title, description, tech, link }) {
  return (
    <div className="card">
      <h3>{title}</h3>
      <p>{description}</p>
      <p className="tech-stack">{tech}</p>
      {link && <a href={link} target="_blank" rel="noopener noreferrer">View Project →</a>}
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
          />

        </Page>

        
      );
    }