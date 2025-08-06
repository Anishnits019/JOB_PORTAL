import {useState, createContext } from "react";
import {jobsData,manageJobsData,viewApplicationsPageData} from '../assets/assets'
import { useEffect } from "react";
import axios from 'axios'
// import { data } from "react-router-dom";

export const AppContext=createContext()

export const AppContextProvider=(props)=>{

    const[searchFilter,setSearchFilter]=useState({title:"",location:""})
    const [filteredJobs,setFilteredJobs]=useState(null);
    const [isSearched,setIsSearched]=useState(false);
    // Filters
    const [selectedLocation, setSelectedLocation] = useState([])
    const [selectedTimings, setSelectedTimings] = useState([])
    const [selectedCategories, setSelectedCategories] = useState([])
    const [selectedBenefits, setSelectedBenefits] = useState([])
    const [selectedIncentives, setSelectedIncentives] = useState([])
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
    // getcompnay
    const [company,setCompany]=useState(null);
    const [employerMode,setEmployeerMode]=useState(false);
    const [userMode,setUserMode]=useState(false);
    const [guestMode,setGuestMode]=useState(true);
    const fetchCompany=async()=>{
      try {
        const res = await axios.get('http://localhost:5000/auth/check-auth', { 
                withCredentials: true 
         });
        setCompany(res.data.company);
        console.log(res.data.company)
      } catch (err) {
        setCompany(null);
      }
    };
    useEffect(() => {
        fetchCompany();
    }, []);
  
    useEffect(() => {
      const fetchJobTitles = async () => {
        try {
          const response = await axios.get('http://localhost:5000/company/job/jobtitles');
          
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
          const response = await axios.get('http://localhost:5000/company/job/areas');
          
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
          const response = await axios.get('http://localhost:5000/company/job/location');
          
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
     const response=await axios.patch(`http://localhost:5000/company/job/${jobId}/edit-job`,
      {
        [keyName]:data
      },
      {headers:{
        'Content-Type': 'application/json',
      }}
    )
     if(response.data.success){
        setPopUpKey(null)
        setAddJob({...addJob,[keyName]:data})
    }
    }
   
    catch (error) {
    console.log(error.message)
  }

    }
    const searchJobs=async(title,city)=>{
      
       const response =await axios.post(`http://localhost:5000/job/getjob`,
          {
            title,city,page,
           
          },
       {headers:{
         'Content-type':'application/json'
       }})
        if(response.data.success){
          setFilteredJobs(response.data.job)
          console.log(response.data.job)
        }
    }
    useEffect(() => {
        if (jobs.length > 0 && !isSearched) {
        setFilteredJobs(jobs);
       }
    }, [jobs, isSearched]);
    useEffect(() => {
       if (searchFilter.title === "" && searchFilter.location === "") {
        setFilteredJobs(jobs);
         setIsSearched(false);
    }
     }, [searchFilter, jobs]);


        
        

  const handleLocationFilter = (e) => {
  const value = e.target.value
  const isChecked = e.target.checked
  if(isChecked){
    setSelectedLocation((prev) => [...prev, value])
  } else {
    const filterresults = selectedLocation.filter((c) => c !== value)
    setSelectedLocation(filterresults)
  }
}

  const handleTimingFilter = (e) => {
  const value = e.target.value
  const isChecked = e.target.checked
  if(isChecked){
    setSelectedTimings((prev) => [...prev, value])
  } else {
    const filterresults = selectedTimings.filter((c) => c !== value)
    setSelectedTimings(filterresults)
  }
}

  const handleCategoryFilter = (e) => {
  const value = e.target.value
  const isChecked = e.target.checked
  if(isChecked){
    setSelectedCategories((prev) => [...prev, value])
  } else {
    const filterresults = selectedCategories.filter((c) => c !== value)
    setSelectedCategories(filterresults)
  }
}

  const handleBenefitFilter = (e) => {
  const value = e.target.value
  const isChecked = e.target.checked
  if(isChecked){
    setSelectedBenefits((prev) => [...prev, value])
  } else {
    const filterresults = selectedBenefits.filter((c) => c !== value)
    setSelectedBenefits(filterresults)
  }
}

 const handleIncentiveFilter = (e) => {
  const value = e.target.value
  const isChecked = e.target.checked
  if(isChecked){
    setSelectedIncentives((prev) => [...prev, value])
  } else {
    const filterresults = selectedIncentives.filter((c) => c !== value)
    console.log(filterresults)
    setSelectedIncentives(filterresults)
  }
}
  useEffect(() => {
  const filterJobs = async () => {
    try {
      const response = await axios.post(
        `http://localhost:5000/job/filterjob`,
        {
          title: searchFilter.title,
          city: searchFilter.location, 
          page,
          selectedLocation,
          selectedTimings,
          selectedCategories,
          selectedBenefits,
          selectedIncentives
        },
        {
          headers: {
            'Content-type': 'application/json'
          }
        }
      );
      
      if (response.data.success) {
        setFilteredJobs(response.data.job);
      }
    } catch (error) {
      console.error('Filter error:', error);
    }
  };
  
  filterJobs();
}, [
  selectedLocation,
  selectedTimings,
  selectedCategories,
  selectedBenefits,
  selectedIncentives,
  searchFilter.title,
  searchFilter.location,
  page
]);
  
            // dont do i there because state value chnages i sasnchrnous na di tneed alway rerebdrind to using any state varaible instanlly on demand s0
//             useEffect(() => {
//               let result = jobs;
    
//     // Apply location filter if locations are selected
//                if (selectedLocation.length > 0) {
//                 result = result.filter(job => 
//                  selectedLocation.some(loc => 
//                 job.location.toLowerCase().includes(loc.toLowerCase())
//             )
//         );
//     }
    
//     // Apply category filter if categories are selected
//     if (selectedCategory.length > 0) {
//         result = result.filter(job => 
//             selectedCategory.some(cat => 
//                 job.category.toLowerCase().includes(cat.toLowerCase())
//             )
//         );
//     }
    
//     setFilteredJobs(result);
// }, [jobs, selectedCategory, selectedLocation]);
               

// th littile problem is that tht data is inside teh fxn and i am using it outside so they mus tbe inde a fxn  and this will upadte when i chnag some paramter so thi si sin use eefct

        const value={
            searchFilter,setSearchFilter,isSearched,setIsSearched,page,setPage,jobs,setJobs,filteredJobs,setFilteredJobs,searchJobs,handleLocationFilter,handleCategoryFilter,appliedJobs,setAppliedJobs,foundJob,setFoundJob,manageJobs,ViewApplications,setViewApplications,addJob,setAddJob,formData, setFormData,company,setCompany,popUpKey,setPopUpKey,editFields,title,setTitle,handleIncentiveFilter,
            area,setArea,handleTimingFilter,handleBenefitFilter,fetchCompany,employerMode,setEmployeerMode,userMode,setUserMode,guestMode,setGuestMode
        }

      return(

        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
      )
}


