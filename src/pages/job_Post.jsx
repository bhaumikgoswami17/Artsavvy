import React, { useEffect, useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import Modal from 'react-modal';
import Header from "../components/Header/Header";
import Searchbar from "../components/SearchBar/SearchBar";
import Logo1 from "../assets/clogo1.png";
import { SlLocationPin } from "react-icons/sl";
import { IoTimeOutline } from "react-icons/io5";
import { RiMoneyRupeeCircleLine } from "react-icons/ri";
import { getAlljobs } from "../operations/jobDetailsAPI";
import Dropdown from "../components/Dropdown/Dropdown";
import Footer from "../components/Footer/Footer";
import { AiOutlineCaretDown } from "react-icons/ai";

// Set the app element for accessibility
Modal.setAppElement('#root');

const Card = ({ children, onClick, imageUrl }) => (
  <div
    className="bg-white text-black rounded-lg hover:shadow-lg hover:shadow-zinc-300 duration-700 border-gray-300 border-2 p-6 cursor-pointer"
    onClick={onClick}
  >
    <img
      src={imageUrl || "/path/to/default/image.png"}  // Use default image if imageUrl is null
      alt="Job"
      className="w-full h-96 object-cover rounded-t-lg mb-4"
    />
    {children}
  </div>
);



const CardHeader = ({ children }) => <div className="mb-4">{children}</div>;

const CardTitle = ({ children }) => (
  <h3 className="text-lg font-bold">{children}</h3>
);

const CardDescription = ({ children }) => (
  <p className="text-sm text-gray-500">{children}</p>
);

const CardContent = ({ children }) => <div className="mb-4">{children}</div>;

const CardFooter = ({ children }) => <div className="mt-4">{children}</div>;

const Button = ({ children, onClick, className = "" }) => (
  <button
    onClick={onClick}
    className={`bg-blue-900 text-white px-4 py-2 rounded hover:scale-105 duration-200 ${className}`}
  >
    {children}
  </button>
);

const JobPost = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [locationQuery, setLocationQuery] = useState("");
  const [filters, setFilters] = useState({
    role: [],
    location: [],
    salary: [],
  });

  const [filterOptions, setFilterOptions] = useState({
    roles: [],
    locations: [],
    salaries: ["All","0-10000", "10000-25000", "26000-50000", "51000-100000", ">100000"],
  });

  const navigate = useNavigate();
  const [jobs, setJobs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedJob, setSelectedJob] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const jobsPerPage = 6;

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const result = await getAlljobs();
        console.log("Fetched jobs:", result); // Log fetched jobs
        if (result) {
          setJobs(result);

          const roles = [...new Set(result.map((job) => job.role))];
          const locations = [...new Set(result.map((job) => job.location.split(", ")[0]))];

          setFilterOptions((prev) => ({ ...prev, roles, locations }));

          // Set the first job as the selected job by default
          if (result.length > 0) {
            setSelectedJob(result[0]);
          }
        }
      } catch (error) {
        console.error("Error fetching jobs:", error);
      }
    };
    fetchJobs();
  }, []);


  const filteredJobs = useMemo(() => {
    return jobs.filter((job) => {
      const title = job.companyName ? job.companyName.toLowerCase() : '';
      const company = job.companyName ? job.companyName.toLowerCase() : '';
      const description = job.jobDescription ? job.jobDescription.toLowerCase() : '';
      const location = job.location ? job.location.toLowerCase() : '';

      const searchMatch =
        title.includes(searchQuery.toLowerCase()) ||
        company.includes(searchQuery.toLowerCase()) ||
        description.includes(searchQuery.toLowerCase());

      const locationMatch = location.includes(locationQuery.toLowerCase());

      const roleMatch =
        filters.role.length === 0 || filters.role.includes(job.role);

      const salaryMatch =
        filters.salary.length === 0 ||
        filters.salary.some((range) => {
          if (range === ">100000") {
            return (
              Number(job.salary.replace(/[^0-9]/g, "")) > 100000
            );
          } else {
            const [min, max] = range.split("-").map(Number);
            const salary = Number(job.salary.replace(/[^0-9]/g, ""));
            return (
              (min ? salary >= min : true) && (max ? salary <= max : true)
            );
          }
        });

      const filterMatch =
        filters.location.length === 0 ||
        filters.location.includes(job.location.split(", ")[0]);

      return (
        searchMatch &&
        locationMatch &&
        roleMatch &&
        salaryMatch &&
        filterMatch
      );
    });
  }, [searchQuery, locationQuery, filters, jobs]);

  const handleSearch = (title, location) => {
    setSearchQuery(title);
    setLocationQuery(location);
    setCurrentPage(1);
  };

  const handleFilterChange = (type, value) => {
    if (value === "All") {
      setFilters((prevFilters) => ({
        ...prevFilters,
        [type]: [],
      }));
    } else {
      setFilters((prevFilters) => ({
        ...prevFilters,
        [type]: [value],
      }));
    }
    setCurrentPage(1);
  };

  const handleViewMore = (job) => {
    setSelectedJob(job);
    if (window.innerWidth < 1024) {
      setIsModalOpen(true);
    }
  };

  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = filteredJobs.slice(indexOfFirstJob, indexOfLastJob);
  const totalPages = Math.ceil(filteredJobs.length / jobsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const nextPage = () =>
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  const prevPage = () => setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));

  return (
    <>
      <Header />
      <div className="lg:px-24 md:px-12 px-6 py-8 text-black">
        <h3 className="font-bold text-4xl py-2 rounded-lg">
          Find your <span className="text-blue-900">NEW ART</span> today
        </h3>
        <p className="text-gray-600 mb-8">
          Thousands of opportunities in the visual arts, performing arts, and digital media sectors are waiting for you.
        </p>
        <Searchbar onSearch={handleSearch} />

        <div className="bg-white rounded-lg shadow-md p-6 border-gray-300 border-2 mb-8">
          <div className="flex flex-wrap items-center lg:gap-8">
            <h2 className="text-lg font-bold mb-4">Filters:</h2>
            <div className="lg:flex gap-4">
              <Dropdown
                label={
                  <div className="flex items-center">
                    Type
                    <AiOutlineCaretDown className="ml-1 text-sm text-richblack-100" />
                  </div>
                }
                options={["All", ...filterOptions.roles]}
                selectedOptions={filters.role}
                onChange={(value) => handleFilterChange("role", value)}
                defaultSelected="All"
              />
              <Dropdown
                label={
                  <div className="flex items-center">
                    Location
                    <AiOutlineCaretDown className="ml-1 text-sm text-richblack-100" />
                  </div>
                }
                options={["All", ...filterOptions.locations]}
                selectedOptions={filters.location}
                onChange={(value) => handleFilterChange("location", value)}
                defaultSelected="All"
              />
              <Dropdown
                label={
                  <div className="flex items-center">
                    Prize
                    <AiOutlineCaretDown className="ml-1 text-sm text-richblack-100" />
                  </div>
                }
                options={["All", ...filterOptions.salaries]}
                selectedOptions={filters.salary}
                onChange={(value) => handleFilterChange("salary", value)}
                defaultSelected="All"
              />
            </div>
          </div>
        </div>

        <p className="text-center mb-4 font-semibold text-gray-700">Total Arts: {filteredJobs.length}</p>

        <div className="grid grid-cols-1 w-[1000px]">
          <div>
            <div className="grid grid-cols-1 gap-6">
              {currentJobs.length === 0 ? (
                <p className="text-center font-semibold text-gray-600">Data not found!</p>
              ) : (
                currentJobs.map((job) => (
                  <Card key={job._id} onClick={() => handleViewMore(job)} imageUrl={job.imageUrl || "/default-image.png"}>
                    <div className="flex gap-2">
                      <img className="h-12" src={Logo1} alt="" />
                      <CardHeader>
                        <CardTitle>{job.companyName}</CardTitle>
                        <CardDescription>{job.companyName}</CardDescription>
                      </CardHeader>
                    </div>
                    <CardContent>
                      <div className="mb-4 flex flex-wrap gap-8 text-gray-900">
                        <p className="flex items-center gap-1">
                          <SlLocationPin className="text-blue-900 p-1.5 w-7 h-7 rounded-full bg-[#e7f3ff]" />
                          {job.location}
                        </p>
                        <p className="flex items-center gap-1">
                          <IoTimeOutline className="text-blue-900 p-1.5 w-7 h-7 rounded-full bg-[#e7f3ff]" />
                          {job.role}
                        </p>
                        <p className="flex items-center gap-1">
                          <RiMoneyRupeeCircleLine className="text-blue-900 p-1.5 w-7 h-7 rounded-full bg-[#e7f3ff]" />
                          {job.salary}
                        </p>
                      </div>
                      <p className="mb-4">{job.companyDescription}</p>
                    </CardContent>
                    <CardFooter>
                      <div className="flex gap-8">
                        <Button onClick={() => navigate(`/jobapplicationform/${job._id}`)}>
                          Apply
                        </Button>
                        <Button onClick={() => handleViewMore(job)}>
                          View More
                        </Button>
                      </div>
                    </CardFooter>
                  </Card>

                ))
              )}
            </div>
            <div className="flex justify-center mt-8">
              <Button
                onClick={prevPage}
                className={currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""}
                disabled={currentPage === 1}
              >
                Previous
              </Button>
              {Array.from({ length: totalPages }, (_, index) => (
                <Button
                  key={index + 1}
                  onClick={() => paginate(index + 1)}
                  className={`mx-1 ${currentPage === index + 1 ? "bg-blue-700" : "bg-blue-900"}`}
                >
                  {index + 1}
                </Button>
              ))}
              <Button
                onClick={nextPage}
                className={currentPage === totalPages ? "opacity-50 cursor-not-allowed" : ""}
                disabled={currentPage === totalPages}
              >
                Next
              </Button>
            </div>
          </div>
        </div>
      </div>
      {selectedJob && (
        <Modal
          isOpen={isModalOpen}
          onRequestClose={() => setIsModalOpen(false)}
          className="bg-white p-6 rounded-lg shadow-lg"
        >
          <h2 className="text-2xl font-bold mb-4">{selectedJob.companyName}</h2>
          <p className="text-lg mb-4">{selectedJob.jobDescription}</p>
          <img
            src={selectedJob.imageUrl || 'default-image-url.png'}
            alt="Job"
            className="w-full h-full object-cover mb-4"
          />
          <Button onClick={() => setIsModalOpen(false)}>Close</Button>
        </Modal>
      )}
      <Footer />
    </>
  );
};

export default JobPost;
