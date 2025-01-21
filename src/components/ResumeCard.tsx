import { TRoleInfo } from "./types";

const ResumeCard = ({ timeframe, role, company, description, skills }: TRoleInfo) => (
  <div className="p-6 bg-gray-800 rounded-md shadow-md">
    <h2 className="text-yellow-400 text-xl font-bold mb-2">{timeframe}</h2>
    <h3 className="text-2xl font-bold text-white">{role}</h3>
    <p className="text-gray-400 text-sm mb-4">{company}</p>
    <ul className="list-disc list-inside space-y-2">
      {description.map((item, index) => (
        <li key={index} className="text-gray-300 text-base">
          {item}
        </li>
      ))}
    </ul>

    {/* Skills Section */}
    <div className="mt-4">
      <h4 className="text-lg font-semibold text-white mb-2">Skills:</h4>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="px-3 py-1 text-sm bg-yellow-400 text-black rounded-full"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  </div>
);
export default ResumeCard;