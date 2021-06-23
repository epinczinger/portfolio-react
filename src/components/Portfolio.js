import React from "react";
import Projects from "./Projects";

const projectsCards = Projects.map((p) => {
  return (
    <div>
      <div class="rounded overflow-hidden shadow-lg bg-gray-100 text-flor-gray py-4">
        <img class="himglist object-fit mx-auto" src={p.image} alt={p.title} />
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">
            <div class="">
              <a
                className="hover:text-gray-500"
                href={p.live}
                rel="noreferrer"
                target="_blank"
              >
                {p.title}
              </a>
              <br />
              <a
                className="hover:text-gray-500 text-sm"
                href={p.repository}
                rel="noreferrer"
                target="_blank"
              >
                Repository
              </a>
            </div>
          </div>
          <p class="text-base">{p.description}</p>
        </div>
        <div class="px-6 pt-4 pb-2">
          {p.tags.map((tag) => {
            return (
              <span class="italic inline-block bg-gray-200 rounded px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #{tag}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
});

const Portfolio = () => {
  return (
    <div class="p-10 grid grid-cols-1 mx-6 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {projectsCards}
    </div>
  );
};

export default Portfolio;
