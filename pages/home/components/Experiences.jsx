import React from "react";

const Experiences = () => {
    const experiences = [
        {
            title: "Frontend Developer",
            company: "PT Maju Jaya",
            date: "2022 - Sekarang",
            description:
                "Membangun dan mengembangkan antarmuka pengguna website perusahaan menggunakan React, Redux, dan Tailwind CSS.",
        },
        {
            title: "Web Developer Intern",
            company: "Startup Kreatif",
            date: "2021 (6 Bulan)",
            description:
                "Merancang dan membangun website pemasaran produk dengan HTML, CSS, dan JavaScript.",
        },
    ];

    return (
        <section className="bg-gray-100 dark:bg-slate-800 py-16 px-8 md:py-24 md:px-52">
            <h2 className="text-3xl dark:text-white md:text-4xl lg:text-5xl font-bold mb-8 text-center text-slate-800">
                Experiences
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {experiences.map((exp, index) => (
                    <div
                        key={index}
                        className="border-[3px] dark:border-white border-slate-800 rounded-lg p-6 hover:scale-105 transition-all cursor-pointer"
                    >
                        <h3 className="text-xl font-bold mb-2 dark:text-white">{exp.title}</h3>
                        <p className="text-gray-600 mb-2 dark:text-white" >{exp.company}</p>
                        <p className="text-gray-600 mb-4 dark:text-white">{exp.date}</p>
                        <p className="dark:text-white">{exp.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Experiences;
