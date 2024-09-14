import { BASE_URL } from "@/constant/constants";

const getData = async () => {
  const res = await fetch(`${BASE_URL}/api/form`, {
    cache: "no-store",
  });
  try {
    if (!res.ok) {
      throw new Error("Failed to fetched");
    } else {
      return res.json();
    }
  } catch (error) {
    console.log(error);
  }
};

async function Data() {
  const data = await getData();
  return (
    // <div className="w-full">
    //   {data.data?.map((elem: any) => (
    //     <div className="flex  space-x-10 text-xs" key={elem.id}>
    //       <p className="w-[200px] py-3 text-center">  {elem.country}</p>
    //       <p className="w-[200px] py-3 text-center">{elem.city}</p>
    //       <p className="w-[200px] py-3 text-center">{elem.countrytravelto}</p>
    //       <p className="w-[200px] py-3 text-center">{elem.firstname}</p>
    //       <p className="w-[200px] py-3 text-center">{elem.lastname}</p>
    //       <p className="w-[200px] py-3 text-center">{elem.dateofbirth}</p>
    //       <p className="w-[200px] py-3 text-center">{elem.martialstatus}</p>
    //       <p className="w-[200px] py-3 text-center">{elem.passportno}</p>
    //       <p className="w-[200px] py-3 text-center">{elem.confirmpassportno}</p>
    //       <p className="w-[200px] py-3 text-center">{elem.passportissuedate}</p>
    //       <p className="w-[200px] py-3 text-center">{elem.passportissueplace}</p>
    //       <p className="w-[200px] py-3 text-center">{elem.passportexpirydate}</p>
    //       <p className="w-[200px] py-3 text-center">{elem.visatype}</p>
    //       <p className="w-[200px] py-3 text-center">{elem.email}</p>
    //       <p className="w-[200px] py-3 text-center">{elem.phoneno}</p>
    //       <p className="w-[200px] py-3 text-center">{elem.nationalid}</p>
    //       <p className="w-[200px] py-3 text-center">{elem.postionappliedfor}</p>
    //       <p className="w-[200px] py-3 text-center">{elem.other}</p>
    //     </div>
    //   ))}
    // </div>
    <div className="w-full overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200 border-2 border-solid border-black">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-2 border-solid border-black">
              Id
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-2 border-solid border-black">
              Country
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-2 border-solid border-black">
              City
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-2 border-solid border-black">
              Travel To
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-2 border-solid border-black">
              First Name
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-2 border-solid border-black">
              Last Name
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-2 border-solid border-black">
              Date of Birth
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-2 border-solid border-black">
              Marital Status
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-2 border-solid border-black">
              Passport No.
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-2 border-solid border-black">
              Confirm Passport No.
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-2 border-solid border-black">
              Passport Issue Date
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-2 border-solid border-black">
              Passport Issue Place
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-2 border-solid border-black">
              Passport Expiry Date
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-2 border-solid border-black">
              Visa Type
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-2 border-solid border-black">
              Email
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-2 border-solid border-black">
              Phone No.
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-2 border-solid border-black">
              National ID
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-2 border-solid border-black">
              Position Applied For
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-2 border-solid border-black">
              Other
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {data.data?.map((elem: any) => (
            <tr key={elem.id}>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 border-2 border-solid border-black">
                {elem.id}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 border-2 border-solid border-black">
                {elem.country}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 border-2 border-solid border-black">
                {elem.city}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 border-2 border-solid border-black">
                {elem.countrytravelto}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 border-2 border-solid border-black">
                {elem.firstname}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 border-2 border-solid border-black">
                {elem.lastname}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 border-2 border-solid border-black">
                {elem.dateofbirth}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 border-2 border-solid border-black">
                {elem.martialstatus}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 border-2 border-solid border-black">
                {elem.passportno}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 border-2 border-solid border-black">
                {elem.confirmpassportno}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 border-2 border-solid border-black">
                {elem.passportissuedate}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 border-2 border-solid border-black">
                {elem.passportissueplace}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 border-2 border-solid border-black">
                {elem.passportexpirydate}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 border-2 border-solid border-black">
                {elem.visatype}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 border-2 border-solid border-black">
                {elem.email}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 border-2 border-solid border-black">
                {elem.phoneno}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 border-2 border-solid border-black">
                {elem.nationalid}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 border-2 border-solid border-black">
                {elem.postionappliedfor}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 border-2 border-solid border-black">
                {elem.other}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Data;
