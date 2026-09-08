import { Bell, Check, Mail, Monitor, UserRound } from "lucide-react";
import { useEffect, useState } from "react";

import PageLayout from "../components/PageLayout";
import Card from "../components/ui/Card";
import { useAuth } from "../context/AuthContext";

const NOTIFICATION_KEY = "preppilot_email_notifications";

export default function Settings() {
  const { user } = useAuth();
  const [emailNotifications, setEmailNotifications] = useState(false);

  useEffect(() => {
    setEmailNotifications(localStorage.getItem(NOTIFICATION_KEY) === "true");
  }, []);

  const handleNotificationChange = (event) => {
    const enabled = event.target.checked;
    setEmailNotifications(enabled);
    localStorage.setItem(NOTIFICATION_KEY, String(enabled));
  };

  return (
    <PageLayout title="Settings" description="Control your local PrepPilot preferences and review your account details.">
      <div className="max-w-3xl space-y-6">
        <Card className="p-6">
          <div className="flex items-start gap-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600"><UserRound size={21} /></div>
            <div>
              <h2 className="font-bold text-slate-900">Account</h2>
              <p className="mt-1 text-sm text-slate-600">Signed in as {user?.name || "PrepPilot member"}{user?.email ? ` · ${user.email}` : ""}</p>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-start justify-between gap-5">
            <div className="flex gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600"><Bell size={21} /></div>
              <div>
                <h2 className="font-bold text-slate-900">Email reminders</h2>
                <p className="mt-1 text-sm leading-6 text-slate-600">Save your reminder preference on this device. Delivery will be enabled when the notification service is added.</p>
              </div>
            </div>
            <label className="relative inline-flex shrink-0 cursor-pointer items-center">
              <input type="checkbox" className="peer sr-only" checked={emailNotifications} onChange={handleNotificationChange} />
              <span className="h-6 w-11 rounded-full bg-slate-200 transition peer-checked:bg-indigo-600 peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-indigo-600" />
              <span className="absolute left-1 h-4 w-4 rounded-full bg-white transition peer-checked:translate-x-5" />
            </label>
          </div>
          {emailNotifications && <p className="mt-4 flex items-center gap-2 rounded-lg bg-indigo-50 px-3 py-2 text-xs font-medium text-indigo-700"><Check size={15} /> Preference saved on this device.</p>}
        </Card>

        <Card className="p-6">
          <div className="flex items-start gap-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-slate-600"><Monitor size={21} /></div>
            <div>
              <h2 className="font-bold text-slate-900">Coming next</h2>
              <p className="mt-1 text-sm leading-6 text-slate-600">Profile editing, password management, and server-synced notifications will appear here as those secure backend features are completed.</p>
            </div>
          </div>
        </Card>

        <p className="flex items-center gap-2 text-xs text-slate-500"><Mail size={14} /> Email delivery is disabled until a secure mail password is configured.</p>
      </div>
    </PageLayout>
  );
}
