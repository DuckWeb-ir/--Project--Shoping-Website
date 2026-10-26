
import { ChevronLeft } from 'lucide-react';
import React from 'react'

const Breadcrumbs = () => {
  return (
    <nav aria-label="مسیر صفحه" className="text-sm box-style py-3.5">
      <ol className="flex flex-wrap items-center gap-1 text-gray-500">
        <li>
          <span className="cursor-pointer transition-colors hover:text-blue-600">
            خانه
          </span>
        </li>

        <li aria-hidden="true" className="text-gray-300">
          <ChevronLeft />
        </li>

        <li>
          <span className="cursor-pointer transition-colors hover:text-blue-600">
            کالای دیجیتال
          </span>
        </li>

        <li aria-hidden="true" className="text-gray-300">
          <ChevronLeft />
        </li>

        <li>
          <span className="cursor-pointer transition-colors hover:text-blue-600">
            موبایل
          </span>
        </li>

        <li aria-hidden="true" className="text-gray-300">
         <ChevronLeft />
        </li>

        <li
          aria-current="page"
          className="font-medium text-gray-900"
        >
          گوشی سامسونگ
        </li>
      </ol>
    </nav>
  );
};


export default Breadcrumbs