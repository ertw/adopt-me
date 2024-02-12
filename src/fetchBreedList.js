const fetchBreedList = async ({ queryKey }) => {
  const animal = queryKey[1];
  const apiResponse = await fetch(
    `https://pets-v2.dev-apis.com/breeds?animal=${animal}`,
  );
  if (!apiResponse.ok) {
    throw new Error(`breeds/${animal} not found`);
  }
  return apiResponse.json();
};

export default fetchBreedList;
