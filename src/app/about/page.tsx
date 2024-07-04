// components/AboutMe.tsx

import React from "react";
import Image from "next/image";
import Head from "next/head";
import skills from "../../data/skill";
// import { LinkPreview } from "../../components/ui/Animated-LinkPreview";

const AboutMe: React.FC = () => {
  return (
    <>
      <Head>
        <title>About Ajesh Kumar Rana - Senior Data Scientist</title>
        <meta
          name="description"
          content="Ajesh Kumar Rana, Senior Data Scientist at Incedo Technology Solutions Ltd. with over 4 years of experience in transforming data into solutions. Expertise in data science, machine learning, and AI."
        />
        <meta
          name="keywords"
          content="Ajesh Kumar Rana, Data Scientist, AI Expert, Machine Learning, Incedo Technology Solutions, Data Analysis, Python, TensorFlow, Keras, PyTorch, Data Visualization, Senior Data Scientist, Technical Support, Training"
        />
        <meta name="author" content="Ajesh Kumar Rana" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/3 mb-6 md:mb-0 flex justify-center md:justify-end">
            <div className="max-w-xs">
              <Image
                src="/profile/profile.png"
                alt="Ajesh Kumar Rana"
                width={600}
                height={600}
                className="rounded-full object-cover"
              />
            </div>
          </div>
          <div className="md:w-2/3 md:ml-8 text-center md:text-left">
            <h1 className="text-3xl sm:text-4xl font-bold mb-4">About Me</h1>
            <p className="text-lg mb-4">
              As a passionate <strong>Data Scientist</strong> and{" "}
              <strong>AI/ML Expert</strong> with over <strong>4 years of
                experience</strong> in transforming data into solutions, I
              specialize in building applications and deploying them effectively.
              Currently serving as the <strong>Senior Data Scientist</strong> at{" "}
              <strong>
                Incedo Technology Solutions Ltd
              </strong>, I lead the team,
              oversee project planning and execution.
            </p>
            <p className="text-lg mb-4">
              My robust background encompasses <strong>data analysis</strong>,{" "}
              <strong>data intelligence</strong>, and{" "}
              <strong>data-driven decision-making</strong> using a diverse
              toolset, including <strong>Python
              </strong><strong>Power BI</strong><strong>Pandas
              </strong> <strong>Seaborn</strong>
              <strong>Scikit-learn</strong>, <strong>NLTK</strong>,{" "}
              <strong>Keras</strong>, <strong>
                SHAP Explainer AIPySpark</strong>,{" "}
              <strong>PyTorch</strong>, <strong>TensorFlow</strong>, and{" "}
              <strong>SHAP Explainer AI
              </strong>. I bring expertise in{" "}
              <strong>statistics</strong>, <strong>mathematics</strong>,{" "}
              <strong>analytics</strong>, <strong>regression</strong>,{" "}
              <strong>classification algorithms</strong>,{" "}
              <strong>recommendation systems</strong>,{" "}
              <strong>association rule mining algorithms</strong>,{" "}
              <strong>cloud computing</strong>, <strong>deep neural networks</strong>
              , <strong>computer vision</strong>, and{" "}
              <strong>natural language processing</strong>.
            </p>
            <p className="text-lg mb-4">
              In recognition of my outstanding contributions, I was honored with
              the <strong>"Best Trainer Award"</strong> from the{" "}
              <strong>Government Telecom Minister</strong> in{" "}
              <strong>2023</strong> for excellence in technical support and
              training. Holding a <strong>Bachelor of Technology in Electronics
                and Communications Engineering</strong> from{" "}
              <strong>Biju Patnaik University of Technology, Odisha</strong>.
            </p>
          </div>
        </div>

        {/* Technical Skills Section */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-4">Technical Skills</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 justify-center">
            {skills.map((skill) => (
              <div key={skill.name} className="flex flex-col items-center">
                <Image
                  src={skill.image}
                  alt={skill.name}
                  width={80}
                  height={80}
                  className="mb-2"
                />
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
};

export default AboutMe;
