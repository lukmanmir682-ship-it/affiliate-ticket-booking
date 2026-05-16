# Multi-Timezone Digital Clock

A beautiful, responsive React component that displays the current time across multiple timezones in real-time.

## Features

✨ **Real-time Updates** - Clock updates every second  
🌍 **Multiple Timezones** - Display 17+ different timezones  
🎨 **Modern UI** - Gradient design with Tailwind CSS  
📱 **Responsive** - Works on desktop, tablet, and mobile  
🔄 **Interactive** - Add/remove timezones with one click  
⚡ **Performance** - Optimized with React hooks  

## Installation

### Prerequisites
- React 18+
- TypeScript
- Tailwind CSS
- Lucide React (for icons)

### Install Dependencies

```bash
cd frontend
npm install lucide-react
```

## Usage

### Import the Component

```tsx
import MultiTimezoneClock from './components/MultiTimezoneClck';

function App() {
  return <MultiTimezoneClock />;
}

export default App;
```

### Or Use the Page

```tsx
import ClockPage from './pages/ClockPage';

function App() {
  return <ClockPage />;
}

export default App;
```

## Component Props

Currently, the component uses default timezones but can be extended to accept props:

```tsx
interface MultiTimezoneClockProps {
  initialTimezones?: Timezone[];
  onTimeChange?: (time: string) => void;
}
```

## Supported Timezones

- **North America**: EST, CST, MST, PST, AKST, HST
- **Europe**: GMT, CET, EET, MSK
- **Asia**: IST, SGT, HKT, JST
- **Pacific**: AEST, NZST
- **UTC**: UTC

## Customization

### Add New Timezones

Edit the `allTimezones` array in `MultiTimezoneClck.tsx`:

```tsx
const allTimezones: Timezone[] = [
  { name: 'BRT', offset: 'America/Sao_Paulo', city: 'São Paulo' },
  { name: 'CAT', offset: 'Africa/Cairo', city: 'Cairo' },
  // Add more timezones...
];
```

### Customize Colors

Modify the Tailwind classes in the component:

```tsx
// Change gradient colors
className="bg-gradient-to-br from-purple-900 via-purple-800 to-purple-900"

// Change accent colors
className="text-purple-400"
```

### Change Update Frequency

Adjust the interval in `useEffect`:

```tsx
const timer = setInterval(() => {
  setCurrentTime(new Date().toLocaleTimeString());
}, 500); // Update every 500ms instead of 1000ms
```

## Browser Compatibility

- Chrome 70+
- Firefox 78+
- Safari 13+
- Edge 79+

## Performance Tips

1. **Use React.memo** to prevent unnecessary re-renders:
   ```tsx
   export default React.memo(MultiTimezoneClock);
   ```

2. **Lazy load** if used in a larger app:
   ```tsx
   const MultiTimezoneClock = React.lazy(() => import('./components/MultiTimezoneClck'));
   ```

## API Reference

### Timezone Interface

```typescript
interface Timezone {
  name: string;          // Short timezone code (EST, PST, etc.)
  offset: string;        // IANA timezone identifier
  city: string;          // City name for display
}
```

### Key Methods

- `getTimeInTimezone(timezone: string)` - Returns formatted time string for given timezone
- `toggleTimezone(timezone: Timezone)` - Add/remove timezone from display
- `isSelected(timezone: Timezone)` - Check if timezone is currently displayed

## Troubleshooting

### Times showing incorrectly?
- Ensure your system timezone is set correctly
- Check browser console for timezone validation errors

### Component not updating?
- Verify `setInterval` is running (check DevTools)
- Ensure React is properly imported

### Styling issues?
- Install/update Tailwind CSS
- Clear Next.js/Vite cache: `rm -rf .next` or `npm run build`

## License

MIT

## Author

lukmanmir682-ship-it
