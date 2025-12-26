import { BookingForm } from './booking-form';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';
import { ArrowLeft, Info } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

export default function BookPage() {
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
                  <span className="sr-only">View Vacation Protocol</span>
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <DialogHeader>
                  <DialogTitle>MJLT VACATION PROTOCOL</DialogTitle>
                </DialogHeader>
                <div className="text-sm text-muted-foreground space-y-4 py-4 overflow-y-auto max-h-[60vh] pr-2">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">IN YOUR HOSTEL:</h4>
                    <ul className="list-disc list-inside space-y-1">
                      <li>WAKE UP</li>
                      <li>FRESHEN UP</li>
                      <li>GET TO THE LOBBY OF YOUR HOSTEL WITH YOUR BAGS</li>
                      <li>CALL YOUR HOSTEL PICK-UP RIDE TO COME GET YOU</li>
                      <li>BEFORE YOUR RIDE COMES, YOU CAN CALL OTHER PASSENGERS GOING WITH YOUR VEHICLE THAT STAYS IN YOUR HOSTEL AS WELL</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">AT THE GATE:</h4>
                    <ul className="list-disc list-inside space-y-1">
                      <li>COLLATE YOUR BAGS TOGETHER AND KEEP THEM IN A SAFE SPACE AT THE GATE</li>
                      <li>DO CLEARANCE AND SIGN OUT</li>
                      <li>CALL TO LOCATE YOUR TRANSPORT DRIVER AND MOVE YOUR BAGS ACCORDINGLY</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">IN THE BUS/SIENNA:</h4>
                    <ul className="list-disc list-inside space-y-1">
                      <li>RELAX, YOU DON TRY</li>
                      <li>TRY TO HELP BY CALLING OTHER PASSENGERS YOU KNOW OR GOING WITH YOU</li>
                      <li>SIT STEADY INSIDE THE BUS/SIENNA AND ENSURE YOUR COMFORT BEFORE THE VEHICLE MOVES</li>
                      <li>FEEL FREE TO TALK TO YOUR DRIVERS AND ASK ANY QUESTIONS WHATSOEVER, THEY ARE NICE AND PROFESSIONAL FELLOWS.</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">IN LAGOS:</h4>
                    <ul className="list-disc list-inside space-y-1">
                      <li>GET DOWN AND STAND BESIDE THE BOOT TO IDENTIFY YOUR LUGGAGE</li>
                      <li>CONFIRM AND COLLATE YOUR LUGGAGES UNTIL YOUR NEXT RIDE COMES OR GET INTO THE HOME DROP OFF VEHICLE IN THE DROP OFF POINT</li>
                      <li>WAIT FOR MOM/DAD, CALL AN UBER OR A RIDE AND GET HOME SAFE!!!</li>
                    </ul>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>
          <CardTitle className="text-3xl font-bold text-primary font-headline pt-12 sm:pt-0">Book Your Ride</CardTitle>
          <CardDescription>Fill in your details to secure your spot.</CardDescription>
        </CardHeader>
        <CardContent>
          <BookingForm />
        </CardContent>
      </Card>
    </main>
  );
}
