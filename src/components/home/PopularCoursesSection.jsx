import React from "react";
import {
  FaGripHorizontal,
  FaList,
  FaShareAlt,
  FaStar,
  FaStarHalfAlt,
  FaClock,
  FaBook,
  FaArrowRight,
} from "react-icons/fa";

const PopularCoursesSection = () => {
  const courses = [
    {
      id: 1,
      title: "Learn Algorithm A to Z",
      category: "Algorithm",
      thumbnail: "../../../public/images/Rose_Logo.png",
      rating: 4.5,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed quos illo voluptate aperiam dolorem molestiae maiores repudiandae non, iusto quibusdam!",
      duration: "17h 30m",
      lessons: 72,
    },
    {
      id: 2,
      title: "Learn Bootstrap 5",
      category: "Web Front-end",
      thumbnail: "../../../public/images/Rose_Logo.png",
      rating: 4.5,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed quos illo voluptate aperiam dolorem molestiae maiores repudiandae non, iusto quibusdam!",
      duration: "17h 30m",
      lessons: 74,
    },
    {
      id: 3,
      title: "C Programming Basic",
      category: "Programming",
      thumbnail: "../../../public/images/Rose_Logo.png",
      rating: 4.5,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed quos illo voluptate aperiam dolorem molestiae maiores repudiandae non, iusto quibusdam!",
      duration: "17h 30m",
      lessons: 74,
    },
    {
      id: 4,
      title: "Advanced CSS",
      category: "Web Front-end",
      thumbnail: "../../../public/images/Rose_Logo.png",
      rating: 4.5,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed quos illo voluptate aperiam dolorem molestiae maiores repudiandae non, iusto quibusdam!",
      duration: "17h 30m",
      lessons: 74,
    },
    // {
    //   id: 5,
    //   title: "Learn HTML",
    //   category: "Web Front-end",
    //   thumbnail: "../../../public/images/Rose_Logo.png",
    //   rating: 4.5,
    //   description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed quos illo voluptate aperiam dolorem molestiae maiores repudiandae non, iusto quibusdam!",
    //   duration: "17h 30m",
    //   lessons: 74
    // },
    // {
    //   id: 6,
    //   title: "Learn Java Programming",
    //   category: "Programming",
    //   thumbnail: "../../../public/images/Rose_Logo.png",
    //   rating: 4.5,
    //   description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed quos illo voluptate aperiam dolorem molestiae maiores repudiandae non, iusto quibusdam!",
    //   duration: "17h 30m",
    //   lessons: 74
    // },
    // {
    //   id: 7,
    //   title: "Learn Basic Javascript",
    //   category: "Web Front-end",
    //   thumbnail: "../../../public/images/Rose_Logo.png",
    //   rating: 4.5,
    //   description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed quos illo voluptate aperiam dolorem molestiae maiores repudiandae non, iusto quibusdam!",
    //   duration: "17h 30m",
    //   lessons: 74
    // },
    // {
    //   id: 8,
    //   title: "Learn JQuery Framework",
    //   category: "Web Front-end",
    //   thumbnail: "../../../public/images/Rose_Logo.png",
    //   rating: 4.5,
    //   description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed quos illo voluptate aperiam dolorem molestiae maiores repudiandae non, iusto quibusdam!",
    //   duration: "17h 30m",
    //   lessons: 74
    // }
  ];

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <FaStar key={`full-${i}`} className="text-yellow-400 text-xs" />
      );
    }

    if (hasHalfStar) {
      stars.push(
        <FaStarHalfAlt key="half" className="text-yellow-400 text-xs" />
      );
    }

    return stars;
  };

  return (
    <section id="popular-course-section" className="pb-12">
      {/* Section head */}
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
          <h1 className="text-3xl font-bold mb-4 sm:mb-0">Trending courses</h1>
        </div>
        <p className="text-lg text-gray-500 mb-8">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        </p>
      </div>

      {/* Courses */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {courses.map((course) => (
            <div
              key={course.id}
              className="card shadow-md border-0 h-full flex flex-col"
            >
              <img
                src={course.thumbnail}
                className="w-full h-48 object-cover"
                alt={course.title}
              />
              <div className="p-4 flex flex-col flex-grow">
                <div className="flex justify-between items-center mb-2">
                  <a
                    href="course-category.html"
                    className="badge text-sm px-2 py-1 rounded bg-secondary bg-opacity-10 text-secondary hover:bg-primary hover:bg-opacity-10 hover:text-primary transition-colors"
                  >
                    {course.category}
                  </a>
                  <button
                    type="button"
                    className="text-primary text-xl hover:opacity-75 transition-opacity"
                  >
                    <FaShareAlt />
                  </button>
                </div>
                <h3 className="text-xl font-semibold mb-2 hover:text-primary transition-colors">
                  <a href="course-single.html">{course.title}</a>
                </h3>
                <div className="flex items-center mb-2">
                  <div className="flex mr-2">{renderStars(course.rating)}</div>
                  <span className="text-sm text-gray-700">
                    {course.rating}/5
                  </span>
                </div>
                <p className="text-gray-700 text-sm mb-4 line-clamp-3">
                  {course.description}
                </p>
                <div className="mt-auto pt-2 border-t border-gray-100">
                  <div className="flex justify-between text-sm">
                    <span className="flex items-center text-gray-700">
                      <FaClock className="text-primary mr-1" />
                      {course.duration}
                    </span>
                    <span className="flex items-center text-gray-700">
                      <FaBook className="text-primary mr-1" />
                      {course.lessons} lessons
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <button className="group px-8 py-3 transition-all duration-300 flex items-center mx-auto gap-2 hidden sm:inline-flex items-center rounded-full bg-gradient-to-r from-gray-200 to-gray-300 text-gray-900 px-8 py-3 text-lg font-medium shadow-md hover:bg-pink-500 hover:from-transparent hover:to-transparent hover:text-white transition-all duration-300 ease-in-out ">
            More
            <FaArrowRight className="transform group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default PopularCoursesSection;
