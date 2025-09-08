import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Star, Trophy, Quote } from "lucide-react";

const chlEligibilityQA = [
	{
		question:
			"I HAVE READ THAT CHL (MAJOR JUNIOR PLAYERS IN THE WHL, OHL AND QMJHL) ARE NOW ELGIBILE FOR NCAA HOCKEY?",
		answer:
			"Yes, players who compete in the CHL are now eligible for NCAA DI hockey only and may participate on NCAA DI teams beginning August 1, 2025. The rule has not been changed at the NCAA DIII level. Playing for a CHL team will jeopardize your NCAA Division III eligibility. CHL players are eligible for DI provided that they did not receive above actual and necessary expenses to compete in the CHL.",
	},
	{
		question: "WHEN CAN NCAA TEAMS BEGIN RECRUITING CHL PLAYERS?",
		answer:
			"Recruiting can begin immediately. CHL players are eligible to appear on NCAA Division I rosters beginning August 1, 2025.",
	},
	{
		question: "WHAT ARE CONSIDERED ACTUAL AND NECESSARY EXPENSES?",
		answer:
			"Actual and necessary expenses are any expenses necessary or required for your participation in practice or competition, including but not limited to: meals, lodging, transportation, apparel, equipment, supplies, coaching, ice time, medical treatment (health insurance), and entry fees. ",
	},
	{
		question: "IS THERE NEW LEGISLATION INVOLVING THE USE OF AN AGENT?",
		answer:
			"No, generally, you are not allowed to reach an agreement (written, verbal or for future representation) with or receive benefits from an agent. A men’s ice hockey prospect who is drafted by a professional team before enrolling full time at any college or university may be represented by an agent or attorney during contract negotiations. The prospect must pay the going rate for the agent’s services, and if the player does not sign a contract with a professional team, the agreement for representation must be terminated before enrolling full time at any college or university. ",
	},
	{
		question:
			"I WAS RECENTLY DRAFTED BY A TEAM FROM THE CHL (INCLUDES THE OHL, WHL, AND QMJHL) AND THEY WANT ME TO SIGN A CONTRACT IMMEDIATELY. IS IT OK FOR ME TO SIGN A CONTRACT EVEN THOUGH I WONT PLAY FOR THEM THIS YEAR?",
		answer:
			"Players may now participate in the CHL (which includes the OHL, WHL and QMJHL) prior to initial full-time collegiate enrollment, and not jeopardize their NCAA DI eligibility provided not more than actual and necessary expenses for participation are received or guaranteed or specified.",
	},
	{
		question:
			"I HAVE BEEN INVITED BY A CHL TEAM TO THEIR ROOKIE/TRAINING CAMP AND THEY HAVE OFFERED TO PAY FOR ALL OF MY EXPENSES. WILL THIS EFFECT MY ELIGIBILITY?",
		answer:
			"Prior to full-time enrollment, you may attend training camps with CHL teams. While in attendance the team can only supply you with actual and necessary expenses that include travel, hotel, food, equipment, and all costs associated with practice and off-ice training. The team may not provide actual and necessary expenses for your travel party (parents/caregivers).",
	},
	{
		question:
			"I ATTENDED ROOKIE CAMP FOR A PARTICULAR CHL TEAM AND NOW THE SAME TEAM HAS ASKED ME TO ATTEND MAIN CAMP AS WELL. WILL THIS AFFECT MY NCAA ELGIBILITY?",
		answer:
			"Prior to full-time enrollment, you may attend as many training camps or tryouts with CHL teams as you like. However, the team cannot supply you beyond actual and necessary expenses that include travel, hotel, food, equipment, and all costs associated with practice and off-ice training. The team may not provide actual and necessary expenses for your travel party (parents/care givers).",
	},
	{
		question:
			"I AM GOING TO A CHL CAMP AND WE ARE SCRIMMAGING AGAINST ANOTHER TEAM. MAY I PARTICPATE IN THE SCRIMMAGE?",
		answer:
			"Prior to full-time enrollment, you may participate in CHL camps and/or games provided that the team is not supplying you with more than actual and necessary expenses to compete.",
	},
	{
		question:
			"I WAS DRAFTED IN THE CHL AND WAS PROVIDED WITH A HAT, JERSEY AND/OR TEAM APPAREL. AM I ALLOWED TO KEEP THESE ITEMS?",
		answer:
			"No, you cannot accept jerseys, hats, t-shirts, or any material benefits from teams without paying for them. If you have received items in the mail your options are as follows: Mail the item(s) back, pay the team for the cost of the item(s) or donate the item(s) to charity. To guarantee there is no issue with NCAA Eligibility, an individual should return or pay for any celebratory item sent to them by a professional club who drafts the individual.",
	},
	// Add more Q&A objects here as needed
];

const nhlTeamsQA = [
	{
		question:
			"CAN I ATTEND A TESTING SESSION OR TRAINING CAMP WITH AN NHL OR PROFESSIONAL TEAM AND RETAIN MY ELIGIBILITY?",
		answer: [
			{
				type: "paragraph",
				text: "Prior to initial full-time collegiate enrollment, an individual may participate in a tryout with a professional team or league, provided not more than actual and necessary expenses are received to participate.",
			},
			{
				type: "paragraph",
				text: "After initial full-time collegiate enrollment, an individual may participate in practice sessions conducted by a professional team, provided you do not:",
			},
			{
				type: "subpoints",
				points: [
					"(a) Receive any compensation for participation in the practice sessions;",
					"(b) Enter into any contract or agreement with a professional team or sports organization; or",
					"(c) Take part in any outside competition (games or scrimmages) as a representative of a professional team.",
				],
			},
			{
				type: "paragraph",
				text: "Finally, an enrolled student athlete should always check with their athletic department’s compliance office for approval.",
			},
		],
	},
	{
		question:
			"I ATTENDED ROOKIE CAMP FOR A PARTICULAR NHL OR PROFESSIONAL TEAM AND NOW THE SAME TEAM HAS ASKED ME TO ATTEND MAIN CAMP AS WELL. WILL THIS AFFECT MY NCAA ELGIBILITY?",
		answer: [
			{
				type: "paragraph",
				text: "Prior to full-time enrollment, you may attend as many training camps or try outs with professional teams as you like. However, the team cannot supply you beyond actual and necessary expenses that include travel, hotel, food, equipment, and all costs associated with practice and off-ice training. The team may not provide actual and necessary expenses for your travel party (parents/care givers).",
			},
		],
	},
	{
		question:
			"I PARTICIPATED IN PROFESSIONAL EXHIBITION GAMES, REGULAR SEASON GAMES AND/OR PLAYOFF GAMES. AM I ELIGIBLE FOR NCAA HOCKEY?",
		answer: [
			{
				type: "paragraph",
				text: "Before initial full-time collegiate enrollment, you may compete on a professional team, provided the team did not provide you with more than actual and necessary expenses to participate on the team.",
			},
		],
	},
	{
		question: "CAN I ATTEND AN NHL TEAM’S SUMMER DEVELOPMENT CAMP?",
		answer: [
			{
				type: "paragraph",
				text: "Prior to initial full-time collegiate enrollment, a prospect can attend as many NHL development camps as they would like and receive their actual and necessary expenses for the duration of camp, including return travel immediately at the conclusion of camp.",
			},
			{
				type: "paragraph",
				text: "Post-enrollment: A student-athlete (post-enrollment) can participate in NHL development camp, professional camps, tryouts, and practice sessions held by a professional club. A student-athlete (post-enrollment) cannot represent a professional club in any outside competition / games under any circumstances (i.e. a student-athlete cannot participate in NHL Rookie Tournaments.)",
			},
			{
				type: "paragraph",
				text: "A student-athlete (post-enrollment) participating in one of the aforementioned professional opportunities must ensure that he does not:",
			},
			{
				type: "subpoints",
				points: [
					"(a) Receive any compensation for participation in the practice sessions;",
					"(b) Enter into any contract or agreement with a professional team or sports organization; or",
					"(c) Take part in any outside competition (games or scrimmages) as a representative of a professional team.",
				],
			},
			{
				type: "paragraph",
				text: "Further – student-athletes (post-enrollment) cannot miss class to participate in these professional opportunities (pre-approval from compliance will ensure class is not missed). The student-athlete (post-enrollment) may receive actual and necessary expenses in conjunction with one 48-hour tryout per professional team (or a combine including that team). This includes NHL development camps.",
			},
		],
	},
	// Add more Q&A or subpoints objects here as needed
];

const Rule = () => {
	return (
		<div>
			<section className="py-24 bg-background">
				<div className="container mx-auto px-6">
					<Tabs defaultValue="active" className="w-full">
						<TabsList className="grid w-full grid-cols-2 max-w-md mx-auto mb-12">
							<TabsTrigger
								value="active"
								className="font-display text-lg"
							>
								CHL ELIGIBILITY
							</TabsTrigger>
							<TabsTrigger
								value="retired"
								className="font-display text-lg"
							>
								NHL AND TEAMS
							</TabsTrigger>
						</TabsList>
						<TabsContent value="active">
							<div className="mb-12">
								<h2 className="text-center text-4xl md:text-5xl font-display font-bold mb-6 text-primary">
									QUESTIONS AND ANSWERS ON CHL ELIGIBILITY
								</h2>
							</div>
							<div className="text-[18px] font-body font-normal leading-[1.7] space-y-4 max-w-6xl mx-auto text-justify text-steel-blue">
								{chlEligibilityQA.map((item, idx) => (
									<div key={idx}>
										{item.question && (
											<p className="py-2">
												<strong>{item.question}</strong>
											</p>
										)}
										{item.answer && (
											<p className="py-2">{item.answer}</p>
										)}
										{item.subpoints &&
											item.subpoints.map((point, i) => (
												<p
													className="ml-[50px] py-2"
													key={i}
												>
													{point}
												</p>
											))}
									</div>
								))}
							</div>
						</TabsContent>
						<TabsContent value="retired">
							<div className="text-center mb-12">
								<h2 className="text-primary text-4xl md:text-5xl font-display font-bold mb-6">
									QUESTIONS AND ANSWERS ON NHL AND PROFESSIONAL TEAMS
								</h2>
							</div>
							<div className="text-[18px] font-body font-normal leading-[1.7] space-y-4 max-w-6xl mx-auto text-justify text-steel-blue">
								{nhlTeamsQA.map((item, idx) => (
									<div key={idx}>
										{item.question && (
											<p className="py-2">
												<strong>{item.question}</strong>
											</p>
										)}
										{item.answer &&
											item.answer.map((ans, i) => {
												if (ans.type === "paragraph") {
													return (
														<p className="py-2" key={i}>
															{ans.text}
														</p>
													);
												}
												if (ans.type === "subpoints") {
													return ans.points.map(
														(point, j) => (
															<p
																className="ml-[50px] py-2"
																key={j}
															>
																{point}
															</p>
														)
													);
												}
												return null;
											})}
									</div>
								))}
							</div>
						</TabsContent>
					</Tabs>
				</div>
			</section>

			<section className="pb-24 bg-background">
				<div className="container mx-auto px-6 text-center">
					<h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-navy-deep">
						Still Have Questions?
					</h2>
					<p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto font-body font-medium">
						For additional recruiting information, click button to view our
						full recruiting FAQ page
					</p>
					<div className="justify-center">
						<Button
							size="lg"
							className="font-body font-semibold px-10 py-4 text-lg"
							asChild
						>
							<a
								href="https://www.collegehockeyinc.com/faq/index.php"
								target="_blank"
								rel="noopener noreferrer"
							>
								View More Answer
							</a>
						</Button>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Rule;