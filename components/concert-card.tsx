import Image from "next/image";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Calendar, Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface ConcertCardProps {
  id: string;
  artist: string;
  location: string;
  dateRange: string;
  price: number;
  imageUrl: string;
  isSelected?: boolean;
  onToggleSelection?: (id: string) => void;
}

export function ConcertCard({
  id,
  artist,
  location,
  dateRange,
  price,
  imageUrl,
  isSelected,
  onToggleSelection,
}: ConcertCardProps) {
  return (
    <Card
      className={cn(
        "w-full bg-card border-border shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-2 relative group cursor-default overflow-hidden backface-hidden",
        isSelected && "ring-2 ring-primary border-primary",
      )}
    >
      <div
        className="absolute top-3 left-3 z-20 cursor-pointer"
        onClick={(e) => {
          e.stopPropagation();
          onToggleSelection?.(id);
        }}
      >
        <div
          className={cn(
            "w-6 h-6 rounded-md border-2 flex items-center justify-center transition-all",
            isSelected
              ? "bg-primary border-primary"
              : "bg-black/20 border-white/50 hover:border-white",
          )}
        >
          {isSelected && <Check className="h-4 w-4 text-primary-foreground" />}
        </div>
      </div>
      <CardContent className="p-0">
        <div className="relative aspect-[3/4] rounded-t-lg overflow-hidden backface-hidden">
          <Image
            src={imageUrl}
            alt={artist}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
            className="object-cover transition-all duration-500 group-hover:scale-110 backface-hidden overflow-hidden"
          />
          <div className="absolute top-2 right-2">
            <Badge className="bg-primary/90 text-primary-foreground backdrop-blur-sm">
              ${price.toFixed(0)}
            </Badge>
          </div>
        </div>
        <div className="p-4 space-y-2">
          <h3 className="text-xl font-bold text-card-foreground leading-tight">
            {artist}
          </h3>
          <div className="flex items-center text-sm text-muted-foreground">
            <MapPin className="mr-1 h-3 w-3" />
            <span className="truncate">{location}</span>
          </div>
          <div className="flex items-center text-xs text-muted-foreground font-medium uppercase tracking-wider">
            <Calendar className="mr-1 h-3 w-3" />
            <span>{dateRange}</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button className="w-full font-semibold" variant="default">
          Book Now
        </Button>
      </CardFooter>
    </Card>
  );
}
