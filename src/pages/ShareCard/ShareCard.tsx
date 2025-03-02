import { cn } from '../../lib/utils';

// Template Card Component for displaying a card with an image and title
export function ShareCard({ title, image }: { title: string; image: string }) {
  return (
    <div className={cn(
      'flex flex-col rounded-lg overflow-hidden',
      'w-[300px] sm:w-[320px] md:w-[180px]', // Adjusted desktop width to 180px
      'h-[400px] sm:h-[420px] md:h-[256px]'  // Adjusted desktop height to 256px
    )}>
      <div className={cn(
        'relative overflow-hidden',
        'h-[320px] sm:h-[340px] md:h-[200px]', // Adjusted image container height
        'rounded-lg' // Added rounded corners to image container
      )}>
        <img 
          src={image} 
          alt={title} 
          className={cn('w-full h-full object-cover rounded-lg')} // Added rounded corners to image
        />
      </div>
      <div className={cn(
        'flex items-center',
        'p-2 text-left text-sm',
        'h-[80px] md:h-[56px]' // Adjusted title container height for desktop
      )}>
        <div className={cn('truncate w-full')}>
          {title}
        </div>
      </div>
    </div>
  );
}
