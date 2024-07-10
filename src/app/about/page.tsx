// components/AboutMe.tsx

import React from "react";
import Image from "next/image";
import Head from "next/head";
import skills from "../../data/skill";

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
                width={300} // Adjusted width here
                height={300} // Adjusted height here
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
              <strong>Incedo Technology Solutions Ltd</strong>, I lead the team,
              oversee project planning and execution.
            </p>
            <p className="text-lg mb-4">
              My robust background encompasses <strong>data analysis</strong>,{" "}
              <strong>data intelligence</strong>, and{" "}
              <strong>data-driven decision-making</strong> using a diverse
              toolset, including <strong>Python</strong>, <strong>TensorFlow</strong>,{" "}
              <strong>Keras</strong>, <strong>PyTorch</strong>, and more. I bring
              expertise in <strong>statistics</strong>, <strong>mathematics</strong>,
              <strong>analytics</strong>, <strong>regression</strong>,{" "}
              <strong>classification algorithms</strong>,{" "}
              <strong>cloud computing</strong>, <strong>deep neural networks</strong>,
              <strong>computer vision</strong>, and{" "}
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
          {/* <h2 className="text-2xl font-bold mb-4">Technical Skills</h2> */}
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
                {/* <span className="text-sm">{skill.name}</span> */}
              </div>
            ))}
          </div>
        </div>

        {/* Professional Experience Section */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-4">Professional Experience</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h3 className="text-lg font-semibold mb-2">Machine Learning & Deep Learning & NLP Solutions</h3>
              <p className="text-base mb-4">
                Proficient in developing end-to-end solutions, from data pre-processing and feature engineering to model selection and deployment.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Data Analysis</h3>
              <p className="text-base mb-4">
                Skilled in exploring and interpreting large, complex datasets to identify patterns and provide resilient analytic solutions.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Predictive Modeling</h3>
              <p className="text-base mb-4">
                Experienced in analyzing data to draw conclusions, predict future outcomes, and convert insights into actionable business strategies.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Technical Proficiency</h3>
              <p className="text-base mb-4">
                Expertise in statistics, mathematics, regression and classification algorithms, cloud computing, deep neural networks, and natural language processing.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Tools and Technologies</h3>
              <p className="text-base mb-4">
                Hands-on experience with Python, data visualization, exploratory data analysis (EDA), and more.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Model Optimization</h3>
              <p className="text-base mb-4">
                Applied threshold calibrations and hyperparameter tuning techniques to enhance algorithm performance and ensure reliable outputs.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Technical Documentation</h3>
              <p className="text-base mb-4">
                Developed comprehensive technical architecture and documentation for model building and data pre-processing workflows.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Stakeholder Communication</h3>
              <p className="text-base mb-4">
                Evaluated data findings and communicated insights in a clear, structured manner, fostering strong relationships with stakeholders and providing expert guidance.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Project Management</h3>
              <p className="text-base mb-4">
                Administered the planning, execution, and delivery of technical projects by setting goals, defining milestones, and ensuring deadlines are met.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Team Leadership</h3>
              <p className="text-base mb-4">
                Managed and led technical teams, inspiring and motivating members, encouraging collaboration, and fostering a positive working environment.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Data Interpretation and Analysis</h3>
              <p className="text-base mb-4">
                Interpreted and analyzed data to draw conclusions, identify patterns, and convert insights into actionable predictions and models.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Data Intelligence Tools</h3>
              <p className="text-base mb-4">
                Utilized key libraries and tools for data analysis, including Tableau, Power BI, Pandas, Seaborn, NLTK, Matplotlib, Spacy, and Scikit-Learn.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Statistical Analysis</h3>
              <p className="text-base mb-4">
                Compiled, organized, and performed statistical analysis on business and data sets to evaluate performance and efficiency.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Data Visualization</h3>
              <p className="text-base mb-4">
                Presented data visualization models to business teams for assessment and decision-making.
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default AboutMe;
