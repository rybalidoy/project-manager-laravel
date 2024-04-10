import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import {
  PROJECT_STATUS_CLASS_MAP,
  PROJECT_STATUS_TEXT_MAP,
} from "../constants";
import TasksTable from "@/Pages/Task/TaskTable";

export default function Show({ auth, project, tasks, queryParams = null }) {
  return (
    <AuthenticatedLayout
      user={auth.user}
      header={
        <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
          {`Project  ${project.name}`}
        </h2>
      }
    >
      <Head title={`Project ${project.name}`} />
      <div className="py-12">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="overflow-hidden bg-white shadow-sm dark:bg-gray-800 sm:rounded-lg">
            <div className="p-6 text-gray-900 dark:text-gray-100">
              <div>
                <img
                  src={project.image_path}
                  alt=""
                  className="object-cover w-full h-64"
                />
              </div>
              <div className="grid grid-cols-2 mt-4">
                <div>
                  <div className="mt-4">
                    <label className="text-lg font-bold">Project ID</label>
                    <p className="mt-1">{project.id}</p>
                  </div>
                  <div className="mt-4">
                    <label className="text-lg font-bold">Project Name</label>
                    <p className="mt-1">{project.name}</p>
                  </div>
                  <div className="mt-4">
                    <label className="text-lg font-bold">Project Status</label>
                    <div className="mt-1">
                      <span
                        className={
                          "px-2 py-1 text-white rounded " +
                          PROJECT_STATUS_CLASS_MAP[project.status]
                        }
                      >
                        {" "}
                        {PROJECT_STATUS_TEXT_MAP[project.status]}
                      </span>
                    </div>
                  </div>
                  <div className="mt-4">
                    <label className="text-lg font-bold">Created By</label>
                    <p className="mt-1">{project.createdBy.name}</p>
                  </div>
                </div>
                <div>
                  <div className="mt-4">
                    <label className="text-lg font-bold">Due Date</label>
                    <p className="mt-1">{project.due_date}</p>
                  </div>
                  <div className="mt-4">
                    <label className="text-lg font-bold">Create Date</label>
                    <p className="mt-1">{project.created_at}</p>
                  </div>
                  <div className="mt-4">
                    <label className="text-lg font-bold">Updated By</label>
                    <p className="mt-1">{project.updatedBy.name}</p>
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <label className="text-lg font-bold">Project Description</label>
                <p className="mt-1">{project.description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="overflow-hidden bg-white shadow-sm dark:bg-gray-800 sm:rounded-lg">
          <div className="p-6 text-gray-900 dark:text-gray-100">
            <TasksTable tasks={tasks} queryParams={queryParams} />
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  );
}
