import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent } from '@/components/ui/card';

export default function Home() {
  const flierImage = PlaceHolderImages.find((img) => img.id === 'mjl-flier');

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-background p-4 sm:p-8">
      <div className="w-full max-w-lg text-center">
        <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl md:text-6xl font-headline mb-8">
          MJLTRANSPORT
        </h1>
        <Card className="overflow-hidden shadow-2xl rounded-lg border-2 border-primary/20">
          <CardContent className="p-0">
            {flierImage && (
              <Image
                src={flierImage.imageUrl}
                alt={flierImage.description}
                width={1080}
                height={1080}
                className="w-full h-auto object-cover"
                data-ai-hint={flierImage.imageHint}
                priority
              />
            )}
          </CardContent>
        </Card>
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
  );
}
