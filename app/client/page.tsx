"use client"
import { useState } from 'react';
import { Tabs, TabsContent } from "@/components/ui/tabs";
import Settings from './components/Settings';
import Overview from './components/Overview';
import { AnimatedGridPatternDemo } from './components/clientBackground';
import Sidebar from './components/Sidebar';
import Notifications from './components/Notifications';
import CreateGig from './components/CreateGig';
import FindFreelancers from './components/FindFreelancers';
import ActiveProjects from './components/ActiveProjects';
import Messages from './components/Messages';
import Transactions from './components/Transactions';
import MyGigs from './components/Gigs';

const DashboardPage = () => {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="flex h-screen bg-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <AnimatedGridPatternDemo />
      </div>

      <div className="relative z-10 flex w-full sm:top-0 top-5">
        <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
        <div className="flex-1 flex flex-col overflow-hidden">
          <main className="flex-1 overflow-x-hidden overflow-y-auto bg-transparent">
            <div className="container mx-auto px-6 py-8">
              <Tabs value={activeTab} onValueChange={setActiveTab}>
                <TabsContent value="overview"><Overview /></TabsContent>
                <TabsContent value="my-gigs"><MyGigs /></TabsContent>
                <TabsContent value="create-gig"><CreateGig /></TabsContent>
                <TabsContent value="find-freelancers"><FindFreelancers /></TabsContent>
                <TabsContent value="active-projects"><ActiveProjects /></TabsContent>
                <TabsContent value="messages"><Messages /></TabsContent>
                <TabsContent value="transactions"><Transactions /></TabsContent>
                <TabsContent value="notifications"><Notifications /></TabsContent>
                <TabsContent value="settings"><Settings /></TabsContent>
              </Tabs>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;