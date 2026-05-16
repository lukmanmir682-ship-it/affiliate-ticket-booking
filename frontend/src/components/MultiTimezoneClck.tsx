import React, { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';

interface Timezone {
  name: string;
  offset: string;
  city: string;
}

const MultiTimezoneClock: React.FC = () => {
  const [currentTime, setCurrentTime] = useState<string>('');
  const [selectedTimezones, setSelectedTimezones] = useState<Timezone[]>([
    { name: 'UTC', offset: 'UTC+0', city: 'London' },
    { name: 'EST', offset: 'UTC-5', city: 'New York' },
    { name: 'CST', offset: 'UTC-6', city: 'Chicago' },
    { name: 'PST', offset: 'UTC-8', city: 'Los Angeles' },
    { name: 'IST', offset: 'UTC+5:30', city: 'India' },
    { name: 'JST', offset: 'UTC+9', city: 'Tokyo' },
  ]);

  const allTimezones: Timezone[] = [
    { name: 'UTC', offset: 'UTC', city: 'London' },
    { name: 'EST', offset: 'America/New_York', city: 'New York' },
    { name: 'CST', offset: 'America/Chicago', city: 'Chicago' },
    { name: 'MST', offset: 'America/Denver', city: 'Denver' },
    { name: 'PST', offset: 'America/Los_Angeles', city: 'Los Angeles' },
    { name: 'AKST', offset: 'America/Anchorage', city: 'Anchorage' },
    { name: 'HST', offset: 'Pacific/Honolulu', city: 'Honolulu' },
    { name: 'GMT', offset: 'Europe/London', city: 'London' },
    { name: 'CET', offset: 'Europe/Paris', city: 'Paris' },
    { name: 'EET', offset: 'Europe/Athens', city: 'Athens' },
    { name: 'MSK', offset: 'Europe/Moscow', city: 'Moscow' },
    { name: 'IST', offset: 'Asia/Kolkata', city: 'India' },
    { name: 'SGT', offset: 'Asia/Singapore', city: 'Singapore' },
    { name: 'HKT', offset: 'Asia/Hong_Kong', city: 'Hong Kong' },
    { name: 'JST', offset: 'Asia/Tokyo', city: 'Tokyo' },
    { name: 'AEST', offset: 'Australia/Sydney', city: 'Sydney' },
    { name: 'NZST', offset: 'Pacific/Auckland', city: 'Auckland' },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const getTimeInTimezone = (timezone: string): string => {
    try {
      const formatter = new Intl.DateTimeFormat('en-US', {
        timeZone: timezone,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      });
      return formatter.format(new Date());
    } catch (error) {
      return 'Invalid TZ';
    }
  };

  const toggleTimezone = (timezone: Timezone) => {
    const isSelected = selectedTimezones.some((tz) => tz.offset === timezone.offset);

    if (isSelected) {
      if (selectedTimezones.length > 1) {
        setSelectedTimezones(
          selectedTimezones.filter((tz) => tz.offset !== timezone.offset)
        );
      }
    } else {
      setSelectedTimezones([...selectedTimezones, timezone]);
    }
  };

  const isSelected = (timezone: Timezone): boolean => {
    return selectedTimezones.some((tz) => tz.offset === timezone.offset);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Clock className="w-10 h-10 text-blue-400" />
            <h1 className="text-5xl font-bold text-white">Multi-Timezone Clock</h1>
          </div>
          <p className="text-slate-400 text-lg">Track time across the globe in real-time</p>
        </div>

        {/* Main Clock Display */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {selectedTimezones.map((tz) => (
            <div
              key={tz.offset}
              className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-slate-600"
            >
              <div className="flex flex-col items-center">
                <h2 className="text-xl font-semibold text-blue-300 mb-2">{tz.city}</h2>
                <p className="text-sm text-slate-400 mb-4">{tz.name}</p>
                <div className="text-5xl font-mono font-bold text-white mb-2">
                  {getTimeInTimezone(tz.offset)}
                </div>
                <p className="text-xs text-slate-500">{tz.offset}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Timezone Selector */}
        <div className="bg-slate-800 rounded-2xl p-8 border border-slate-600">
          <h3 className="text-2xl font-bold text-white mb-6">Select Timezones</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {allTimezones.map((tz) => (
              <button
                key={tz.offset}
                onClick={() => toggleTimezone(tz)}
                className={`p-3 rounded-lg font-medium transition-all duration-200 border ${
                  isSelected(tz)
                    ? 'bg-blue-600 border-blue-400 text-white shadow-lg'
                    : 'bg-slate-700 border-slate-600 text-slate-300 hover:border-blue-400 hover:text-white'
                }`}
              >
                <div className="font-semibold">{tz.name}</div>
                <div className="text-xs opacity-75">{tz.city}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Current Local Time Footer */}
        <div className="mt-12 text-center text-slate-400">
          <p className="text-sm">Your Local Time: <span className="text-white font-mono text-lg">{currentTime}</span></p>
        </div>
      </div>
    </div>
  );
};

export default MultiTimezoneClock;
