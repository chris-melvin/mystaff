import React from "react";

const Card = () => {
  return (
    <div className="shadow-custom dark:bg-darkPrimary dark:text-white col-span-3 p-4 flex flex-col  relative rounded-md overflow-hidden  max-w-3xl md:ml-4">
      <div className="bg-orange-400 w-4 absolute left-0 top-0 h-full"></div>
      <div className="p-4 pt-0 flex items-center space-x-4">
        <img
          className="rounded-full w-20 "
          src="https://passionforprying.files.wordpress.com/2017/09/maybelline-contour-mastercontourpalette-gigi-beauty-1x1.jpg"
          alt=""
        />
        <h3 className="text-lg font-semibold">Candidate #000023212</h3>
        <p className="text-center inline text-light-200 dark:text-gray-200">
          Software Engineer
        </p>
      </div>
      <div className="pl-4">
        <p className="text-light-200 dark:text-white ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste ipsum
          facere cupiditate ipsa recusandae id nostrum magni beatae nisi
          distinctio quod, error doloremque praesentium! Ad asperiores, nesciunt
          explicabo officia, alias animi, sint quisquam soluta doloremque
          nostrum dignissimos voluptate et perferendis!
        </p>

        <div>
          <table className="w-full">
            <tbody className="hidden xs:block">
              <tr>
                <td className="pr-2 ">Qualification</td>
                <td className="text-light-100">Bachelor's Degree</td>
                <td className="px-2">Expected Salary</td>
                <td className="text-light-100">₱12,000 (weekly)</td>
              </tr>
              <tr>
                <td className="pr-2">Experience</td>
                <td className="text-light-100">3-5 Years</td>
                <td className="px-2">Specialization</td>
                <td className="text-light-100">Software Engineer</td>
              </tr>
              <tr>
                <td className="pr-2">Age</td>
                <td className="text-light-100">24</td>
                <td className="px-2">Location</td>
                <td className="text-light-100">
                  Novaliches, Quezon City, Philippines
                </td>
              </tr>
            </tbody>
            <tbody className="xs:hidden">
              <tr>
                <td className="pr-2">Qualification</td>
                <td className="text-light-100">Bachelor's Degree</td>
              </tr>
              <tr>
                <td className="pr-2">Experience</td>
                <td className="text-light-100">3-5 Years</td>
              </tr>
              <tr>
                <td className="pr-2">Age</td>
                <td className="text-light-100">24</td>
              </tr>
              <tr>
                <td className="">Expected Salary</td>
                <td className="text-light-100">₱12,000 (weekly)</td>
              </tr>
              <tr>
                <td className="">Specialization</td>
                <td className="text-light-100">Software Engineer</td>
              </tr>
              <tr>
                <td className="">Location</td>
                <td className="text-light-100">
                  Novaliches, Quezon City, Philippines
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Card;
