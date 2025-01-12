// // components/JobCard.js
// export default function JobCard({ job }) {
//   return (
//     <div className="border-b border-gray-200 py-4 flex justify-between items-center">
//       <div>
//         <h2 className="text-lg font-semibold text-gray-800">{job.title}</h2>
//         <p className="text-sm text-gray-500">{job.department}</p>
//         <p className="text-sm text-gray-500">{job.location}</p>
//         <div className="flex flex-wrap gap-2 mt-2">
//           {job.skills.map((skill, index) => (
//             <span
//               key={index}
//               className="text-xs bg-gray-200 text-gray-600 px-2 py-1 rounded-full"
//             >
//               {skill}
//             </span>
//           ))}
//         </div>
//       </div>
//       <button className="text-gray-600 hover:text-gray-800 text-2xl">➔</button>
//     </div>
//   );
// }
