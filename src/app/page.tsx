import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent } from '@/components/ui/card';
import { ModeToggle } from '@/components/theme-toggle';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function Home() {
  const flierImages = PlaceHolderImages.filter((img) => img.id.startsWith('mjl-flier'));

  return (
    <div className="relative min-h-screen bg-background">
      <header className="absolute top-0 left-0 right-0 p-4 sm:p-6 flex justify-between items-center z-10">
        <h1 className="text-2xl font-bold text-primary sm:text-3xl">MJLT</h1>
        <ModeToggle />
      </header>
      <main className="flex min-h-screen flex-col items-center justify-center p-4 sm:p-8">
        <div className="w-full max-w-lg text-center">
          <Carousel className="w-full" opts={{ loop: true }}>
            <CarouselContent>
              {flierImages.map((flierImage) => (
                <CarouselItem key={flierImage.id}>
                  <Card className="overflow-hidden shadow-2xl rounded-lg border-2 border-primary/20">
                    <CardContent className="p-0">
                      <Image
                        src={flierImage.imageUrl}
                        alt={flierImage.description}
                        width={1080}
                        height={1080}
                        className="w-full h-auto object-cover aspect-square"
                        data-ai-hint={flierImage.imageHint}
                        priority={flierImages.indexOf(flierImage) === 0}
                      />
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-2" />
            <CarouselNext className="right-2" />
          </Carousel>
          <Link href="/book" passHref>
            <Button
              size="lg"
              className="mt-10 w-full max-w-sm text-lg font-semibold bg-accent text-accent-foreground hover:bg-accent/90 transform hover:scale-105 transition-transform duration-200"
              aria-label="Book a Ride now"
            >
              Book a Ride
            </Button>
          </Link>
        </div>
      </main>
    </div>
  );
}
