import WelcomeCard from "../components/dashboard/WelcomeCard";
import StatsGrid from "../components/dashboard/StatsGrid";
import QuickActions from "../components/dashboard/QuickActions";
import ContinueLearning from "../components/dashboard/ContinueLearning";
import RecommendedTopics from "../components/dashboard/RecommendedTopics";
import RecentActivity from "../components/dashboard/RecentActivity";

export default function Dashboard() {
  return (
    <div className="space-y-8">
      <WelcomeCard userName="Sai" />

      <StatsGrid />

      <ContinueLearning />

      <QuickActions />

      <div className="grid gap-6 xl:grid-cols-2">
        <RecommendedTopics />
        <RecentActivity />
      </div>
    </div>
  );
}