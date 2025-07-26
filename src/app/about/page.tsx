import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Image from "next/image";
import { CheckCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const coreValues = [
    "Empathy & Understanding",
    "Integrity & Confidentiality",
    "Empowerment & Growth",
    "Authenticity & Trust"
];

export default function AboutPage() {
    return (
        <>
            <section className="relative bg-cover bg-center py-20 md:py-28 text-center" style={{ backgroundImage: "url('https://storage.googleapis.com/heidless_case_studies/c-life-coach/images-live/homepage-hero.jpg')" }}>
                <div className="absolute inset-0 bg-black/60" />
                <div className="relative container mx-auto px-4 text-white">
                    <Badge variant="outline" className="mb-4 text-sm border-white/80 text-white/90">About</Badge>
                    <h1 className="font-headline text-4xl md:text-5xl font-bold">About Clarity & Growth</h1>
                    <p className="mt-4 max-w-3xl mx-auto text-lg text-white/90">
                        Your dedicated partner in navigating life's complexities to unlock your true potential.
                    </p>
                </div>
            </section>

            <section className="py-16 md:py-24">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="order-2 md:order-1">
                            <h2 className="font-headline text-3xl md:text-4xl font-bold">Meet Your Coach</h2>
                            <p className="mt-4 text-muted-foreground">
                                With over a TEST decade of experience in personal development and certified coaching, I founded Clarity & Growth with a single mission: to empower individuals to overcome obstacles, cultivate self-awareness, and design a life they are genuinely passionate about.
                            </p>
                            <p className="mt-4 text-muted-foreground">
                                My journey began in the corporate world, where I witnessed firsthand the immense pressure and lack of personal fulfillment many professionals face. This inspired a shift towards a career dedicated to helping others find balance, purpose, and success on their own terms. My approach is not about giving answers, but about asking the right questions to help you uncover your own.
                            </p>
                        </div>
                        <div className="order-1 md:order-2">
                            <Image 
                                src="https://storage.googleapis.com/heidless_case_studies/c-life-coach/images-live/female-black-headshot-1.webp" 
                                alt="Life Coach Portrait" 
                                width={800} 
                                height={1000}
                                className="rounded-lg shadow-xl w-full"
                                data-ai-hint="friendly coach"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16 md:py-24 bg-secondary">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="font-headline text-3xl md:text-4xl font-bold">Our Philosophy & Approach</h2>
                        <p className="mt-4 max-w-3xl mx-auto text-muted-foreground">
                            We believe that coaching is a collaborative partnership. Our methodology combines proven psychological principles with personalized strategies to create a supportive and transformative experience.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {coreValues.map((value) => (
                             <Card key={value} className="text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
                                <CardHeader>
                                    <div className="mx-auto bg-primary text-primary-foreground rounded-full h-12 w-12 flex items-center justify-center">
                                        <CheckCircle className="h-6 w-6" />
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <h3 className="font-headline text-xl font-semibold">{value}</h3>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
