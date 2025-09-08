import React from "react";

const Eligibility = () => {
  return (
    <div className="min-h-screen pt-16 font-display">
      <section className="py-24 bg-gradient-hero">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-accent bg-clip-text text-transparent">
              Eligibility Rules
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Understand the key eligibility requirements for NCAA, CHL, and professional hockey.
          </p>
        </div>
      </section>

      {/* Content will be added here */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-8 text-center">NCAA Eligibility</h2>
          <p className="text-lg text-muted-foreground mb-8">
            To compete in NCAA hockey, you must meet specific academic and amateurism standards. Here's what you need to know:
          </p>
          <ul className="list-disc list-inside mb-8">
            <li className="mb-2">
              <span className="font-semibold">Academic Requirements:</span> Complete a minimum number of core courses in high school and achieve a qualifying GPA and SAT/ACT score.
            </li>
            <li className="mb-2">
              <span className="font-semibold">Amateurism Standards:</span> You must not have accepted payment or benefits that exceed actual and necessary expenses related to your participation in hockey.
            </li>
            <li className="mb-2">
              <span className="font-semibold">NCAA Clearinghouse:</span> Register with the NCAA Eligibility Center and ensure your amateurism status is certified.
            </li>
          </ul>
          <p className="text-lg text-muted-foreground mb-8">
            For detailed information on NCAA eligibility requirements, visit the <a href="https://www.ncaa.org/" className="text-primary hover:underline">NCAA website</a>.
          </p>

          <h2 className="text-4xl font-bold mb-8 text-center">CHL Eligibility</h2>
          <p className="text-lg text-muted-foreground mb-8">
            The Canadian Hockey League (CHL) has its own set of eligibility rules. Key points include:
          </p>
          <ul className="list-disc list-inside mb-8">
            <li className="mb-2">
              <span className="font-semibold">Age Limit:</span> Players must be between the ages of 16 and 20 to compete in the CHL.
            </li>
            <li className="mb-2">
              <span className="font-semibold">Amateur Status:</span> Players must maintain their amateur status and not have signed a professional contract.
            </li>
            <li className="mb-2">
              <span className="font-semibold">Education:</span> CHL players are required to attend school and maintain academic eligibility.
            </li>
          </ul>
          <p className="text-lg text-muted-foreground mb-8">
            For more information on CHL eligibility, visit the <a href="https://chl.ca/" className="text-primary hover:underline">CHL website</a>.
          </p>

          <h2 className="text-4xl font-bold mb-8 text-center">Professional Hockey Eligibility</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Eligibility for professional hockey leagues varies. Generally, you must:
          </p>
          <ul className="list-disc list-inside mb-8">
            <li className="mb-2">
              <span className="font-semibold">Be of Legal Age:</span> Must be of legal age to sign a contract (usually 18 or older).
            </li>
            <li className="mb-2">
              <span className="font-semibold">Have Amateur Status:</span> Cannot have signed a professional contract or received benefits that would compromise your amateur status.
            </li>
            <li className="mb-2">
              <span className="font-semibold">Meet League-Specific Requirements:</span> Each league may have additional eligibility criteria.
            </li>
          </ul>
          <p className="text-lg text-muted-foreground mb-8">
            Check with the specific league for detailed eligibility requirements.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Eligibility;