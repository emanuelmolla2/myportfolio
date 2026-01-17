function Page({ title, children }) {
  return (
    <div className="page">
      <h1 className="page-title">{title}</h1>
      <div className="content">
        {children}
      </div>
      <h3 className="substack-intro">to read my more personal writing, assignments i'm proud of, or stuff that never got published: check out my substack</h3>
    </div>
  );
}

function WritingCard({ title, date, excerpt, link }) {
  return (
    <div className="card">
      <h3>{title}</h3>
      <p className="date">{date}</p>
      <p>{excerpt}</p>
      {link && <a href={link}>Read More →</a>}
    </div>
  );
}
export default function Writing(){
    return (
        <Page title="writing">
          <WritingCard 
            title="The A-Blast 2023-2024 + 2024-2025 School Year Archives"
            date="December 2024"
            excerpt="Look for me in the Health Section, where I write about the intersection wellness, healthcare, health issues affecting students and the broader community"
            link="https://www.thea-blast.org/archives/"
          />
          <WritingCard 
            title="Buyer beware: The potential risks of vape shop purchases go way beyond nicotine addiction"
            date="July 31, 2023"
            excerpt="An in-depth look into the products readily available at vape shops, and the health risks they pose beyond nicotine addiction..."
            link="https://www.youthcastmediagroup.org/post/buyer-beware-the-potential-risks-of-vape-shop-purchases-go-way-beyond-nicotine-addiction"
          />
          <WritingCard 
            title="Want to be your own boss? Here’s what Gen Z should know about self-employment and start-ups"
            date="August 2024"
            excerpt="A rundown of the pros and cons of self-employment, tips for success, and resources for aspiring young entrepreneurs..."
            link="https://www.youthcastmediagroup.org/post/want-to-be-your-own-boss-here-s-what-gen-z-should-know-about-self-employment-and-start-ups"
          />
        </Page>
      );
    }

      