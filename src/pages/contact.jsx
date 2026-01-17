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

export default function Contact() {
    return (
        <Page title="contact">
          <div className="contact-info">
            <p>I'd love to hear from you! Whether you want to discuss potential collaborations, share ideas, or just say hello, feel free to reach out through any of these channels:</p>
            
            <div className="contact-links">
              <a href="mailto:em4042@columbia.edu">
                <strong>Email:</strong> em4042@columbia.edu
              </a>
              <a href="linkedin.com/in/emanuel-molla-729661325" target="_blank" rel="noopener noreferrer">
                <strong>LinkedIn:</strong> linkedin.com/in/emanuel-molla-729661325
              </a>
              <a href="https://github.com/emanuelmolla2" target="_blank" rel="noopener noreferrer">
                <strong>GitHub:</strong> github.com/emanuelmolla2
              </a>
            </div>
          </div>
        </Page>
    );
}