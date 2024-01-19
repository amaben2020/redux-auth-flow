"use client";
import { logoutUser } from "@/redux/features/auth/user";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { ReactNode, useState } from "react";
import { twMerge } from "tailwind-merge";
import { renderLinks } from "../data";

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  // TODO: add zod for user validation, email background when user logs in

  const router = useRouter();

  const user = useAppSelector((state) => state.user);

  // useEffect(() => {
  //   if (!user.data.token) {
  //     router.push("/login");
  //   }
  // }, [router, user?.data.token]);

  const pathname = usePathname();
  const path = pathname.split("/")[2];

  const [isVisible, setIsVisible] = useState(false);

  const dispatch = useAppDispatch();

  return (
    <section>
      <header className="border p-7 rounded-lg">
        Dashboard Header {user.loading === "idle" && user.data.email}
        <button onClick={() => dispatch(logoutUser())} className="button-base">
          Logout
        </button>
      </header>
      <div className="flex border rounded-lg">
        <aside
          className={twMerge(
            isVisible && "min-w-40",
            "w-10 hover:w-40 transition-all ease-in-out duration-150 group border h-full py-4",
          )}
        >
          {renderLinks(path).map((link) => {
            return (
              <div
                className="flex gap-3 cursor-pointer"
                key={link.id}
                onMouseEnter={() => setIsVisible(true)}
                // onMouseLeave={() => setIsVisible(false)}
              >
                <Link href={link.url} key={link.id}>
                  {link.icon}
                </Link>
                {isVisible ? link.title : ""}
              </div>
            );
          })}
        </aside>
        <div>{children}</div>
      </div>
    </section>
  );
};

export default DashboardLayout;
