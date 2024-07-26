import React from "react";

const Skills = () => {
    const skills = ["React", "JavaScript", "Tailwind CSS", "Node.js"];

    return (
        <section className="bg-gray-100 dark:bg-slate-800 py-16 px-8 md:py-24 md:px-16">
            <h2 className="text-3xl dark:text-white md:text-4xl lg:text-5xl font-bold mb-8 text-center text-slate-800">
                Skills
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-0 md:px-[50px]">
                {skills.map((skill) => (
                    <div
                        key={skill}
                        className="p-4 dark:text-white rounded-lg border-[3px] dark:border-white border-slate-800 text-center font-semibold hover:scale-105 cursor-pointer transition-all"
                    >
                        {skill}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
