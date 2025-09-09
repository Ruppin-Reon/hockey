import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Quote, Star, Users, Heart } from "lucide-react";

const Testimonials = () => {
  const testimonialCategories = [
    {
      title: "Coaches Testimonials",
      icon: <Users className="h-8 w-8 text-primary" />,
      testimonials: [
        {
          quote: "“Daryl has consistently been great to deal with over the years. He has provided adequate information about his players as well as honest knowledge which as a coach that is the most you can ask for. The recruiting world is a battle and it is almost possible to be everywhere throughout the year so having players all over North America, Daryl is so valuable because of his resources and willingness to have an open mind about the correct fit for a player.” readmore",
          author: "Mike Letizia",
          position: "Head Coach / GM – Johnstown Tomahawks / NAHL",
          rating: 5
        },
        {
          quote: "“Thank you to Darryl Wolski and the team at 2112 Hockey Agency for representing some of our graduating players with MRU Cougar Hockey over the years. I believe that U-Sport Hockey serves as a bridge between junior and pro hockey. Darryl and the 2112 Hockey Agency have successfully connected our players to pro hockey opportunities in North American and/or overseas.” readmore",
          author: "Bert Gilling",
          position: "Head Coach – Mount Royal Cougars / USPORTS",
          rating: 5
        },
        {
          quote: "“Darryl has always been there to answer my calls from when I was a player and now as a coach. If I ever needed someone to advocate for me I knew he would do it, and thats why I trust him now when I call asking about his players.” readmore",
          author: "Brett Skinner",
          position: "Assistant Coach – Sioux Falls Stampede / USHL",
          rating: 5
        },
        {
          quote: "“Darryl and his group have built a solid reputation in advising young hockey players and parents over the years. He works very hard in promoting his players for the USHL draft and tryout camps. He has been an great contact for the Force organization – especially for players in Western Canada that are interested in the USHL / NCAA hockey route to professional hockey”. readmore",
          author: "Cary Eades",
          position: "President – Fargo Force / USHL",
          rating: 5
        },
        {
          quote: "“I have dealt with Darryl and 2112 Hockey Agency both as a player and, now as a coach and general manager in the USHL. One thing that has always stood out to me, beyond the tireless work ethic of the entire company, is how much this group cares about every player they represent. They are invested in the success of their clients both as people and athletes. It is easy to respect and work with a company, like 2112 Hockey Agency, that prides itself on doing things honestly and the right way.” readmore",
          author: "Cody Chupp",
          position: "Head Coach – Lincoln Stars / USHL",
          rating: 5
        },
        {
          quote: "“Darryl Wolski and his team are principled, intelligent and an extremely hard working group. I have been doing business with them for the past 12 years and they are flat out some of the best there is.” readmore",
          author: "David Wilkie",
          position: "Head Coach GM – Omaha Lancers / USHL",
          rating: 5
        },
        {
          quote: "“Dealing with Darryl has always been a good experience. Darryl’s knowledge of his players and his honesty has been a big help for me and my hockey teams over the years. His players are exactly who he says they are as players and people. Darryl is easy to reach if I have a question, if I can’t reach him, he gets back to me in a very timely manner. Darryl is one of the player agents who I trust very much! Talking to his players, they are also very happy with the work Darryl is doing and the relationship he has with his players.” readmore",
          author: "Jeff Tomlinson",
          position: "Head Coach – Lincoln Stars / USHL",
          rating: 5
        },
        {
          quote: "“I have known Darryl Wolski for over 25 years and have always had great respect for his concern for others and his ability to be honest and direct in any discussions involving players and the game of hockey. His hockey network worldwide is impressive and his knowledge of what it takes to play at various levels puts the players he represents in a positive position. His energy and enthusiasm is contagious and you always feel better after talking to him.” readmore",
          author: "Andy Murray",
          position: "Head Coach – Western Michigan / NCAA,",
          rating: 5
        }
      ]
    },
    {
      title: "Parents Testimonials",
      icon: <Heart className="h-8 w-8 text-primary" />,
      testimonials: [
        {
          quote: "“In Finland we are “in the dark” somewhat when it comes to NCAA Hockey. We met Darryl in Tampere last year and he spent several hours with us and now we have a decent idea of what is expected of us and our family. Jukka is excited to go to Chicago to attend his first USHL combine in April and we will see what happens next.” readmore",
          author: "Marcus",
          position: "Usa",
          rating: 5
        },
        {
          quote: "“Our family has been working with Darryl for the past few years and have been very pleased with the service he provides. Darryl is very professional in what he does and knows all the little ins and outs of the business. He always makes time to talk no matter how busy he is and truly looks out for the best interest of our son!.” readmore",
          author: "Doug",
          position: "Manitoba",
          rating: 5
        },
        {
          quote: "“Skeptical at first of hiring a family advisor because I thought my son would play in the USHL without any assistance. I am a single parent and without a doubt CHFA and their staff really helped me and my son. He is now on Omaha and that has been outstanding thank you.” readmore",
          author: "Tessa",
          position: "Ontario",
          rating: 5
        },
        {
          quote: "“We need someone that can communicate the good and bad news and Darryl and his guys have always done that for us over the last three years.” readmore",
          author: "Cam",
          position: "Manitoba",
          rating: 5
        },
        {
          quote: "“At first this NCAA process seemed really confusing for my wife and myself but Darryl really cleared up things in a quickly. Our son got into Maine and the rest is history so thank you guys.” readmore",
          author: "Gary",
          position: "St Cloud",
          rating: 5
        },
        {
          quote: "“Everyone in the WHL wanted my son and to figure out what route is best for Tim was beyond confusing. Two years later we are in a good position and have about 8 schools talking to us now.” readmore",
          author: "Grant",
          position: "Surrey BC",
          rating: 5
        },
        {
          quote: "“Our goal was to have our son play in the BCHL and to not play NAHL or USHL because we felt schools seemed really interested in BC. Darryl was able to get us into two camps and we were fortunate to find a home and now hoping to get a NCAA offer soon.” readmore",
          author: "Adam And Cindy",
          position: "Detroit",
          rating: 5
        },
      ]
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
              Testimonials
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto font-body font-medium leading-relaxed">
            Hear from the coaches, parents, and players who have experienced
            success through our dedicated hockey advisory services.
          </p>
        </div>
      </section>

      {/* Success Stats
      <section className="py-24 bg-gradient-subtle border-b border-border/50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="text-4xl md:text-5xl font-display font-bold bg-gradient-premium bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.number}
                </div>
                <div className="text-muted-foreground font-body font-medium tracking-wide">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Testimonials */}
      <section className="py-32 bg-background relative">
        <div className="container mx-auto px-6">
          {testimonialCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-20">
              <div className="text-center mb-20">
                <div className="flex items-center justify-center space-x-3 mb-4">
                  <div className="p-3 rounded-full bg-gradient-premium shadow-premium">
                    {React.cloneElement(category.icon, { className: "h-8 w-8 text-frost-white" })}
                  </div>
                  <h2 className="text-5xl md:text-6xl font-display font-bold text-navy-deep">{category.title}</h2>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-10">
                {category.testimonials.map((testimonial, index) => (
                  <Card key={index} className="bg-gradient-card border-border/50 hover:shadow-premium transition-all duration-500 hover:-translate-y-2 group">
                    <CardHeader className="pb-6">
                      <div className="flex items-start justify-between mb-6 space-x-6">
                        <div className="p-2 rounded-full bg-gradient-premium/10 group-hover:bg-gradient-premium/20 transition-colors">
                          <Quote className="h-6 w-6 text-primary" />
                        </div>
                        <div className="flex space-x-1">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 fill-hockey-gold text-hockey-gold" />
                          ))}
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <blockquote className="font-body text-steel-blue leading-relaxed mb-8 text-lg italic">
                        {testimonial.quote}
                      </blockquote>
                      <div>
                        <div className="font-display font-semibold text-navy-deep text-lg">{testimonial.author}</div>
                        <Badge variant="secondary" className="text-sm font-body font-medium py-2">
                          {testimonial.position}
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* External Testimonials Link */}
      {/* <section className="py-24 bg-gradient-premium relative overflow-hidden">
        <div className="absolute inset-0 bg-navy-deep/80"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <h3 className="text-4xl md:text-5xl font-display font-bold mb-6 text-frost-white">Discover More Success Stories</h3>
          <p className="text-frost-white/90 mb-8 max-w-2xl mx-auto text-xl font-body leading-relaxed">
            Explore hundreds of additional testimonials from coaches and parents who've witnessed transformation
          </p>
          <Button size="lg" className="bg-frost-white text-primary hover:bg-frost-white/90 font-body font-semibold px-10 py-3 shadow-premium text-lg" asChild>
            <a
              href="https://collegehockeyfamilyadvisor.com/testimonials/"
              target="_blank"
              rel="noopener noreferrer"
            >
              View All Testimonials
            </a>
          </Button>
        </div>
      </section> */}

      {/* CTA Section */}
      {/* <section className="py-32 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-glow opacity-20"></div>
        <div className="container mx-auto px-6 text-center relative z-10 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-display font-bold mb-8 text-navy-deep tracking-tight">
            Join Our Success Stories
          </h2>
          <p className="text-xl md:text-2xl mb-16 font-body text-steel-blue mb-12 max-w-4xl mx-auto font-medium leading-relaxed">
            Transform your hockey journey with our proven advisory services and expert guidance
          </p>
          <Button size="lg" className="bg-gradient-premium text-frost-white hover:shadow-premium transition-all duration-300 hover:scale-105 font-body font-semibold px-12 py-4 text-lg" asChild>
            <a href="https://college-hockey-family-advisor.appointedd.com/app/600d297a4bd55d1ee6392262" target="_blank" rel="noopener noreferrer">
              Book Your Free Consultation
            </a>
          </Button>
        </div>
      </section> */}
    </div>
  );
};

export default Testimonials;
