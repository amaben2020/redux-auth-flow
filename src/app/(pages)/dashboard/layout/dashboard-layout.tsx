"use client";
import { logoutUser } from "@/redux/features/auth/user";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import useRedirectToLogin from "@/redux/hooks/redirect-to-login";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode, useEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";
import { renderLinks } from "../data";

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  // TODO: add zod for user validation, email background when user logs in

  const user = useAppSelector((state) => state.user);
  useRedirectToLogin(user);

  const pathname = usePathname();
  const path = pathname.split("/")[2];

  const [isVisible, setIsVisible] = useState(false);

  const dispatch = useAppDispatch();

  const headerRef = useRef<HTMLHeadingElement>(null);

  const [headerHeightValue, setHeaderHeightValue] = useState<
    number | undefined
  >();

  useEffect(() => {
    if (headerRef.current) {
      setHeaderHeightValue(headerRef.current.clientHeight);
    }
  }, []);

  const calculatedHeight = `calc(100vh - ${headerHeightValue}px)`;

  return (
    <section>
      <header className="border p-7 rounded-t-lg" ref={headerRef}>
        <div className="flex justify-between items-center">
          <h3> Quizzera {user.loading === "idle" && user?.data?.email}</h3>

          <button
            onClick={() => dispatch(logoutUser())}
            className="button-base"
          >
            Logout
          </button>
        </div>
      </header>
      <div
        className={`flex border rounded-b-lg h-[calc(100vh-${headerHeightValue}px)]`}
        style={{
          height: calculatedHeight,
        }}
      >
        <aside
          className={twMerge(
            isVisible && "min-w-[200px]",
            "min-w-10 hover:w-[220px] transition-all ease-in-out duration-150 group border-l ",
          )}
        >
          {renderLinks(path).map((link) => {
            return (
              <div
                className="flex gap-3 p-6 cursor-pointer "
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
        <div className="w-full p-6  rounded-tl-3xl overflow-hidden overflow-y-scroll max-h-fit  border-l">
          {children}
        </div>
      </div>
    </section>
  );
};

export default DashboardLayout;
