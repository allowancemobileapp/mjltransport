
import { BookingToSchoolForm } from './booking-to-school-form';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';
import { ArrowLeft, Info } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

export default function BookToSchoolPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-background p-4 sm:p-8 relative">
       <Link href="/" passHref className="absolute top-4 left-4 sm:top-8 sm:left-8">
        <Button variant="outline" size="icon" className="h-10 w-10">
          <ArrowLeft className="h-5 w-5" />
          <span className="sr-only">Back to Home</span>
        </Button>
      </Link>
      <Card className="w-full max-w-2xl shadow-2xl">
        <CardHeader className="text-center relative">
           <div className="absolute top-4 right-4">
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline" size="icon">
                  <Info className="h-[1.2rem] w-[1.2rem]" />
                  <span className="sr-only">View Resumption Protocol</span>
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <DialogHeader>
                  <DialogTitle>MJLT LAGOS RESUMPTION PROTOCOL</DialogTitle>
                </DialogHeader>
                <div className="text-sm text-muted-foreground space-y-4 py-4 overflow-y-auto max-h-[60vh] pr-2">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">AT HOME:</h4>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Wake up</li>
                      <li>Freshen up</li>
                      <li>Call your pick up ride or drive to the "TAKE-OFF" location and get to your vehicle</li>
                      <li>Get all necessary documents for clearance at the school gate</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">IN THE BUS/SIENNA:</h4>
                    <ul className="list-disc list-inside space-y-1">
                      <li>RELAX, you don try</li>
                      <li>Ensure you don't forget anything important when getting to school</li>
                      <li>Feel free to talk to your drivers and ask them any questions whatsoever, they are nice and professional fellows</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">IN THE RESTAURANT:</h4>
                    <ul className="list-disc list-inside space-y-1">
                      <li>No eating in, everyone buys takeout</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">IN SCHOOL:</h4>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Get down and secure your bags.</li>
                      <li>NEVER DROP YOUR LAPTOP BAGS OR BAGS WITH DELICATE ITEMS. HOLD THEM YOURSELF!!!!</li>
                      <li>They'll be personnel on campus to help you carry your bags inside school</li>
                      <li>No need to pay them, we have it covered but follow them with your bags to know where they drop it</li>
                      <li>Finish clearance at the gate and enjoy the new semester</li>
                    </ul>
                  </div>
                   <p className="font-semibold text-center pt-4">Once again, Happy Holidays...</p>
                </div>
              </DialogContent>
            </Dialog>
          </div>
          <CardTitle className="text-3xl font-bold text-primary font-headline pt-12 sm:pt-0">Book a Ride to School</CardTitle>
          <CardDescription>Fill in your details to secure your spot for resumption.</CardDescription>
        </CardHeader>
        <CardContent>
          <BookingToSchoolForm />
        </CardContent>
      </Card>
    </main>
  );
}
