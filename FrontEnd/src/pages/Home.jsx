import React, { useContext, useEffect,useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { Search } from '../components/Hero';
import { Footer } from '../components/Footer';
import { Browser } from '../components/Browser';
import { AppContext } from '../context/Appcontext';
import { LoadingSpinner } from '../components/Loading';
import { useUser} from '@clerk/clerk-react';

export const Home = () => {
  const { isLoaded, isSignedIn, user } = useUser();
  const { fetchCompany, company,companyLoading } = useContext(AppContext);
  const navigate = useNavigate();
  const [isLoading,setIsLoading]=useState(false);
  console.log('yes1');
  
  useEffect(() => {
  fetchCompany();
}, [fetchCompany]);

useEffect(() => {
  if (companyLoading) return; 

  if (company) {
    navigate('/dashboard', { replace: true });
  } else if (isSignedIn) {
    navigate('/', { replace: true });
  }
}, [company, isSignedIn, companyLoading, navigate]);

if (companyLoading) return <LoadingSpinner fullscreen />;

  return (
    <>
      <div className="bg-[000000]">
        <Navbar/>
        <Search/>
        <Browser/>
        <Footer/>
      </div>
  </>
  )}
