const Projects = () => {
    return (
      <section className="p-10">
        <div className="flex flex-wrap">
          <div>
            <h2 className="text-3xl font-semibold mb-4 text-red-600">Projects</h2>
            <p className="text-lg text-[#3FC965]">Check out my recent Project:</p>
            <ul className="text-[#E720B9] underline list-decimal ml-6 text-lg">
              <li><a href="https://vehiclerent.netlify.app/" target="_blank" rel="noopener noreferrer">Vehicle Rental Platform (MERN + Razorpay)</a></li>
            </ul>
            <p className="text-lg text-[#3FC965]">Check out some of my recent mini Projects:</p>
            <ul className="text-[#E720B9] underline list-decimal ml-6 text-lg">
              <li><a href="https://g1js.netlify.app/" target="_blank" rel="noopener noreferrer">HTML,CSS,JS and Advance JS Projects</a></li>
              <li><a href="" target="_blank" rel="noopener noreferrer">React Projects</a></li>
              <li><a href="" target="_blank" rel="noopener noreferrer">Library Management Dashboard (React + Formik)</a></li>
              <li><a href="" target="_blank" rel="noopener noreferrer">CRUD App using JSONPlaceholder API</a></li>
              <li><a href="" target="_blank" rel="noopener noreferrer">URL Shortener Web App (React + Node.js)</a></li>          
            </ul>
          </div>
          <div>
            <h2 className="text-3xl font-semibold mb-4 text-red-600">GitHub Source</h2>
            <p className="text-lg text-[#3FC965]">Check out GitHub Source Code of Folowing Project:</p>
            <ul className="text-[#E720B9] underline list-decimal ml-6 text-lg">
              <li><a href="" target="_blank" rel="noopener noreferrer">Vehicle Rental Platform (MERN + Razorpay)</a></li>
            </ul>
            <p className="text-lg text-[#3FC965]">Check out GitHub Source Code of Folowing mini Projects:</p>
            <ul className="text-[#E720B9] underline list-decimal ml-6 text-lg">
              <li><a href="/" target="_blank" rel="noopener noreferrer">HTML,CSS,JS and Advance JS Projects</a></li>
              <li><a href="" target="_blank" rel="noopener noreferrer">React Projects</a></li>
              <li><a href="" target="_blank" rel="noopener noreferrer">Library Management Dashboard (React + Formik)</a></li>
              <li><a href="" target="_blank" rel="noopener noreferrer">CRUD App using JSONPlaceholder API</a></li>
              <li><a href="" target="_blank" rel="noopener noreferrer">URL Shortener Web App (React + Node.js)</a></li>          
            </ul>
          </div>
        </div>
        
      </section>
    );
  };
  
  export default Projects;