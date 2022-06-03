import React from "react";

const Filter = () => {
  const Specialization = [
    "AEROSPACE ENGINEER",
    "ANIMATOR",
    "ARCHITECT",
    "ARTIST",
    "BIOMEDICAL ENGINEER",
    "BOOKKEEPER",
    "CALL OPERATOR",
    "CARTOONIST",
    "CHEMICAL ENGINEER",
    "CIVIL ENGINEER",
    "COMMUNITY MANAGER",
    "COMPUTER ENGINEER",
    "COPYWRITER",
    "CREATIVE WRITER",
    "DATA ENTRY",
    "DIGITAL MARKETER",
    "DRAFTSMAN",
    "ELECTRICAL ENGINEER",
    "ENVIRONMENTAL ENGINEER",
    "GRAPHIC DESIGNER",
    "HELP DESK SUPPORT AGENT",
    "HUMAN RESOURCES",
    "HYDRAULIC ENGINEER",
    "LIVE CHAT OPERATOR",
    "MARINE ENGINEER",
    "MECHANICAL ENGINEER",
    "MEDIA BUYER",
    "PETROLEUM ENGINEER",
    "PPC SPECIALIST",
    "PROOFREADER",
    "RECRUITER",
    "SALES - ONLINE",
    "SEM",
    "SEO",
    "SOCIAL MEDIA MARKETER",
    "STRUCTURAL ENGINEER",
    "VIDEO EDITOR",
    "VIRTUAL ASSISTANT",
    "WEB DESIGNER",
    "WEB DEVELOPER",
  ];
  const [show, setShow] = React.useState(false);
  return (
    <div className=" text-black dark:bg-darkPrimary dark:text-white p-4 md:mr-4 shadow-custom rounded-md h-fit mb-4">
      <h3 className="text-xl">Filter Candidates</h3>
      <div className="py-4">
        <div className="w-full border-4  border-primary"></div>
      </div>
      <div>
        <div>
          <label htmlFor="country">Country</label>
          <select
            className="block my-2 rounded bg-white dark:bg-darkSecondary border p-2 w-full"
            name="country"
            id="country"
          >
            <option className="text-gray-400" value="">
              Select Country
            </option>
            <option value="Argentina">Argentina</option>
            <option value="Indonesia">Indonesia</option>
            <option value="Philippines">Philippines</option>
            <option value="south-africa">South Africa</option>
          </select>
        </div>
        <div>
          <label htmlFor="skills">Search Skills</label>
          <input
            className="block my-2 rounded bg-white dark:bg-darkSecondary border p-2 w-full"
            type="text"
          />
        </div>
        <div>
          <label htmlFor="Experience">Country</label>
          <select
            className="block my-2 rounded bg-white dark:bg-darkSecondary border p-2 w-full"
            name="experience"
            id="experience"
          >
            <option className="text-gray-400" value="">
              Select
            </option>
            <option value="0-2">0-2 years</option>
            <option value="3-5">3-5 years</option>
            <option value="6-7">6-7 years</option>
            <option value="8-10">8-10 years</option>
            <option value="11-15">11-15 years</option>
            <option value="16-20">16-20 years</option>
            <option value="21-25">21-25 years</option>
            <option value="26-30">26-30 years</option>
            <option value="31-35">31-35 years</option>
            <option value="35+">More than 35</option>
          </select>
        </div>
        <div>
          <label htmlFor="education">Educational Level</label>
          <select
            className="block my-2 rounded bg-white dark:bg-darkSecondary border p-2 w-full"
            name="education"
            id="education"
          >
            <option className="text-gray-400" value="">
              Select
            </option>
            <option value="High School">High School</option>
            <option value="Certificate">Certificate</option>
            <option value="Diploma">Diploma</option>
            <option value="Associate's Degree">Associate`&apos;s Degree</option>
            <option value="Bachelor's Degree">Bachelor`&apos;s Degree</option>
            <option value="Master's Degree">Master`&apos;s Degree</option>
            <option value="Doctorate">Doctorate Degree</option>
          </select>
        </div>
        <div>
          <label htmlFor="age">Age</label>
          <select
            className="block my-2 rounded bg-white dark:bg-darkSecondary border p-2 w-full"
            name="age"
            id="age"
          >
            <option className="text-gray-400" value="">
              Select
            </option>
            <option value="18-22">18-22 Years</option>
            <option value="23-27">23-27 Years</option>
            <option value="28-32">28-32 Years</option>
            <option value="33-37">33-37 Years</option>
            <option value="38-42">38-42 Years</option>
            <option value="43-47">43-47 Years</option>
            <option value="48-52">48-52 Years</option>
            <option value="53-57">53-57 Years</option>
            <option value="57+">Above 57</option>
          </select>
        </div>
        <div>
          <div className="flex justify-between">
            <label htmlFor="specialization">Specialization</label>
            <button onClick={() => setShow(!show)} className="inline">
              {show ? "Hide" : "Show"}
            </button>
          </div>
          <div className={`${show ? "" : "hidden"}`}>
            {Specialization.map((item, index) => (
              <SpecializationComponent key={index} item={item} />
            ))}
          </div>
        </div>
        <div className="py-2 ">
          <button className="bg-primary rounded-md px-4 py-2 text-lg font-semibold mr-2 mb-2">
            FILTER CANDIDATES
          </button>
          <button className="border border-gray-300 rounded-md p-2">
            Clear Form
          </button>
        </div>
      </div>
    </div>
  );
};

export default Filter;

const SpecializationComponent: React.FC<{ item: string }> = ({ item }) => {
  return (
    <div>
      <input type="checkbox" id={item} name={item} value={item} />
      <label className="ml-2" htmlFor={item}>
        {item}
      </label>
    </div>
  );
};
