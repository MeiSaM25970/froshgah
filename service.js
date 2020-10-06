const data = {
  campaigns: [{ title: "test" }],
};

export function login(username, password) {
  return Promise.resolve({
    status: 200,
    data: { token: "435hjkfdstfufisdfhs9u0idhisfoh" },
  });
}

export function getCampaigns(token) {
  return Promise.resolve({ status: 200, data: data.campaigns });
}
