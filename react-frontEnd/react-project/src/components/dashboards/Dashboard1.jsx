import { useEffect, useState } from "react";
import { axiosInstance } from "../../helpers/axiosInstance";

export const Dashboard1 = () => {
  const [data1, setData1] = useState({});

  useEffect(() => {
    try {
      const fetchDataProtected = async () => {
        const response = await axiosInstance.get("api-protected/");
        console.log(response.data);
        setData1(response.data);
      };

      fetchDataProtected();
    } catch (error) {
      console.log("Error: ", error);
    }
  }, []);

  return (
    <>
      <div>
        <h1>Bashboard</h1>
        {data1.status && <p>{data1.status}</p>}
      </div>
    </>
  );
};
