export const redirectBasedOnRole = (user: any, router: any) => {
  if (user.data.role.includes("school")) {
    router.push("/dashboard/school");
  }
  if (user.data.role.includes("student")) {
    router.push("/dashboard/student");
  }
  if (user.data.role.includes("teacher")) {
    router.push("/dashboard/teacher");
  }
};
