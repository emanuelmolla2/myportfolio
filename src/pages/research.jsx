function ResearchCard({ title, institution, period, description }) {
  return (
    <div className="card">
      <h3>{title}</h3>
      <p className="institution">{institution} • {period}</p>
      <p>{description}</p>
    </div>
  );
}

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
export default function Research() {
    return (
        <Page title="research">
          <ResearchCard 
            title="Chan Lab"
            institution="Columbia University Medical Center"
            period="September 2024 - Present"
            description="Using machine learning and statistical methods to analyze patterns in healthcare access and outcomes across different populations. Developing predictive models to identify at-risk communities."
          />
          <ResearchCard 
            title="Wang Lab"
            institution="Columbia Biomedical Engineering Lab"
            period="May 2024 - August 2024"
            description="Worked on developing algorithms for processing physiological signals. Focused on improving accuracy of wearable health monitoring devices."
          />
          <ResearchCard 
            title="Medical Imaging and Deep Learning"
            institution="Columbia Data Science Institute"
            period="January 2024 - May 2024"
            description="Applied deep learning techniques to medical image analysis. Investigated methods to improve model fairness and reduce bias in diagnostic algorithms."
          />
        </Page>
    );
}
