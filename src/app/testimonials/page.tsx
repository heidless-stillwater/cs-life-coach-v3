import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Star } from "lucide-react";

const allTestimonials = [
  { quote: "Working with them was a game-changer for my career. I landed my dream job within three months!", name: "Alex Johnson", title: "Software Engineer", avatar: "https://storage.googleapis.com/heidless_case_studies/c-life-coach/images-live/male-black-headshot-0.jpg", hint: "man smiling", stars: 5 },
  { quote: "I found a new sense of purpose and clarity. The guidance was invaluable in my personal growth journey.", name: "Samantha Lee", title: "Marketing Manager", avatar: "https://storage.googleapis.com/heidless_case_studies/c-life-coach/images-live/female-asian-headshot-0.jpg", hint: "woman portrait", stars: 5 },
  { quote: "The coaching sessions helped our family communicate better and resolve conflicts constructively. Highly recommended.", name: "The Garcia Family", title: "Clients", avatar: "https://storage.googleapis.com/heidless_case_studies/c-life-coach/images-live/family-portait.jpg", hint: "family portrait", stars: 5 },
  { quote: "An incredible listener who provides practical, actionable advice. My confidence has skyrocketed.", name: "Ben Carter", title: "Entrepreneur", avatar: "https://storage.googleapis.com/heidless_case_studies/c-life-coach/images-live/male-white-headshot-0.webp", hint: "man professional", stars: 5 },
  { quote: "I was feeling stuck and overwhelmed. Now I have a clear roadmap and the motivation to follow it. Thank you!", name: "Chloe Wang", title: "Graphic Designer", avatar: "https://storage.googleapis.com/heidless_case_studies/c-life-coach/images-live/female-asian-headshot-0.jpg", hint: "woman creative", stars: 5 },
  { quote: "The best investment I've made in myself. The results have been transformative, both personally and professionally.", name: "David Miller", title: "Architect", avatar: "https://storage.googleapis.com/heidless_case_studies/c-life-coach/images-live/male-white-headshot-1.jpeg", hint: "professional architect", stars: 5 }
];

export default function TestimonialsPage() {
    return (
        <>
            <section className="py-20 md:py-28 bg-secondary text-center">
                <div className="container mx-auto px-4">
                    <Badge variant="outline" className="mb-4 text-sm">Testimonials</Badge>
                    <h1 className="font-headline text-4xl md:text-5xl font-bold">Client Success Stories</h1>
                    <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
                        Real stories from real people who have transformed their lives with our coaching.
                    </p>
                </div>
            </section>

            <section className="py-16 md:py-24">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {allTestimonials.map((testimonial, index) => (
                            <Card key={index} className="flex flex-col justify-between shadow-lg hover:shadow-xl transition-shadow duration-300">
                                <CardContent className="pt-6">
                                    <div className="flex text-accent mb-2">
                                        {[...Array(testimonial.stars)].map((_, i) => <Star key={i} className="h-5 w-5 fill-current" />)}
                                    </div>
                                    <p className="italic text-muted-foreground">"{testimonial.quote}"</p>
                                </CardContent>
                                <CardFooter className="flex items-center gap-4 bg-secondary/50 p-4">
                                    <Avatar>
                                        <AvatarImage src={testimonial.avatar} alt={testimonial.name} data-ai-hint={testimonial.hint} />
                                        <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <p className="font-semibold">{testimonial.name}</p>
                                        <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                                    </div>
                                </CardFooter>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
