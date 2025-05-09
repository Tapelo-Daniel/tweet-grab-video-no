
import React from 'react';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { cn } from '@/lib/utils';

interface TabNavigationProps {
  isMobile: boolean;
  value: string;
  onValueChange: (value: string) => void;
  disabled?: boolean;
}

const TabNavigation: React.FC<TabNavigationProps> = ({ isMobile, value, onValueChange, disabled }) => {
  return (
    <Tabs value={value} onValueChange={onValueChange} className="w-full">
      <TabsList className={cn(
        "grid mb-6 w-full",
        isMobile ? "grid-cols-3 gap-1" : "grid-cols-5"
      )}>
        <TabsTrigger 
          value="business-owner" 
          className="text-sm whitespace-nowrap"
          disabled={disabled}
        >
          {isMobile ? "Owner" : "Business Owner"}
        </TabsTrigger>
        <TabsTrigger 
          value="contact" 
          className="text-sm"
          disabled={disabled}
        >
          Contact
        </TabsTrigger>
        <TabsTrigger 
          value="address" 
          className="text-sm"
          disabled={disabled}
        >
          Address
        </TabsTrigger>
        {isMobile && (
          <div className="col-span-3 mt-1">
            <TabsList className="grid grid-cols-2 w-full">
              <TabsTrigger 
                value="hours" 
                className="text-sm"
                disabled={disabled}
              >
                Hours
              </TabsTrigger>
              <TabsTrigger 
                value="details" 
                className="text-sm" 
                disabled={disabled}
              >
                Details
              </TabsTrigger>
            </TabsList>
          </div>
        )}
        {!isMobile && (
          <>
            <TabsTrigger 
              value="hours" 
              className="text-sm"
              disabled={disabled}
            >
              Hours
            </TabsTrigger>
            <TabsTrigger 
              value="details" 
              className="text-sm"
              disabled={disabled}
            >
              Details
            </TabsTrigger>
          </>
        )}
      </TabsList>
    </Tabs>
  );
};

export default TabNavigation;
