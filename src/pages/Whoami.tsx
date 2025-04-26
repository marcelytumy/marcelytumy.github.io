const Whoami = () => (
  <div className="p-8 h-[500px] overflow-y-auto fade-in">    
    <div className="space-y-8">
      {/* Introduction Section */}
      <div className="bg-gradient-to-br from-surface-light to-surface p-1 rounded-lg h-full flex items-center">
        <div className="bg-surface p-5 rounded-md w-full">
          <h3 className="text-xl text-accent mb-3 font-medium">Hello, I'm Marcel</h3>
          <p className="text-gray-300 leading-relaxed mb-4">
        Frontend developer with a passion for creating clean, efficient, and visually appealing web applications. 
        I enjoy turning complex problems into simple, beautiful, and intuitive designs.
          </p>
          <p className="text-gray-300 leading-relaxed">
        When I'm not coding, you can find me exploring new technologies or enjoying video games.
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default Whoami;