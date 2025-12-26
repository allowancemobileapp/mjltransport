"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { format } from "date-fns";
import { CalendarIcon, User, MapPin, Briefcase, Car, Phone } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useToast } from "@/hooks/use-toast";

const locationOptions = ["Lagos", "PH", "Bayelsa", "Abuja"] as const;
const vehicleOptions = ["8-SEATER A/C BUS", "4-SEATER A/C SIENNA"] as const;

const formSchema = z.object({
  fullName: z.string().min(2, { message: "Full name must be at least 2 characters." }),
  phoneNumber: z.string().min(10, { message: "Please enter a valid phone number." }),
  location: z.enum(locationOptions, {
    required_error: "Please select a location.",
  }),
  address: z.string().min(5, { message: "Please enter a valid pickup address." }),
  luggageCount: z.coerce.number().min(0, "Number of luggage cannot be negative.").int(),
  resumptionDate: z.date({
    required_error: "A resumption date is required.",
  }),
  vehicle: z.enum(vehicleOptions, {
    required_error: "Please select a vehicle.",
  }),
});

export function BookingToSchoolForm() {
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      phoneNumber: "",
      address: "",
      luggageCount: 0,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    const formattedDate = format(values.resumptionDate, "PPP");
    const message = `
New 'To School' Ride Booking for MJLTRANSPORT:
--------------------------------------------
*Full Name:* ${values.fullName}
*Phone Number:* ${values.phoneNumber}
*Pickup Location:* ${values.location}
*Pickup Address:* ${values.address}
*Number of Luggages:* ${values.luggageCount}
*Resumption Date:* ${formattedDate}
*Preferred Vehicle:* ${values.vehicle}
    `;

    const whatsappUrl = `https://wa.me/2349135067590?text=${encodeURIComponent(message.trim())}`;
    
    toast({
        title: "Redirecting to WhatsApp",
        description: "Please wait while we prepare your booking details.",
    });

    setTimeout(() => {
        window.location.href = whatsappUrl;
    }, 1500);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="fullName"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="flex items-center"><User className="mr-2 h-4 w-4 text-primary/80" />Full Name</FormLabel>
                <FormControl>
                  <Input placeholder="e.g., John Doe" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phoneNumber"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="flex items-center"><Phone className="mr-2 h-4 w-4 text-primary/80" />Phone Number</FormLabel>
                <FormControl>
                  <Input placeholder="e.g., 08012345678" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        
        <FormField
          control={form.control}
          name="location"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="flex items-center"><MapPin className="mr-2 h-4 w-4 text-primary/80" />Location</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your pickup location" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {locationOptions.map(option => (
                    <SelectItem key={option} value={option}>{option}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="address"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="flex items-center"><MapPin className="mr-2 h-4 w-4 text-primary/80" />Pickup Address</FormLabel>
              <FormControl>
                <Textarea placeholder="Your full pickup address" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="luggageCount"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="flex items-center"><Briefcase className="mr-2 h-4 w-4 text-primary/80" />Number of Luggages</FormLabel>
                <FormControl>
                  <Input type="number" min="0" placeholder="e.g., 2" {...field} />
                </FormControl>
                <FormDescription>
                  Extra N5000 fee per luggage above 2.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
           <FormField
            control={form.control}
            name="resumptionDate"
            render={({ field }) => (
              <FormItem className="flex flex-col pt-2">
                <FormLabel className="flex items-center mb-1"><CalendarIcon className="mr-2 h-4 w-4 text-primary/80" />Resumption Date</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "w-full pl-3 text-left font-normal",
                          !field.value && "text-muted-foreground"
                        )}
                      >
                        {field.value ? (
                          format(field.value, "PPP")
                        ) : (
                          <span>Pick a date</span>
                        )}
                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={field.value}
                      onSelect={field.onChange}
                      disabled={(date) =>
                        date < new Date(new Date().setHours(0, 0, 0, 0))
                      }
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        
        <FormField
          control={form.control}
          name="vehicle"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="flex items-center"><Car className="mr-2 h-4 w-4 text-primary/80" />Preferred Vehicle</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a vehicle" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {vehicleOptions.map(option => (
                    <SelectItem key={option} value={option}>{option}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold" size="lg" disabled={form.formState.isSubmitting}>
          {form.formState.isSubmitting ? "Submitting..." : "Proceed to WhatsApp"}
        </Button>
      </form>
    </Form>
  );
}
