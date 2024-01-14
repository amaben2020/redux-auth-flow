"use client";
import { useAppSelector } from "@/redux/hooks";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { ReactNode, useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";
import { renderLinks } from "../data";

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  //TODO: hover to expand dashboard
  // icons should expand like discord when hovered

  //

  const router = useRouter();

  const user = useAppSelector((state) => state.user);

  useEffect(() => {
    if (!user.data.token) {
      router.push("/login");
    }
  }, [router, user?.data.token]);

  console.log(user.data);

  const pathname = usePathname();
  const path = pathname.split("/")[2];

  const [isVisible, setIsVisible] = useState(false);
  console.log(isVisible);

  return (
    <section>
      <header className="border p-4 rounded-lg">
        Dashboard Header {user.loading === "idle" && user.data.email}
      </header>
      <div className="flex mt-5 border py-4 rounded-lg">
        <aside
          className={twMerge(
            isVisible && "min-w-40",
            "w-10 hover:w-40 transition-all ease-in-out duration-150 group",
          )}
        >
          {renderLinks(path).map((link) => {
            return (
              <div
                className="flex  gap-3 cursor-pointer"
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
