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
  const { fetchCompany, company } = useContext(AppContext);
  const navigate = useNavigate();
  const [isLoading,setIsLoading]=useState(false);
  console.log('yes1');
  useEffect(() => {
    fetchCompany();
  }, [fetchCompany]);
  
  useEffect(() => {

    setIsLoading(true);
          const timer=setTimeout(() => {

            setIsLoading(false);
            {company && navigate('/dashboard', { replace: true })};
            {isSignedIn && navigate('/', { replace: true });
            console.log('yes');
}
          }, 600);
          return ()=>clearTimeout(timer);
         },[company,isSignedIn,]);
  
  if(isLoading) return <LoadingSpinner fullscreen={true}/>
  return (
    <>
      <div>
        <Navbar/>
        <Search/>
        <Browser/>
        <Footer/>
      </div>
  
  </>
  )}
