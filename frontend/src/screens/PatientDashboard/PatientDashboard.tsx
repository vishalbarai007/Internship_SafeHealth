import React, { useState } from "react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { ThemeToggle } from "../../components/ui/theme-toggle";
import {
  User,
  FileText,
  Calendar as CalendarIcon,
  Bell,
  Settings,
  LogOut,
  Search,
  Heart,
  Thermometer,
  Droplet,
  Activity,
  Plus,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { format } from "date-fns";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "../../components/ui/dialog";
import { Label } from "../../components/ui/label";
import { Input } from "../../components/ui/input";

export const PatientDashboard = () => {
  const navigate = useNavigate();
  const [appointments, setAppointments] = useState([
    {
      date: "2025-03-04",
      title: "Follow-up Appointment",
      time: "10:00 AM",
      type: "reminder"
    },
    {
      date: "2025-03-15",
      title: "Annual Checkup",
      time: "2:30 PM",
      type: "appointment"
    }
  ]);

  const menuItems = [
    { icon: <User className="h-5 w-5" />, label: "Profile" },
    { icon: <FileText className="h-5 w-5" />, label: "Records" },
    { icon: <CalendarIcon className="h-5 w-5" />, label: "Appointments" },
    { icon: <Bell className="h-5 w-5" />, label: "Notifications" },
    { icon: <Settings className="h-5 w-5" />, label: "Settings" },
  ];

  const healthMetrics = [
    {
      icon: <Heart className="h-6 w-6 text-red-500" />,
      value: "72",
      unit: "bpm",
      label: "Heart rate",
      description: "Your heart rate is normal",
      bgColor: "bg-white",
    },
    {
      icon: <Thermometer className="h-6 w-6 text-yellow-500" />,
      value: "36.4",
      unit: "celsius",
      label: "Body temperature",
      description: "Your temperature is normal",
      bgColor: "bg-[#1B4261]",
      textColor: "text-white",
    },
    {
      icon: <Droplet className="h-6 w-6 text-red-500" />,
      value: "98",
      unit: "mmhg",
      label: "Blood pressure",
      description: "Your blood pressure is normal",
      bgColor: "bg-white",
    },
    {
      icon: <Activity className="h-6 w-6 text-blue-500" />,
      value: "5",
      unit: "mmol/l",
      label: "Blood Sugar level",
      description: "Your blood sugar is normal",
      bgColor: "bg-[#1B4261]",
      textColor: "text-white",
    },
  ];

  const allergyRecords = [
    {
      type: "Peanuts",
      category: "Food Allergy",
      affected: "Mouth, Throat",
      severity: "Severe",
      severityColor: "bg-red-500",
    },
    {
      type: "Pollen",
      category: "Environmental Allergy",
      affected: "Nose, Eyes",
      severity: "Moderate",
      severityColor: "bg-yellow-500",
    },
    {
      type: "Penicillin",
      category: "Medication Allergy",
      affected: "Skin, Respiratory",
      severity: "Mild",
      severityColor: "bg-green-500",
    },
  ];

  const medicalReports = [
    {
      icon: <FileText className="h-6 w-6" />,
      label: "Diagnosis reports",
    },
    {
      icon: <FileText className="h-6 w-6" />,
      label: "Patient's reports",
    },
    {
      icon: <FileText className="h-6 w-6" />,
      label: "Prescription",
    },
  ];

  const handleAddAppointment = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const newAppointment = {
      date: formData.get("date"),
      title: formData.get("title"),
      time: formData.get("time"),
      type: formData.get("type"),
    };
    setAppointments([...appointments, newAppointment]);
    event.target.reset();
  };

  const currentDate = new Date();
  const daysInMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + 1,
    0
  ).getDate();
  const firstDayOfMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    1
  ).getDay();

  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);
  const weekDays = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

  return (
    <div className="min-h-screen bg-[#E2F4DB] dark:bg-gray-900 flex">
      <aside className="w-20 md:w-64 bg-white dark:bg-gray-800 p-4 flex flex-col">
        <div className="flex items-center justify-between mb-8">
          <img
            src="/whatsapp-image-2025-03-03-at-19-24-30-0ccf92f8-removebg-preview-.png"
            alt="HealthSafe Logo"
            className="h-12 hidden md:block"
          />
          <ThemeToggle />
        </div>

        <nav className="space-y-2">
          {menuItems.map((item, index) => (
            <Button
              key={index}
              variant="ghost"
              className="w-full justify-start gap-2 text-gray-600 dark:text-gray-300"
            >
              {item.icon}
              <span className="hidden md:inline">{item.label}</span>
            </Button>
          ))}
        </nav>

        <Button
          variant="ghost"
          className="w-full justify-start gap-2 text-red-600 dark:text-red-400 mt-auto"
          onClick={() => navigate("/")}
        >
          <LogOut className="h-5 w-5" />
          <span className="hidden md:inline">Logout</span>
        </Button>
      </aside>

      <main className="flex-1 p-4 md:p-8">
        <div className="flex items-center justify-between mb-8">
          <div className="flex-1 max-w-xl">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search"
                className="w-full pl-10 pr-4 py-2 rounded-full bg-white dark:bg-gray-800 border-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
          <Bell className="h-6 w-6 ml-4 text-gray-600 dark:text-gray-300" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {healthMetrics.map((metric, index) => (
            <Card
              key={index}
              className={`${metric.bgColor} ${metric.textColor || 'text-gray-900'}`}
            >
              <CardContent className="p-4">
                <div className="flex items-center gap-2 mb-2">
                  {metric.icon}
                  <span className="text-2xl font-bold">
                    {metric.value}
                    <span className="text-sm ml-1">{metric.unit}</span>
                  </span>
                </div>
                <h3 className="font-medium mb-1">{metric.label}</h3>
                <p className="text-sm opacity-80">{metric.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="bg-white dark:bg-gray-800">
            <CardContent className="p-6">
              <h2 className="text-xl font-bold mb-4">Your allergy records</h2>
              <div className="space-y-4">
                {allergyRecords.map((allergy, index) => (
                  <div
                    key={index}
                    className="bg-[#1B4261] text-white p-4 rounded-lg flex justify-between items-center"
                  >
                    <div>
                      <h3 className="font-medium">{allergy.type}</h3>
                      <p className="text-sm opacity-80">{allergy.category}</p>
                      <p className="text-sm opacity-80">Affected: {allergy.affected}</p>
                    </div>
                    <span className={`${allergy.severityColor} px-3 py-1 rounded-full text-white text-sm`}>
                      {allergy.severity}
                    </span>
                  </div>
                ))}
                <Button className="w-full bg-[#1B4261] text-white">Add</Button>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white dark:bg-gray-800">
            <CardContent className="p-6">
              <h2 className="text-xl font-bold mb-4">Medical reports</h2>
              <div className="space-y-4">
                {medicalReports.map((report, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    className="w-full justify-start gap-2 bg-[#1B4261] text-white hover:bg-[#1B4261]/90"
                  >
                    {report.icon}
                    {report.label}
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <aside className="hidden xl:block w-80 bg-[#1B4261] text-white p-6">
        <div className="text-center mb-8">
          <img
            src="https://placekitten.com/100/100"
            alt="Patient"
            className="w-24 h-24 rounded-full mx-auto mb-4"
          />
          <h2 className="text-xl font-bold">PATIENT NAME: ELLIE RAY</h2>
          <p className="text-sm opacity-80">DOB: 17/02/1993</p>
        </div>

        <div className="grid grid-cols-3 gap-4 mb-8">
          <div className="text-center bg-[#2A5172] p-3 rounded-lg">
            <p className="text-sm">AGE</p>
            <p className="text-xl font-bold">32</p>
          </div>
          <div className="text-center bg-[#2A5172] p-3 rounded-lg">
            <p className="text-sm">HEIGHT</p>
            <p className="text-xl font-bold">154</p>
          </div>
          <div className="text-center bg-[#2A5172] p-3 rounded-lg">
            <p className="text-sm">WEIGHT</p>
            <p className="text-xl font-bold">60</p>
          </div>
        </div>

        <div className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-bold">Appointments Scheduled</h3>
            <Dialog>
              <DialogTrigger asChild>
                <Button size="icon" className="bg-[#2A5172] hover:bg-[#2A5172]/90">
                  <Plus className="h-4 w-4" />
                </Button>
              </DialogTrigger>
              <DialogContent className="bg-white dark:bg-gray-800">
                <DialogHeader>
                  <DialogTitle>Add New Appointment</DialogTitle>
                </DialogHeader>
                <form onSubmit={handleAddAppointment} className="space-y-4">
                  <div>
                    <Label htmlFor="title">Title</Label>
                    <Input id="title" name="title" required />
                  </div>
                  <div>
                    <Label htmlFor="date">Date</Label>
                    <Input id="date" name="date" type="date" required />
                  </div>
                  <div>
                    <Label htmlFor="time">Time</Label>
                    <Input id="time" name="time" type="time" required />
                  </div>
                  <div>
                    <Label htmlFor="type">Type</Label>
                    <select
                      id="type"
                      name="type"
                      className="w-full rounded-md border border-gray-300 bg-transparent px-3 py-2"
                      required
                    >
                      <option value="appointment">Appointment</option>
                      <option value="reminder">Reminder</option>
                      <option value="follow-up">Follow-up</option>
                    </select>
                  </div>
                  <Button type="submit" className="w-full bg-[#1B4261]">
                    Add Appointment
                  </Button>
                </form>
              </DialogContent>
            </Dialog>
          </div>

          <div className="bg-[#2A5172] rounded-lg p-4">
            <div className="text-center mb-4">
              <h4 className="font-bold">{format(currentDate, "MMMM yyyy")}</h4>
            </div>
            <div className="grid grid-cols-7 gap-1 mb-2">
              {weekDays.map((day) => (
                <div key={day} className="text-center text-sm font-medium">
                  {day}
                </div>
              ))}
            </div>
            <div className="grid grid-cols-7 gap-1">
              {Array(firstDayOfMonth)
                .fill(null)
                .map((_, index) => (
                  <div key={`empty-${index}`} className="h-8" />
                ))}
              {days.map((day) => {
                const date = format(
                  new Date(currentDate.getFullYear(), currentDate.getMonth(), day),
                  "yyyy-MM-dd"
                );
                const hasAppointment = appointments.some((apt) => apt.date === date);
                return (
                  <div
                    key={day}
                    className={`h-8 flex items-center justify-center rounded-full text-sm
                      ${
                        hasAppointment
                          ? "bg-green-500 text-white"
                          : "hover:bg-[#1B4261] cursor-pointer"
                      }`}
                  >
                    {day}
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mt-4 space-y-2">
            {appointments.map((apt, index) => (
              <div
                key={index}
                className="bg-[#2A5172] p-3 rounded-lg flex justify-between items-center"
              >
                <div>
                  <p className="font-medium">{apt.title}</p>
                  <p className="text-sm opacity-80">
                    {format(new Date(apt.date), "MMM dd")} - {apt.time}
                  </p>
                </div>
                <span
                  className={`px-2 py-1 rounded-full text-xs ${
                    apt.type === "reminder"
                      ? "bg-yellow-500"
                      : apt.type === "follow-up"
                      ? "bg-blue-500"
                      : "bg-green-500"
                  }`}
                >
                  {apt.type}
                </span>
              </div>
            ))}
          </div>
        </div>
      </aside>
    </div>
  );
};