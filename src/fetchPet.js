const fetchPet = async ({ queryKey }) => {
  const id = queryKey[1];
  const apiResponse = await fetch(`https://pets-v2.dev-apis.com/pets?id=${id}`);
  if (!apiResponse.ok) {
    throw new Error("Network response was not ok");
  }
  return apiResponse.json();
};

export default fetchPet;
