import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";

import AppLayout from "./shared/layout/AppLayout";

import { Dashboard } from "./features/dashboard";
import { Practice, PracticeSession } from "./features/practice";
import { Progress } from "./features/progress";
import { Profile } from "./features/profile";
import { MockInterview } from "./features/interviews";
import { Settings } from "./features/settings";

import { Login, Register, Welcome } from "./features/auth";
import NotFound from "./app/pages/NotFound";
import ApiTest from "./app/pages/ApiTest";

import ProtectedRoute from "./app/routes/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/welcome" element={<Navigate to="/" replace />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Application routes */}
        <Route element={<AppLayout />}>
          {/* Dashboard */}
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />

          {/* Practice */}
          <Route
            path="/practice"
            element={
              <ProtectedRoute>
                <Practice />
              </ProtectedRoute>
            }
          />

          {/* Practice Session */}
          <Route
            path="/practice/session/:topicTitle"
            element={
              <ProtectedRoute>
                <PracticeSession />
              </ProtectedRoute>
            }
          />

          {/* Progress */}
          <Route
            path="/progress"
            element={
              <ProtectedRoute>
                <Progress />
              </ProtectedRoute>
            }
          />

          {/* Profile */}
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />

          <Route
            path="/mock-interview"
            element={
              <ProtectedRoute>
                <MockInterview />
              </ProtectedRoute>
            }
          />

          <Route
            path="/settings"
            element={
              <ProtectedRoute>
                <Settings />
              </ProtectedRoute>
            }
          />

          {/* API Test */}
          <Route
            path="/api-test"
            element={<ApiTest />}
          />

          {/* 404 */}
          <Route
            path="*"
            element={<NotFound />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
