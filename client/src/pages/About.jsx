
const About = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-black">
      {/* Hero Section */}
      <div className="relative">
        <img
          src="https://plus.unsplash.com/premium_photo-1725873534652-b5b500b0a951?q=80&w=2938&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Explore Events"
          className="w-full h-96 object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-center items-center text-center">
          <h1 className="text-white text-5xl font-bold mb-4">
            Explore Events
          </h1>
          <p className="text-gray-200 text-lg max-w-3xl">
            Meet your tribe that matches your vibe. Discover events that bring people together, help you collaborate, contribute, and work on things you love.
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="py-16 px-8 md:px-24">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Side - Text Content */}
          <div className="space-y-8">
            <h2 className="text-4xl font-bold text-red-600">Discover a Event Near You</h2>
            <p className="text-lg text-gray-700">
              With events happening near you, you'll get a chance to connect with others, collaborate on exciting projects, and meet people who share your passion.
            </p>
            <p className="text-lg text-gray-700">
              Whether you're looking to network, gain new skills, or simply have a great time, our platform will guide you to the right events that match your interests and help you grow.
            </p>
            <p className="text-lg text-gray-700">
              We believe in creating opportunities where individuals can work together, contribute to meaningful causes, and form lasting friendships. Explore now and find your next adventure!
            </p>
          </div>

          {/* Right Side - Image Gallery */}
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://images.unsplash.com/photo-1502185635613-0a5b2e78efea?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Meetup"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
            <img
              src="https://images.unsplash.com/photo-1565813086292-604790c8a97b?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Networking"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
            <img
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Collaboration"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
            <img
              src="https://plus.unsplash.com/premium_photo-1713296256859-7258dedb6155?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Event"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="bg-red-600 py-16 text-white text-center">
        <h2 className="text-4xl font-bold">Join the Movement!</h2>
        <p className="text-lg mt-4 max-w-2xl mx-auto">
          Be part of events that matter. Sign up today to receive updates on upcoming events, and never miss an opportunity to meet your tribe and explore new passions.
        </p>
        <button className="mt-6 bg-white text-red-600 px-6 py-3 rounded-lg hover:bg-gray-100 transition duration-300">
          Explore Events
        </button>
      </div>
    </div>
  );
};

export default About;
