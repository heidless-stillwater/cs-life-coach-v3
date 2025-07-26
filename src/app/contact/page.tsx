import { ContactForm } from "@/components/contact-form";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, MapPin, Phone } from "lucide-react";

export default function ContactPage() {
    return (
        <>
            <section className="relative bg-cover bg-center py-20 md:py-28 text-center" style={{ backgroundImage: "url('https://storage.googleapis.com/heidless_case_studies/c-life-coach/images-live/homepage-hero.jpg')" }}>
                <div className="absolute inset-0 bg-black/60" />
                <div className="relative container mx-auto px-4 text-white">
                    <Badge variant="outline" className="mb-4 text-sm border-white/80 text-white/90">Contact Us</Badge>
                    <h1 className="font-headline text-4xl md:text-5xl font-bold">Get In Touch</h1>
                    <p className="mt-4 max-w-3xl mx-auto text-lg text-white/90">
                        We're here to answer your questions and start you on your journey. Reach out today for a free consultation.
                    </p>
                </div>
            </section>
            
            <section className="py-16 md:py-24">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        <Card className="shadow-lg p-2 sm:p-4 flex flex-col h-full">
                            <CardHeader>
                                <CardTitle className="font-headline text-2xl">Send Us a Message</CardTitle>
                            </CardHeader>
                            <CardContent className="flex-grow flex flex-col">
                                <ContactForm />
                            </CardContent>
                        </Card>
                        <div className="space-y-8">
                            <Card className="shadow-lg">
                                <CardHeader>
                                    <CardTitle className="font-headline text-2xl">Contact Information</CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div className="flex items-start gap-4">
                                        <div className="bg-primary/10 text-primary p-3 rounded-full">
                                            <Phone className="h-6 w-6" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold">Phone</h3>
                                            <a href="tel:1234567890" className="text-muted-foreground hover:text-primary">1234 567 890</a>
                                        </div>
                                    </div>
                                     <div className="flex items-start gap-4">
                                        <div className="bg-primary/10 text-primary p-3 rounded-full">
                                            <Mail className="h-6 w-6" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold">Email</h3>
                                            <a href="mailto:test@test.com" className="text-muted-foreground hover:text-primary">test@test.com</a>
                                        </div>
                                    </div>
                                     <div className="flex items-start gap-4">
                                        <div className="bg-primary/10 text-primary p-3 rounded-full">
                                            <MapPin className="h-6 w-6" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold">Address</h3>
                                            <p className="text-muted-foreground">Woodberry Down, London N4 2TG</p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                            <Card className="shadow-lg overflow-hidden">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2480.093222026856!2d-0.0913986842278635!3d51.56730097964501!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761c77c685b8c3%3A0x28f416a9578886b6!2sWoodberry%20Down%2C%20London%20N4%202TG%2C%20UK!5e0!3m2!1sen!2sus!4v1689258287841!5m2!1sen!2sus"
                                    width="100%"
                                    height="500"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                ></iframe>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
