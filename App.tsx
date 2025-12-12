import React, { useState } from 'react';
import { Background } from './components/Background';
import { Login } from './components/Login';
import { Layout } from './components/Layout';
import { Assessment } from './components/Assessment';
import { Curriculum } from './components/Curriculum';
import { Tracking } from './components/Tracking';
import { AIMentor } from './components/AIMentor';
import { AppView } from './types';

const App: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentView, setCurrentView] = useState<AppView>(AppView.LOGIN);

  const handleLoginSuccess = () => {
    setIsAuthenticated(true);
    setCurrentView(AppView.ASSESSMENT);
  };

  const renderView = () => {
    switch (currentView) {
      case AppView.ASSESSMENT:
        return <Assessment />;
      case AppView.CURRICULUM:
        return <Curriculum />;
      case AppView.TRACKING:
        return <Tracking />;
      case AppView.MENTOR:
        return <AIMentor />;
      default:
        return <Assessment />;
    }
  };

  return (
    <>
      <Background />
      {!isAuthenticated ? (
        <Login onLoginSuccess={handleLoginSuccess} />
      ) : (
        <Layout currentView={currentView} onChangeView={setCurrentView}>
          {renderView()}
        </Layout>
      )}
    </>
  );
};

export default App;
