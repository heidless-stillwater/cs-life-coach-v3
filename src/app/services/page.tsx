
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

const serviceDetails = [
  {
    title: "Career Coaching",
    description: "Whether you're looking for a promotion, a career change, or starting your own business, we provide the clarity and strategy to achieve your professional goals.",
    image: { src: "https://storage.googleapis.com/heidless_case_studies/c-life-coach/images-live/career-coaching.jpg", hint: "career office" },
    features: ["Career Pathing & Strategy", "Resume & Interview Prep", "Leadership Development", "Work-Life Balance"]
  },
  {
    title: "Personal TEST Growth & Mindset",
    description: "Unlock your full potential. Build self-awareness, improve habits, and create a life you love.",
    image: { src: "https://storage.googleapis.com/heidless_case_studies/c-life-coach/images-live/personal-growth.jpg", hint: "personal growth" },
    features: ["Confidence Building", "Habit Formation", "Mindfulness & Stress Reduction", "Goal Setting & Achievement"]
  }
];

export default function ServicesPage() {
    return (
        <>
            <section className="relative bg-cover bg-center py-20 md:py-28 text-center" style={{ backgroundImage: "url('https://storage.googleapis.com/heidless_case_studies/c-life-coach/images-live/homepage-hero.jpg')" }}>
                <div className="absolute inset-0 bg-black/60" />
                <div className="relative container mx-auto px-4 text-white">
                    <Badge variant="outline" className="mb-4 text-sm border-white/80 text-white/90">What We Do</Badge>
                    <h1 className="font-headline text-4xl md:text-5xl font-bold">Our Coaching Services</h1>
                    <p className="mt-4 max-w-3xl mx-auto text-lg text-white/90">
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
                                    <Button asChild className="w-full bg-accent text-accent-foreground hover:bg-accent/90 text-base-plus">
                                        <Link href="/contact">Inquire About {service.title.replace('TEST ', '')}</Link>
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
