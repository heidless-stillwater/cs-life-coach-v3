
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

const services = [
  {
    title: "Career Coaching",
    description: "Navigate your career path with confidence. We help with transitions, promotions, and finding fulfilling work.",
    image: { src: "https://placehold.co/600x400.png", hint: "career office" }
  },
  {
    title: "Personal Growth",
    description: "Unlock your full potential. Build self-awareness, improve habits, and create a life you love.",
    image: { src: "https://placehold.co/600x400.png", hint: "personal growth" }
  },
  {
    title: "Relationship & Family",
    description: "Foster stronger connections. Improve communication and build healthier, more meaningful relationships.",
    image: { src: "https://placehold.co/600x400.png", hint: "happy family" }
  }
];

const testimonials = [
  {
    quote: "Working with them was a game-changer for my career. I landed my dream job within three months!",
    name: "Alex Johnson",
    title: "Software Engineer",
    avatar: "https://placehold.co/100x100.png",
    hint: "man smiling"
  },
  {
    quote: "I found a new sense of purpose and clarity. The guidance was invaluable in my personal growth journey.",
    name: "Samantha Lee",
    title: "Marketing Manager",
    avatar: "https://placehold.co/100x100.png",
    hint: "woman portrait"
  },
  {
    quote: "The coaching sessions helped our family communicate better and resolve conflicts constructively. Highly recommended.",
    name: "The Garcia Family",
    title: "Clients",
    avatar: "https://placehold.co/100x100.png",
    hint: "family portrait"
  }
];

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[70vh] flex items-center justify-center text-center text-white">
        <Image 
          src="https://placehold.co/1920x1080.png" 
          alt="Inspiring landscape" 
          fill
          className="absolute z-0 object-cover"
          data-ai-hint="inspiring landscape"
          priority
        />
        <div className="absolute inset-0 bg-primary/70 z-10"></div>
        <div className="relative z-20 container mx-auto px-4">
          <h1 className="font-headline text-4xl md:text-6xl font-bold tracking-tight">
            Find Your <span style={{ color: '#55a8e3' }}>Clarity</span>. <br /> Unlock Your <span style={{ color: '#55a8e3' }}>Growth</span>.
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-primary-foreground/90">
            Professional life coaching to help you navigate life's challenges and achieve your dreams.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 text-base-plus">
              <Link href="/contact">Get Started Today</Link>
            </Button>
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-base-plus">
              <Link href="/services">Our Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 text-center">
            <h2 className="font-headline text-3xl md:text-4xl font-bold">Your Partner in Personal Transformation</h2>
            <p className="mt-4 max-w-3xl mx-auto text-muted-foreground">
                At Clarity & Growth, we believe everyone has the potential to live a fulfilling and purposeful life. Our coaching philosophy is rooted in empathy, evidence-based techniques, and a deep commitment to your personal journey. We're here to provide the tools, support, and accountability you need to thrive.
            </p>
            <div className="mt-8">
                <Button asChild variant="link" className="text-primary text-base">
                    <Link href="/about">Learn More About Our Approach <ArrowRight className="ml-2 h-4 w-4" /></Link>
                </Button>
            </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-headline text-3xl md:text-4xl font-bold">How We Can Help</h2>
            <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
              We offer a range of specialized coaching services tailored to your unique needs.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Card key={service.title} className="flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <Image src={service.image.src} alt={service.title} width={600} height={400} className="w-full h-48 object-cover" data-ai-hint={service.image.hint} />
                <CardHeader>
                  <CardTitle className="font-headline">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
                <CardFooter>
                    <Button asChild variant="link" className="text-primary p-0">
                        <Link href="/services">Learn More <ArrowRight className="ml-2 h-4 w-4" /></Link>
                    </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

       {/* CTA Section */}
      <section className="bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 py-16 text-center">
          <h2 className="font-headline text-3xl font-bold">Ready to Take the Next Step?</h2>
          <p className="mt-2 max-w-2xl mx-auto">
            Your journey to a more fulfilling life starts with a single conversation. Let's explore how we can work together.
          </p>
          <div className="mt-8">
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                <Link href="/contact">Book a Free Consultation</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-headline text-3xl md:text-4xl font-bold">Success Stories from Our Clients</h2>
            <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
              Don't just take our word for it. Here's what our clients have to say about their experience.
            </p>
          </div>
          <Carousel
            opts={{ align: "start", loop: true }}
            className="w-full max-w-4xl mx-auto"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2">
                  <div className="p-1 h-full">
                    <Card className="h-full flex flex-col justify-between">
                        <CardContent className="pt-6 flex-grow">
                            <p className="italic">"{testimonial.quote}"</p>
                        </CardContent>
                        <CardFooter className="flex items-center gap-4 bg-secondary/50">
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
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>
    </div>
  );
}
