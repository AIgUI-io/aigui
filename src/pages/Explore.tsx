import { Hero } from '../components/Hero/Hero';
import { cn } from '../lib/utils';
import { CategoryBrowse } from './CategoryBrowse/CategoryBrowse';
import { LatestShares } from './LatestShares/LatestShares';

export function Explore({
  className = '', children = null,
}) {
  return (
    <div className={cn('min-h-screen bg-white', className)}>
      <Hero
        gradientFrom='from-blue-900'
        gradientTo='to-purple-800'
      />
      <div className={cn('pt-4 pb-6')}>
        <CategoryBrowse />
        <LatestShares />
      </div>
      {children}
    </div>
  );
}
