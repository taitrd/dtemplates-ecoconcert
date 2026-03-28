'use client';

import * as React from 'react';
import { Search, Calendar as CalendarIcon, Filter, MoreHorizontal, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Calendar } from '@/components/ui/calendar';
import { Badge } from '@/components/ui/badge';
import { format } from 'date-fns';
import { cn } from '@/lib/utils';
import { useDispatch, useSelector } from 'react-redux';
import { setFilters, clearSelection } from '@/lib/tickets-slice';
import { fetchConcerts } from '@/lib/redux-actions';
import { RootState, AppDispatch } from '@/lib/store';

export function Toolbar() {
  const dispatch = useDispatch<AppDispatch>();
  const { filters, selectedConcertIds, concerts } = useSelector((state: RootState) => state.tickets);
  const [date, setDate] = React.useState<Date | undefined>(
    filters.date ? new Date(filters.date) : undefined
  );

  React.useEffect(() => {
    dispatch(fetchConcerts(filters));
  }, [filters, dispatch]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setFilters({ query: e.target.value }));
  };

  const handleDateSelect = (selectedDate: Date | undefined) => {
    setDate(selectedDate);
    dispatch(setFilters({ date: selectedDate ? selectedDate.toISOString() : undefined }));
  };

  const clearDate = () => {
    setDate(undefined);
    dispatch(setFilters({ date: undefined }));
  };

  const selectedConcerts = concerts.filter(c => selectedConcertIds.includes(c.id));

  return (
    <div className="flex flex-col gap-4 w-full p-6 bg-card/90 backdrop-blur-xl rounded-2xl border border-border shadow-2xl animate-in fade-in slide-in-from-top-4 duration-500 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary/50 via-primary to-primary/50" />
      
      <div className="flex flex-wrap items-center gap-4">
        {/* Search Input */}
        <div className="relative flex-1 min-w-[280px]">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground transition-colors group-focus-within:text-primary" />
          <Input
            placeholder="Search concerts, singers, or venues..."
            className="pl-10 h-12 bg-background border-border focus:ring-2 focus:ring-primary/20 transition-all text-base"
            value={filters.query}
            onChange={handleSearch}
          />
        </div>

        {/* Date Filter */}
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              size="lg"
              className={cn(
                'h-12 px-5 justify-start text-left font-semibold border-border bg-background hover:bg-accent hover:border-primary/50 transition-all',
                !date && 'text-muted-foreground'
              )}
            >
              <CalendarIcon className="mr-2 h-5 w-5 text-primary" />
              {date ? format(date, 'PPP') : <span>Filter by Date</span>}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0 rounded-2xl border-border shadow-2xl" align="start">
            <Calendar
              mode="single"
              selected={date}
              onSelect={handleDateSelect}
              initialFocus
              className="p-3"
            />
          </PopoverContent>
        </Popover>

        {/* Bulk Actions */}
        <Popover>
          <PopoverTrigger asChild>
            <Button 
              variant="outline" 
              size="lg"
              className={cn(
                "h-12 px-5 border-border bg-background hover:bg-accent hover:border-primary/50 transition-all font-semibold",
                selectedConcertIds.length > 0 && "border-primary bg-primary/5"
              )}
            >
              <MoreHorizontal className="mr-2 h-5 w-5 text-primary" />
              Bulk Actions
              {selectedConcertIds.length > 0 && (
                <Badge className="ml-2 bg-primary text-primary-foreground">
                  {selectedConcertIds.length}
                </Badge>
              )}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-64 p-2 rounded-2xl border-border shadow-2xl" align="end">
            <div className="p-3 space-y-1">
              <h4 className="text-xs font-bold uppercase tracking-widest text-muted-foreground px-2 pb-2">Actions</h4>
              <Button variant="ghost" className="w-full justify-start font-medium h-10 rounded-xl" disabled={selectedConcertIds.length === 0}>
                Export {selectedConcertIds.length} items
              </Button>
              <Button variant="ghost" className="w-full justify-start font-medium h-10 rounded-xl" disabled={selectedConcertIds.length === 0}>
                Share selection
              </Button>
              <div className="h-px bg-border my-2" />
              <Button 
                variant="ghost" 
                className="w-full justify-start font-bold h-10 rounded-xl text-destructive hover:bg-destructive/10 hover:text-destructive"
                disabled={selectedConcertIds.length === 0}
                onClick={() => dispatch(clearSelection())}
              >
                Clear Selection
              </Button>
            </div>
          </PopoverContent>
        </Popover>

        {/* Advanced Filter */}
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline" size="lg" className="h-12 px-5 border-border bg-background hover:bg-accent hover:border-primary/50 transition-all font-semibold">
              <Filter className="mr-2 h-5 w-5 text-primary" />
              Advanced
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-80 p-6 rounded-3xl border-border shadow-2xl" align="end">
            <div className="space-y-6">
              <div className="space-y-2">
                <h4 className="font-bold text-lg leading-none">Refine Search</h4>
                <p className="text-sm text-muted-foreground italic">
                  Apply detailed filters to find your perfect event.
                </p>
              </div>
              <div className="space-y-6">
                <div className="space-y-3">
                  <label className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Price Range</label>
                  <div className="flex items-center gap-3">
                    <Input type="number" placeholder="Min" className="h-10 bg-muted/50 border-transparent focus:bg-background" />
                    <span className="text-muted-foreground">—</span>
                    <Input type="number" placeholder="Max" className="h-10 bg-muted/50 border-transparent focus:bg-background" />
                  </div>
                </div>
                <div className="space-y-3">
                  <label className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Category</label>
                  <div className="flex flex-wrap gap-2">
                    {['Pop', 'Rock', 'Jazz', 'EDM', 'Indie'].map((cat) => (
                      <Badge key={cat} variant="outline" className="px-3 py-1 cursor-pointer transition-all hover:bg-primary hover:text-primary-foreground hover:border-primary">
                        {cat}
                      </Badge>
                    ))}
                  </div>
                </div>
                <Button className="w-full h-12 font-bold shadow-lg shadow-primary/20">Apply Filters</Button>
              </div>
            </div>
          </PopoverContent>
        </Popover>
      </div>

      {/* Active Filter/Selection Badges */}
      {(filters.query || date || selectedConcertIds.length > 0) && (
        <div className="flex flex-wrap items-center gap-2 pt-4 border-t border-border/50">
          <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-muted-foreground mr-2">Active:</span>
          {filters.query && (
            <Badge variant="secondary" className="pl-3 pr-2 py-1.5 gap-2 bg-primary/5 text-primary border-primary/20 rounded-full">
              <span className="font-medium">Search:</span> {filters.query}
              <X className="h-3.5 w-3.5 cursor-pointer hover:text-foreground transition-colors" onClick={() => dispatch(setFilters({ query: '' }))} />
            </Badge>
          )}
          {date && (
            <Badge variant="secondary" className="pl-3 pr-2 py-1.5 gap-2 bg-primary/5 text-primary border-primary/20 rounded-full">
              <span className="font-medium">Date:</span> {format(date, 'MMM d, yyyy')}
              <X className="h-3.5 w-3.5 cursor-pointer hover:text-foreground transition-colors" onClick={clearDate} />
            </Badge>
          )}
          {selectedConcertIds.length > 0 && (
            <Badge variant="secondary" className="pl-3 pr-2 py-1.5 gap-2 bg-primary text-primary-foreground rounded-full">
              <span className="font-bold">{selectedConcertIds.length} Selected</span>
              <X className="h-3.5 w-3.5 cursor-pointer hover:opacity-70" onClick={() => dispatch(clearSelection())} />
            </Badge>
          )}
          <Button
            variant="ghost"
            size="sm"
            className="h-8 px-3 text-xs font-bold text-muted-foreground hover:text-destructive hover:bg-destructive/5 transition-all rounded-full"
            onClick={() => {
              dispatch(setFilters({ query: '', date: undefined, location: undefined }));
              dispatch(clearSelection());
              setDate(undefined);
            }}
          >
            Reset All
          </Button>
        </div>
      )}
    </div>
  );
}
