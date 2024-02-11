export async function loader() {
  const usersData = await fetch("https://dummyjson.com/users").then((res) =>
    res.json()
  );
  return usersData.users;
}
