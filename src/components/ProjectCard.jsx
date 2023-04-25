// import React, { Component } from 'react'

// class ProjectCard extends Component {
    
//     render() {
//         return (
        
//             <div data-aos='fade-up' className=' p-4 shadow-lg shadow-[#d6d6d6] group container rounded flex flex-col justify-center items-center mx-auto bg-[#ffffff] '>

//                 <div className='w-full h-full sm:h-[450px] bg-[#eeeeee]'> 
//                     <img className='object-cover rounded w-full h-full shadow filter contrast-75 hover:contrast-100 ease-in-out duration-500' src={this.props.projectImg} alt={this.props.alt}/>
//                 </div>

//                 <div className='flex flex-col justify-center mt-4'>
//                     {/* project title */}
//                     <span className='text-lg text-center font-bold'>
//                         {this.props.projectTitle}
//                     </span>
//                     {/* project subtitle */}
//                     <span className='text-center text-sm font-bold'>
//                         {this.props.projectSubtitle}
//                     </span>
//                     {/* project subtitle */}
//                     <span className='text-center text-sm my-4'>
//                         {this.props.desc}
//                     </span>
//                     <div>

//                 </div>
//                     {/* buttons */}
//                     <div className='pt-2 text-center'>
//                         <a href={this.props.demo} target='_blank' rel="noreferrer">
//                             <button className='text-sm text-center border border-[#4C433D] rounded px-4 py-2 m-2 bg-white font-bold hover:bg-[#4C433D] hover:text-[#ffffff] hover:border-[#4C433D] transition ease-in-out duration-300'>Demo</button>
//                         </a>
//                         <a href={this.props.code} target='_blank' rel="noreferrer">
//                             <button className='text-sm text-center border border-[#4C433D] rounded px-4 py-2 m-2 bg-white font-bold hover:bg-[#4C433D] hover:text-[#ffffff] hover:border-[#4C433D] transition ease-in-out duration-300'>Code</button>
//                         </a>
//                     </div>
//                 </div>

//             </div>
   
//         )
//     }
// }

// export default ProjectCard






// import React from 'react'
// import ProjectCard from './ProjectCard'


// const Work = (props) => {
//   return (
//     <div name='work' className='w-full md:h-fit font-mono box-border background-color'>
//         {/* wave */}
      

//         {/* container */}
//         <div className='max-w-[1000px] mx-auto px-8 sm:px-16 flex flex-col justify-center w-full h-fulls'>

//             <div data-aos='fade-right' className='py-16'>
//                 <p className='text-4xl font-display inline'>Work</p>
//             </div>

//             {/* container to hold all projects */}
//             <div className='grid sm:grid-cols-1 gap-6'>
                
//             {/* ===================================================================== */}
//                 <ProjectCard 
                
//                     alt={'screenshot of project manager application'}  projectTitle='Simple Tracker' 
//                     projectSubtitle={'React | Flask | PostgreSQL'} 
//                     desc={'An easy-to-use project manager for freelancers and independent contractors.'}
//                     demo={'https://projectxmanager.herokuapp.com'} 
//                     code={'https://github.com/christinalu3799/project-manager-frontend'}/>
//             {/* ===================================================================== */}
//                 <ProjectCard 
               
//                     alt={'screenshot of portfolio'} 
//                     projectTitle='Portfolio'
//                     projectSubtitle={'React | Tailwind CSS'} 
//                     desc={'My developer portfolio created with React and styled with Tailwind.'}
//                     demo={'/'} 
//                     code={'https://github.com/christinalu3799/react-portfolio'}/>
//             {/* ===================================================================== */}
//                 {/* <ProjectCard 
//                     projectImg={RestaurantManager} 
//                     alt={'screenshot of login page for inventory manager app'}  projectTitle='Inventory Manager' 
//                     projectSubtitle={'Mongoose | Express | Node.js'} 
//                     demo={'https://restaurant-inventory-manager.herokuapp.com/'} 
//                     code={'https://github.com/christinalu3799/restaurant-inventory-manager'}/> */}
//             {/* ===================================================================== */}
//                 <ProjectCard 
                 
//                     alt={'screenshot of krusty krab racing game'}  
//                     projectTitle='2-Player Racing Game' 
//                     projectSubtitle={'HTML | CSS | JavaScript'} 
//                     desc={'A racing game based on my favorite childhood show. May the swiftest Patty Wagon win.'}
//                     demo={'https://christinalu3799.github.io/race-to-the-krusty-krab/'} 
//                     code={'https://github.com/christinalu3799/race-to-the-krusty-krab'}/>
//             {/* ===================================================================== */}
//                 <ProjectCard 
                
//                     alt={'screenshot of gitripped application'}  projectTitle='GITRipped - Workout App' 
//                     projectSubtitle={'MERN Stack'} 
//                     desc={'A simple application created with 2 other developers that allows users to browse and save different exercises.'}
//                     demo={'https://gitripped-app.herokuapp.com/'} 
//                     code={'https://github.com/pgarbrecht/gitripped-frontend'}/>
//             {/* ===================================================================== */}
                
//             </div>   

//         </div>
//     </div>
//   )
// }

// export default Work