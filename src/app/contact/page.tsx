import { ContactForm } from "@/components/contact-form";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, MapPin, Phone } from "lucide-react";

export default function ContactPage() {
    return (
        <>
            <section className="py-20 md:py-28 bg-secondary text-center">
                <div className="container mx-auto px-4">
                    <h1 className="font-headline text-4xl md:text-5xl font-bold">Get In Touch</h1>
                    <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
                        We're here to answer your questions and start you on your journey. Reach out today for a free consultation.
                    </p>
                </div>
            </section>
            
            <section className="py-16 md:py-24">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        <Card className="shadow-lg p-2 sm:p-4">
                            <CardHeader>
                                <CardTitle className="font-headline text-2xl">Send Us a Message</CardTitle>
                            </CardHeader>
                            <CardContent>
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
                             <Card className="shadow-lg">
                                <CardHeader>
                                    <CardTitle className="font-headline text-2xl">Business Hours</CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-1 text-muted-foreground">
                                    <p><span className="font-semibold text-foreground">Monday - Friday:</span> 9:00 AM - 6:00 PM</p>
                                    <p><span className="font-semibold text-foreground">Saturday:</span> 10:00 AM - 2:00 PM</p>
                                    <p><span className="font-semibold text-foreground">Sunday:</span> Closed</p>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
