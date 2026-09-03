import WelcomeCard from "../components/ui/dashboard/WelcomeCard";
import StatsGrid from "../components/ui/dashboard/StatsGrid";
import QuickActions from "../components/ui/dashboard/QuickActions";
import ContinueLearning from "../components/ui/dashboard/ContinueLearning";
import RecommendedTopics from "../components/ui/dashboard/RecommendedTopics";
import RecentActivity from "../components/ui/dashboard/RecentActivity";

export default function Dashboard() {
  return (
    <div className="space-y-8">
      <WelcomeCard />

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