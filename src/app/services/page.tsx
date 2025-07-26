import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const serviceDetails = [
  {
    title: "Career Coaching",
    description: "Whether you're looking for a promotion, a career change, or starting your own business, we provide the clarity and strategy to achieve your professional goals.",
    image: { src: "https://placehold.co/600x400.png", hint: "career office" },
    features: ["Career Pathing & Strategy", "Resume & Interview Prep", "Leadership Development", "Work-Life Balance"]
  },
  {
    title: "Personal Growth & Mindset",
    description: "Break through self-limiting beliefs, build confidence, and cultivate a growth mindset. We help you unlock your potential and live a more intentional life.",
    image: { src: "https://placehold.co/600x400.png", hint: "personal growth" },
    features: ["Confidence Building", "Habit Formation", "Mindfulness & Stress Reduction", "Goal Setting & Achievement"]
  },
  {
    title: "Relationship & Family Coaching",
    description: "Strengthen your connections with loved ones. Our coaching focuses on improving communication, resolving conflicts, and fostering deeper, more meaningful relationships.",
    image: { src: "https://placehold.co/600x400.png", hint: "happy family" },
    features: ["Effective Communication Skills", "Conflict Resolution", "Parenting Support", "Building Stronger Bonds"]
  },
  {
    title: "Executive & Leadership Coaching",
    description: "For leaders and executives aiming to enhance their impact. We focus on strategic thinking, team motivation, and authentic leadership presence.",
    image: { src: "https://placehold.co/600x400.png", hint: "business meeting" },
    features: ["Strategic Decision Making", "Team Engagement & Motivation", "Executive Presence", "Performance Enhancement"]
  }
];

export default function ServicesPage() {
    return (
        <>
            <section className="py-20 md:py-28 bg-secondary text-center">
                <div className="container mx-auto px-4">
                    <h1 className="font-headline text-4xl md:text-5xl font-bold">Our Coaching Services</h1>
                    <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
                        Tailored programs designed to help you achieve clarity, growth, and success in key areas of your life.
                    </p>
                </div>
            </section>

            <section className="py-16 md:py-24">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {serviceDetails.map((service, index) => (
                            <Card key={index} className="flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                                <Image src={service.image.src} alt={service.title} width={600} height={400} className="w-full h-64 object-cover" data-ai-hint={service.image.hint} />
                                <CardHeader>
                                    <CardTitle className="font-headline text-2xl">{service.title}</CardTitle>
                                    <CardDescription>{service.description}</CardDescription>
                                </CardHeader>
                                <CardContent className="flex-grow">
                                    <ul className="space-y-2">
                                        {service.features.map(feature => (
                                            <li key={feature} className="flex items-center gap-2">
                                                <Check className="h-5 w-5 text-primary" />
                                                <span className="text-muted-foreground">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </CardContent>
                                <CardFooter>
                                    <Button asChild className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                                        <Link href="/contact">Inquire About {service.title}</Link>
                                    </Button>
                                </CardFooter>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
