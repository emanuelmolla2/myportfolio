import resumePDF from '../assets/emanuel_molla-resume.pdf';

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

export default function Writing(){
    return (
        <Page title="resume + info">
          <div className="resume-section">
            <h2>education</h2>
            <div className="resume-item">
              <h3>columbia university, fu foundation school for engineering & applied science</h3>
              <p>b.s. in biomedical engineering</p>
              <p className="date">expected graduation: may 2029</p>
              <p>relevant coursework: machine learning, data structures, biomedical signal processing, medical imaging, computational biology</p>
            </div>
          </div>

          <div className="resume-section">
            <h2>experience</h2>
            <div className="resume-item">
              <h3>student</h3>
              <h6>carnegie mellon computational biology pre-college program</h6>
              <p className="date">june 2024 - july 2024</p>
                <p> - conducted microbiome research by isolating and characterizing bacterial colonies from pond samples, performing DNA extraction, PCR      
                amplification of 16S rRNA genes, gel electrophoresis, and Sanger sequencing to determine bacterial taxonomy.</p>
                <p> - applied modern molecular biology techniques, including E. coli transfection with a green fluorescent protein gene and automated liquid handling using the Opentrons OT-2 robot, integrating concepts from robotics and machine learning for experimental optimization. </p>
                <p> - collaborated with a group of students to implement fundamental bioinformatics algorithms for microbiome diversity analysis, sequence alignment, genome assembly, and phylogenetic tree generation.</p>
            </div>
            <div className="resume-item">
              <h3>summer research assistant</h3>
              <p>virginia tech DREAMS lab</p>
              <p className="date">may 2024 - august 2024</p>
              <p> - developed a Python-based toolpath generator that converts 2D sketches into optimized 3D printable designs for metal additive manufacturing.</p>
                <p>- implemented algorithmic centerline extraction and SVG path generation to enable efficient, high-precision tracing by metal 3D printers </p>
                <p> - collaborated with graduate researchers to translate their experimental and design requirements into functional software features, ensuring the software aligned with their unique research objectives </p>
            </div>
          </div>
          <div className="resume-section">
            <h2>leadership</h2>
            <div className="resume-item">
              <h3>first-year representative</h3>
              <h6>columbia university first-generation advisory board</h6>
              <p className="date">october 2025-present</p>
                <p> - Represent First-Generation and Low-Income students and voice their concerns in weekly board meetings. </p>
                <p> - Coordinate with students and relevant offices to develop recommendations, propose new campus initiatives, and provide critical feedback to address disparities in university programs </p>
          </div>
          <div className="resume-item">
              <h3>health editor</h3>
              <h6>the a-blast student-run newspaper</h6>
              <p className="date">september 2023-june 2025</p>
                <p> - Oversaw the Health section, managing articles, editing submissions, and ensuring factual accuracy on coverage of public health issues, wellness, and health policy impacting the school community.</p>
                <p> - Researched and wrote articles on topics related to public health, wellness, and mental health, synthesizing information into accessible content for a broad audience. </p>
                <p> - Utilized Adobe InDesign to design the layout for the Health page. </p>
          </div>
            </div>

          <div className="resume-section">
            <h2>certifications</h2>
            <p><strong>*insert certification*</strong> *insert info about*</p>
            <p><strong>*insert certification*</strong> *insert info about*</p>
            
          </div>
          <div className="resume-section">
            <h2>skills</h2>
            <p><strong>Programming:</strong> python (proficient), html (if you beg me), css (if you beg me), golang (intermediate)</p>
            <p><strong>Languages:</strong> english (native), spanish (conversational), amharic (aspirationally)</p>
          </div>

          <div className="resume-section">
            <a href={resumePDF} download= "Emanuel-Molla_resume.pdf" className="download-link"> Download Full Resume (PDF) →</a>
          </div>
        </Page>
      );
    }