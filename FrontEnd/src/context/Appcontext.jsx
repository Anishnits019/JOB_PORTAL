import {useState, createContext,useCallback } from "react";
import {jobsData,manageJobsData,viewApplicationsPageData} from '../assets/assets'
import { useEffect } from "react";
import axios from 'axios'
import { useNavigate } from "react-router-dom";
// import { data } from "react-router-dom";

export const AppContext=createContext()

export const AppContextProvider=(props)=>{
const navigate=useNavigate();

    const[searchFilter,setSearchFilter]=useState({title:"",location:""})
    const [filteredJobs,setFilteredJobs]=useState(null);
    const [isSearched,setIsSearched]=useState(false);
    // Filters
    
    const [filters,setFilters]=useState({
          jobTitle:"",
          location:"",
          locations: [],
          timings: [],
          categories: [],
          benefits: [],
          incentives: []
    });
    // Applied
    const [appliedJobs,setAppliedJobs]=useState([]);
    const [foundJob,setFoundJob]=useState([])
    // Manage Jobs
    const[manageJobs,setManageJobs]=useState([]);
    const [ViewApplications,setViewApplications]=useState([]);
    // Pages
    const [page,setPage]=useState(1) 
    const [jobs,setJobs]=useState([]);
    //Loader
    const [isloading,setLoading]=useState(false)
    // Add job
    const [totalPages,setTotalPages]=useState(1);
    const [addJob,setAddJob]=useState({
    title: '',
    description: '',
    location:{
    city: '',
    area: '',
    pinCode: '',
    address: '',
    },
    category: [],
    timings: [],
    postings: '',
    recruitment: [],
    benefits: [],
    incentives: [],
    detailedDescription: '',
    email: ''
    })
     const [isLoading,setIsLoading]=useState(false);
    const [title,setTitle]=useState([])
    const [area,setArea]=useState([])
    const [popUpKey,setPopUpKey]=useState(null);
    //Regiseter Employer
    const [formData, setFormData] = useState({
            name: '',
            email: '',
            password: '',
            image: null,
        });
    const [employerMode,setEmployeerMode]=useState(false);
    const [userMode,setUserMode]=useState(false);
    const [guestMode,setGuestMode]=useState(true);

  const [company, setCompany] = useState(() => {

  const saved = localStorage.getItem("company");
  return saved ? JSON.parse(saved) : null;
});

const [companyLoading, setCompanyLoading] = useState(true); 

const fetchCompany = useCallback(async () => {
  setCompanyLoading(true);
  try {
    const res = await axios.get(`${import.meta.env.VITE_BASE_URL}/auth/check-auth`, { 
    withCredentials: true 
    });


    if (res.data?.company) {
      setCompany(res.data.company);
    } else {
      setCompany(null);
    }
  } catch (err) {
    console.error("Error fetching company:", err);
    setCompany(null);
  } finally {
    setCompanyLoading(false); 
  }
}, []);
   
    useEffect(() => {
      const fetchJobTitles = async () => {
        try {
          const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/company/job/jobtitles`);
          
          if (response.data.success) {
            setTitle(response.data.jobTitles)
            console.log('Job titles:', response.data.jobTitles);
          } else {
            console.log('No job titles found');
          }
          
        } catch (error) {
          console.error('Error fetching job titles:', error);
        }
      }
      fetchJobTitles()
    },[])
    useEffect(() => {
      const fetchAreas = async () => {
        try {
          const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/company/job/areas`);
          
          if (response.data.success) {
            setArea(response.data.Areas)
            console.log(response.data.Areas)
            
          } else {
            console.log('No area titles found');
          }
          
        } catch (error) {
          console.error('Error fetching job titles:', error);
        }
      }
      fetchAreas()
    },[])
    useEffect(() => {
      const location = async () => {
        try {
          const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/company/job/location`);

          
          if (response.data.success) {
            setTitle(response.data.Area)
          } else {
            console.log('No job titles found');
          }
          
        } catch (error) {
          console.error('Error fetching job titles:', error);
        }
      };
      location();
    }, []);
    useEffect(() => {
        const managejobs=async()=>{
                try{
                    setManageJobs(manageJobsData)
                }
                catch(error){
                    console.log(`Failed to get Jobs ${error.message}`)
                }
            }
        
                  managejobs();
    },[])
    useEffect(()=>{
            const viewApplies=async()=>{
                try{
                    setViewApplications(viewApplicationsPageData)
                }
                catch(error){
                    console.log(`Failed to get Jobs ${error.message}`)
                }
            }
        
                  viewApplies();
    },[])
    const editFields=async(keyName,jobId,data)=>{
    try{
     const response = await axios.patch(
    `${import.meta.env.VITE_BASE_URL}/company/job/${jobId}/edit-job`,
     { [keyName]: data },
     { headers: { 'Content-Type': 'application/json' } }
     );

     if(response.data.success){
        setPopUpKey(null)
        setAddJob({...addJob,[keyName]:data})
    }
    }
   
    catch (error) {
    console.log(error.message)
  }

    }
   
   const filterJobs = useCallback(async (currentFilters, page) => {
    setIsLoading(true);
    try {
      const response = await axios.post(
  `${import.meta.env.VITE_BASE_URL}/job/filterjobs`,
  {
    page: page,
    filters: currentFilters
  },
  {
    headers: {
      'Content-type': 'application/json'
    }
  }
);

      
      if (response.data.success) {
        setFilteredJobs(response.data.job);
        setTotalPages(response.data.total/10);
      }
    } catch (error) {
      console.error('Filter error:', error);
    } finally {
      setIsLoading(false);
    }
  }, []);

   const parseFiltersFromURL = () => {
  const params = new URLSearchParams(window.location.search);
  return {
    jobTitle: params.get('jobTitle') || '',
    location: params.get('location') || '',
    locations: params.getAll('locations'),
    timings: params.getAll('timings'),
    categories: params.getAll('categories'),
    benefits: params.getAll('benefits'),
    incentives: params.getAll('incentives')
  };
    };
  // Unified effect for handling URL changes and filtering
    const handleRouteChange = useCallback(() => {
    const urlFilters = parseFiltersFromURL();
    setFilters(urlFilters);
    filterJobs(urlFilters, page);
  }, [page, filterJobs]);

  // Effect for handling URL changes and filtering
  useEffect(() => {
    // Initial load
    handleRouteChange();

    // Listen for back/forward navigation
    
  }, [handleRouteChange]);


  // Improved updateFiltersAndURL
  const updateFiltersAndURL = useCallback(async (updates) => {
    setFilters(prev => {
      const newFilters = { ...prev, ...updates };
      const params = new URLSearchParams();

      Object.entries(newFilters).forEach(([key, values]) => {
        if (Array.isArray(values)) {
          values.forEach(val => params.append(key, val));
        } else if (values) {
          params.set(key, values);
        }
      });

      const newUrl = `/search-jobs?${params.toString()}`;
      
      if (window.location.pathname !== '/search-jobs') {
        navigate(newUrl);
      } else {
        window.history.pushState({}, '', newUrl);
      }

      // Trigger filtering with the new state
      filterJobs(newFilters, 1); // Reset to page 1 when filters change
      setPage(1);
      
      return newFilters;
    });
  }, [navigate, filterJobs]);
  

  
        const value={
            searchFilter,setSearchFilter,isSearched,setIsSearched,page,setPage,jobs,setJobs,filteredJobs,setFilteredJobs,appliedJobs,setAppliedJobs,foundJob,setFoundJob,manageJobs,ViewApplications,setViewApplications,addJob,setAddJob,formData, setFormData,company,setCompany,popUpKey,setPopUpKey,editFields,title,setTitle,
            area,setArea,fetchCompany,employerMode,setEmployeerMode,userMode,setUserMode,guestMode,setGuestMode,companyLoading, setCompanyLoading,filters,setFilters,isLoading,setIsLoading,totalPages,filterJobs,updateFiltersAndURL,parseFiltersFromURL
        }

      return(

        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
      )
}


