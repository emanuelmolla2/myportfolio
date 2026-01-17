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

export default function About(){
    return (
        <Page title="about me">
          <p>
            I'm Emanuel Molla, a biomedical engineering student at Columbia University with a passion for using technology to address healthcare inequities. Growing up, I witnessed firsthand how access to quality healthcare can vary dramatically depending on where you live and what resources you have available.
          </p>
          <p>
            This experience sparked my interest in computational methods and data science as tools for understanding and reducing these disparities. I believe that engineering should be about more than just innovation—it should be about creating solutions that work for everyone, especially those who need them most.
          </p>
          <p>
            When I'm not coding or studying, you can find me exploring New York City, reading about the intersection of technology and social justice, or working on side projects that combine my interests in medicine, engineering, and equity.
          </p>
          <p>
            I'm always excited to connect with others who are passionate about using their technical skills for social good. Feel free to reach out!
          </p>
        </Page>
      );
    }