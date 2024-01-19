export const redirectBasedOnRole = (user: any, router: any) => {
  switch (user?.data?.role) {
    case "school": {
      return router.push("/dashboard/school");
    }
    case "student": {
      return router.push("/dashboard/student");
    }
    case "teacher": {
      return router.push("/dashboard/teacher");
    }
    default:
      return null;
  }
};
