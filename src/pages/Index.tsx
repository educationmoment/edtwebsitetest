import { useState } from 'react';

const Index = () => {
  const [activeSection, setActiveSection] = useState('lunabotics');

  const sections = {
    lunabotics: {
      title: 'Lunabotics',
      description: 'Designing autonomous space rovers for lunar exploration.',
    },
    stella: {
      title: 'Stella',
      description: 'Developing cutting-edge autonomous ground vehicles.',
    },
    robobrawl: {
      title: 'Robobrawl',
      description: 'Creating combat robots for competitive tournaments.',
    },
    air: {
      title: 'AiR',
      description: 'Innovating in autonomous drone technology.',
    },
  };

  return (
    <div className="min-h-screen p-4 md:p-8 animate-fade-up">
      {/* Header */}
      <header className="retro-container mb-8">
        <h1 className="text-2xl md:text-4xl font-bold text-cedt-red mb-2">
          Chicago Engineering Design Team
        </h1>
        <p className="text-cedt-offwhite/80">
          Pushing the boundaries of autonomous robotics
        </p>
      </header>

      {/* Navigation */}
      <nav className="retro-container mb-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {Object.entries(sections).map(([key, { title }]) => (
            <button
              key={key}
              onClick={() => setActiveSection(key)}
              className={`nav-link ${
                activeSection === key ? 'bg-cedt-red/20 border-cedt-red' : ''
              }`}
            >
              {title}
            </button>
          ))}
        </div>
      </nav>

      {/* Main Content */}
      <main className="grid md:grid-cols-2 gap-8">
        {/* Info Section */}
        <section className="retro-container">
          <h2 className="text-xl md:text-2xl font-bold mb-4 text-cedt-red">
            {sections[activeSection].title}
          </h2>
          <p className="text-cedt-offwhite/80 leading-relaxed">
            {sections[activeSection].description}
          </p>
        </section>

        {/* Status Section */}
        <section className="retro-container">
          <h3 className="text-lg font-bold mb-4 text-cedt-offwhite">
            Project Status
          </h3>
          <div className="space-y-4">
            <div className="retro-border p-3">
              <span className="text-cedt-red">Latest Update:</span>
              <span className="text-cedt-offwhite/80 ml-2">
                Project development in progress
              </span>
            </div>
            <div className="retro-border p-3">
              <span className="text-cedt-red">Team Members:</span>
              <span className="text-cedt-offwhite/80 ml-2">
                Currently recruiting
              </span>
            </div>
            <div className="retro-border p-3">
              <span className="text-cedt-red">Next Meeting:</span>
              <span className="text-cedt-offwhite/80 ml-2">
                TBA
              </span>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Index;
