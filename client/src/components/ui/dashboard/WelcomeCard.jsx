import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

import Button from "../Button";
import { useAuth } from "../../../context/AuthContext";

export default function WelcomeCard() {
  const navigate = useNavigate();
  const { user } = useAuth();

  const userName = user?.name || "there";

  return (
    <section className="overflow-hidden rounded-2xl bg-slate-900 p-6 text-white shadow-sm sm:p-8">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-2xl">
          <p className="mb-2 text-sm font-medium text-indigo-300">
            Your interview preparation starts here
          </p>

          <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
            Welcome back, {userName}
          </h1>

          <p className="mt-3 text-sm leading-6 text-slate-300 sm:text-base">
            Continue building your skills, practice interviews, and get ready
            for your next opportunity.
          </p>
        </div>

        <Button
          className="w-full shrink-0 bg-white text-slate-900 hover:bg-slate-100 sm:w-auto"
          onClick={() => navigate("/practice")}
        >
          Start Practicing
          <ArrowRight size={16} />
        </Button>
      </div>
    </section>
  );
}