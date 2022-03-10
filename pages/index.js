import { useMoralis } from 'react-moralis';
import Auth from "../components/Auth";
import Dashboard from '../components/Dashboard';

export default function Home() {
  const { isAuthenticated } = useMoralis();

  if (!isAuthenticated) {
    return <Auth />;
  }
  return <Dashboard />;
}
