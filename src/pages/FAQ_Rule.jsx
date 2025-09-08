import Rule from "../components/Rule";

const FAQ_Rule = () => {
  return (
    <div className="min-h-screen pt-16">
      {/* <section className="py-24 bg-gradient-hero">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">
            <span className="bg-gradient-accent bg-clip-text text-transparent">
              Frequently Asked Questions
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto font-body font-medium">
            Get answers to common questions about NCAA eligibility, CHL rules, 
            and our hockey advisory services.
          </p>
        </div>
      </section> */}

      <section className="py-32 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-premium opacity-10"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <h1 className="text-6xl md:text-8xl font-display font-bold mb-8 tracking-tight">
            <span className="bg-gradient-premium bg-clip-text text-transparent">
              Frequently Asked Questions
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto font-body font-medium leading-relaxed">
            Get answers to common questions about NCAA eligibility, CHL rules, 
            and our hockey advisory services.
          </p>
        </div>
      </section>

      <Rule />
    </div>
  );
};

export default FAQ_Rule;
