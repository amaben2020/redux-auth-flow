type TIssues = {
  issues: {
    validation: string;
    code: string;
    message: string;
    path: string[];
  }[];
  name: string;
};

const shape = {
  issues: [
    {
      validation: "email",
      code: "invalid_string",
      message: "Invalid email",
      path: ["email"],
    },
    {
      validation: "regex",
      code: "invalid_string",
      message: "Invalid",
      path: ["password"],
    },
  ],
  name: "ZodError",
};

export const zodMessageFormatter = (error: TIssues) => {
  if (!Array.isArray(error.issues) && error.name !== "ZodError") return;

  const fullMessage = error.issues.map((item) => item.message).join(" and ");
  console.log(fullMessage);

  return fullMessage;
};
