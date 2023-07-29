import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl mt-20">
          Hi there 👋 Enthusiastic Full Stack App Developer 👨‍💻 , eager to
          contribute to team success through hard work, attention to detail, and
          excellent organizational skills, a good understanding of frontend,
          backend, and project management. 🧑 I am Satya Prakash, final year
          student B.Tech in Computer Science & Engineering from UIT RGPV Bhopal.
          I am interested in learning new technologies and build exciting
          real-world projects.
        </p>
        <br />
        <p className="text-xl ">
          📌 I am extremely motivated to constantly develop my skills and grow
          professionally. Self-learning ability and passion for my work are the
          key factors towards my success.
        </p>
      </div>
    </div>
  );
};

export default About;
