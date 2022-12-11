export const fetchTeamMember = async (data) =>
  Promise.all(
    data.map(async (userName) => {
      const userInfo = await fetch(`https://api.github.com/users/${userName}`);
      return await userInfo.json();
    })
  );
