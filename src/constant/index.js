import Profile from "../assets/profile.png";

export const navbarItems = [
  { path: "/", label: "Home" },
  { path: "/profile", label: "Profile" },
  { path: "/leaves", label: "Leave Balance" },
];

export const leavesData = [
  { dayLeft: 9, totalDays: 10, color: "#1AF269", id: "Annual" },
  { dayLeft: 9, totalDays: 14, color: "#F45A5A", id: "Sick" },
  { dayLeft: 60, totalDays: 70, color: "#6928FF", id: "Hospitalization" },
];

export const historyData = [
  {
    imageUrl: Profile,
    type: "Annual",
    date: "30 May",
    status: "Approved",
    id: "1",
  },
  {
    imageUrl: Profile,
    type: "Sick",
    date: "6 Mar",
    status: "Approved",
    id: "2",
  },
  {
    imageUrl: Profile,
    type: "Sick",
    date: "5 Mar",
    status: "Approved",
    id: "3",
  },
];
