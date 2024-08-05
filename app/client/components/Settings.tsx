import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Label } from "@/components/ui/label";

const Settings = () => {
  const [activeTab, setActiveTab] = useState("profile");

  return (
    <div className="bg-transparent p-8 rounded-3xl shadow-3xl">
      <h2 className="text-3xl font-bold mb-6 text-white">Account Settings</h2>
      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
        <TabsList className="grid grid-cols-3 gap-4 bg-transparent">
          {["Profile", "Notifications", "Security"].map((tab) => (
            <TabsTrigger
              key={tab.toLowerCase()}
              value={tab.toLowerCase()}
              className="bg-white bg-opacity-20 text-white hover:bg-opacity-30 data-[state=active]:bg-white data-[state=active]:bg-opacity-100 data-[state=active]:text-purple-900 transition-all duration-300"
            >
              {tab}
            </TabsTrigger>
          ))}
        </TabsList>

        <TabsContent value="profile">
          <ProfileSettings />
        </TabsContent>
        <TabsContent value="notifications">
          <NotificationSettings />
        </TabsContent>
        <TabsContent value="security">
          <SecuritySettings />
        </TabsContent>
      </Tabs>
    </div>
  );
};

const ProfileSettings = () => (
  <Card className="bg-transparent text-white">
    <CardHeader>
      <CardTitle>Profile Information</CardTitle>
    </CardHeader>
    <CardContent>
      <form className="space-y-6">
        <div className="flex items-center space-x-4">
          <Avatar className="w-24 h-24 border-4 border-white">
            <AvatarImage src="/placeholder-avatar.jpg" alt="Profile picture" />
            <AvatarFallback>UN</AvatarFallback>
          </Avatar>
          <Button variant="outline" className="bg-white bg-opacity-20 hover:bg-opacity-30 transition-all duration-300">Change Picture</Button>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="firstName">First Name</Label>
            <Input id="firstName" placeholder="John" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="lastName">Last Name</Label>
            <Input id="lastName" placeholder="Doe" />
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="username">Username</Label>
          <Input id="username" placeholder="johndoe" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="john@example.com" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="bio">Bio</Label>
          <Textarea id="bio" placeholder="Tell us about yourself" rows={4} />
        </div>
        <div className="space-y-2">
          <Label htmlFor="language">Language</Label>
          <Select defaultValue="en">
            <SelectTrigger>
              <SelectValue placeholder="Select a language" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="en">English</SelectItem>
              <SelectItem value="es">Spanish</SelectItem>
              <SelectItem value="fr">French</SelectItem>
              <SelectItem value="de">German</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <Button type="submit" className="bg-white text-pink-500 hover:bg-opacity-90 transition-all duration-300">Save Changes</Button>
      </form>
    </CardContent>
  </Card>
);

const NotificationSettings = () => (
  <Card className="bg-transparent text-white">
    <CardHeader>
      <CardTitle>Notification Preferences</CardTitle>
    </CardHeader>
    <CardContent>
      <form className="space-y-6">
        {[
          { id: "email", label: "Email Notifications" },
          { id: "sms", label: "SMS Notifications" },
          { id: "push", label: "Push Notifications" },
          { id: "newsletter", label: "Newsletter" },
        ].map((item) => (
          <div key={item.id} className="flex items-center justify-between">
            <Label htmlFor={item.id} className="flex-grow">{item.label}</Label>
            <Switch id={item.id} />
          </div>
        ))}
        <Button type="submit" className="bg-white text-green-500 hover:bg-opacity-90 transition-all duration-300">Save Preferences</Button>
      </form>
    </CardContent>
  </Card>
);

const SecuritySettings = () => (
  <Card className="bg-transparent text-white">
    <CardHeader>
      <CardTitle>Security Settings</CardTitle>
    </CardHeader>
    <CardContent>
      <form className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="currentPassword">Current Password</Label>
          <Input id="currentPassword" type="password" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="newPassword">New Password</Label>
          <Input id="newPassword" type="password" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="confirmPassword">Confirm New Password</Label>
          <Input id="confirmPassword" type="password" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="wallet">Wallet Address</Label>
          <Input id="wallet" placeholder="0x..." disabled />
        </div>
        <div className="space-y-2">
          <Label>Two-Factor Authentication</Label>
          <div className="flex items-center space-x-2">
            <Switch id="2fa" />
            <Label htmlFor="2fa">Enable 2FA</Label>
          </div>
        </div>
        <Button type="submit" className="bg-white text-purple-500 hover:bg-opacity-90 transition-all duration-300">Update Security Settings</Button>
      </form>
    </CardContent>
  </Card>
);

export default Settings;