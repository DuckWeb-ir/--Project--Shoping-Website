
import { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  Code2,
  X,
  Home,
  ShoppingBag,
  FileText,
  Settings,
  ChevronUp,
} from "lucide-react";

const pageGroups = [
  {
    id: "main",
    title: "صفحات اصلی",
    color: "blue",
    icon: Home,
    pages: [
      { title: "صفحه اصلی", path: "/" },
      { title: "درباره ما", path: "/about-us" },
      { title: "تماس با ما", path: "/contact-us" },
      { title: "ارتباط با ما", path: "/contact" },
    ],
  },
  {
    id: "shop",
    title: "فروشگاه",
    color: "emerald",
    icon: ShoppingBag,
    pages: [
      { title: "فروشگاه", path: "/shop" },
      { title: "سبد خرید", path: "/cart" },
      { title: "جزئیات محصول", path: "/product/1" },
      { title: "محصول جدید", path: "/newProduct/1" },
    ],
  },
  {
    id: "content",
    title: "محتوا",
    color: "violet",
    icon: FileText,
    pages: [
      { title: "لیست مقالات", path: "/articles" },
      { title: "جزئیات مقاله", path: "/blog/1" },
    ],
  },
  {
    id: "system",
    title: "سیستم و تست",
    color: "amber",
    icon: Settings,
    pages: [
      { title: "دسترسی غیرمجاز", path: "/forbidden" },
      { title: "صفحه تست", path: "/Test" },
      { title: "صفحه 404", path: "/not-found-test" },
      { title: "احراز هویت", path: "/auth" },
    ],
  },
];

const colorStyles = {
  blue: {
    button: "bg-blue-50 text-blue-600 hover:bg-blue-100",
    active: "bg-blue-500 text-white",
    dot: "bg-blue-500",
  },
  emerald: {
    button: "bg-emerald-50 text-emerald-600 hover:bg-emerald-100",
    active: "bg-emerald-500 text-white",
    dot: "bg-emerald-500",
  },
  violet: {
    button: "bg-violet-50 text-violet-600 hover:bg-violet-100",
    active: "bg-violet-500 text-white",
    dot: "bg-violet-500",
  },
  amber: {
    button: "bg-amber-50 text-amber-600 hover:bg-amber-100",
    active: "bg-amber-500 text-white",
    dot: "bg-amber-500",
  },
};

export default function DeveloperToolbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeGroup, setActiveGroup] = useState(null);

  const toolbarRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  // بستن پنل با کلیک بیرون
  useEffect(() => {
    if (!import.meta.env.DEV) return;

    const handleOutsideClick = (event) => {
      if (
        toolbarRef.current &&
        !toolbarRef.current.contains(event.target)
      ) {
        setIsOpen(false);
        setActiveGroup(null);
      }
    };

    document.addEventListener("pointerdown", handleOutsideClick);

    return () => {
      document.removeEventListener("pointerdown", handleOutsideClick);
    };
  }, []);

  if (!import.meta.env.DEV) return null;

  // باز و بسته کردن دسته با کلیک
  const handleGroupClick = (groupId) => {
    setActiveGroup((current) =>
      current === groupId ? null : groupId
    );
  };

  // رفتن به صفحه بدون بستن پنل
  const handleNavigate = (path) => {
    navigate(path);
  };

  // باز کردن پنل با هاور
  const handleToolbarMouseEnter = () => {
    setIsOpen(true);
  };

  // باز و بسته کردن پنل با کلیک
  const handleMainButtonClick = () => {
    if (isOpen) {
      setIsOpen(false);
      setActiveGroup(null);
    } else {
      setIsOpen(true);
    }
  };

  return (
    <div
      ref={toolbarRef}
      onMouseEnter={handleToolbarMouseEnter}
      className="fixed bottom-5 right-5 z-[99999] flex items-end gap-2"
      dir="rtl"
    >
      {/* پنل اصلی */}
      {isOpen && (
        <div className="flex flex-row items-center gap-3 rounded-2xl border border-slate-200 bg-white p-3 shadow-[0_8px_35px_rgba(15,23,42,0.12)]">

          {/* عنوان پنل */}
          <div className="flex shrink-0 items-center gap-2 border-l border-slate-100 pl-3">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
              <Code2 size={17} />
            </div>

            <div className="flex flex-col gap-0.5">
              <span className="whitespace-nowrap text-xs font-bold text-slate-800">
                <span className="hidden sm:inline">
                  پنل دسترسی سریع توسعه‌دهنده
                </span>

                <span className="sm:hidden">
                  پنل توسعه‌دهنده
                </span>
              </span>

              <span className="hidden text-[10px] text-slate-400 sm:block">
                Developer Quick Access
              </span>
            </div>
          </div>

          {/* دسته‌بندی‌ها */}
          <div className="flex items-center gap-2">
            {pageGroups.map((group) => {
              const Icon = group.icon;
              const styles = colorStyles[group.color];
              const isActive = activeGroup === group.id;

              return (
                <div
                  key={group.id}
                  className="relative"
                  onMouseEnter={() => setActiveGroup(group.id)}
                  onMouseLeave={() => setActiveGroup(null)}
                >
                  {/* Tooltip */}
                  {isActive && (
                    <div className="absolute bottom-full right-0 z-[100000] w-48 pb-3">
                      <div className="rounded-xl border border-slate-200 bg-white p-2 shadow-[0_8px_30px_rgba(15,23,42,0.14)]">

                        <div className="mb-2 flex items-center gap-2 border-b border-slate-100 px-2 pb-2">
                          <span
                            className={`h-2 w-2 rounded-full ${styles.dot}`}
                          />

                          <span className="text-xs font-semibold text-slate-700">
                            {group.title}
                          </span>
                        </div>

                        <div className="flex flex-col gap-1">
                          {group.pages.map((page) => {
                            const isCurrent =
                              location.pathname === page.path;

                            return (
                              <button
                                key={page.path}
                                type="button"
                                onClick={() =>
                                  handleNavigate(page.path)
                                }
                                className={`flex w-full items-center justify-between rounded-lg px-3 py-2 text-right text-xs transition ${
                                  isCurrent
                                    ? styles.active
                                    : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                                }`}
                              >
                                <span>{page.title}</span>

                                {isCurrent && (
                                  <span className="text-[10px]">
                                    ●
                                  </span>
                                )}
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* دکمه دسته */}
                  <button
                    type="button"
                    onClick={() => handleGroupClick(group.id)}
                    title={group.title}
                    className={`flex h-10 items-center gap-2 rounded-full px-3 text-xs font-medium transition ${
                      isActive
                        ? styles.active
                        : styles.button
                    }`}
                  >
                    <Icon size={16} />

                    <span className="hidden sm:inline">
                      {group.title}
                    </span>

                    <ChevronUp
                      size={13}
                      className={`transition-transform ${
                        isActive ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* دکمه اصلی شناور */}
      <button
        type="button"
        onClick={handleMainButtonClick}
        title="پنل توسعه‌دهنده"
        className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-lg transition hover:scale-105 hover:bg-slate-50"
      >
        {isOpen ? <X size={20} /> : <Code2 size={20} />}
      </button>
    </div>
  );
}
