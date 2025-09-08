import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { Calculator, Globe, Info, DollarSign, Users, AlertTriangle } from "lucide-react";
import Salary from "../assets/WAGES.jpeg"
import Play from "../assets/expect to play.jpeg"

const Europe = () => {
  const [amount, setAmount] = useState("");
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("EUR");
  const [convertedAmount, setConvertedAmount] = useState("");

  const exchangeRates = {
    USD: { EUR: 0.85, SEK: 10.5, CHF: 0.92, CZK: 23.5 },
    EUR: { USD: 1.18, SEK: 12.3, CHF: 1.08, CZK: 27.6 },
    SEK: { USD: 0.095, EUR: 0.081, CHF: 0.088, CZK: 2.24 },
    CHF: { USD: 1.09, EUR: 0.93, SEK: 11.4, CZK: 25.6 },
    CZK: { USD: 0.043, EUR: 0.036, SEK: 0.45, CHF: 0.039 }
  };

  const handleConvert = () => {
    if (!amount || fromCurrency === toCurrency) {
      setConvertedAmount(amount);
      return;
    }

    const rate = exchangeRates[fromCurrency]?.[toCurrency] || 1;
    const result = (parseFloat(amount) * rate).toFixed(2);
    setConvertedAmount(result);
  };

  const salaryRanges = [
    { league: "Swiss National League (NLA)", range: "$80,000 - $300,000 USD" },
    { league: "Swedish Hockey League (SHL)", range: "$60,000 - $250,000 USD" },
    { league: "Finnish Liiga", range: "$50,000 - $200,000 USD" },
    { league: "Czech Extraliga", range: "$40,000 - $150,000 USD" },
    { league: "German DEL", range: "$35,000 - $120,000 USD" },
    { league: "Austrian EBEL", range: "$25,000 - $80,000 USD" }
  ];

  const culturalTips = [
    {
      country: "Switzerland",
      tips: ["Learn basic German/French", "Punctuality is crucial", "Respect for personal space", "Banking culture important"]
    },
    {
      country: "Sweden", 
      tips: ["'Lagom' philosophy (balance)", "Environmental consciousness", "Work-life balance valued", "English widely spoken"]
    },
    {
      country: "Finland",
      tips: ["Sauna culture important", "Direct communication style", "Nature and outdoors valued", "Personal space respected"]
    },
    {
      country: "Czech Republic",
      tips: ["Rich hockey tradition", "Beer culture prevalent", "Learn basic Czech phrases", "Historical significance appreciated"]
    }
  ];

  // Q&A Toggle State for Culture Section
  const [openQA, setOpenQA] = useState(null);
  const qaList = [
    {
      question: "What are accommodations like",
      answer: "This is a hard question to answer as some countries have very good apartments (however smaller than North American standards).   Please speak to your agent if you feel where you are living is not up to standards."
    },
    {
      question: "Payment Schedule",
      answer: "Normally most teams pay every 30 days.   At times payment can be delayed so be prepared to have some additional space on your credit card.  Overall in Europe and parts of Russia players are generally paid on time."
    },
    {
      question: "Language Barrier",
      answer: "Most of Western Europe you will find people can either speak English or have a very good understanding.   Eastern Europe and Russia you will find English is not overall spoken therefore you should have language translation apps on your phone to assist you in restaurants and travel."
    },
    {
      question: "Clothing / Practical Materials",
      answer: "Most of Europe is overall warmer than say Winnipeg or Edmonton or Minneapolis.   Some parts of Russia are as cold as parts of Canada and the USA.  Therefore come prepared with winter clothing."
    },
    {
      question: "Transportation",
      answer: "Most train systems are vastly superior to North America (Amtrak).   Also most ride sharing services are available in most Euro cities."
    },
    {
      question: "Local Customs",
      answer: "In Russia if you refuse food or drink you will offend people very quickly.  Politics is not a normal form of conversation as we see it in North America."
    },
    {
      question: "International School",
      answer: "You will have to Google this for the city you could be playing in.   Major cities in Europe do have International schools."
    },
    {
      question: "Accepted Currency in Russia",
      answer: "Rubles are the only form of currency accepted in Russia.   To exchange EURO – CDN – USD you can do so at most major airports."
    },
    {
      question: "Passport in Russia",
      answer: "You should always carry your original passport with you in the case of a random stop and check."
    },
    {
      question: "Danger Level",
      answer: "Personally I have been to most hockey countries in Europe – Asia and Russia and have had zero issues.   But do basics and leave important documents and money etc. in a safe in your hotel or apartment. Theft can occur in the metro or in big crowds.   Once again use some common sense when you are travelling abroad. "
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-32 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-premium opacity-10"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <h1 className="text-6xl md:text-8xl font-display font-bold mb-8 tracking-tight">
            <span className="bg-gradient-premium bg-clip-text text-transparent">
              Play Hockey in Europe
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto font-body font-medium leading-relaxed">
            Explore professional hockey opportunities across European leagues. 
            From Switzerland to Sweden, we'll guide your European hockey journey.
          </p>
        </div>
      </section>
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          {/* Content Tabs */}
          <section className="bg-background">
            <div className="container mx-auto px-6">
              <Tabs defaultValue="salaries" className="w-full">
                <TabsList className="grid w-full grid-cols-7 max-w-4xl mx-auto mb-12">
                  <TabsTrigger value="salaries">Salaries</TabsTrigger>
                  <TabsTrigger value="taxes">Taxes</TabsTrigger>
                  <TabsTrigger value="culture">Culture</TabsTrigger>
                  <TabsTrigger value="commision">Commision</TabsTrigger>
                  <TabsTrigger value="play">Play</TabsTrigger>
                  <TabsTrigger value="converter">Currency</TabsTrigger>
                  <TabsTrigger value="myths">Urban Legends</TabsTrigger>
                </TabsList>

                <TabsContent value="salaries">
                  <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-navy-deep">Expected Salaries by League</h2>
                    <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto font-body font-medium">
                      1.6 million in the KHL is for a limited amount of players 200,000 in the Asia League is for only one or two players 275,000 in the DEL1 is also for a select few players
                    </p>
                  </div>

                  <div className="flex flex-col items-center mb-10">
                    <img
                      src={Salary}
                      alt="European Hockey Salary Ranges"
                      className="rounded-lg shadow-lg max-w-full h-auto mb-4 border border-border"
                      style={{ maxWidth: 700 }}
                    />
                    <span className="text-muted-foreground text-sm font-body">Sample salary ranges by league (for illustration only)</span>
                  </div>

                  {/* <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                    {salaryRanges.map((league, index) => (
                      <Card key={index} className="bg-gradient-card border-border/50">
                        <CardHeader>
                          <CardTitle className="text-lg">{league.league}</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="flex items-center space-x-2">
                            <DollarSign className="h-5 w-5 text-primary" />
                            <span className="text-xl font-semibold text-primary">{league.range}</span>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div> */}

                  <div className="text-center mt-12 bg-gradient-card rounded-lg p-8 max-w-4xl mx-auto">
                    <Info className="h-12 w-12 text-primary mx-auto mb-4" />
                    <h3 className="text-2xl font-display font-bold mb-4 text-navy-deep">Additional Compensation</h3>
                    <p className="text-muted-foreground font-body leading-relaxed mt-4">
                      Are you interested in playing hockey in Europe? If you are looking for an exciting opportunity for travel and want to keep playing the sport that you love, contact 2112 Hockey Agency. Our European hockey agency is looking for great players that want to try branching out into the European hockey scene.
                      <br /><br />
                      Many different opportunities exist for hockey players that want to play in Europe, but you may not be able to find them alone.
                      <br /><br />
                      <b>Our Many Services</b><br />
                      Several different aspects need to be handled in order to play for a European hockey team. Some of the services that our European hockey recruiting agency can assist you with include:
                      <ul className="list-disc ml-6 mt-2">
                        <li>Player placement services. We want to ensure that you play for a team that will match your skillset and will help you grow as a player. With our extensive knowledge of European hockey teams, we can help you find the right team for you.</li>
                        <li>Marketing. How do European teams learn that you are a great match for them without proper marketing? Our team works hard to get your name out there.</li>
                        <li>Immigration assistance. Each country has its own set of immigration laws and necessary paperwork. 2112 Hockey Agency can assist you with all of the proper legal paperwork.</li>
                        <li>Financial recommendations. Hockey gear and equipment aren’t cheap—not to mention the cost of living. Our experienced team can help you with financial recommendations to prepare you for your life in Europe.</li>
                      </ul>
                    </p>
                  </div>

                  <section className="py-24">
                    <div className="container mx-auto px-6 text-center">
                      <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-navy-deep">Ready to Advance Your Career?</h2>
                      <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto font-body font-medium">
                        Let our experienced team guide you through every step of your hockey journey
                      </p>
                      <div className="flex flex-col sm:flex-row gap-6 justify-center">
                        <Button size="lg" className="font-body font-semibold px-10 py-4 text-lg" asChild>
                          <a href="https://college-hockey-family-advisor.appointedd.com/app/600d297a4bd55d1ee6392262" target="_blank" rel="noopener noreferrer">
                            Book Free Consultation
                          </a>
                        </Button>
                        <Button variant="outline" size="lg" className="font-body font-semibold px-10 py-4 text-lg" asChild>
                          <a href="/contact">
                            Contact Our Team
                          </a>
                        </Button>
                      </div>
                    </div>
                  </section>
                </TabsContent>

                <TabsContent value="taxes">
                  <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-navy-deep">Tax Information by Country</h2>
                    <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto font-body font-medium">
                      Understanding tax implications is crucial for financial planning in European leagues.
                    </p>
                  </div>

                  <div className="max-w-4xl mx-auto text-left space-y-6 bg-gradient-card rounded-lg p-8 mb-12">
                    <h3 className="text-2xl font-bold mb-2">Net vs Gross Salary</h3>
                    <ul className="list-disc ml-6 mb-4">
                      <li>
                        <strong>No such thing as "tax free":</strong> All income is taxed, but how it's reported differs.
                      </li>
                      <li>
                        <strong>North America:</strong> Contracts and income are reported in <b>gross dollars</b> (before taxes).
                      </li>
                      <li>
                        <strong>Europe &amp; Asia:</strong> Contracts are reported in <b>net dollars</b> (after taxes, pensions, and agent fees are paid by the team).
                      </li>
                      <li>
                        Example: A $500,000 contract in North America is before taxes; in Europe/Asia, $500,000 is what you actually receive.
                      </li>
                    </ul>

                    <h3 className="text-2xl font-bold mb-2">Reporting Foreign Income</h3>
                    <ul className="list-disc ml-6 mb-4">
                      <li>
                        <strong>U.S. (citizenship-based):</strong> Must report all worldwide income, even if earned abroad.
                      </li>
                      <li>
                        <strong>Canada (residency-based):</strong> Must report all worldwide income if you are a Canadian resident.
                      </li>
                      <li>
                        You can deduct taxes, pension, and agent fees paid abroad, which may offset your federal tax obligation.
                      </li>
                    </ul>

                    <h3 className="text-2xl font-bold mb-2">Tax Liability for North American Athletes</h3>
                    <ul className="list-disc ml-6 mb-4">
                      <li>
                        <strong>Canada:</strong>
                        <ul className="list-disc ml-6">
                          <li>Federal and provincial taxes can combine to nearly 50%.</li>
                          <li>Foreign tax credits may not fully offset your Canadian tax obligation.</li>
                        </ul>
                      </li>
                      <li>
                        <strong>U.S.:</strong>
                        <ul className="list-disc ml-6">
                          <li>State income tax: No foreign tax credit on state returns; some states have rates up to 11%.</li>
                          <li>Alternative Minimum Tax (AMT): May limit your ability to claim all foreign tax credits.</li>
                          <li>Self-employment tax: U.S. may try to apply a 15.3% tax if your foreign employer does not withhold Social Security/Medicare.</li>
                        </ul>
                      </li>
                    </ul>

                    <h3 className="text-2xl font-bold mb-2">How to Limit Your Tax Liability</h3>
                    <ul className="list-disc ml-6 mb-4">
                      <li>
                        <strong>Canadians:</strong> Try to establish residency in your team's country to avoid Canadian worldwide income tax. Understand Canadian residency rules.
                      </li>
                      <li>
                        <strong>Americans:</strong> U.S. taxes are based on citizenship, so residency abroad does not exempt you from U.S. taxes. However, the foreign tax credit usually eliminates double taxation (except for AMT cases).
                      </li>
                      <li>
                        Consider establishing residency in one of the nine U.S. states with no state income tax.
                      </li>
                      <li>
                        The U.S. has Totalization Agreements with 24 countries. If you work in one, you may avoid U.S. self-employment tax by getting a certificate of coverage from your foreign employer.
                      </li>
                    </ul>
                  </div>
                </TabsContent>

                <TabsContent value="culture">
                  <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-navy-deep">Cultural Differences</h2>
                    <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto font-body font-medium">
                      Understanding local cultures enhances your European hockey experience
                    </p>
                  </div>
                  {/* <div className="grid md:grid-cols-2 gap-8">
                    {culturalTips.map((country, index) => (
                      <Card key={index} className="bg-gradient-card border-border/50">
                        <CardHeader>
                          <CardTitle className="text-xl flex items-center space-x-2">
                            <Globe className="h-5 w-5 text-primary" />
                            <span>{country.country}</span>
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <ul className="space-y-2">
                            {country.tips.map((tip, tipIndex) => (
                              <li key={tipIndex} className="flex items-center space-x-2">
                                <div className="w-2 h-2 bg-primary rounded-full"></div>
                                <span className="text-sm text-muted-foreground">{tip}</span>
                              </li>
                            ))}
                          </ul>
                        </CardContent>
                      </Card>
                    ))}
                  </div> */}

                  {/* Q&A Toggle Section */}
                  <div className="max-w-[56rem] mx-auto mt-12">
                    <div className="space-y-4 font-body">
                      {qaList.map((qa, idx) => (
                        <div
                          key={idx}
                          className={`rounded-xl bg-card border border-border shadow-card transition-shadow duration-200 ${
                            openQA === idx ? "shadow-lg border-primary" : ""
                          }`}
                          style={{ borderLeftWidth: "5px", borderLeftColor: openQA === idx ? "hsl(var(--primary))" : "hsl(var(--border))" }}
                        >
                          <button
                            className={`w-full flex justify-between items-center px-6 py-4 text-left transition-colors duration-200 focus:outline-none
                              ${openQA === idx ? "bg-primary/5" : "hover:bg-primary/5"}
                            `}
                            onClick={() => setOpenQA(openQA === idx ? null : idx)}
                            aria-expanded={openQA === idx}
                          >
                            <span className={`font-semibold text-lg text-primary`}>
                              {qa.question}
                            </span>
                            <svg
                              className={`w-6 h-6 ml-2 transition-transform duration-200 ${openQA === idx ? "rotate-180 text-primary" : "text-muted-primary"}`}
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                          </button>
                          <div
                            className={`text-muted-foreground text-base transition-all duration-300 ease-in-out overflow-hidden
                              ${openQA === idx ? "px-6 py-3 max-h-40 opacity-100" : "max-h-0 opacity-0"}
                            `}
                            style={{ transitionProperty: "max-height,opacity" }}
                          >
                            {qa.answer}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* <div className="text-center mt-12">
                    <Button size="lg" asChild>
                      <a href="https://2112hockeyagency.com/europe-faq/" target="_blank" rel="noopener noreferrer">
                        Read Full Cultural FAQ
                      </a>
                    </Button>
                  </div> */}
                </TabsContent>

                <TabsContent value="commision">
                </TabsContent>
                <TabsContent value="play">
                  <div className="flex flex-col items-center mb-10">
                    <img
                      src={Play}
                      alt="Expect to Play"
                      className="rounded-lg shadow-lg max-w-full h-auto mb-4 border border-border"
                      style={{ maxWidth: 700 }}
                    />
                    <span className="text-muted-foreground text-sm font-body">Expect to play</span>
                  </div>
                </TabsContent>

                <TabsContent value="converter">
                  <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-navy-deep">Currency Converter</h2>
                    <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto font-body font-medium">
                      Convert between major European currencies and USD
                    </p>
                  </div>

                  <Card className="bg-gradient-card border-border/50 max-w-2xl mx-auto">
                    <CardHeader>
                      <CardTitle className="text-2xl font-display text-center flex items-center justify-center space-x-2">
                        <Calculator className="h-6 w-6 text-primary" />
                        <span>Currency Calculator</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6 font-body">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="amount">Amount</Label>
                          <Input
                            id="amount"
                            type="number"
                            placeholder="1000"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="from">From</Label>
                          <Select value={fromCurrency} onValueChange={setFromCurrency}>
                            <SelectTrigger>
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="USD">USD</SelectItem>
                              <SelectItem value="EUR">EUR</SelectItem>
                              <SelectItem value="SEK">SEK</SelectItem>
                              <SelectItem value="CHF">CHF</SelectItem>
                              <SelectItem value="CZK">CZK</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="to">To</Label>
                          <Select value={toCurrency} onValueChange={setToCurrency}>
                            <SelectTrigger>
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="USD">USD</SelectItem>
                              <SelectItem value="EUR">EUR</SelectItem>
                              <SelectItem value="SEK">SEK</SelectItem>
                              <SelectItem value="CHF">CHF</SelectItem>
                              <SelectItem value="CZK">CZK</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="result">Result</Label>
                          <Input
                            id="result"
                            value={convertedAmount ? `${convertedAmount} ${toCurrency}` : ""}
                            readOnly
                            placeholder="Converted amount"
                          />
                        </div>
                      </div>

                      <Button onClick={handleConvert} className="w-full" size="lg">
                        Convert Currency
                      </Button>

                      <p className="text-xs text-muted-foreground text-center">
                        * Exchange rates are estimates. Use official financial sources for actual transactions.
                      </p>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="myths">
                  <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-navy-deep">Urban Legends vs Reality</h2>
                    <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto font-body font-medium">
                      Separating fact from fiction about playing hockey in Europe
                    </p>
                  </div>

                  <div className="space-y-8 max-w-4xl mx-auto">
                    {/* <Card className="bg-gradient-card border-border/50">
                      <CardHeader>
                        <CardTitle className="text-xl flex items-center space-x-2">
                          <AlertTriangle className="h-5 w-5 text-accent" />
                          <span>Common Myths</span>
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="border-l-4 border-accent pl-4">
                          <h4 className="font-semibold mb-2">"Teams don't pay on time"</h4>
                          <p className="text-muted-foreground text-sm">
                            Most European leagues have strict financial regulations. Payment issues are rare 
                            in established leagues like NLA, SHL, and DEL.
                          </p>
                        </div>
                        <div className="border-l-4 border-accent pl-4">
                          <h4 className="font-semibold mb-2">"Living conditions are poor"</h4>
                          <p className="text-muted-foreground text-sm">
                            European countries generally have high living standards. Many teams provide 
                            furnished apartments and comprehensive support.
                          </p>
                        </div>
                        <div className="border-l-4 border-accent pl-4">
                          <h4 className="font-semibold mb-2">"Language barriers are insurmountable"</h4>
                          <p className="text-muted-foreground text-sm">
                            English is widely spoken in most European countries. Teams often provide 
                            language support and cultural integration assistance.
                          </p>
                        </div>
                      </CardContent>
                    </Card> */}

                    <Card className="bg-gradient-card border-border/50">
                      <CardHeader>
                        <CardTitle className="text-xl font-display flex items-center space-x-2">
                          <Users className="h-5 w-5 text-primary" />
                          <span>Our Advice</span>
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-lg text-muted-foreground font-body leading-relaxed">
                          You will hear everything from being late to get paid and terrible places to live etc.   Contact players that have been in that league and team in the past is our advice for you.   Most of the negative information you will hear is an urban legend.
                        </p>
                      </CardContent>
                    </Card>

                    <div className="text-center">
                      <Button size="lg">
                        Connect with Former Players
                      </Button>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
};

export default Europe;
