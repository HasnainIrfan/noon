import React from "react";

const index = () => {
  // const postData = async (url, data, token) => {
  //     try {
  //       const response = await axios.post(url, data, {
  //         headers: {
  //           Authorization: Bearer ${token},
  //         },
  //       });
  //       return response.data;
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };
  //   const handleClick = async () => {
  //     const data = { name: "John", age: 30 };
  //     const token =
  //       "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VySWQiOiI2NjI4YzkxNi1hMGZkLTQ0MDctNjc3OS0wOGRiMDlhZWYwODYiLCJVc2VyTmFtZV9FTiI6IkNhcmxvcyBOZXdtYW4iLCJVc2VyTmFtZV9BUiI6IkNhcmxvcyBOZXdtYW4iLCJFbWFpbCI6ImNhcmxvcy5uZXdtYW5AZXhhbXBsZS5jb20iLCJLZXkiOiJCQi01Mi0yMC02OC02My1GRC0wOC0wOC1DMi03Qy1DNi1FNS1DNS0wQi1COC0zMi1FOCIsIlR5cGUiOiJMZWFybmVyIiwiZXhwIjoxNzA3MzgxMTM1LCJpc3MiOiJMZWFybmluZ01hbmFnZW1lbnRTeXN0ZW0iLCJhdWQiOiJCQi01Mi0yMC02OC02My1GRC0wOC0wOC1DMi03Qy1DNi1FNS1DNS0wQi1COC0zMi1FOCJ9.qIDGsf12a2zPTSkrTnacIgweMQPN9Te-fNF-_GtiHK8";
  //     const response = await postData(
  //       "https://stage-api.cyfersoft.com/CourseTrainingRegistration",
  //       data,
  //       token
  //     );
  //     console.log(response);
  //   };
  return (
    <form>
      <input type="text" />
      <input type="text" />
      <input type="text" />
      <button type="submit"></button>
    </form>
  );
};

export default index;
